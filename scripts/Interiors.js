import { setInteriorChoice } from "./TransientState.js";

const handleInteriorChoice = (event) => {
  if (event.target.id === "interior") {
    setInteriorChoice(parseInt(event.target.value))

  }
}

export const interiorOptions = async () => {
  const response = await fetch("http://localhost:8088/Interiors");
  const interiors = await response.json();

  document.addEventListener("change", handleInteriorChoice)
  
  let optionsHTML = `<h2>Interior</h2>
                     <select id="interior">
                        <option value="0">Select an interior material</option>`

  const arrayOfOptions = interiors.map((interior) => {
    return `<option value="${interior.id}">${interior.material}</option>`;
  });
  
  optionsHTML += arrayOfOptions.join("");
  optionsHTML += "</select>";

  return optionsHTML;
};








                
                    
            