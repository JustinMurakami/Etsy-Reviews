import React from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const PaginationContainer = styled.nav`
  margin: 20px 0px 36px;
  align-items: center;
  .reviews-pagination {
    display:inline-flex;
    justify-content: flex-start;
    list-style: none;
  }
  .page-link {
    list-style: none;
    font-size: 13px;
    line-height: 18.2px;
    color: #222222;
    padding: 10px 15px;
    margin-right:4px;
    border-radius: 50%;
  }
  .reviews-page-period {
    align-self:flex-end;
  }
  .page-link-current {
    list-style: none;
    font-size: 13px;
    line-height: 18.2px;
    color: #222222;
    padding: 10px 15px;
    margin-right:4px;
    border:none;
    border-radius: 50%;
    background-color: #2222;
    outline:none;
  }
`;

const Pagination = (props) => {
  const { reviewsPerPage, totalReviews, paginate, currentPage } = props;
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalReviews / reviewsPerPage); i += 1) {
    pageNumbers.push(i);
  }
  const previous = currentPage - 1;
  const next = currentPage + 1;
  const firstPage = 1;
  const secondPage = 2;
  const lastPage = pageNumbers.length;

  if (currentPage === 1) {
    return (
      <PaginationContainer className="PaginationContainer">
        <ul className="reviews-pagination">
          <li className="reviews-page-item">
            <button type="button" className="page-link"><FaArrowLeft /></button>
          </li>
          <li className="reviews-page-item">
            <button type="button" className="page-link-current">1</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(secondPage)} className="page-link">2</button>
          </li>
          <li className="reviews-page-period">
            ... 
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(lastPage)} className="page-link">{lastPage}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(next)} className="page-link"><FaArrowRight /></button>
          </li>
        </ul>
      </PaginationContainer>
    );
  }
  if (currentPage === 2) {
    return (
      <PaginationContainer className="PaginationContainer">
        <ul className="reviews-pagination">
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(firstPage)} className="page-link"><FaArrowLeft /></button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(firstPage)} className="page-link">1</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" className="page-link-current">2</button>
          </li>
          <li className="reviews-page-period">
            ... 
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(lastPage)} className="page-link">{lastPage}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(next)} className="page-link"><FaArrowRight /></button>
          </li>
        </ul>
      </PaginationContainer>
    );
  }
  if (currentPage === lastPage - 1) {
    return (
      <PaginationContainer className="PaginationContainer">
        <ul className="reviews-pagination">
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(previous)} className="page-link"><FaArrowLeft /></button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(firstPage)} className="page-link">1</button>
          </li>
          <li className="reviews-page-period">
            ... 
          </li>
          <li className="reviews-page-item">
            <button type="button" className="page-link-current">{currentPage}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(lastPage)} className="page-link">{lastPage}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(lastPage)} className="page-link"><FaArrowRight /></button>
          </li>
        </ul>
      </PaginationContainer>
    );
  }
  if (currentPage === lastPage) {
    return (
      <PaginationContainer className="PaginationContainer">
        <ul className="reviews-pagination">
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(previous)} className="page-link"><FaArrowLeft /></button>
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(firstPage)} className="page-link">1</button>
          </li>
          <li className="reviews-page-period">
            ... 
          </li>
          <li className="reviews-page-item">
            <button type="button" onClick={() => paginate(lastPage - 1)} className="page-link">{currentPage - 1}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" className="page-link-current">{lastPage}</button>
          </li>
          <li className="reviews-page-item">
            <button type="button" className="page-link"><FaArrowRight /></button>
          </li>
        </ul>
      </PaginationContainer>
    );
  }
  return (
    <PaginationContainer className="PaginationContainer">
      <ul className="reviews-pagination">
        <li className="reviews-page-item">
          <button type="button" onClick={() => paginate(previous)} className="page-link"><FaArrowLeft /></button>
        </li>
        <li className="reviews-page-item">
          <button type="button" onClick={() => paginate(firstPage)} className="page-link">1</button>
        </li>
        <li className="reviews-page-period">
          ... 
        </li>
        <li className="reviews-page-item">
          <button type="button" className="page-link-current">{currentPage}</button>
        </li>
        <li className="reviews-page-period">
          ... 
        </li>
        <li className="reviews-page-item">
          <button type="button" onClick={() => paginate(lastPage)} className="page-link">{lastPage}</button>
        </li>
        <li className="reviews-page-item">
          <button type="button" onClick={() => paginate(next)} className="page-link"><FaArrowRight /></button>
        </li>
      </ul>
    </PaginationContainer>
  );
};

export default Pagination;
