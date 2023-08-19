import './ProductsInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import CardProduct from '../../componentes/cardContainer/CardContainer';

const ProductsInfo = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const itemsToShow = allProducts.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //   useEffect(() => {
  //     setCurrentPage(1);
  //   }, [filters]);

  return (
    <div className='products'>
      <div className='cards-container'>
        <div className='cards-paginated-container'>
          <CardProduct products={itemsToShow} />
          <div className='paginated-container'>
            <button
              className={
                currentPage === 1
                  ? 'disabledPaginationButton'
                  : 'paginationButton'
              }
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &#10094;
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  className={
                    pageNumber === currentPage
                      ? 'activePaginationButton'
                      : 'paginationButton'
                  }
                  onClick={() => handlePageChange(pageNumber)}
                >
                  {pageNumber}
                </button>
              )
            )}
            <button
              className={
                currentPage === totalPages
                  ? 'disabledPaginationButton'
                  : 'paginationButton'
              }
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &#10095;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
