console.log("exercice 5");

$("img").each(function() {

    $(this).click( () => {
        const computerChoice = getComputerChoice();
        $("#userChoice").html("<h3>Votre choix :</h3><h4>" + $(this).attr("id") + "</h4><img src='" + $(this).attr("src") + "' height='100'>");
        $("#computerChoice").html("<h3>Le choix de votre adversaire :</h3><h4>" + computerChoice + "</h4><img src='" + computerChoice + ".jpg' height='100'>")
        determineWinner($(this).attr("id"), computerChoice);
    });
})

function getComputerChoice () {
    let number = Math.floor(Math.random() * 3);
    let computerChoice;

    switch (number) {
        case 0:
            computerChoice = 'damme';
            break;
        case 1:
            computerChoice = 'stallone';
            break;
        case 2:
            computerChoice = 'trump';
            break;
    }
    return computerChoice;
}  

function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        $("#result").html("<h1 class='bg-secondary text-white rounded-pill'>Egalité !</h1>");
    }
    else if (userChoice === 'stallone') {
        if (computerChoice === 'damme') {
            $("#result").html("<h1 class='bg-success text-white rounded-pill'>Gagné ! Stallone est plus fort, bien sûr !</h1>");
        } else {
            $("#result").html("<h1 class='bg-warning text-white rounded-pill'>Perdu ! Trump expulse Stalone des Etats-Unis !</h1>");
        }
    }
    else if (userChoice === 'damme') {
        if (computerChoice === 'trump') {
            $("#result").html("<h1 class='bg-success text-white rounded-pill'>Gagné ! JVCD dit quelque chose... Trump saigne du nez !</h1>");
        } else {
            $("#result").html("<h1 class='bg-warning text-white rounded-pill'>Perdu ! Stallone devient Rocky, et met JVCD KO !</h1>");
        }
    }
    else if (userChoice === 'trump') {
        if (computerChoice === 'stallone') {
            $("#result").html("<h1 class='bg-success text-white rounded-pill'>Gagné ! Trump construit un mur entre lui et Stalone !</h1>");
        } else {
            $("#result").html("<h1 class='bg-warning text-white rounded-pill'>Perdu! JVCD dit quelque chose... Trump saigne du nez !</h1>");
        }
    }
    else if (userChoice === 'norris') {
            return 'Won! Norris killed everyone!';
    }
}


// function userChoice (userInput) {
//     userInput = userInput.toLowerCase();
//     if (userInput === 'damme' || userInput === 'stalone' || userInput === 'trump' || userInput === 'norris') {
//         return userInput;
//     } else {
//         console.log('Please, choose Damme, Stalone, or Trump!');
//     }
// }

// function getComputerChoice () {
//     let number = Math.floor(Math.random() * 3);
//     let computerChoice;

//     switch (number) {
//         case 0:
//             computerChoice = 'damme';
//             break;
//         case 1:
//             computerChoice = 'stalone';
//             break;
//         case 2:
//             computerChoice = 'trump';
//             break;
//     }
//     return computerChoice;
// }  

// function determineWinner (userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         return 'Tied!';
//     }
//     else if (userChoice === 'stalone') {
//         if (computerChoice === 'damme') {
//             return 'Won! Stalone is stronger, of course!';
//         } else {
//             return 'Lost! Trump expulse Stalone to Russia!';
//         }
//     }
//     else if (userChoice === 'damme') {
//         if (computerChoice === 'trump') {
//             return 'Won! Damme say something... Trump\'s head explode!';
//         } else {
//             return 'Lost! Stalone become Rocky, and punch Damme in the face!';
//         }
//     }
//     else if (userChoice === 'trump') {
//         if (computerChoice === 'stalone') {
//             return 'Won! Trump build a wall between him and Stalone!';
//         } else {
//             return 'Lost! Damme say something... Trump\'s head explode!!';
//         }
//     }
//     else if (userChoice === 'norris') {
//             return 'Won! Norris killed everyone!';
//     }
// }

// function playGame () {
//     let uChoice = userChoice(prompt("Stalone, Damme, Trump ?"));
//     let computerChoice = getComputerChoice();
//     console.log('You chose: ' + uChoice);
//     console.log('The computer chose: ' + computerChoice);
//     console.log(determineWinner(uChoice, computerChoice));
// }

// playGame();