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
    const db = client.db();
    const commentsDoc = await db
      .collection('comments')
      .find()
      .sort({ _id: -1 })
      .toArray();

    res.status(200).json({ comments: commentsDoc });
  }

  client.close();
}

export default handler;
