import React from 'react';

const Pagination = (props) => {
  const { reviewsPerPage, totalReviews, paginate } = props;
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalReviews / reviewsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="reviews-pagination">
        {pageNumbers.map(number => (
          <li key={number} className="reviews-page-item">
            <a href="#" onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
