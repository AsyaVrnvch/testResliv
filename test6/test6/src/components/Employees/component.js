import { useEffect, useState } from "react";

function Employees({ loadData, employees, isLoad, employeeDelete, addEmployee }) {

  const [state, setState] = useState({id:0, firstName:'', lastName:''})

  useEffect(() => {
    loadData();
  }, [])

  const handleChange = (event) =>{
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  function employeeAdd(){
    setState({
      ...state, 
      id:Date.now()
    })
    addEmployee(state);
  }

  if(!isLoad){
    return(
      <h4>Загрузка...</h4>
    )
  }

    return (
      <div className='container col-10 mt-4 border border-info px-0'>
        <div className='container-fluid px-0 mx-0 mt-2'>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">Main</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link active" href="/employees">Employees</a>
              </li>
          </ul>
        </div>

        <div>
          <span className='ml-2'>FirstName:</span>
          <input type='text' required
            className="form-control mb-2 col-4 ml-2"
            name='firstName'
            value={state.firstname}
            onChange={handleChange}/>
          <span className='ml-2'>LastName:</span>
          <input type='text' required
            className="form-control mb-2 col-4 ml-2"
            name='lastName'
            value={state.lastname}
            onChange={handleChange}/>
          <button type='button'
              onClick={() => employeeAdd(state)}
              className='btn btn-primary mb-2 ml-2'>Add
          </button>

          <table className='table table-hover table-sm'>
            <thead>
              <th>firstname</th>
              <th>lastname</th>
              <th>#</th>
            </thead>
            <tbody>
              {employees.map((employee)=>
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td><span className='text-danger' onClick={()=>{employeeDelete(employee.id)}} style={{ cursor: 'pointer' }}>Delete</span></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

      </div>
    );
  }
  
  export default Employees;