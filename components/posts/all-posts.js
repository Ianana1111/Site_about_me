import classed from './all-posts.module.css';
import PostsGrid from './posts-grid';

export default function AllPosts(props){
  return (
    <section className={classed.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts = {props.posts}/>
    </section>
  )
}