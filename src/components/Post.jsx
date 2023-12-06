import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

// Percorre o conteúdo content e adiciona Links nas # e https
const replaceHashtagsUrlsWithLinks = (content) => {
  const hashtagOrUrlRegex = /#(\w+)|(https?:\/\/\S+)/g;
  
  const replacedContent = content.replace(hashtagOrUrlRegex, (match, hashtag, url) => {
    switch (true) {
      case !!hashtag:
        return `<a href="#">#${hashtag}</a>`;
      case !!url:
        return `<a href="${url}" target="_blank">${url}</a>`;
      default:
        return match;
    }
  });

  return replacedContent;
}

export function Post({ author, content, publishedAt }) {
  // - Formatando Datas usando "Intl.DateTimeFormat" do JS
  // const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
  //   day: '2-digit',
  //   month: 'long',
  //   hour: '2-digit',
  //   minute: '2-digit'
  // }).format(publishedAt)

  // - Formatando Datas usando a lib "Date-fns"
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' H:mm'h'", {
    locale: ptBR
  }) 

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

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

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder='Escreva um comentário...'
        />

        <footer>
          <button  type='submit'>Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}