import { useEffect, useState } from "react";
import "./Predictor.css";

export default function Predictor() {
  // form data
  const [formData, setFormData] = useState({
    mileage: "",
    year: "",
    kmsDriven: "",
  });
  const [predictedPrice, setPredictedPrice] = useState(false);
  const [displayError, setDisplayError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [viewPrediction, setViewPrediction] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isNaN(value)) {
      setDisplayError(true);
      setErrorMessage("Input only numeric values");
    } else {
      // Update the state, converting the values to float where appropriate
      setFormData({
        ...formData,
        [name]:
          value === ""
            ? ""
            : name === "mileage" || name === "kmsDriven"
            ? parseFloat(value)
            : parseInt(value),
      });
    }
  };

  const handleSubmit = async () => {
    if (
      (formData.mileage === "" || formData.mileage == null) &&
      (formData.year === "" || formData.year == null) &&
      (formData.kmsDriven === "" || formData.kmsDriven == null)
    ) {
      setDisplayError(true);
      setErrorMessage("Fields cannot be left empty");
    } else {
      if (formData.mileage !== "" && formData.mileage < 0) {
        setDisplayError(true);
        setErrorMessage("Invalid Value of mileage");
      } else if (
        formData.year !== "" &&
        (formData.year < 1940 || formData.year > 3000)
      ) {
        setDisplayError(true);
        setErrorMessage("Invalid year");
      } else if (formData.kmsDriven !== "" && formData.kmsDriven < 0) {
        setDisplayError(true);
        setErrorMessage("Invalid Value of Kilometers Driven");
      } else {
        const data = {
          mileage: formData.mileage,
          year: formData.year,
          km_driven: formData.kmsDriven,
        };

        try {
          const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error("Failed to fetch prediction");
          }

          const result = await response.json();

          setPredictedPrice(result.predicted_price);
          // setViewPrediction(true);
        } catch (error) {
          console.error("Error:", error);
          setDisplayError(true);
          setErrorMessage("Something went wrong. Please try again.");
        }
      }
    }
  };
  const handleReset = () => {
    setViewPrediction(false);
    setFormData({
      mileage: "",
      year: "",
      kmsDriven: "",
    });
  };

  useEffect(() => {
    if (predictedPrice && predictedPrice !== "") {
      setViewPrediction(true);
      setDisplayError(false);
      setErrorMessage("");
    }
  }, [predictedPrice]);

  return (
    <div className="Predictor">
      <div className="Predictor-card">
        <div className="Predictor-card-instructions">
          <h3>How to Use AutoValue Estimator</h3>
          <ol>
            <li>
              <span>Enter Your Car Details:</span>Fill in the required fields
              such as Mileage, Year of Manufacture, and Kilometers Driven in the
              form provided.
            </li>
            <li>
              <span>Optional Fields:</span>If you're missing any information,
              feel free to leave those fields blank.{" "}
            </li>
            <li>
              <span>Submit Your Information:</span>Once all relevant details are
              entered, click on the Submit button.
            </li>
          </ol>
        </div>
        <div className="Predictor-card-form">
          {displayError && (
            <div className="Predictor-error">*{errorMessage}</div>
          )}
          <form id="car-price-form">
            <div className="form-group">
              <label htmlFor="mileage">Mileage (kmpl):</label>
              <input
                type="number"
                id="mileage"
                name="mileage"
                placeholder="Enter car's mileage"
                value={formData.mileage}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year of Manufacture:</label>
              <input
                type="number"
                id="year"
                name="year"
                placeholder="Enter year of manufacture"
                value={formData.year}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="kms-driven">Kilometers Driven:</label>
              <input
                type="number"
                id="kmsDriven"
                name="kmsDriven"
                placeholder="Enter kilometers driven"
                value={formData.kmsDriven}
                onChange={handleChange}
              />
            </div>
            <div className="Predictor-btn">
              <button type="button" className="Button" onClick={handleSubmit}>
                Get Estimated Price
              </button>
            </div>
          </form>
        </div>
        {viewPrediction && (
          <div
            className="Predictor-results"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <div className="Predictor-center">
              <div className="Predictor-prediction">
                <h2>The predicted price of the vehicle is</h2>
              </div>
              <div className="Predictor-price">
                <h1>$ {predictedPrice} </h1>
              </div>
              <div className="Predictor-reset">
                <button
                  type="button"
                  id="reset"
                  className="Button"
                  onClick={handleReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
