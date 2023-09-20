import React from 'react';

function Dashboard({ selectedItem }) {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Selected Item: {selectedItem}</p>
      {/* Display content based on selectedItem */}
    </div>
  );
}

export default Dashboard;