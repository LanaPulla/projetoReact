import { Header } from './components/Header'
import { Post } from './components/Post'
import { SideBar } from './components/Sidebar'


import styles from './components/App.module.css'

import './global.css'

export function App(){
  return(
    <>
      <Header />
       
      <div className={styles.wrapper}>
          <SideBar />
        <main>
          <Post />
          <Post />
        </main> 
      </div>
    </>
  )
}
// export default App (muda o import lá no main onde é usado no corpo) 