import { setPaintChoice } from "./TransientState.js";

const handlePaintChoice = (event) => {
    if (event.target.id === "paint") {
        setPaintChoice(parseInt(event.target.value))
    }
}


export const paintOptions = async () => {
    const response = await fetch("http://localhost:8088/Paints");
    const paints = await response.json(); 

    document.addEventListener("change", handlePaintChoice)

    let optionsHTML = `<h2>Paints</h2>
                       <select id="paint">
                          <option value="0">Select a paint color</option>`

   const arrayOfOptions = paints.map((paint) => {
        return `<option value="${paint.id}">${paint.color}</option>`;
    });

    optionsHTML += arrayOfOptions.join("");
    optionsHTML += "</select>";

    return optionsHTML;
}




  

  

 

 
