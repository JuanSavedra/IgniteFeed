import { Post } from './Post';

export function App() {
  return (
    <div>
      <h1>Local for Posts</h1>
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