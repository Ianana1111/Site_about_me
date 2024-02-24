import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if(req.method === 'POST'){
    const { author, body } = req.body;

    if(
      !author ||
      author.trim() === '' ||
      !body ||
      body.trim() === '' 
    ){
      res.status(422).json({ message: 'Invalid input.'});
      return;
    }

    const newMes = {
      author,
      body,
    };

    //const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.password}@${mongodb_clustername}.pqafyqt.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`;

    let client;
    try {
      client = await MongoClient.connect(
        'mongodb+srv://dbuser:Asdf85697437@cluster0.pqafyqt.mongodb.net/my-site?retryWrites=true&w=majority'
      );
    } catch (error){
      res.status(500).json({message: 'Could not connect to database'});
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('board').insertOne(newMes);
      newMes.id = result.insertedId;
    } catch (error){
      client.close();
      res.status(500).json({ message: 'Storing message failed!'});
      return;
    }
    client.close();

    res.status(201).json({message: 'Successful', message: newMes})
  }
}
