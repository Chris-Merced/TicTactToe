const div = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(div);


function gameboard(player1, player2){
    
    
    

    const gameState = {
    playerTurn: "X",
    playerChoices: [],
    }

   const player1form = document.getElementById("player1info")

   player1form.addEventListener("submit", ()=>{
     event.preventDefault(); 
    
     player1.name = document.getElementById("player1name").value;
     const changePlayer1Name = document.querySelector(".player1name");
     changePlayer1Name.textContent = player1.name;
    })

    const player2info = document.getElementById("player2info");

    player2info.addEventListener("submit", ()=>{
        event.preventDefault();

        const player2NameChange = document.getElementById("player2name").value;
        const player2name = document.querySelector(".player2name");
        player2name.textContent = player2NameChange;
    })
   

    function cellState(){
        let X=null;
        let Y=null;
        return{X, Y};
    };
    for (let i=0; i<9; i++){
        const newCell = cellState();
        gameState.playerChoices.push(newCell);
    }; 
    
    const allButtons = document.querySelectorAll("button")
    
    const reset = document.querySelector(".reset");
    reset.addEventListener("click", ()=>{
        gameReset(allButtons);
        newGameState();
    });

    for (let j=0; j<gameState.playerChoices.length; j++){
        allButtons[j].addEventListener("click", () =>{
            if (gameState.playerTurn==="X" && gameState.playerChoices[j].X === null && gameState.playerChoices[j].Y === null){
                console.log(gameState.playerTurn);
                gameState.playerChoices[j].X = true;
                const button = allButtons[j]
                changeBackgroundImage(button, gameState.playerTurn);
                checkGame(gameState.playerChoices, gameState.playerTurn, allButtons, player1, player2);
                gameState.playerTurn = changePlayerTurn(gameState.playerTurn);
                console.log(gameState.playerChoices[j].X)
            }
            if (gameState.playerTurn==="Y" && gameState.playerChoices[j].X === null && gameState.playerChoices[j].Y === null){
                console.log(gameState.playerTurn);
                gameState.playerChoices[j].Y= true;
                const button = allButtons[j];
                changeBackgroundImage(button, gameState.playerTurn)
                checkGame(gameState.playerChoices, gameState.playerTurn, allButtons, player1, player2)
                gameState.playerTurn = changePlayerTurn(gameState.playerTurn);
                console.log(gameState.playerChoices[j].Y)
            }
            
            
             
        })
        
    }
   
}

function playerX(){
    let wins=0;
    let name="";
    return {wins, name};
}

function playerY(){
    let wins=0;
    let name="";
    return{wins, name};
}

function changePlayerTurn(playerTurn){
    return playerTurn==="X" ? "Y" : "X";
}

function checkGame(gameArray, marker, allButtons, player1, player2){
    let winner="";
    
    if (marker ==="Y"){
        if (gameArray[0].Y === true && gameArray[1].Y === true && gameArray[2].Y === true){
            console.log("You win!")
            winner="Y";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[0].Y === true && gameArray[3].Y === true && gameArray[6].Y === true){
            console.log("You win!")
            winner="Y";            
            gameWon(allButtons, player1, player2, winner);           
        }if (gameArray[0].Y === true && gameArray[4].Y === true && gameArray[8].Y === true){
            console.log("You win!")
            winner="Y";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[6].Y === true && gameArray[4].Y === true && gameArray[2].Y === true){
            console.log("You win!")
            winner="Y";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[6].Y === true && gameArray[7].Y === true && gameArray[8].Y === true){
            console.log("You win!")
            winner="Y";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[2].Y === true && gameArray[5].Y === true && gameArray[8].Y === true){
            console.log("You win!")
            winner="Y";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[1].Y === true && gameArray[4].Y === true && gameArray[7].Y === true){
            console.log("You win!")
            winner="Y";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[3].Y === true && gameArray[4].Y === true && gameArray[5].Y === true){
            console.log("You win!")
            winner="Y";            
            gameWon(allButtons, player1, player2, winner);
        }
    }
    if (marker ==="X"){
        if (gameArray[0].X === true && gameArray[1].X === true && gameArray[2].X === true){
            console.log("You win!");
            winner="X";            
            gameWon(allButtons, player1, player2, winner);

        }if (gameArray[0].X === true && gameArray[3].X === true && gameArray[6].X === true){
            console.log("You win!")
            winner="X";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[0].X === true && gameArray[4].X === true && gameArray[8].X === true){
            console.log("You win!")
            winner="X";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[6].X === true && gameArray[4].X === true && gameArray[2].X === true){
            console.log("You win!")
             winner="X";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[6].X === true && gameArray[7].X === true && gameArray[8].X === true){
            console.log("You win!")
            winner="X";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[2].X === true && gameArray[5].X === true && gameArray[8].X === true){
            console.log("You win!")
            winner="X";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[1].X === true && gameArray[4].X === true && gameArray[7].X === true){
            console.log("You win!")
            winner="X";            
            gameWon(allButtons, player1, player2, winner);
        }if (gameArray[3].X === true && gameArray[4].X === true && gameArray[5].X === true){
            console.log("You win!")
             winner="X";            
            gameWon(allButtons, player1, player2, winner);
        }     
    } 
         
}
 
function changeBackgroundImage(button, playerTurn){
    if (playerTurn==="X"){button.style.backgroundImage = "url('images/X.svg')";
    button.style.backgroundSize = '100%';
    button.style.backgroundRepeat = 'no-repeat';
    }else{button.style.backgroundImage = "url('images/O.svg')";
    button.style.backgroundSize = '100%';
    button.style.backgroundRepeat = 'no-repeat';
    }
}



function newGameState(){
    const player1 = playerX();
    const player2 = playerY();
    gameboard(player1, player2);  
}

newGameState();

function gameWon(allButtons, player1, player2, winner){
    winner==="X" ? player1.wins++ : player2.wins++;
    const player1score = document.querySelector(".player1score");
    player1score.textContent=`Score: ${player1.wins}`;

    const player2score = document.querySelector(".player2score")
    player2score.textContent = `Score: ${player2.wins}`
    console.log(player1.wins)
    gameReset(allButtons);
    gameboard(player1, player2);
}

function gameReset(allButtons){
    for (i=0; i < allButtons.length; i++){
        allButtons[i].style.backgroundImage = "";
    }

    allButtons.forEach(button => {
    const newButton = button.cloneNode(true); // Clone the button
    button.parentNode.replaceChild(newButton, button); // Replace the old button with the new one
    // Now add new event listeners to newButton as needed
    newButton.addEventListener("click", () => {
        // Your event handler code here
    });
});

    playerChoices = [];

}

