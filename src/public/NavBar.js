import {Link} from "react-router-dom"
function NavBar() {
    return (
      <>
        <nav id="my-nav-color" className="navbar navbar-expand-lg navbar-success px-4">

          <Link className="navbar-brand" to={"/"}><span className="my-nav-font">BadBank</span></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to={"/CreateAccount"} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Create an account and start saving"> <span className="my-nav-font">CreateAccount</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Login"} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Log in to your account"><span className="my-nav-font">Login</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Deposit"} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Deposit money to your account"><span className="my-nav-font">Deposit</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Withdraw"} data-bs-toggle="tooltip" data-bs-placement="bottom" title="Withdraw money from your account"><span className="my-nav-font">Withdraw</span></Link>
              </li>

          
      
              <li className="nav-item">
                <Link className="nav-link" to={"/AllData"} data-bs-toggle="tooltip" data-bs-placement="bottom" title="View all your account data"><span className="my-nav-font">AllData</span></Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
  }

  export default NavBar