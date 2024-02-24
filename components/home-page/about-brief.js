import { useState, useEffect, useRef } from 'react';
import classes from './about-brief.module.css';


export default function BriefAbout(){
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
        <div className={classes.headerText}>
          <p className={classes.summary}>
            This website was built during my sophomore year. I was quite obsessed with developing my own web then, 
            so I decided to build it on my own. 
            <br/><br/>
            The framework I utilized is Next.js. The rationale behind this choice was simply because React was quite popular at that time, 
            and somehow Next.js caught my attention. To my surprise, I found it to be superior to React, as it incorporated numerous optimizations 
            in both page rendering and its features as a full-stack language. And that is all there is to it.
            <br/><br/>
            I hope you all enjoy it and feel at home.
          </p>
        </div>
      </div>
    </div>
  )
}
// --------------------
/* <div className={classes.image}>
          <Image src = "/images/site/burger.jpg"  alt = "burger baby" fill/>
        </div> */
        /* <h1>BIO</h1> */
// <div>click here to see full Bio<Link href = '/About_Me'>About Me</Link></div>