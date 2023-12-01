import styles from './Post.module.css'

export function Post(props) {
  
  return (
    <div className={styles.post}>
      <strong>{props.author}</strong> 
      <p>{props.content}</p>
    </div>
  )
}