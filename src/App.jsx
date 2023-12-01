import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

export function App() {

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Carlos Longhi" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis ut error."  
          />

          <Post
            author="Luiz"
            content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, vero."
          />
        </main>
      </div>
    </>
  )
}