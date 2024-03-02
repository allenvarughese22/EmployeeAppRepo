import { useState, useEffect } from "react";
import EmployeeServices from "../services/EmployeeServices";
import { Link, useNavigate, useParams } from "react-router-dom";

function AddEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) { // Only attempt to fetch if `id` is present
      EmployeeServices.getEmployeeById(id)
        .then((response) => {
          setFirstName(response.data.firstName);
          setLastName(response.data.lastName);
          setEmailId(response.data.emailId);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]); // Ensure this runs only when `id` changes

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    const employee = { firstName, lastName, emailId };

    if(id)
    {
        EmployeeServices.updateEmployee(id,employee).then(()=>{
            navigate("/employees"); 
        }
        ).catch(error => 
            {
                console.log(error)
            })

    }
    else{
        EmployeeServices.createEmployee(employee)
      .then((response) => {
        console.log(response.data);
        navigate("/employees");
      })
      .catch((error) => console.log(error));
  }

    }

    

  const title = ()=>
  {
    if(id)
    {
        return<h2 className="text-centre">UpdateEmployee </h2>

    }
    else
    {
        return<h2 className="text-centre"> AddEmployee

        </h2>
    }
  }

  return (
    <>
      <div>
        <br />
        <div className="container">
          <div className="row">

            <div className="card col-md-6 offset-md-3">
              {
                title()
              }
              <div className="card-body">
                <form>
                  <div className="form-group mb-2">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter First name"
                      name="firstName"
                      className="form-control"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter Last name"
                      name="lastName"
                      className="form-control"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-2">
                    <label className="form-label">Email ID</label>
                    <input
                      type="email"
                      placeholder="Enter the e-mail id"
                      name="emailId"
                      className="form-control"
                      value={emailId}
                      onChange={(e) => setEmailId(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-success" onClick={(e)=>saveOrUpdateEmployee(e)}>
                    Submit
                  </button>
                  <Link to="/employees" className="btn btn-danger">
                    Cancel
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddEmployee;
