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

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src={props.author.avatarUrl}
          />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong> 
            <span>{props.author.role}</span> 
          </div>
        </div>

        <time title='1 de Dezembro às 17:00h' dateTime={props.publishedAt}>Publicado á 1h</time>
      </header>

      <div className={styles.content}>
        <p dangerouslySetInnerHTML={{ __html: replaceHashtagsUrlsWithLinks(props.content) }}></p>
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