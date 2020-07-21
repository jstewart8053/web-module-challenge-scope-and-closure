// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
 */
function processFirstItem(stringList, callback) {

    return callback(stringList[0])
}
console.log(processFirstItem(['foo', 'bar'], (str) => str + str))
    // ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * Counter2 count is inside the function which is a function declaration, Counter1 uses a higher order function to return a callback function.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  counter1 because it uses a higher order function

 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *  counter1 would be used more since it doesn't use a global variable. counter2 would only be better if you needed multiple counts.

 
 */

// counter1 code
function counterMaker() {
    let count = 0;
    return function counter() {
        return count++;
    }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
    return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
    return Math.floor(Math.random() * 3)

}
console.log(inning())
    /* Task 3: finalScore()

    Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and returns the final score of the game in the form of an object.

    For example, 

    finalScore(inning, 9) might return: 
    {
      "Home": 11,
      "Away": 5,
    }

    */

function finalScore(inning, nums) {
    let home = 0;
    let away = 0;
    for (let i = 0; i < nums; i++) {
        home += inning();
        away += inning();
    }
    return {
        Home: home,
        Away: away
    };
}
console.log(finalScore(inning, 9));




/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`- using a funtion that already exsists
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(scoreFunc, inningFunc, innings) {
    const scores = { Home: 0, Away: 0 };
    let scoreText = '';
    for (let i = 0; i < innings; i++) {
        let score = scoreFunc(inningFunc);
        scores.Home += score.Home;
        scores.Away += score.Away;
        scoreText += `${i + 1}st inning: ${scores.Away} - ${scores.Home} \n`;
        if (i + 1 === innings) {
            const finalInning = scoreFunc(inningFunc);
            scores.Home += finalInning.Home;
            scores.Away += finalInning.Away;
            scoreText += `Final Score: ${scores.Away} - ${scores.Home}`;
        }
    }
    return scoreText;
}

function getInningScore(inning) {
    const home = inning();
    const away = inning();
    return {
        Home: home,
        Away: away
    };
}

console.log(scoreboard(getInningScore, inning, 9));