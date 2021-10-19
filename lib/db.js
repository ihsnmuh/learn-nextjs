import { MongoClient } from 'mongodb';

export async function connectToDatabase(params) {
  const client = await MongoClient.connect(
    'mongodb+srv://User:xV!NvYPsxbe9BJd@cluster0.yfbud.mongodb.net/authDb?retryWrites=true&w=majority'
  );

  return client;
}
