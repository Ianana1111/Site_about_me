import Link from 'next/link';
import classes from './main-navigation.module.css';
import { useState, useEffect } from 'react';

export default function MainNavigation(){
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 
  return (
    <header className={`${classes.header} ${isScrolled ? classes.scrolled: ''}`}>
      <Link href = '/' className={classes.logo}><h2>I CHEN, LEE</h2></Link>
      <nav>
        <ul className = {classes.nav_links}>
          <li><Link href = '/posts'>Blog</Link></li>
          <li><Link href = '/About_Me'>About Me</Link></li>
          <li><Link href = '/bulletins'>Bulletin</Link></li>
          <li><Link href = '/contact'>Contact</Link></li>
        </ul>
      </nav>
      <button className={classes.button}>Change mode</button>
    </header>
  )
}