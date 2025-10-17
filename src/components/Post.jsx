import styles from './Post.module.css'

import foto from '../assets/profile.jpg';


export function Post(){
    return(
        <article className={styles.post}>
           <header>
                <div className={styles.author}>
                    <img className={styles.profile} src={foto} />
                    <div className={styles.authorInfo}>
                        <strong> Lana </strong>
                        <span> Professora </span>
                    </div>
                </div>

                <time  dateTime="2025/02/01">Publicado</time>
                </header>
                <div className={styles.content}>
                    <p>Fala galeraa 👋 </p>
                    <p>
                        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
                    </p>
                    <p>
                     {' '}<a href="#">jane.design/doctorcare</a>
                    </p>
                    <p>
                       <a href="#">#novoprojeto </a>{' '}
                        <a href="#"> #nlw </a>{' '}
                        <a href="#"> #rocketseat</a>{' '}
                    </p>
                </div>

                <form className={styles.commentForm}>
                    <strong> Deixei seu feedback</strong>
                    <textarea placeholder='deixe um comentário'/>
                    <button type="submit">Comentar</button>
                </form>
           
        </article>
    )
}
