import { useRef } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
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

  return (
    <div className={styles.container}>
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
    </div>
  );
}
