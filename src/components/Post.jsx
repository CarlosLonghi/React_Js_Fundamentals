import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'
import styles from './Post.module.css'

import { Comment } from './Comment'
import { Avatar } from './Avatar'

// Percorre o conteúdo content e adiciona Links nas # e https
const replaceHashtagsUrlsWithLinks = (content) => {
  const hashtagOrUrlRegex = /#(\w+)|(https?:\/\/\S+)/g;
  
  const replacedContent = content.replace(hashtagOrUrlRegex, (match, hashtag, url) => {
    switch (true) {
      case !!hashtag:
        return `<a href="#">#${hashtag}</a>`
      case !!url:
        return `<a href="${url}" target="_blank">${url}</a>`
      default:
        return match;
    }
  });

  return replacedContent;
}

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(['Post teste'])
  const [newCommentText, setNewCommentText] = useState('')


  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' H:mm'h'", {
    locale: ptBR
  }) 

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment() {
    event.preventDefault()

    if (newCommentText) {
      setComments([...comments, newCommentText])
      setNewCommentText('')
    }
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete) {
    // Imutabilidade -> as variáveis não sofrem mutação, nós criamos um novo espaço em memória.
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeletedOne)
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong> 
            <span>{author.role}</span> 
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        <p dangerouslySetInnerHTML={{ __html: replaceHashtagsUrlsWithLinks(content) }}></p>
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name='comment'
          value={newCommentText}
          placeholder='Escreva um comentário...'
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}