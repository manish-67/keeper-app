function FeedbackList({ feedbacks }) {
  return (
    <div className="max-w-md mx-auto mt-8 space-y-4 bgcolor-new">
      <h2 className="text-xl font-semibold">Feedback Entries</h2>
      {feedbacks.length === 0 ? (
        <p className="text-gray-500">No feedback yet.</p>
      ) : (
        feedbacks.map((fb, index) => (
          <div key={index} className="border p-4 rounded shadow-sm under under-bg-color">
            <p className="font-semibold">{fb.name}</p>
            <p className="text-gray-700">{fb.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default FeedbackList;
