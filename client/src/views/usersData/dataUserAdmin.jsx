import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, editUser } from "../../redux/Actions";
import { FaPencilAlt } from 'react-icons/fa';
import "./dataUserAdmin.css";

const UsersData = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const user = useSelector((state)=> state.userById)
  const dispatch = useDispatch();
  const [filteredUsers, setFilteredUsers] = useState([]);
  const superAdmin=user.user.userRole;

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
    async function fetchUsers() {
      const filtered = allUsers.filter((user) => {
        return (
          (filters.createdAt === "" ||
            user.createdAt.includes(filters.createdAt)) &&
          (filters.fullName === "" ||
            user.fullName.toLowerCase().includes(filters.fullName)) &&
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
    }

    fetchUsers();
  }, [filters, allUsers, sortOrder]);

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

  const handleEditBanUser = async (id, userRole, banUser) => {
    const newBanUser = !banUser;
    await dispatch(editUser(id, userRole, newBanUser));
    dispatch(getUsers());
  };


  const handleEditUserRole = async (id, userRole) => {
    const updatedRole = prompt(
      "Selecciona el nuevo rol: 'user', 'administrator' o 'superadministrator'",
      userRole
    );

    if (updatedRole) {
      if (
        updatedRole === "user" ||
        updatedRole === "administrator" ||
        updatedRole === "superadministrator"
      ) {
        await dispatch(editUser(id, updatedRole));
        dispatch(getUsers());
      } else {
        alert("Rol no válido. Por favor, selecciona uno de los roles permitidos.");
      }
    }
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
        <div className="filter">
          <input
            type="text"
            placeholder="Fecha DD-MM-AA "
            value={filters.createdAt}
            onChange={(e) => handleFilterChange("createdAt", e.target.value)}
          />
          <div className="filter">
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

                <td>
                  {user.banUser === true ? "SI" : "NO"}
                  {user.userRole === "superadministrator" ? null :
                  <button
                    className="edit-color"
                    onClick={() => handleEditBanUser(user.id, user.userRole, user.banUser)}
                  >
                    <FaPencilAlt />
                  </button> }
                </td>
                <td>
                  
                  {user.userRole === "administrator" ? "Administrador" : user.userRole === "user" ? "Usuario" : "Super Administrador"}
                  {superAdmin==="superadministrator"?   <button
                    className="edit-color"
                    onClick={() => handleEditUserRole(user.id, user.userRole)}
                  >
                    <FaPencilAlt />
                  </button> : null}
                
                </td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersData;
