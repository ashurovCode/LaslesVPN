import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import userAvatar from "../../assets/images/Ellipse 175.svg";
import star from "../../assets/icons/ant-design_star-filled.svg";

const settings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll:1,
};

const SliderComponent = () => {
  return (
    <div className="container">
      <div className="slide-com">
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p className="slide-com-desc">
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
        <Slider {...settings}>
          <div>
            <div className="review-info">
              <div className="review-info-container">
                <div className="review-user-info">
                  <div className="review-user">
                    <img src={userAvatar} alt="img1" />
                    <h3>Viezh Robert</h3>
                    <p>Warsaw, Poland</p>
                  </div>

                  <span>
                    4.5 <img src={star} alt="" />
                  </span>
                </div>
                <div className="review-user-text">
                  “Wow... I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="review-info">
              <div className="review-info-container">
                <div className="review-user-info">
                  <div className="review-user">
                    <img src={userAvatar} alt="img1" />
                    <h3>Viezh Robert</h3>
                    <p>Warsaw, Poland</p>
                  </div>

                  <span>
                    4.5 <img src={star} alt="" />
                  </span>
                </div>
                <div className="review-user-text">
                  “Wow... I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="review-info">
              <div className="review-info-container">
                <div className="review-user-info">
                  <div className="review-user">
                    <img src={userAvatar} alt="img1" />
                    <h3>Viezh Robert</h3>
                    <p>Warsaw, Poland</p>
                  </div>

                  <span>
                    4.5 <img src={star} alt="" />
                  </span>
                </div>
                <div className="review-user-text">
                  “Wow... I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
