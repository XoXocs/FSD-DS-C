async function orderfood(name, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("order for the " + name + " Prepared");
        }, time);
    });
}

async function restaurent() {
    console.log("place order");

    let pizza = await orderfood("pizza", 2000);
    console.log(pizza);

    let burger = await orderfood("burger", 3000);
    console.log(burger);

    let noodles = await orderfood("noodles", 4000);
    console.log(noodles);

    console.log("all orders completed");
}

restaurent();
