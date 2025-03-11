import React, { useState } from 'react';
import axios from 'axios';

function EmployeeForm({ onAdd }) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [salary, setSalary] = useState('');

    const handleSubmit = async () => {
        await axios.post('http://localhost:5000/employees', { name, position, salary });
        onAdd();
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
            <input placeholder="Position" onChange={(e) => setPosition(e.target.value)} />
            <input placeholder="Salary" onChange={(e) => setSalary(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>
        </div>
    );
}

export default EmployeeForm;
