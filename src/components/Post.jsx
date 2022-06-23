import styles from './Post.module.css';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post(props) {
  console.log(props);

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/JuanSavedra.png" />
          <div className={styles.authorInfo}>
            <strong>Juan Savedra</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time 
          title="22 de junho às 14:00h" 
          dateTime="2022-06-22 14:00:00"
        >
            Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  )
}