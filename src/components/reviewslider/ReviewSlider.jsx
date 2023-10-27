import React, { Component } from "react";
import "./ReviewSlider.css"; 
import viezhImg from "../../assets/images/autor1.svg";
import yessicaImg from "../../assets/images/autor2.svg";
import kimImg from "../../assets/images/autor3.svg";
import star from "../../assets/icons/ant-design_star-filled.svg";

class ReviewSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      reviews: [
        {
          author: "Viezh Robert",
          text: "Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best",
          userImg: viezhImg,
          location: "Warsaw, Poland",
          star: "4.5",
          starIcon: star,
        },
        {
          author: "Yessica Christy",
          text: "I like it because I like to travel far and still can connect with high speed.",
          userImg: yessicaImg,
          location: "Shanxi, China",
          star: "4.2",
          starIcon: star,
        },
        {
          author: "Kim Young Jou",
          text: "This is very unusual for my business that currently requires a virtual private network that has high security.",
          userImg: kimImg,
          location: "Seoul, South Korea",
          star: "5.0",
          starIcon: star,
        },
      ],
    };
  }

  nextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.state.reviews.length,
    }));
  };

  prevSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        (prevState.currentIndex - 1 + this.state.reviews.length) %
        this.state.reviews.length,
    }));
  };

  render() {
    const currentReview = this.state.reviews[this.state.currentIndex];

    return (
      <div className="container">
        <div className="review-slider-title">
          <h1>Trusted by Thousands of Happy Customer</h1>
          <p>
            These are the stories of our customers who have joined us with great
            pleasure when using this crazy feature.
          </p>
        </div>
        <div className="review-slider review-container">
          <button className="prev" onClick={this.prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path d="M23.75 14.0029H8.925L13.4625 8.55291C13.6747 8.29764 13.7768 7.96854 13.7463 7.638C13.7158 7.30747 13.5553 7.00258 13.3 6.79041C13.0447 6.57823 12.7156 6.47616 12.3851 6.50663C12.0546 6.53711 11.7497 6.69764 11.5375 6.95291L5.2875 14.4529C5.24545 14.5126 5.20785 14.5752 5.175 14.6404C5.175 14.7029 5.175 14.7404 5.0875 14.8029C5.03084 14.9462 5.00118 15.0988 5 15.2529C5.00118 15.407 5.03084 15.5596 5.0875 15.7029C5.0875 15.7654 5.0875 15.8029 5.175 15.8654C5.20785 15.9306 5.24545 15.9933 5.2875 16.0529L11.5375 23.5529C11.655 23.694 11.8022 23.8075 11.9686 23.8853C12.1349 23.963 12.3164 24.0032 12.5 24.0029C12.7921 24.0035 13.0751 23.9018 13.3 23.7154C13.4266 23.6105 13.5312 23.4816 13.6079 23.3362C13.6846 23.1907 13.7318 23.0316 13.7469 22.8679C13.762 22.7042 13.7447 22.5391 13.6959 22.3821C13.6471 22.2251 13.5678 22.0792 13.4625 21.9529L8.925 16.5029H23.75C24.0815 16.5029 24.3995 16.3712 24.6339 16.1368C24.8683 15.9024 25 15.5844 25 15.2529C25 14.9214 24.8683 14.6034 24.6339 14.369C24.3995 14.1346 24.0815 14.0029 23.75 14.0029Z" />
            </svg>
          </button>
          <div className="review">
            <img className="author-img" src={currentReview.userImg} alt="" />
            <p className="author-review">{currentReview.text}</p>
            <p className="author-name">- {currentReview.author} -</p>
            <p className="author-location">{currentReview.location}</p>
            <div className="start-content">
              <p>{currentReview.star}</p>
              <img src={currentReview.starIcon} alt="star"/>
            </div>
          </div>
          <button className="next" onClick={this.nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="31"
              viewBox="0 0 30 31"
              fill="none"
            >
              <path d="M6.25 16.5031L21.075 16.5031L16.5375 21.9531C16.3253 22.2083 16.2232 22.5374 16.2537 22.868C16.2842 23.1985 16.4447 23.5034 16.7 23.7156C16.9553 23.9277 17.2844 24.0298 17.6149 23.9993C17.9454 23.9689 18.2503 23.8083 18.4625 23.5531L24.7125 16.0531C24.7545 15.9934 24.7922 15.9307 24.825 15.8656C24.825 15.8031 24.825 15.7656 24.9125 15.7031C24.9692 15.5597 24.9988 15.4072 25 15.2531C24.9988 15.099 24.9692 14.9464 24.9125 14.8031C24.9125 14.7406 24.9125 14.7031 24.825 14.6406C24.7922 14.5754 24.7545 14.5127 24.7125 14.4531L18.4625 6.95307C18.345 6.81197 18.1978 6.6985 18.0314 6.62072C17.8651 6.54294 17.6836 6.50278 17.5 6.50307C17.2079 6.5025 16.9249 6.60422 16.7 6.79057C16.5734 6.89551 16.4688 7.02439 16.3921 7.16982C16.3154 7.31525 16.2682 7.47439 16.2531 7.63811C16.238 7.80183 16.2553 7.96692 16.3041 8.12392C16.3529 8.28093 16.4322 8.42676 16.5375 8.55307L21.075 14.0031L6.25 14.0031C5.91848 14.0031 5.60054 14.1348 5.36612 14.3692C5.1317 14.6036 5 14.9216 5 15.2531C5 15.5846 5.1317 15.9025 5.36612 16.137C5.60054 16.3714 5.91848 16.5031 6.25 16.5031Z" />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}

export default ReviewSlider;
