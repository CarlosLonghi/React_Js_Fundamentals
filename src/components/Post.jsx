import styles from './Post.module.css'

import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post(props) {
  // Percorre o conteúdo content e adiciona Links nas # e https
  const replaceHashtagsWithLinks = (content) => {
    const hashtagRegex = /#(\w+)/g;
    const urlRegex = /(https?:\/\/\S+)/g;
    
    const replacedContent = content.replace(hashtagRegex, '<a href="#">#$1</a>');
    return replacedContent.replace(urlRegex, '<a href="$1" target="_blank">$1</a>');
  }
  
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/CarlosLonghi.png"
          />
          <div className={styles.authorInfo}>
            <strong>{props.author}</strong> 
            <span>{props.position}</span> 
          </div>
        </div>

        <time title='1 de Dezembro às 17:00h' dateTime='2023-12-01 17:00:00'>Publicado á 1h</time>
      </header>

      <div className={styles.content}>
        <p dangerouslySetInnerHTML={{ __html: replaceHashtagsWithLinks(props.content) }}></p>
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
        <Comment/>
      </div>
    </article>
  )
}