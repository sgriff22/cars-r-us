//Define the initial state needed for the application
const transientState = {
    paintId: 0,
    interiorId: 0,
    technologyId: 0, 
    wheelsId: 0
}

//write setter functions for each state property
export const setPaintChoice = (userChoice) => {
    transientState.paintId = userChoice;
    console.log(transientState)
}

export const setInteriorChoice = (userChoice) => {
    transientState.interiorId = userChoice;
    console.log(transientState);
};

export const setTechnologyChoice = (userChoice) => {
   transientState.technologyId = userChoice;
   console.log(transientState);
};

export const setWheelsChoice = (userChoice) => {
   transientState.wheelsId = userChoice;
   console.log(transientState);
};

//Function to convert transient state to permanent state
export const submitOrder = async () => {
  
    // Ensure that you have properly defined the POST options for the fetch.
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(transientState)
    };

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions);

    //Create a custom event so that the DOM is updated with the new order submitted
    const customEvent = new CustomEvent("newOrderPlaced")
    document.dispatchEvent(customEvent)
};
