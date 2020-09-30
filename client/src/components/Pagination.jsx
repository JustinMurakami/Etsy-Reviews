import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.nav`
  .reviews-pagination {
    display:inline-flex;
    justify-content: flex-start;
    list-style: none;
  }
  .reviews-page-item  button {
    list-style: none;
    font-size: 13px;
    line-height: 18.2px;
    text-align: center;
    color: #222222;
    padding: 10px 15px;
    margin-right:4px;
    border-radius: 50%;
  }
`;

const Pagination = (props) => {
  const { reviewsPerPage, totalReviews, paginate } = props;
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalReviews / reviewsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer className="PaginationContainer">
      <ul className="reviews-pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="reviews-page-item">
            <button type="button" href="#" onClick={() => paginate(number)} className="page-link">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
