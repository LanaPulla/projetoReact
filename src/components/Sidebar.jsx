// import { PencilLine } from 'phospor-react' nao quis resolver o problema de icone

import styles from './Sidebar.module.css'

import barra from '../assets/cover.jpg'
import foto from '../assets/profile.jpg';


export function SideBar() {
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={barra} />

            <div className={styles.profile}>
                <img src={foto} />
                <strong> Lorem </strong>
                <span> Lorem Lorem Lorem </span>
            </div>

            <footer>
                {/* <PencilLine /> aqui ficaria o icone */}
                <a href='#'> Editar seu Perfil</a>
            </footer>
        </aside>
    )
}