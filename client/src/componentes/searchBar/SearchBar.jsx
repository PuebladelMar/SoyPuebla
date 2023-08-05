import "./SearchBar.css";

const SearchBar = ({ handlerEventSearch, handlerSubmitSearch }) => {
  return (
    <div>
      <form onChange={handlerEventSearch}>
        <input placeholder="Qué productos buscás?"></input>
      </form>
    </div>
  );
};

export default SearchBar;
