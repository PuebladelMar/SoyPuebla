import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/Actions";
import "./dataUserAdmin.css";

const UsersData = () => {
  const allUsers = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const obj = [
    {
      banUser: false,
      clerkId: "user_2U4GrWVlUALWFyrMmfA6ZrR0KPS",
      createdAt: "2023-08-17T12:52:35.060Z",
      deletedAt: null,
      emailAddress: "agustinnazer5@gmail.com",
      fullName: "Agus",
      id: "ef2b2732-2e40-4fbf-a840-f38296a22649",
      updatedAt: "2023-08-17T12:52:35.060Z",
      userRole: "user",
    },
  ];

  useEffect(() => {
    dispatch(getUsers());
    console.log(allUsers);
  }, [dispatch]);

  return (
    <div className="userAdmin-methods-container">
      <div className="userAdmin-container">
        <div className="userAdmin-header">
          <h2 className="userAdmin-title">Información Usuarios</h2>
          <span className="userAdmin-text-underline"></span>
        </div>
      </div>
      <div />
      <div></div>
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
