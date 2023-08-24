import "./SearchBar.css";

const SearchBar = ({ handlerEventSearch, handlerSubmitSearch, handleOnFocus }) => {
  return (
    <div className="search-container">
      <form
        onChange={handlerEventSearch}
        onSubmit={handlerSubmitSearch}
        onFocus={handleOnFocus}
        onBlur={handleOnFocus}
        className="search-container-form"
      >
        <input className="input-search" placeholder="¿Qué productos buscás?" />
      </form>
    </div>
  );
};

export default SearchBar;
