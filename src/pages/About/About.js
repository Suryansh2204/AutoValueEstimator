import React from "react";
import "./About.css";
export default function About() {
  return (
    <div className="About">
      <div className="About-about">
        <div className="About-heading">
          <h1>About AutoValue Estimator</h1>
        </div>
        <div className="About-contents">
          <div className="About-contents-description">
            Welcome to AutoValue Estimator, your go-to tool for accurate and
            data-driven car price predictions. Whether you're looking to sell
            your car, buy a used one, or simply explore the current market,
            AutoValue Estimator provides you with the insights you need to make
            informed decisions.
          </div>
          <div className="About-content">
            <h2>Our Mission</h2>
            <p>
              In the ever-changing automotive market, understanding the value of
              a car can be challenging. Our mission is to simplify this process
              by leveraging advanced machine learning algorithms to predict car
              prices with precision and reliability. We aim to empower users
              with the knowledge they need to negotiate better deals, assess
              fair market values, and stay ahead in the automotive marketplace.
              How It Works AutoValue Estimator uses a sophisticated model
              trained on a vast dataset of car sales, considering key factors
              such as mileage, year of manufacture, and kilometers driven. By
              analyzing these variables, our model can provide a tailored price
              estimate for any car, giving you a competitive edge in your
              transactions.
            </p>
          </div>

          <div className="About-content">
            <h2>Why Choose Us?</h2>
            <ol>
              <li>
                <span>Data-Driven Accuracy:</span> Our predictions are based on
                real-world data and refined algorithms, ensuring that the
                estimates are as accurate as possible.
              </li>
              <li>
                <span>User-Friendly Interface:</span> We've designed our
                platform to be intuitive and easy to use, allowing you to get
                quick and reliable estimates with minimal effort.
              </li>
              <li>
                <span>Continuous Improvement:</span> Our team is dedicated to
                regularly updating our model with new data and features,
                ensuring that you always have the most relevant information at
                your fingertips.
              </li>
            </ol>
          </div>
          <div>
            <p>
              Thank you for choosing AutoValue Estimator. We are committed to
              providing you with a powerful tool that brings transparency and
              clarity to car pricing, making your buying or selling experience
              smoother and more confident.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
