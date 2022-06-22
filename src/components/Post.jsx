export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/JuanSavedra.png" />
          <div className={styles.authorInfo}>
            <strong>Juan Savedra</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time 
          title="22 de junho às 14:00h" 
          dateTime="2022-06-22 14:00:00"
        >
            Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>
        Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, 
        evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      </p>
      <p><a href="#">👉 jane.design/doctorcare</a></p>
      <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}