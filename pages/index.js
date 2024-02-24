import { getFeaturedPosts } from "@/lib/posts-util";
import { Fragment } from "react";
import Head from "next/head";
import FeaturedPosts from "@/components/home-page/featured-posts";
import Hero from "@/components/home-page/hero";
import Picture from "@/components/home-page/picture";
import BriefAbout from "@/components/home-page/about-brief";
import Footer from "@/components/home-page/footer";

export default function HomePage({posts}){
  return (
    <Fragment>
      <Head>
        <title>Ian blog</title>
        <meta 
          name = 'description'
          content = 'I post about programming and web development'/>
      </Head>
      <Hero/>
      <BriefAbout/>
      <FeaturedPosts posts = {posts}/>
      {/* <Picture/> */}
      <Footer/>
    </Fragment>
  )
}

export function getStaticProps(){
  const featuredPosts = getFeaturedPosts(); 
  return {
    props: {
      posts: featuredPosts,
    },
  }
}