import { Avatar } from './Avatar'
import styles from './Comment.module.css'

import { Trash, ThumbsUp } from '@phosphor-icons/react'


export function Comment({ content }) {
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
            <button title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>
          <p>
            {content}
          </p>
        </div>

        <footer>
          <button> 
            <ThumbsUp size={18} weight="bold"/>
            Aplaudir<span>33</span>
          </button>
        </footer>
      </div>
    </div>
  )
}