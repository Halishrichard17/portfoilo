import fiveer from '../assets/Fiverr_Logo.png'
import webgi from '../assets/WebGi_Logo.png'

let Services = () => {
  return (
    <>
      <div className="display-1">
        Services
      </div>
      <div className="row">
        <div className="col-md-6 col-sm-12 mb-4 mb-md-0">
          <div className="card">
            <a href="https://www.fiverr.com/s/jjok8ev">
              <img src={fiveer} height={300} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Web Development Service</h5>
                <h6 className="card-subtitle mb-2 text-muted "></h6>
                <p className="card-text">
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="card">
            <a href="https://webgipage.web.app/">
              <img src={webgi} height={300} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Our Startup</h5>
                <h6 className="card-subtitle mb-2 text-muted "></h6>
                <p className="card-text">
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;