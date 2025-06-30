import { useState } from 'react';

function FeedbackForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !message) return alert('Please fill all fields');

    onSubmit({ name, message });
    setName('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded bgcolor-new" >
      <h2 className="text-xl font-semibold mb-4">Submit Feedback</h2>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border p-2 rounded mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Your Feedback"
        className="w-full border p-2 rounded mb-3"
        rows="4"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 translate-x-40 "
      >
        Submit
      </button>
    </form>
  );
}

export default FeedbackForm;
