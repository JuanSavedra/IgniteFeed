import { Post } from './Post';
import { Header } from './components/Header'
import './styles.css';

export function App() {
  return (
    <div>
      <Header />
      <Post 
        author="Juan Savedra"
        content="Lorem Ipsum"
      />
      <Post 
        author="Vitor Savedra"
        content="Lorem Ipsum"
      />
    </div>
  )
}