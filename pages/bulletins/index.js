import BulletinList from '@/components/bulletin/bulletinList';
import Footer from '@/components/layout/footer';
import Head from 'next/head';
export default function Bulletin(){
  return (
    <>
      <Head>
        <title>All your mes</title>
        <meta 
          name = "description"
          content = "A list of all programming-related tutorials and posts!!"/>
      </Head>
      <BulletinList/>
    </>
  )
}
