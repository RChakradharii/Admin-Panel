import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import AllBooking from './components/AllBooking';
import AddBooking from './components/AddBooking';
import AllRooms from './components/AllRooms';
import Customers from './components/Customers';
import Settings from './components/Settings';
import Header from './components/Admin-header';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Web.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [customers, setCustomers] = useState([]); // State to hold customer data

  // Function to handle new customer addition
  const handleAddCustomer = (newCustomer) => {
    setCustomers([...customers, newCustomer]); // Add the new customer to the state
  };

  // Handle sidebar item click and page switching
  const handleSidebarClick = (page) => {
    setActivePage(page);
  };

  // Toggle Sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`app ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onSidebarClick={handleSidebarClick} onToggle={toggleSidebar} />

      {/* Main Content */}
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        {/* Header */}
        <Header />

        {/* Content */}
        <div className="content">
          {activePage === 'dashboard' && <Dashboard />}
          {activePage === 'allBookings' && <AllBooking customers={customers} />}
          {activePage === 'addBooking' && <AddBooking onAddCustomer={handleAddCustomer} />} {/* Pass the function */}
          {activePage === 'allRooms' && <AllRooms />}
          {activePage === 'customers' && <Customers customers={customers} onCustomerUpdate={setCustomers} />}
          {activePage === 'settings' && <Settings />}
        </div>
      </div>
    </div>
  );
}

export default App;