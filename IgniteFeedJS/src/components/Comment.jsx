import styles from './Comment.module.css';
import { Avatar } from './Avatar';
import { useState } from 'react';
import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1);
  }

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
            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}