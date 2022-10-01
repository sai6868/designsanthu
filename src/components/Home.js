import React from 'react';
import pic1 from '../images/homeCarosel/2.jpg'
import pic2 from '../images/homeCarosel/2.jpg'
import pic3 from '../images/homeCarosel/3.jpg'
import pic4 from '../images/homeCarosel/4.jpg'
import pic5 from '../images/homeCarosel/5.jpg'
import pic6 from '../images/homeCarosel/6.jpg'
import pic7 from '../images/homeCarosel/7.jpg'
function Home() {
    return (
        <div>
            <div className=''>
                <div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={pic2} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic3} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic4} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic5} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic6} className="d-block w-100" alt="img" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src={pic7} className="d-block w-100" alt="img" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;