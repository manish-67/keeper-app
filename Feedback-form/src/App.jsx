import { useEffect, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import './App.css';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch feedback from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/feedback')
      .then((res) => res.json())
      .then((data) => {
        setFeedbacks(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching feedback:', err);
        setLoading(false);
      });
  }, []);

  // Send feedback to backend
  const addFeedback = async (newFeedback) => {
    try {
      const res = await fetch('http://localhost:5000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFeedback),
      });

      const data = await res.json();

      if (res.ok) {
        setFeedbacks([data.feedback, ...feedbacks]);
      } else {
        alert(data.error || 'Something went wrong');
      }
    } catch (err) {
      console.error('Error submitting feedback:', err);
      alert('Server error');
    }
  };

  return (
    <div className="min-h-screen bg-color-my p-6">
      <h1 className="text-3xl text-center mb-6 font-extrabold ">Quick Feedback</h1>
      <FeedbackForm onSubmit={addFeedback} />
      {loading ? (
        <p className="text-center mt-6 text-gray-600">Loading feedback...</p>
      ) : (
        <FeedbackList feedbacks={feedbacks} />
      )}
    </div>
  );
}

export default App;
