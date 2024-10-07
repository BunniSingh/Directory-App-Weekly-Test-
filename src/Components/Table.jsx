import React from 'react';
import { useState, useEffect } from 'react';
import '../App.css';
import { MdDeleteForever } from "react-icons/md";

const Table = ({users , setUsers}) => {

    const removeUserDetails = (e, adhar) => {
        e.preventDefault();
        const filterUser = users.filter((user) => user.userAdhar !== adhar);
        localStorage.setItem('userData', JSON.stringify(filterUser));
        setUsers(filterUser);
    };

    console.log('Table page is rendered');

    return (
        <>
                <div className="table-container">
                <h1>Welcome to the Directory App</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>DOB</th>
                                <th>Adhar No.</th>
                                <th>Mobile No.</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.length > 0 ? (
                                    users.map((user, idx) => (
                                        <tr key={`userId_${idx}`}>
                                            <td>{user.userName}</td>
                                            <td>{user.userDob}</td>
                                            <td>{user.userMobile}</td>
                                            <td>{user.userAdhar}</td>
                                            <td>{user.userAge}</td>
                                            <td>
                                                <MdDeleteForever
                                                    onClick={(e) => removeUserDetails(e, user.userAdhar)}
                                                    style={{ cursor: 'pointer', color: 'red' }}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="6">No users found.</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
        </>
    );
};

export default Table;
