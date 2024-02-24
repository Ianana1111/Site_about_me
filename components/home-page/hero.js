import Image from 'next/image';
import classes from './hero.module.css'

export default function Hero(){
  return(
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src = "/images/site/-5_4.jpg" 
          alt = "An image showing -5" 
          width = {300}
          height = {300}
        />
      </div>
      <h1>Hi all, Ian is here</h1>
      <p>
        Welcome to my site. Hope you enjoy it.
      </p>
    </section>
  )
}