async function orderfood(name, time) {
    return new Promise((resolve, reject) => {
        if (name == "burger") {
            reject("burger not available");
        }
        setTimeout(() => {
            resolve("order for the " + name + " Prepared");
        }, time);
    });
}

async function restaurent() {
    console.log("place order");
    try {
        let pizza = await orderfood("pizza", 2000);
        console.log(pizza);
        try {
            let burger = await orderfood("burger", 3000); 
            console.log(burger);
        } catch(error) {
            console.log(error);
        }
       
        let noodles = await orderfood("noodles", 4000);
        console.log(noodles);
        console.log("all orders completed");
    } catch (error) {
        console.log("Error:", error); 
    }
}

restaurent();
