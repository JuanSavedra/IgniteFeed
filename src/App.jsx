import styles from './App.module.css';
import { Post } from './Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Juan Savedra"
            content="Lorem Ipsum"
          />
          <Post 
            author="Vitor Savedra"
            content="Lorem Ipsum"
          />
        </main>
      </div>
    </div>
  )
}