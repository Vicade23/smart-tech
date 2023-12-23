import React, { useState } from "react";
import './withLoader.scss'

const withLoader = (WrappedComponent) => {
    return (props) => {
        const [loading, setLoading] = useState(true);

        setTimeout(() => {
            setLoading(false)
        },2000)

        return (
            <div className="withLoader-container">
                { loading ? <p>Loading...</p> : <WrappedComponent {...props} />}
            </div>
        )
    }
} 
export default withLoader;