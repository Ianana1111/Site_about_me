import Link from 'next/link';
import Image from 'next/image';
import classes from './post-item.module.css';

export default function PostItem({post}){
  const { title, image, excerpt, date, slug } = post;

  // date formatting
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // image path
  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return (
    <li >
      <Link href = {linkPath} className={classes.post}>
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>{excerpt}</p>
          <time>{formattedDate}</time>
        </div>
        <div className={classes.image}>
          <Image 
            src = {imagePath} 
            alt = {title} 
            width = {200} 
            height = {200} 
            layout = "responsive"
          />
        </div>
      </Link>
    </li>
    
  )
}