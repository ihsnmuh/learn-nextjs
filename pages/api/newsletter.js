import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  const url =
    'mongodb+srv://User:xV!NvYPsxbe9BJd@cluster0.yfbud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

  if (req.method === 'POST') {
    const userEmail = req.body.email;

    if (!userEmail || !userEmail.includes('@')) {
      res.status(422).json({ message: 'Invalid email input' });
      return;
    }

    const client = await MongoClient.connect(url);
    const db = client.db();
    await db.collection('emails').insertOne({ email: userEmail });
    client.close();

    res.status(201).json({ message: 'Signed up!' });
  }
}
