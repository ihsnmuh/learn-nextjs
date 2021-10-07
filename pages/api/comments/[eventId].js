function handler(req, res) {
  const { eventId } = req.query;

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
      id: new Date().toISOString(),
      email,
      name,
      text,
    };
    console.log(newComment);
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
