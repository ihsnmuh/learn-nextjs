import { MongoClient } from 'mongodb';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      !message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid Input.' });
      return;
    }

    //store in database
    const newMessage = {
      email,
      name,
      message,
    };

    let client;

    try {
      client = await MongoClient.connect(
        'mongodb+srv://User:xV!NvYPsxbe9BJd@cluster0.yfbud.mongodb.net/mySite?retryWrites=true&w=majority'
      );
    } catch (error) {
      res.status(500).json({ message: 'Cant connect to database!' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('message').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }
    client.close();
    res
      .status(201)
      .json({ message: 'Successfully adding message!', message: newMessage });
  }
}

export default handler;
