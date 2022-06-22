import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/JuanSavedra.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}> 
          <header>
            <div className={styles.authorAndTime}>
              <strong>Juan Savedra</strong>
              <time 
                title="22 de junho às 14:00h" 
                dateTime="2022-06-22 14:00:00"
              >
                Publicado há 1h
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}