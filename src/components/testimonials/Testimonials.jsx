import "./testimonials.scss";

const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="contianer">
        <div className="card">
          <div className="top">
            <img src="assets/right-arrow.png" className="left" alt="left" />
            <img
              src="https://i.pinimg.com/originals/68/a6/7c/68a67c62366eaff0fa686f81d18ed4ea.png"
              alt=""
            />
            <img src="assets/youtube.png" alt="" />
          </div>
          <div className="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum in
            rem eum odio obcaecati? Facilis, soluta? Deleniti, exercitationem
            autem? Voluptas, est culpa. Necessitatibus aperiam eius nisi quae,
            placeat maiores quidem.
          </div>

          <div className="bottom">
            <h3>Alex</h3>
            <h4>CEO of AI</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
