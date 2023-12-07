function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function get_computer_choice() {
    let choices = ["rock", "paper", "scissor"];
    
    let index = getRandomInt(0, 3);
    let choice = choices[index]
    return choice
}

function get_my_choice() {
    let my_choice = prompt("eneter a choice");
    my_choice = my_choice.toLowerCase();
    return my_choice;
}



function play(choice1, choice2) {
    if (choice1 === "rock" && choice2 === "paper") {
        return "computer wins"
    }
    else if (choice1 === "rock" && choice2 === "scissor") {
        return "you win"
    }
    else if (choice1 === "paper" && choice2 === "rock") {
        return "you win"
    }
    else if (choice1 === "paper" && choice2 === "scissor") {
        return "computer wins"
    }
    else if (choice1 === "scissor" && choice2 === "rock") {
        return "computer wins"
    }
    else if (choice1 === "scissor" && choice2 === "paper") {
        return "you win"
    }
    else if (choice1 === choice2) {
        return "draw"
    }
    else {
        return "invalid input"
    }
}


let score1 = 0
let score2 = 0

function game() {
    let computer_choice = get_computer_choice();
    let choice_mine = get_my_choice();

    if (score1 === 5) {
        return "you win the best of 5"
    }
    else if (score2 === 5) {
        return "computer wins the best of 5"
    }

    let result = play(choice_mine, computer_choice)
    
    if (result === "you win") {
        score1++
    }
    else if (result === "computer wins") {
        score2++
    }


    console.log(computer_choice)
    console.log(result)
    return game()

}

winner = game()
console.log(winner)

