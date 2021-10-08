import { MongoClient } from 'mongodb';

async function handler(req, res) {
  const { eventId } = req.query;

  const url =
    'mongodb+srv://User:xV!NvYPsxbe9BJd@cluster0.yfbud.mongodb.net/events?retryWrites=true&w=majority';

  const client = await MongoClient.connect(url);

  if (req.method === 'POST') {
    const { email, name, text } = req.body;

    if (
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !text ||
      text.trim() === ''
    ) {
      res.status(422).json({ massage: 'Invalid Input' });
      return;
    }

    const newComment = {
      email,
      name,
      text,
      eventId,
    };

    const db = client.db();
    const result = await db.collection('comments').insertOne(newComment);

    console.log(result);
    newComment.id = result.insertedId;

    res.status(201).json({ message: 'Added comment', comment: newComment });
  }

  if (req.method === 'GET') {
    const dummyComment = [
      {
        id: 'c1',
        name: 'Bang',
        text: 'Ini komen pertama dari bang bang....',
      },
      {
        id: 'c2',
        name: 'Aku',
        text: 'Ini komen kedua dari bang Aku....',
      },
      {
        id: 'c3',
        name: 'Can',
        text: 'Ini komen ketiga dari bang can....',
      },
    ];
    res.status(200).json({ comments: dummyComment });
  }
}

export default handler;
