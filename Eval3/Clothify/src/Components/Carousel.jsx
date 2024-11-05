import React from 'react';

function Carousel() {
  return (
    <>
     <div id="carouselExample" className="carousel slide" data-bs-theme="dark">
      <div className="carousel-inner mx-auto">
        <div className="carousel-item active">
          <img src="./images/review_1.jpg" className="d-block img-fluid mx-auto" alt="Review 1" width="1000" />
        </div>
        <div className="carousel-item">
            <img src="./images/review_2.png" class="d-block img-fluid mx-auto" alt="..." width="800"/>
          </div>
          <div className="carousel-item">
            <img src="./images/review_3.png" class="d-block img-fluid mx-auto" alt="..." width="800"/>
          </div>
          <div className="carousel-item">
            <img src="./images/review_4.png" class="d-block img-fluid mx-auto" alt="..." width="800"/>
          </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
}

export default Carousel;
