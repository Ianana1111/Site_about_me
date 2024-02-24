import BulletinList from '@/components/bulletin/bulletinList';
import Head from 'next/head';
import { MongoClient } from 'mongodb';

export default function Bulletin(props){
  const data = props;
  return (
    <>
      <Head>
        <title>All your mes</title>
        <meta 
          name = "description"
          content = "A list of all programming-related tutorials and posts!!"/>
      </Head>
      <BulletinList mes = {data}/>
    </>
  )
}

export async function getServerSideProps() {
  // 连接到 MongoDB
  const client = await MongoClient.connect(
    'mongodb+srv://dbuser:Asdf85697437@cluster0.pqafyqt.mongodb.net/my-site?retryWrites=true&w=majority'
  );
  const db = client.db();

  // 从 MongoDB 获取数据
  const data = await db.collection('board').find({}).toArray();
  

  // 关闭 MongoDB 连接
  client.close();

  // 返回数据作为 props
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)) // 将数据序列化以避免传输问题
    }
  };
}