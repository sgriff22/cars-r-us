import { interiorOptions } from "./Interiors.js";
import { paintOptions } from "./Paints.js"
import { technologyOptions } from "./Technologies.js";
import { wheelOptions } from "./Wheels.js";
import { submitOrderButton } from "./SaveOrders.js";
import { orderList } from "./Orders.js";


const container = document.querySelector("#container")

const render = async () => {
    const paintOptionsHTML = await paintOptions()
    const interiorOptionsHTML = await interiorOptions()
    const technologyOptionsHTML = await technologyOptions()
    const wheelOptionsHTML = await wheelOptions()
    const orderButtonHTML = submitOrderButton()
    const ordersListHTML = await orderList()

    const composedHTML = `
        <h1>Cars 'R Us: Personal Car Builder</h1>

        <article class="options">
            <section class="paintOptions">${paintOptionsHTML}</section>

            <section class="interiorOptions">${interiorOptionsHTML}</section>

            <section class="wheelOptions">${wheelOptionsHTML}</section>

            <section class="techOptions">${technologyOptionsHTML}</section>
        </article>

        <article class="orderButton">${orderButtonHTML}</article>

        <article class="customOrders">${ordersListHTML}</article>
    `;

    container.innerHTML = composedHTML;
}

render()

document.addEventListener("newOrderPlaced", (event) => {
  console.log("State of data has changed. Regenerating HTML...");
  render();
});