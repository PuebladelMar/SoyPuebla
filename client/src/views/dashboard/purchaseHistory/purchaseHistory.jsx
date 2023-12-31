import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllHistory, putHistories } from "../../../redux/Actions";
import { FaPencilAlt } from "react-icons/fa";
import "./purchasehistory.css";

const HistoryData = () => {
  const allHistory = useSelector((state) => state.allHistory);
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("");
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

  useEffect(() => {
    dispatch(getAllHistory());
  }, [dispatch]);

  useEffect(() => {
    async function fetchHistory() {
      const filtered = allHistory.filter((user) => {
        const lowerCaseFiltersState = filters.state.toLowerCase();
        const lowerCaseUserState = user.state.toLowerCase();

        return (
          (filters.createdAt === "" ||
            user.createdAt.includes(filters.createdAt)) &&
          (filters.state === "" ||
            lowerCaseUserState.includes(lowerCaseFiltersState)) &&
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
      const filteredByColor = selectedColor
        ? filtered.filter(
            (user) => user.attributes.color.toLowerCase() === selectedColor
          )
        : filtered;

      const sortedHistory = filteredByColor.slice().sort((a, b) => {
        if (sortOrder === "asc") {
          return a.createdAt.localeCompare(b.createdAt);
        } else {
          return b.createdAt.localeCompare(a.createdAt);
        }
      });

      setFilteredHistory(sortedHistory);
    }

    fetchHistory();
  }, [filters, allHistory, sortOrder, selectedColor]);

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
  };

  const handleEditState = async (id, state) => {
    const updatedState = prompt(
      "Selecciona el nuevo estado: 'approved' o 'rejected'",
      state
    );
    if (updatedState) {
      if (updatedState === "approved" || updatedState === "rejected") {
        await dispatch(putHistories(id, updatedState));
        dispatch(getAllHistory());
      } else {
        alert(
          "Rol no válido. Por favor, selecciona uno de los roles permitidos."
        );
      }
    }
  };

  return (
    <div className="historyP-methods-container">
      <div className="historyP-Admin-Box">
        <div className="historyP-container">
          <div className="historyP-header">
            <h2 className="historyP-title">Historial de Compra</h2>
          </div>
        </div>
        <div className="historyP-container">
          <div className="filter-historyP">
            <input
              type="text"
              placeholder="Fecha de creación"
              value={filters.createdAt}
              onChange={(e) => handleFilterChange("createdAt", e.target.value)}
            />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="sort-order-select"
            >
              <option value="asc">Ascendente</option>
              <option value="desc">Descendente</option>
            </select>
            <select
              value={filters.state}
              onChange={(e) => handleFilterChange("state", e.target.value)}
            >
              <option value="">Todos</option>
              <option value="approved">Aprobado</option>
              <option value="rejected">Desaprobado</option>
              <option value="pending">Pendiente</option>
            </select>
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
              placeholder="Actualizado DD-MM-AA"
              value={filters.updatedAt}
              onChange={(e) => handleFilterChange("updatedAt", e.target.value)}
            />
            <input
              type="text"
              placeholder="Producto"
              value={filters.attributes.product}
              onChange={(e) => handleFilterChange("attributes", e.target.value)}
            />
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
            >
              <option value="">Todos los colores</option>
              {Array.from(
                new Set(
                  allHistory.map((user) => user.attributes.color.toLowerCase())
                )
              ).map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
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

          <table className="historyP-table">
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
    </div>
  );
};

export default HistoryData;
