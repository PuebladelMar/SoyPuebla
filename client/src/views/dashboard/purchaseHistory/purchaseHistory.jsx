import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllHistory } from "../../../redux/Actions";

const HistoryData = () => {
  const allHistory = useSelector((state) => state.allHistory);
  const dispatch = useDispatch();
  const [filteredHistory, setFilteredHistory] = useState([]);
  const [filters, setFilters] = useState({
    createdAt: "",
    state: "",
    quantity: "",
    unitPrice: "",
    deletedAt: "",
    updatedAt: "",
    emailAddress: "",
    userRole: "",
    banUser: "",
    fullName: "",
    attributes: "",
  });

  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    dispatch(getAllHistory());
  }, [dispatch]);

  useEffect(() => {
    async function fetchHistory() {
      const filtered = allHistory.filter((user) => {
        return (
          (filters.createdAt === "" ||
            user.createdAt.includes(filters.createdAt)) &&
          (filters.state === "" || user.state.includes(filters.state)) &&
          (filters.quantity === "" ||
            user.quantity.toString().includes(filters.quantity)) &&
          (filters.unitPrice === "" ||
            user.unitPrice.includes(filters.unitPrice)) &&
          (filters.deletedAt === "" ||
            user.deletedAt === null ||
            user.deletedAt.includes(filters.deletedAt)) &&
          (filters.updatedAt === "" ||
            user.updatedAt.includes(filters.updatedAt)) &&
          (filters.attributes === "" ||
            (user.attributes.product &&
              user.attributes.product.includes(filters.attributes)) ||
            (user.attributes.color &&
              user.attributes.color.includes(filters.attributes)) ||
            (user.attributes.fullName &&
              user.attributes.fullName.includes(filters.attributes)) ||
            (user.attributes.banUser &&
              user.attributes.banUser.includes(filters.attributes)) ||
            (user.attributes.userRole &&
              user.attributes.userRole.includes(filters.attributes)) ||
            (user.attributes.emailAddress &&
              user.attributes.emailAddress.includes(filters.attributes)) ||
            (user.attributes.size &&
              user.attributes.size.includes(filters.attributes)))
        );
      });

      const sortedHistory = filtered.slice().sort((a, b) => {
        if (sortOrder === "asc") {
          return a.createdAt.localeCompare(b.createdAt);
        } else {
          return b.createdAt.localeCompare(a.createdAt);
        }
      });

      setFilteredHistory(sortedHistory);
    }
    fetchHistory();
  }, [filters, allHistory, sortOrder]);

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const setSortOrderAsc = () => {
    setSelectedButton("asc");
    setSortOrder("asc");
  };

  const setSortOrderDesc = () => {
    setSelectedButton("desc");
    setSortOrder("desc");
  };

  return (
    <div className="history-methods-container">
      <div className="history-container">
        <div className="history-header">
          <h2 className="history-title">Historial de Compras</h2>

          <span className="history-text-underline"></span>
        </div>
      </div>
      <div className="history-container">
        <div className="filters-history">
          <input
            type="text"
            placeholder="Fecha de creación"
            value={filters.createdAt}
            onChange={(e) => handleFilterChange("createdAt", e.target.value)}
          />

          <div className="filters-history">
            <button
              onClick={setSortOrderAsc}
              className={`button ${selectedButton === "asc" ? "selected" : ""}`}
            >
              Ascendente
            </button>
            <button
              onClick={setSortOrderDesc}
              className={`button ${
                selectedButton === "desc" ? "selected" : ""
              }`}
            >
              Descendente
            </button>
          </div>
          <input
            type="text"
            placeholder="Estado de compra"
            value={filters.state}
            onChange={(e) => handleFilterChange("createdAt", e.target.value)}
          />
          <input
            type="text"
            placeholder="Cantidad"
            value={filters.quantity}
            onChange={(e) => handleFilterChange("quantity", e.target.value)}
          />
          <input
            type="text"
            placeholder="Precio"
            value={filters.unitPrice}
            onChange={(e) => handleFilterChange("unitPrice", e.target.value)}
          />
          <input
            type="text"
            placeholder="Eliminado"
            value={filters.deletedAt}
            onChange={(e) => handleFilterChange("deletedAt", e.target.value)}
          />
          <input
            type="text"
            placeholder="Actualizado"
            value={filters.updatedAt}
            onChange={(e) => handleFilterChange("updatedAt", e.target.value)}
          />
          <input
            type="text"
            placeholder="Detalle"
            value={filters.attributes}
            onChange={(e) => handleFilterChange("attributes", e.target.value)}
          />
          <input
            type="text"
            placeholder="Mail"
            value={filters.emailAddress}
            onChange={(e) => handleFilterChange("emailAddress", e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre"
            value={filters.fullName}
            onChange={(e) => handleFilterChange("fullName", e.target.value)}
          />
          <select
            value={filters.banUser}
            onChange={(e) => handleFilterChange("banUser", e.target.value)}
          >
            <option value="">Bloqueado</option>
            <option value="true">Sí</option>
            <option value="false">No</option>
          </select>
          <input
            type="text"
            placeholder="ID"
            value={filters.id}
            onChange={(e) => handleFilterChange("id", e.target.value)}
          />
          <input
            type="text"
            placeholder="Rol"
            value={filters.userRole}
            onChange={(e) => handleFilterChange("userRole", e.target.value)}
          />
        </div>

        <table className="history-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Producto</th>
              <th>Color</th>
              <th>Size</th>
              <th>Fecha de Compra</th>
              <th>Estado de compra</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Bloqueado</th>
              <th>Rol</th>
              <th>Eliminado</th>
              <th>Actualizado</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.attributes.product}</td>
                <td>{user.attributes.color}</td>
                <td>{user.attributes.size}</td>
                <td>{user.createdAt.split("T")[0]}</td>
                <td>{user.state}</td>
                <td>{user.attributes.fullName}</td>
                <td>{user.attributes.emailAddress}</td>
                <td>{user.attributes.banUser}</td>
                <td>{user.attributes.userRole}</td>
                <td>{user.deletedAt}</td>
                <td>{user.updatedAt.split("T")[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryData;
