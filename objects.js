let newObject = {
    fullName: "Tan Le-Dang",
    age: 27,
    faveColor: "Blue",
    likesPizza: true,
}

let favoriteColor = newObject.faveColor;

newObject.fullName = "Le-Dang";

delete newObject.likesPizza;

newObject.likesCookies = true;
console.log(newObject);