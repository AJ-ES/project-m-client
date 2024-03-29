import React from "react";
import { useAdminAuth } from "./AdminAuth"; // Importing the custom hook for Admin authentication
import { Navigate } from "react-router-dom"; // Importing Navigate component for redirection

// Functional component for requiring Admin authentication
const ReqAdminAuth = (props) => {
    const auth = useAdminAuth(); // Using the custom hook to get Admin authentication status
    if (!auth.admin) { // If Admin authentication fails
        return <Navigate to="/" />; // Redirect to the home page
    }
    // If Admin authentication succeeds, render the children components
    return props.children;
}

export default ReqAdminAuth; // Exporting the component for use in other parts of the application
