import React, { use, useContext } from "react";

function NotFound() {

    const theme = useContext(themeContext);
    return (
        <div>
            <h1>404 - Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
}

export default NotFound;
