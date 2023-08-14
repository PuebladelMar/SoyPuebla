import "./SearchBar.css";

const SearchBar = ({ handlerEventSearch }) => {
  return (
    <div className="search-form">
      <form onChange={handlerEventSearch}>
        <input
          className="input-search"
          placeholder="¿Qué productos buscás?"
        ></input>
      </form>
    </div>
  );
};

export default SearchBar;
