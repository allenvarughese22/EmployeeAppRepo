import { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeServices";
import { Link } from "react-router-dom";

export const ListEmployeeComponent = () => {
  const [employees, setEmplpyees] = useState([]);
  useEffect(() => {
    EmployeeService.getAllEmployees()
      .then((response) => {
        setEmplpyees(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">

      <h2 className="text-center"> List Employee</h2>

      <Link to ="/add-employee" className="btn btn-primary mb-2"> Add Employee</Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Employee id</th>
            <th>Employee first name</th>
            <th>Employee last name</th>
            <th>Employee Email id</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.emailId}</td>
              <td>
                <Link className="btn btn-info" to={`/edit-employee/${employee.id}`}>
                Update 
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
