/**
 * The notification component can handle displaying notifications or alerts to users,
 * such as success messages, error messages, or important updates.
 */
import React from 'react';

const Notification = ({ type, message }) => {
    return (
        <div className={`notification ${type}`}>
            {message}
            <h2>Notifications</h2>
        </div>
    );
};

export default Notification;