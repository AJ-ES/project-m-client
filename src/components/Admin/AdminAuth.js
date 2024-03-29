// AdminAuth.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

// Creating a context for Admin authentication
const AdminAuthContext = React.createContext(null);

// Provider component for Admin authentication
const AdminAuthProvider = (props) => {
    // State for storing admin authentication info
    const [admin, setAdmin] = useState(() => {
        // Try to get admin info from localStorage on component mount
        const storedAdmin = localStorage.getItem('admin');
        return storedAdmin ? JSON.parse(storedAdmin) : null;
    });

    // State for storing admin list
    const [adminlist, setAdminlist] = useState([]);

    // API endpoint
    const API = process.env.REACT_APP_API;

    // Function to save admin info to localStorage
    const saveAdminToLocalStorage = (admin) => {
        localStorage.setItem('admin', JSON.stringify(admin));
        // console.log(admin);
    };

    // Function for admin login
    const adminlogin = (_id, adminname, adminemail, adminpassword) => {
        const newAdmin = { _id, adminname, adminemail, adminpassword };
        setAdmin(newAdmin);
        saveAdminToLocalStorage(newAdmin);
    };

    // Fetching admin list from API on component mount
    useEffect(() => {
        axios
            .get(`${API}admin`)
            .then((res) => {
                setAdminlist(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [API]);

    // Function for admin signup
    const adminsignup = (adminname, adminemail, adminpassword) => {
        axios
            .post(`${API}/admin`, {
                adminname: adminname,
                adminemail: adminemail,
                adminpassword: adminpassword,
            })
            .then((res) => {
                // console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    // Function for admin logout
    const adminlogout = () => {
        setAdmin(null);
        // Remove admin info from localStorage on logout
        localStorage.removeItem('admin');
    };

    return (
        // Providing AdminAuthContext to children components
        <AdminAuthContext.Provider
            value={{ admin, adminsignup, adminlist, adminlogin, adminlogout }}
        >
            {props.children}
        </AdminAuthContext.Provider>
    );
};

// Custom hook for using Admin authentication context
const useAdminAuth = () => {
    return useContext(AdminAuthContext);
};

export { AdminAuthProvider, useAdminAuth };
