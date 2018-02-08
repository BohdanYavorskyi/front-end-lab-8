function myFunction(){
    
    let attempt = 3;
    let max = 5, min = 0;
    
    let question,
        num,
        answer,
        totalPrize = 0,
        curPrize = 0,
        numOfGame = 1; 
    
    let guessed = false;
    let playAgain = false;
    let newOne = confirm("Do you want to play a game?");
    
    //start a game
    if(newOne){
        //while user wants to play
        while(newOne || playAgain){
            //generate a number to be guessed 
            num = Math.round(Math.random() * (max - min) + min);
            
            //quess a number
            do{
                //buid a question
                question = buidQuestion(min, max, attempt, totalPrize, curPrize, numOfGame);
                
                //user's answer
                answer = prompt(question);

                //user's prize if he guesses
                if(answer == num){                
                    curPrize = getPrize(numOfGame, attempt);
                    totalPrize += curPrize;
                    guessed = true;
                    break;
                } 
                
                attempt--;
            } while(attempt != 0);
            
            //if user didnt guess ask him for a new try and ask to continue vice versa
            if(!guessed){
                console.log("Thank you for a game. Your prize is: " + totalPrize);
                
                newOne = confirm("Do you want to play again?");
                playAgain = false;
            } else{
                playAgain = confirm("Do you want to continue a game?");
                newOne = false;
            }
            
            //reset everything before a new game and stop game otherwise
            if(newOne)
            {
                numOfGame = 1;
                attempt = 3;
                max = 5;
                quessed = false;
                totalPrize = 0;
            }
            else{
                break;
            }
            
            //change rules after continue and ask for starting a new game otherwise
            if(playAgain){
                numOfGame++;
                attempt = 3;
                max *= 2;
                guessed = false;
            } 
            else{
                console.log("Thank you for a game. Your prize is: " + totalPrize);
                
                click = confirm("Do you want to play again?");
                playAgain = false;
            }
        }
    } else{
        console.log("You did not become a millionaire");
    }
}

function buidQuestion(min, max, att, prize, curPrize, game){
    let question = ("Please enter a number from " + min + " to " + max + '\n');
    question += ("Attempt left: " + att + '\n');
    question += ("Total prize: " + prize + '$' + '\n');   
    question += ("Possible prize on a current attempt: " + getPrize(game, att) + '$' + '\n');
        
    return question;
}

//returns the possible sum of prize at current attempt
function getPrize(numOfGame, attempt){
 
    if(numOfGame == 1){
        
        switch(attempt){
        case 3:
            return 10;
        case 2:
            return 5;
        case 1:
            return 2;
        }
        
    } else{
        switch(attempt){
            case 3:
                return 10*((numOfGame - 1)*3);
            case 2:
                return 5*((numOfGame - 1)*3);
            case 1:
                return 2*((numOfGame - 1)*3) + (numOfGame - 1);
        }
    }
}