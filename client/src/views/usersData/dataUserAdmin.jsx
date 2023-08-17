import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../../redux/Actions";

const UsersData = () => {
    const allUsers = useSelector((state) => state.allUsers);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
        console.log(allUsers);
      }, [dispatch]);

    return(
        <>
        </>
    )
}

export default UsersData;