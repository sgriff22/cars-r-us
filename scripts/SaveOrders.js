import { submitOrder } from "./TransientState.js"

//function to define click event
const handleSubmitOrderClick = (clickEvent) => {
    if (clickEvent.target.id === "submit") {
        //render function that changes transient state to permanent
        submitOrder();
    }
};
//Function to create button
export const submitOrderButton = () => {
    //add event listener
    document.addEventListener("click", handleSubmitOrderClick)
    return "<button id='submit'>Submit Car Order</button>"
}
