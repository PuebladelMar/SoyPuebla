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
  });

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    // Aplicar filtros
    const filtered = allUsers.filter((user) => {
      return (
        (filters.createdAt === "" ||
          user.createdAt.includes(filters.createdAt)) &&
        (filters.banUser === "" ||
          user.banUser.toString() === filters.banUser) &&
        (filters.id === "" || user.id.includes(filters.id)) &&
        (filters.userRole === "" || user.userRole.includes(filters.userRole))
      );
    });
    setFilteredUsers(filtered);
  }, [filters, allUsers]);

  const handleFilterChange = (field, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [field]: value,
    }));
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
      </div>
      <div className="userAdmin-container">
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
            {allUsers.map((user) => (
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
