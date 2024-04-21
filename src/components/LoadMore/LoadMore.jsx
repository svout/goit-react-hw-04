import './LoadMore.css'
const LoadMore = ({ onClick }) => (
    <button type="button" onClick={onClick} className="load-more">
      Load more
    </button>
  );
  export default LoadMore;