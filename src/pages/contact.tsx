import linkedin from '../assets/linkedin.jfif';
import insta from '../assets/insta.jfif';
import github from '../assets/github.jfif';
import gmail from '../assets/gmail.jfif';

const ContactPage = () => {
  return (
    <>
      {/* SEO Metadata */}
      <head>
        <title>Contact Halish Richard</title>
        <meta name="description" content="Contact Halish Richard through LinkedIn, Instagram, GitHub, or email. Fill out the form to get in touch!" />
        <meta name="keywords" content="Halish Richard, Contact, LinkedIn, Instagram, GitHub, Email" />
      </head>

      {/* Main Content */}
      <div className="container mt-5">
        <h1 className="display-4 text-center">Contact Me</h1>

        <div className="container contact">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-sm-12 mb-4">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScFGRAGGPJ7mnj2M_n85pkVZjmhhMVt5j6E0-raZ4vgBrYJcw/viewform?embedded=true"
                width="100%"
                height="1000px"
                frameBorder="0"
                // marginHeight="0"
                // marginWidth="0"
                title="Contact Form"
              >
                Loading…
              </iframe>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="d-flex justify-content-center flex-wrap">
            <a href="https://www.linkedin.com/in/halish-richard-j-4295a2270/" aria-label="LinkedIn">
              <img className="m-4 logo" src={linkedin} width={50} height={50} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/halishrichard5" aria-label="Instagram">
              <img className="m-4 logo" src={insta} width={50} height={50} alt="Instagram" />
            </a>
            <a href="https://github.com/Halishrichard17/" aria-label="GitHub">
              <img className="m-4 logo" src={github} width={50} height={50} alt="GitHub" />
            </a>
            <a href="mailto:halishrichard5@gmail.com" aria-label="Email">
              <img className="m-4 logo" src={gmail} width={50} height={50} alt="Gmail" />
            </a>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="p-5"> </div>
    </>
  );
};

export default ContactPage;
