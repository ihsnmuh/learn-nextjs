import { MongoClient } from 'mongodb';

async function connectDatabase() {
  const url =
    'mongodb+srv://User:xV!NvYPsxbe9BJd@cluster0.yfbud.mongodb.net/newsLetters?retryWrites=true&w=majority';
  const client = await MongoClient.connect(url);

  return client;
}

async function insertDocument(client, document) {
  const db = client.db();
  await db.collection('newsletter').insertOne(document);
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email input' });
      return;
    }

    let client;

    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: 'Connecting to the database failed!' });
      return;
    }

    try {
      await insertDocument(client, { email: userEmail });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!' });
      return;
    }

    res.status(201).json({ message: 'Signed up!' });
  }
}
