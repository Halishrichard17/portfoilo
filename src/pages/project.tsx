import flamea from '../assets/flames.jfif';
import sttml from '../assets/stml.png';
import point from '../assets/cursor-fill.svg';

let Exp = () => {
  return (
    <>
      {/* Project Section */}
      <div className="display-4 text-center my-5">Projects</div>

      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card">
            <a href="https://richard-1517.web.app/">
              <img src={flamea} height={300} className="card-img-top" alt="Flame Calculator" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Flame Calculator</h5>
              <h6 className="card-subtitle mb-2 text-muted">Love Test Web Application</h6>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card">
            <img src={sttml} height={300} className="card-img-top" alt="Sentimental Analysis" />
            <div className="card-body">
              <h5 className="card-title">Sentimental Analysis</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Machine Learning Model Deployment with IBM Cloud Watson Studio
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card">
            <a href="https://github.com/Halishrichard17/naan-mudhalvan-python-internship">
              <img src={sttml} height={300} className="card-img-top" alt="Esp 8266 wifi repeater" />
            </a>
            <div className="card-body">
              <h5 className="card-title">ESP 8266 WiFi Repeater</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                IoT Project Extending WiFi Range
              </h6>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-12 mb-4">
          <div className="card">
            <a href="https://github.com/Halishrichard17/why-chat">
              <img src={sttml} height={300} className="card-img-top" alt="Why Chat" />
            </a>
            <div className="card-body">
              <h5 className="card-title">Why Chat</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Real-time Chat Web App Built with Angular@13 and Firebase
              </h6>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="display-4 text-center my-5">Experience</div>

      <div className="container">
        <ul className="list-group">
          <li className="list-group-item d-flex align-items-center">
            <img className="p-1 m-2 bg-primary" src={point} alt="point" width={25} />
            CAP Digisoft Solutions Inc. - Machine Learning Internship, Coimbatore
            <span className="badge bg-primary rounded-pill ms-auto">1 Month</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <img className="p-1 m-2 bg-primary" src={point} alt="point" width={25} />
            NIT Tiruchirappalli - Machine Learning Research Internship
            <span className="badge bg-primary rounded-pill ms-auto">2 Months</span>
          </li>
          <li className="list-group-item d-flex align-items-center">
            <img className="p-1 m-2 bg-primary" src={point} alt="point" width={25} />
            Web Gi - Freelance for Web Development & POS Device Services
            <span className="badge bg-primary rounded-pill ms-auto">Present</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Exp;
