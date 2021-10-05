import { useRef, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [loadDataFeedback, setLoadDataFeedback] = useState([]);
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  function submitFormHandler(e) {
    e.preventDefault();

    const email = emailInputRef.current.value;
    const feedback = feedbackInputRef.current.value;

    const reqBody = { email: email, feedback: feedback };

    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch('/api/feedback')
      .then((resp) => resp.json())
      .then((data) => {
        const { feedback } = data;
        setLoadDataFeedback(feedback);
      });
  }

  return (
    <>
      <h1>The Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <label htmlFor='email'>Your Email Address</label>
          <input type='email' id='email' ref={emailInputRef} />
        </div>
        <div>
          <label htmlFor='feedback'>Your Feedback</label>
          <textarea
            type='text'
            id='feedback'
            rows={3}
            ref={feedbackInputRef}
          ></textarea>
        </div>
        <button>Submit</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <div>
        <ul>
          {loadDataFeedback.map((data) => (
            <li key={data.id}>
              {data.feedback} from {data.email}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
