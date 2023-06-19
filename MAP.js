let hotel = {
    name:"hotell",
    location: "street No xyz delhi",
    categories: ["chinese", "italian", "English"],
    mainMenu: ["FoodA", "FoodB", "FoodC"],
    openingHours:{
        sunday:{open:"09:00AM", closes:"11:00PM"},
        monday:{open:"10:00AM", closes:"10:00PM"}
    }
}

let restaurantMap = new Map();

restaurantMap.set("Name", "Bombay hotel")
restaurantMap.set(1, "Address1");
restaurantMap.set(2, "Address2");
console.log(restaurantMap)

//Getting the value
console.log(restaurantMap.get(2))
console.log(restaurantMap.get("Name"))