const toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom",
    "Clean Kitchen"
]

const numberOfChores = toDoList.length;

for (var i=0; i < numberOfChores; i++) {
    console.log(toDoList.pop());
}

// console.log(toDoList);

for (var i=toDoList.length; i > 2; i--) {
    console.log(i, toDoList.pop());
}
