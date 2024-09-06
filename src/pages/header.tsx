import mylogo from '../assets/mylogo.png'

let  Header = () => {
    return (
   
    <>


      <nav className="navbar fixed top-0 navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className=''>
          
            <a className="navbar-brand display-4 p-2 "  href="https://portfolio-1517.web.app/"> <img src={mylogo} alt="Halish " height={100} width={100} /> Halish portfolio</a>
          </h1>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
<div className="col-5"></div>
          <div className="collapse navbar-collapse  ml-auto" id="navbarCollapse">
            <ul className="navbar-nav d-flex justify-content-end">
              <li className="nav-item active">
                <a className="nav-link" aria-current="page" href="Home">Home</a>
              </li> 
              <li className="nav-item ">
                <a className="nav-link" aria-current="page" href="Blog">Blog</a>
              </li> 
              <li className="nav-item ">
                <a className="nav-link" aria-current="page" href="Sevices">Services</a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" aria-current="page" href="Exp">Works & Experences</a>
              </li>     
              <li className="nav-item ">
                <a className="nav-link" aria-current="page" href="ContactPage">Contact</a>
              </li>        
            </ul>
          </div>
        </div>
      </nav>
    
    </>
)
}
export default Header;