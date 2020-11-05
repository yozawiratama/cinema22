const Pagination = ({ current, total, totalResult, onPageChange }) => {
  function getNextOrPrevCurrentPage() {
    if (current == 1 && total > 1) return current + 1;
    else if (current == total && total > 1) return current - 1;
    else return current;
  }
  return (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a
        className="pagination-previous"
        title="This is the first page"
        disabled={current == 1 ? true : false}
        onClick={() => onPageChange(current - 1)}
      >
        <span className="icon">
          <i className="fa fa-chevron-left"></i>
        </span>
        <span>Previous</span>
      </a>
      <a
        className="pagination-next"
        disabled={current == total ? true : false}
        onClick={() => onPageChange(current + 1)}
      >
        <span>Next Page</span>
        <span className="icon">
          <i className="fa fa-chevron-right"></i>
        </span>
      </a>
      <ul className="pagination-list">
        {current != 2 ? (
          <li>
            <a
              className={
                current == 1 ? "pagination-link is-current" : "pagination-link"
              }
              aria-label="Goto page 1"
              onClick={() => onPageChange(1)}
            >
              1
            </a>
          </li>
        ) : (
          ""
        )}
        {current > 2 ? (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        ) : (
          ""
        )}
        {current > 1 && current < total? (
          <>
            <li>
              <a
                className="pagination-link"
                aria-label={`Goto page ${current - 1}`}
                onClick={() => onPageChange(current - 1)}
              >
                {current - 1}
              </a>
            </li>
            <li>
              <a
                className="pagination-link is-current"
                aria-label={`Goto page ${current}`}
              >
                {current}
              </a>
            </li>
            <li>
              <a
                className="pagination-link"
                aria-label={`Goto page ${current + 1}`}
                onClick={() => onPageChange(current + 1)}
              >
                {current + 1}
              </a>
            </li>
          </>
        ) : (
          <li>
            <a
              className="pagination-link"
              onClick={() => onPageChange(getNextOrPrevCurrentPage())}
            >
              {getNextOrPrevCurrentPage()}
            </a>
          </li>
        )}
        {current < total - 2 ? (
          <li>
            <span className="pagination-ellipsis">&hellip;</span>
          </li>
        ) : (
          ""
        )}
        {current == total ? (
          <li>
            <a
              className={
                current == total
                  ? "pagination-link is-current"
                  : "pagination-link"
              }
              aria-label={`Goto page ${total}`}
              onClick={() => onPageChange(total)}
            >
              {total}
            </a>
          </li>
        ) : ''}
      </ul>
    </nav>
  );
};

export default Pagination;
