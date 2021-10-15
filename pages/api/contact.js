function handler(req, res) {
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

    res
      .status(201)
      .json({ message: 'Successfully adding message!', message: newMessage });
  }
}

export default handler;
