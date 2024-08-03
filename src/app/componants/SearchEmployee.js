// componants/SearchEmployee.js
import React, { useState, useContext } from 'react';
import { EmployeeContext } from './EmployeeContext';

const SearchEmployee = () => {
  const { employees } = useContext(EmployeeContext);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Search Employee</h2>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search by name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredEmployees.map(emp => (
          <li key={emp.id}>
            {emp.id} - {emp.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchEmployee;
