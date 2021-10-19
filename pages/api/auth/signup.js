import { hashPassword } from '../../../lib/auth';
import { connectToDatabase } from '../../../lib/db';

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (
      !email ||
      !email.includes('@') ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({
        message:
          'Invalid input - password should also be at least 7 characters long.',
      });
    }

    const client = await connectToDatabase();

    const db = client.db();

    // checking duplicate email
    const duplicateEmail = await db
      .collection('users')
      .findOne({ email: email });

    if (duplicateEmail) {
      res.status(422).json({ message: 'User already exists!' });
      client.close();
      return;
    }

    const hashedPassword = await hashPassword(password);

    const result = await db.collection('users').insertOne({
      email: email,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'Created User!' });
    client.close();
  }
}

export default handler;
