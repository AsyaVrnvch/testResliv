

function Main() {
    return (
      <div className='container col-10 mt-4 text-center border border-info px-0 pb-4'>
        <div className='container-fluid px-0 mx-0 mt-2'>
            <ul className="nav nav-tabs">
              <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Main</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="/employees">Employees</a>
              </li>
          </ul>
        </div>

        <div className='container col-9 mt-4 text-center'>
          <h3>Главная страница</h3>
        </div>

      </div>
    );
  }
  
  export default Main;