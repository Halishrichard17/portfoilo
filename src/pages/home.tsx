import img1 from '../../src/assets/machine-learning1.png';

let Home = () => {
  return (
    <div className="container">
      <div className="m-5"></div>
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="display-1">
            Halish Richard J
            <div>
              {/* <a className='bg-primary text-light resume' href="{resume}">Resume </a> */}
            </div>
          </div>
          <h3>Machine mentor</h3>
          <p>
            As a Machine Mentor, I have a strong background in guiding students and professionals through the intricacies of machine learning and artificial intelligence. With hands-on experience in various machine learning frameworks and tools, I provide tailored mentorship to help learners understand complex concepts and apply them in real-world scenarios. My approach is focused on fostering a deep understanding of the subject matter, encouraging curiosity, and developing problem-solving skills. Whether it's through one-on-one sessions or group workshops, I aim to inspire and equip individuals with the knowledge and confidence to excel in the ever-evolving field of machine learning.
          </p>
        </div>
        <div className="col-md-4 col-sm-12">
          <img src={img1} width={300} alt="ml" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Home;