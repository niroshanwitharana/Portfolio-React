import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import uuidv4 from "uuid";
import { config } from "react-spring";
import booksearch from "../../images/book-search-desktop.png";
import bookwarm from "../../images/bookwarm-desktop.png";
import weather from "../../images/weather-desktop.png";
import employeetracker from "../../images/employee-tracker3.png";
import getgrub from "../../images/get_grub_desktop1.png";
import riskmanager from "../../images/risk-app-desktop1.png";

export default class Portfo extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  slides = [
    {
      key: uuidv4(),
      name: <h3>Name</h3>,
      content: (
        <a
          href="https://niroshanwitharana.github.io/My-Portfolio/index.html"
          style={{ width: "20%", height: "100%" }}
        >
          <img src={booksearch} alt="1" />
        </a>
      ),
    },
    {
      key: uuidv4(),
      name: <h3>Name</h3>,
      content: (
        <a
          href="https://niroshanwitharana.github.io/My-Portfolio/index.html"
          style={{ width: "20%", height: "100%" }}
        >
          <img src={bookwarm} alt="2" />
        </a>
      ),
    },
    {
      key: uuidv4(),
      name: <h3>Name</h3>,
      content: (
        <a
          href="https://niroshanwitharana.github.io/My-Portfolio/index.html"
          style={{ width: "20%", height: "100%" }}
        >
          <img src={weather} alt="3" />
        </a>
      ),
    },
    {
      key: uuidv4(),
      name: <h3>Name</h3>,
      content: (
        <a
          href="https://niroshanwitharana.github.io/My-Portfolio/index.html"
          style={{ width: "20%", height: "100%" }}
        >
          <img src={employeetracker} alt="4" />
        </a>
      ),
    },
    {
      key: uuidv4(),
      name: <h3>Name</h3>,
      content: (
        <a
          href="https://niroshanwitharana.github.io/My-Portfolio/index.html"
          style={{ width: "20%", height: "100%" }}
        >
          <img src={getgrub} alt="5" />
        </a>
      ),
    },
    {
      key: uuidv4(),
      name: <h3>Name</h3>,
      content: (
        <a
          href="https://niroshanwitharana.github.io/My-Portfolio/index.html"
          style={{ width: "20%", height: "100%" }}
        >
          <img src={riskmanager} alt="6" />
        </a>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  render() {
    return (
      <div style={{ width: "80%", height: "300px", margin: "20px 20px" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
        <div>
            <label>
    <h3>Title : {this.slides.name}</h3>
            </label>
        </div>
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div>
        <label>Go to slide: {this.slides.name}</label>
            <input name="goToSlide" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Offset Radius: </label>
            <input name="offsetRadius" onChange={this.onChangeInput} />
          </div>
          <div>
            <label>Show navigation: </label>
            <input
              type="checkbox"
              checked={this.state.showNavigation}
              name="showNavigation"
              onChange={(e) => {
                this.setState({ showNavigation: e.target.checked });
              }}
            />
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.gentle });
              }}
              disabled={this.state.config === config.gentle}
            >
              Gentle Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.slow });
              }}
              disabled={this.state.config === config.slow}
            >
              Slow Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.wobbly });
              }}
              disabled={this.state.config === config.wobbly}
            >
              Wobbly Transition
            </button>
          </div>
          <div>
            <button
              onClick={() => {
                this.setState({ config: config.stiff });
              }}
              disabled={this.state.config === config.stiff}
            >
              Stiff Transition
            </button>
          </div>
        </div>
      </div>
    );
  }
}
