import React from "react";
import "./bmi.css";
import { useState } from "react";

function BMI() {
    function calculateBMI(event) {
        event.preventDefault();
        const weight = document.getElementById("weight").value;
        const height = document.getElementById("height").value;
        const bmi = weight / (height * height);
        document.getElementById("result").innerText = "Your BMI is " + bmi.toFixed(4);
    }

  return (
    <div className="bmi-calculator">
      <h1>BMI Calculator</h1>
      <form id="bmi-form" onSubmit={calculateBMI}>
        <label htmlFor="weight">Weight (kg):</label>
        <input type="number" id="weight" required/>
        <br/>
        <label htmlFor="height">Height (m):</label>
        <input type="number" id="height" step="0.01" required/>
        <br/>
        <button type="submit">Calculate BMI</button>
    </form>
    <h2 id="result"></h2>
    </div>
  );
}

export default BMI;
