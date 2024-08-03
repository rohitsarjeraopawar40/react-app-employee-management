"use client";
import React from 'react';
import EmployeeProvider from './componants/EmployeeContext.js';
import EmployeeForm from './componants/EmployeeForm.js';
import EmployeeList from './componants/EmployeeList.js';
import SearchEmployee from './componants/SearchEmployee.js';

const App = () => {
    return (
        <EmployeeProvider>
            <div className="App">
                <h1>Employee Management System</h1>
                <EmployeeForm />
                <EmployeeList />
                <SearchEmployee />
            </div>
        </EmployeeProvider>
    );
};

export default App;
