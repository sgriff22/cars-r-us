import { setTechnologyChoice } from "./TransientState.js";

const handleTechnologyChoice = (event) => {
  if (event.target.id === "technology") {
    setTechnologyChoice(parseInt(event.target.value))
  }
}


export const technologyOptions = async () => {
  const response = await fetch("http://localhost:8088/Technologies");
  const technologies = await response.json();

  document.addEventListener("change", handleTechnologyChoice);

  let optionsHTML = `<h2>Technologies</h2>
                     <select id="technology">
                        <option value="0">Select a technology package</option>`;
                        
  const arrayOfOptions = technologies.map((technology) => {
    return `<option value="${technology.id}">${technology.package}</option>`;
  });

  optionsHTML += arrayOfOptions.join("");
  optionsHTML += "</select>";

  return optionsHTML;
};






