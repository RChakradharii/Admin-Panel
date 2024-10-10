

import React from 'react';
import '../styles/AllBooking.css';

const AllBooking = ({ customers }) => {
    return (
        <div className="booking-list">
            <h2 className='all-head'>Booking List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Room Type</th>
                        <th>Status</th>
                        <th>ID Image</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.roomType}</td>
                            <td>{customer.status}</td>
                            <td>{customer.idImage ? 'Uploaded' : 'No Image'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllBooking;
