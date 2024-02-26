import classes from './bulletinList.module.css';
import BulletinFormat from './bulletin-format';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function BulletinList() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('/api/bulletin')
        .then(response => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
          console.log(data);
        }
      )
  }, []);

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
      {isLoading && <p className={classes.loading}>Fetching Meals</p>}
      {!isLoading && data.message.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {!isLoading && data.message.length !== 0 && (
        <ul className={classes.posts}>
          {data.message.map((post) => (
            <BulletinFormat key={post.body} id = {post._id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
    </>
  );
}