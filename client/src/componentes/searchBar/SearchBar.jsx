import "./SearchBar.css";

const SearchBar = ({ handlerEventSearch }) => {
  return (
    <div className="search-container">
      <form onChange={handlerEventSearch} className="search-container-form">
        <input
          className="input-search"
          placeholder="¿Qué productos buscás?"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
