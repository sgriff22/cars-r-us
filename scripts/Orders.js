export const orderList = async () => {
    //Get orders from api in expanded form
    const response = await fetch("http://localhost:8088/orders?_expand=paint&_expand=interior&_expand=technology&_expand=wheels");
    const orders = await response.json();

    let ordersHTML = `<h2>Custom Car Orders</h2>`
    //Copy orders and create HTML to list
    const ordersListArrray = orders.map((order) => {
        const orderPrice = order.paint.price + order.interior.price + order.technology.price + order.wheels.price;
        const priceAsCurrency = orderPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
        });
        return `<section class="order">${order.paint.color} car with ${order.wheels.option} wheels, ${order.interior.material} interior, and the ${order.technology.package} for a total cost of ${priceAsCurrency}</section>`
    })

    return ordersHTML += ordersListArrray.join("")
}