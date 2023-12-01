import { Header } from "./components/Header"
import { Post } from "./components/Post"
import "./global.css"

export function App() {

  return (
    <>
      <Header/>
      <h1>Hello World</h1>
      <Post 
        author="Carlos Longhi" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis ut error."  
      />

      <Post
        author="Luiz"
        content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, vero."
      />
    </>
  )
}