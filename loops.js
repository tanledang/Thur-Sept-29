let toDoList = ["Fold Laundry",
    "Mow Lawn",
    "Do Dishes",
    "Mop Bathroom"
]

let roomatesToDoList = ["Take our Trash",
"Clean Bathroom",
]

function canPlayVideoGames(arrayOfChores) {
    let numberOfChores = arrayOfChores.length;

    if (numberOfChores < 3) {
        console.log("You can go play some video games!");
    } else if (numberOfChores >= 3) {
        console.log("No games! Do some chores")
    }
};

canPlayVideoGames(roomatesToDoList)