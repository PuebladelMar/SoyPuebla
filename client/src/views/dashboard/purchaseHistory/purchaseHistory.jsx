import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllHistory, putHistories } from "../../../redux/Actions";
import { FaPencilAlt } from 'react-icons/fa';

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
          (filters.state === "" ||
            (user.state).toLowerCase().includes((filters.state).toLocaleLowerCase())) &&
          (filters.quantity === "" ||
            user.quantity.toString().includes(filters.quantity)) &&
          (filters.unitPrice === "" ||
            user.unitPrice.includes(filters.unitPrice)) &&
          (filters.deletedAt === "" ||
            user.deletedAt === null ||
            user.deletedAt.toLowerCase().includes(filters.deletedAt)) &&
          (filters.updatedAt === "" ||
            user.updatedAt.includes(filters.updatedAt)) &&
          (filters.attributes === "" ||
            (user.attributes.product &&
              user.attributes.product
                .toLowerCase()
                .includes(filters.attributes)) ||
            (user.attributes.color &&
              user.attributes.color
                .toLowerCase()
                .includes(filters.attributes)) ||
            (user.attributes.fullName &&
              user.attributes.fullName
                .toLowerCase()
                .includes(filters.attributes)) ||
            (user.attributes.banUser &&
              user.attributes.banUser
                .toLowerCase()
                .includes(filters.attributes)) ||
            (user.attributes.userRole &&
              user.attributes.userRole
                .toLowerCase()
                .includes(filters.attributes)) ||
            (user.attributes.emailAddress &&
              user.attributes.emailAddress
                .toLowerCase()
                .includes(filters.attributes)) ||
            (user.attributes.size &&
              user.attributes.size.toLowerCase().includes(filters.attributes)))
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
      [field]: value.toLowerCase(),
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

  const handleEditState = async (id, state) => {
    const updatedState = prompt(
      "Selecciona el nuevo estado: 'approved' o 'rejected'",
      state
    );
    if (updatedState) {
      if (
        updatedState === 'approved' ||
        updatedState === 'rejected') {
        await dispatch(putHistories(id, updatedState));
        dispatch(getAllHistory());
      } else {
        alert("Rol no válido. Por favor, selecciona uno de los roles permitidos.");
      }
    }
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
              className={`button ${selectedButton === "desc" ? "selected" : ""
                }`}
            >
              Descendente
            </button>
          </div>
          <input
            type="text"
            placeholder="Estado de compra"
            value={filters.state}
            onChange={(e) => handleFilterChange("state", e.target.value)}
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
            placeholder="Producto"
            value={filters.attributes.product}
            onChange={(e) => handleFilterChange("attributes", e.target.value)}
          />
          <input
            type="text"
            placeholder="Color"
            value={filters.attributes.color}
            onChange={(e) => handleFilterChange("attributes", e.target.value)}
          />{" "}
          <input
            type="text"
            placeholder="Talla"
            value={filters.attributes.size}
            onChange={(e) => handleFilterChange("attributes", e.target.value)}
          />
          <input
            type="text"
            placeholder="Nombre"
            value={filters.attributes.fullName}
            onChange={(e) => handleFilterChange("attributes", e.target.value)}
          />

          <input
            type="text"
            placeholder="E-mail"
            value={filters.attributes.emailAddress}
            onChange={(e) => handleFilterChange("attributes", e.target.value)}
          />
        </div>

        <table className="history-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Fecha de Compra</th>
              <th>Estado de compra</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th>Actualizado</th>
              <th>Producto</th>
              <th>Color</th>
              <th>Talla</th>
              <th>Nombre</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredHistory.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.createdAt.split("T")[0]}</td>
                <td>
                  {user.state === "approved"
                    ? "Aprobado"
                    : user.state === "rejected"
                      ? "Desaprobado"
                      : user.state === "pending"
                        ? "Pendiente"
                        : ""}
                  {user.state === "pending" && (
                    <button
                      className="edit-color"
                      onClick={() => handleEditState(user.id, user.state)}
                    >
                      <FaPencilAlt />
                    </button>
                  )}
                </td>
                <td>{user.quantity}</td>
                <td>{user.unitPrice}</td>
                <td>{user.updatedAt.split("T")[0]}</td>
                <td>{user.attributes.product}</td>
                <td>{user.attributes.color}</td>
                <td>{user.attributes.size}</td>
                <td>{user.attributes.fullName}</td>
                <td>{user.attributes.emailAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoryData;
