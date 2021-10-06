import { useState } from 'react';
import { buildFeedbackPath, extractFeedback } from '../api/feedback';

export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState([]);
  function handleDetailFeedback(id) {
    fetch(`/api/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setFeedbackData(data.feedback);
      });
  }

  return (
    <>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.feedback}
            <button onClick={handleDetailFeedback.bind(null, item.id)}>
              Show Email
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbackItems: data,
    },
  };
}
