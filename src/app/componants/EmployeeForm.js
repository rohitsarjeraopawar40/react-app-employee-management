// componants/EmployeeForm.js
import React, { useState, useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';

const EmployeeForm = () => {
    const { addEmployee } = useContext(EmployeeContext);
    const [employee, setEmployee] = useState({ id: '', name: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(employee);
        setEmployee({ id: '', name: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='formElements'>
                <input
                    type="text"
                    value={employee.id}
                    placeholder="ID"
                    onChange={(e) => setEmployee({ ...employee, id: e.target.value })}
                />
                <input
                    type="text"
                    value={employee.name}
                    placeholder="Name"
                    onChange={(e) => setEmployee({ ...employee, name: e.target.value })}
                />
            </div>
            <div>
                <button type="submit">Add Employee</button>
            </div>
        </form>
    );
};

export default EmployeeForm;
