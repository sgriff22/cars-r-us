import { setWheelsChoice } from "./TransientState.js";

const handleWheelsChoice = (event) => {
  if (event.target.id === "wheels") {
    setWheelsChoice(parseInt(event.target.value))
  }
}

export const wheelOptions = async () => {
  const response = await fetch("http://localhost:8088/Wheels");
  const wheels = await response.json();

  document.addEventListener("change", handleWheelsChoice);

  let optionsHTML = `<h2>Wheels</h2>
                     <select id="wheels">
                        <option value="0">Select a wheel style</option>`
  
  const arrayOfOptions = wheels.map((wheel) => {
    return `<option value="${wheel.id}">${wheel.option}</option>`;
  });

  optionsHTML += arrayOfOptions.join("");
  optionsHTML += "</select>";

  return optionsHTML;
};