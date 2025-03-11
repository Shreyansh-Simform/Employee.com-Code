import React, { useEffect, useState } from 'react';
import axios from 'axios';

function EmployeeList({ refresh }) {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/employees').then((response) => {
            setEmployees(response.data);
        });
    }, [refresh]);

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/employees/${id}`);
    };

    return (
        <div>
            <h2>Employee List</h2>
            {employees.map((emp) => (
                <div key={emp[0]}>
                    {emp[1]} - {emp[2]} - ${emp[3]}
                    <button onClick={() => handleDelete(emp[0])}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default EmployeeList;
