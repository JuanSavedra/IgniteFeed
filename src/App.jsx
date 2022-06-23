import styles from './App.module.css';
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/JuanSavedra.png',
      name: 'Juan Savedra',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { 
        type: 'paragraph', 
        content: 'Texto só pra ver se ta funcionando ta ligado? 🚀'
      },
      { type: 'link', content: '👉 Hello, World!'},
    ],
    publishedAt: new Date('2022-06-23 15:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/VitorSavedra.png',
      name: 'Vitor Savedra',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { 
        type: 'paragraph', 
        content: 'Textinho diferente do primeiro só pra ver se tá funcionando. 🚀'
      },
      { type: 'link', content: '👉 Hello World.'},
    ],
    publishedAt: new Date('2022-06-24 15:30:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}