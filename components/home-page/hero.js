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
      <h1>Hi, I am Ian</h1>
      <p>
        I blog about web development - especially fronted frameworks like Angular or React.
      </p>
    </section>
  )
}