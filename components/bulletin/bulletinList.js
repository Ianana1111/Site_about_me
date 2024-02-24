import classes from './bulletinList.module.css';
import BulletinFormat from './bulletin-format';
import Link from 'next/link';
import NewPost from './NewPost';

export default function BulletinList(props) {
  const mes = props.mes;
  return (
    <>
      <Link href = '/bulletins/CreateCom'>
        <button className={classes.FloatingButton}>
          add
        </button>
      </Link>
      <header className={classes.header}>
        <h1>Bulletin Board</h1>
        <p>You can leave any comment you want here!</p>
      </header>
      {mes.data.length > 0 && (
        <ul className={classes.posts}>
          {mes.data.map((post) => (
            <BulletinFormat key={post.body} id = {post._id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {mes.data.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}