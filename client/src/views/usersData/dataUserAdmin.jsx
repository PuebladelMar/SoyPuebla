import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/Actions";
import "./dataUserAdmin.css";

const UsersData = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [filters, setFilters] = useState({
    createdAt: "",
    banUser: "",
    id: "",
    userRole: "",
    fullName: "",
  });
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedButton, setSelectedButton] = useState("");

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    const filtered = allUsers.filter((user) => {
      return (
        (filters.createdAt === "" ||
          user.createdAt.includes(filters.createdAt)) &&
        (filters.fullName === "" || user.fullName.includes(filters.fullName)) &&
        (filters.banUser === "" ||
          user.banUser.toString() === filters.banUser) &&
        (filters.id === "" || user.id.includes(filters.id)) &&
        (filters.userRole === "" || user.userRole.includes(filters.userRole))
      );
    });

    const sortedUsers = filtered.slice().sort((a, b) => {
      if (sortOrder === "asc") {
        return a.createdAt.localeCompare(b.createdAt);
      } else {
        return b.createdAt.localeCompare(a.createdAt);
      }
    });

    setFilteredUsers(sortedUsers);
  }, [filters, allUsers, sortOrder]);

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
    <div className="userAdmin-methods-container">
      <div className="userAdmin-container">
        <div className="userAdmin-header">
          <h2 className="userAdmin-title">Información Usuarios</h2>
          <span className="userAdmin-text-underline"></span>
        </div>
      </div>
      <div className="userAdmin-container">
        <div className="filters">
          <input
            type="text"
            placeholder="Fecha de creación"
            value={filters.createdAt}
            onChange={(e) => handleFilterChange("createdAt", e.target.value)}
          />
          <div className="filters">
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

        <table className="userAdmin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Bloqueado</th>
              <th>Rol</th>
              <th>Creado</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.emailAddress}</td>
                <td>{user.banUser}</td>
                <td>{user.userRole}</td>
                <td>{user.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersData;
