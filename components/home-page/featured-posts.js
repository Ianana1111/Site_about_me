import { useState, useEffect, useRef } from 'react';
import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';


export default function FeaturedPosts(props){
  const [isVisible, setIsVisible] = useState(true);
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
  }, []);

  return(
    <div ref={componentRef} className={isVisible? classes.show:classes.hide}>
      <section className={classes.latest}>
        <div className={classes.text}>Recent Posts</div>
        <div className={classes.grid}><PostsGrid posts = {props.posts}/></div>
      </section>
    </div>
    
  )
}