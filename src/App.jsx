import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from "./App.module.css"
import "./global.css"

export function App() {
  const userText = `Fala galeraa 👋 

Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no Ignite. 🚀
  
  👉 https://github.com/CarlosLonghi/Node_Fundamentals
  
  #novoprojeto #nlw #rocketseat`

  return (
    <>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Carlos Longhi" 
            position="Developer" 
            content={userText}
          />
        </main>
      </div>
    </>
  )
}