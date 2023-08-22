import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState} from 'react';
import { filterProducts } from '../../redux/Actions';
import CardContainerAdmin from '../productsInfo/cardContainerAdmin/CardContainerAdmin';
import SideBar from '../../componentes/sidebar/SideBar';
// import { NavLink, useNavigate } from 'react-router-dom';
import './AllProducts.css'

const AllProducts = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const [filters, setFilters] = useState({
    color: null,
    size: null,
    category: null,
    serie: null,
    sale: null,
    minPrice: null,
    maxPrice: null,
    order: null,
    name: null,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  
  // const navigate = useNavigate();

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const itemsToShow = allProducts.slice(indexOfFirstItem, indexOfLastItem);
  
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  useEffect(() => {
    setCurrentPage(1);
  }, [filters]);
  
  useEffect(() => {
    dispatch(filterProducts(filters));
  }, [filters, dispatch]);
  
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const nullOptions = [
      'null',
      'Todas las categorias',
      'Todos los colores',
      'Todos las tallas',
      'Todos las series',
    ];
    if (name === 'sale') {
      const newValue = filters.sale === true ? null : true;
      setFilters({ ...filters, [name]: newValue });
    } else {
      const newValue = nullOptions.includes(value) ? null : value;
      setFilters({ ...filters, [name]: newValue });
    }
  };
  
  const resetFilters = (event) => {
    event.preventDefault();
    setFilters({
      color: null,
      size: null,
      category: null,
      serie: null,
      sale: null,
      minPrice: null,
      maxPrice: null,
      order: null,
      name: null,
    });
  };
  
 
  return (
    <section className='products-section'>
       {/* <div className='nav-dashboard'>
      <NavLink to='/all-data/all-products'>
        <button className='nav-dashboard-btn'onClick={() => navigate('/all-data/all-products')}>Productos </button>
      </NavLink>
      <NavLink to='/all-data/all-colecciones'>
        <button className='nav-dashboard-btn' onClick={() => navigate('/all-data/all-colecciones')}>Colecciones</button>
      </NavLink>
      <NavLink to='/all-data/all-sizes'>
        <button className='nav-dashboard-btn' onClick={() => navigate('/all-data/all-sizes')}>Talles</button>
      </NavLink>
      <NavLink to='/all-data/all-categories'>
        <button className='nav-dashboard-btn' onClick={() => navigate('/all-data/all-categories')}>Categorias</button>
      </NavLink>
      </div> */}
      <div className='products-container'>
        
        <SideBar
          handlerEventSideBar={handleChange}
          resetFilters={resetFilters}
        />
        <div className='cards-container'>
          <div className='cards-paginated-container'>
            <CardContainerAdmin products={itemsToShow} />
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
    </section>
  );
};

export default AllProducts;
