import React, { useState } from 'react';
import '../styles/Dashboard.css';

const Dashboard = () => {
    const [selectedLocation, setSelectedLocation] = useState("Dantewada");

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h2 className='dashboard-heading'>Dashboard Overview</h2>
                <select className="location-dropdown" value={selectedLocation} onChange={handleLocationChange}>
                    <option value="Dantewada">Dantewada</option>
                    <option value="Geedam">Geedam</option>
                    <option value="Barsoor">Barsoor</option>
                </select>
            </div>
            <div className="dashboard-stats">
                <div className="dashboard-card">
                    <h3>Total Bookings</h3>
                    <p>00</p>
                </div>
                <div className="dashboard-card">
                    <h3>Rooms Available</h3>
                    <p>00</p>
                </div>
                <div className="dashboard-card">
                    <h3>Total Rent</h3>
                    <p>/-</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
