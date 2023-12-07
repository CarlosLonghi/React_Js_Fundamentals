import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

import { Trash, ThumbsUp } from '@phosphor-icons/react'


export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }
  
  return(
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/CarlosLonghi.png"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Carlos Longhi <span>(você)</span></strong>
              <time title='1 de Dezembro às 17:00h' dateTime='2023-12-01 17:00:00'>Cerca de 1h atrás</time>
            </div>
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>

        <footer>
          <button onClick={handleLikeComment}> 
            <ThumbsUp size={18} weight="bold"/>
            Aplaudir<span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}