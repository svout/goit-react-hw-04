const LoadMore = ({ onClick }) => (
  <div className="flex justify-center mt-4">
    <button
      type="button"
      onClick={onClick}
      className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
    >
      Load more
    </button>
  </div>
);

export default LoadMore;
