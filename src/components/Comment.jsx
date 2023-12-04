import styles from './Comment.module.css'

import { Trash, ThumbsUp } from '@phosphor-icons/react'


export function Comment() {
  return(
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/CarlosLonghi.png"/>
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
            Lorem ipsum dolor ipsum.
          </p>
        </div>

        <footer>
          <button> 
            <ThumbsUp size={18} weight="bold"/>
            Aplaudir <span>33</span>
          </button>
        </footer>
      </div>
    </div>
  )
}