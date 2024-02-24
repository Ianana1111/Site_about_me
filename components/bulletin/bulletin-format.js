import Link from 'next/link';
import classes from './bulletin-format.module.css'

export default function BulletinFormat({_id, author, body}) {
  return (
    <li className={classes.post}>
      {/* <Link to = {id}> */}
        <p className={classes.author}>{author}</p>
        <p className={classes.body}>{body}</p>
      {/* //</Link> */}
    </li>
  );
}