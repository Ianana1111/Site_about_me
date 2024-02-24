import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import classes from './about-brief.module.css';
import Link from 'next/link';

export default function BriefAbout(){
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          console.log("check");
          setIsVisible(true);
          observer.unobserve(componentRef.current);
        }
      },
      { threshold: 1 } 
    );

    observer.observe(componentRef.current);

    // return () => observer.unobserve(componentRef.current);
  }, []);

  return (
    <div ref={componentRef} className={isVisible? classes.show:classes.hide}>
      <div className={classes.section}>About This Site
      </div>
      <div className={classes.header}>
        <div className={classes.image}>
          <Image src = "/images/site/burger.jpg"  alt = "burger baby" fill/>
        </div>
        <div className={classes.headerText}>
          <h1>BIO</h1>
          <p className={classes.summary}>test123 hi hi hi hi hih  hihih h ih ih ihi hh ih hidddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd </p>
          <div>click here to see full Bio<Link href = '/About_Me'>About Me</Link></div>
        </div>
      </div>
    </div>
  )
}