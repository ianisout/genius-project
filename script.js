let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//create random order of colors
let shuffledOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1); //faz com que traga o número mais 1 para poder existir ele na nossa lista de cores ????
    }
}

//lights up following color
let lightColor = (element, number) => {
    number *= 500;
    setTimeout(() => {
        element.classList.add('selected');
        setTimeout(() => {
            element.classList.remove('selected');
        }, number + 150);
    }, number + 250);
}



//check if clicked colors are the same as the order set by game
let checkOrder = () => { // perdeu
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        };
    };
    if (clickedOrder.length == order.length) { // passou
        alert(`Your score is: ${score}\nYou got it! Starting next level`);
        nextLevel();
    };
};

//func: user clicks
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 500);
};

//func: returns color
let createColorElement = (color) => {
    if (color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    };
}

//func: moving to next level

let nextLevel = () => {
    score++;
    shuffledOrder();
};

//game over
let gameOver = () => {
    alert(`Your score: ${score}!\nYou lost the game :(\nClick OK to start a new game`);
    order = [];
    clickedOrder = [];

    playGame();
}

//starting
let playGame = () => {
    alert(`Welcome to Genius! Starting new game`);
    score = 0;

    nextLevel();
}

//clicking events for each colors
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();


