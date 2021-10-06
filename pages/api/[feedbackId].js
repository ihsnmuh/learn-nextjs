import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function handler(req, res) {
  const { feedbackId } = req.query;
  const filePath = buildFeedbackPath();
  const feedbackData = extractFeedback(filePath);

  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );

  res.status(200).json({
    feedback: selectedFeedback,
  });
}

export default handler;
