import React, { useState } from 'react';
import EmployeeForm from './EmployeeForm';
import EmployeeList from './EmployeeList';

function App() {
    const [refresh, setRefresh] = useState(false);

    return (
        <div className="App">
            <h1>Employee Management System</h1>
            <EmployeeForm onAdd={() => setRefresh(!refresh)} />
            <EmployeeList refresh={refresh} />
        </div>
    );
}

export default App;
