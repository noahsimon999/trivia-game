$(document).ready(function () {

    var questionCounter = 0;

    var questions = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/X-47B_operating_in_the_Atlantic_Test_Range_%28modified%29.jpg/1200px-X-47B_operating_in_the_Atlantic_Test_Range_%28modified%29.jpg",
        "http://im.rediff.com/news/2010/dec/09ss1.jpg"
    ];

    var choice = [
        ["Computer Style Sheet", "Cascading Style Sheets", "Caschading Style Sheet", "Computer Style Sheets"],
        ["Home Text Markup Language", "House Text Markup Language", "Hovel Text Markup Language", "Hyper Text Markup Language",]
    ];

    var answer = [
        "Cascading Style Sheets",
        "Hyper Text Markup Language"
    ];



    function generateGame() {
        timer();
        $(".question").html("<img src="+questions[questionCounter]+">");
        $(".choice1").html(choice[questionCounter][0]);
        $(".choice2").html(choice[questionCounter][1]);
        $(".choice3").html(choice[questionCounter][2]);
        $(".choice4").html(choice[questionCounter][3]);
    }


    var correct = 0;
    var incorrect = 0;
 

    function endGame() {
        // correct, incorrect, 
        $(".question").hide();
        $(".choice1").hide();
        $(".choice2").hide();
        $(".choice3").hide();
        $(".choice4").hide();
        $(".endGame").html("<p>You got " + correct + "correct</p>");
        $(".endGame2").html("<p>You got " + incorrect + "incorrect</p>");
    }




    $(".choice1").click(function() {
        if (choice[questionCounter][0] === answer[questionCounter]) {
            console.log("correct");
            correct++;
            questionCounter++;
            if (questionCounter <= victoryCondition) {
                generateGame();
                counter = 5;
            }
            if (questionCounter === victoryCondition + 1) {
                endGame();
            }
        } else {
            console.log("incorrect");
            incorrect++;
            questionCounter++;
            if (questionCounter <= victoryCondition) {
                generateGame();
                counter = 5;
            }
            if (questionCounter === victoryCondition + 1) {
                endGame();
            }
        }
    })
    $(".choice2").click(function() {
        if (choice[questionCounter][1] === answer[questionCounter]) {
            console.log("correct");
            correct++;
            questionCounter++;
            if (questionCounter <= victoryCondition) {
                generateGame();
                counter = 5;
            }
            if (questionCounter === victoryCondition + 1) {
                endGame();
            }
        } else {
            console.log("incorrect");
            incorrect++;
            questionCounter++;
            if (questionCounter <= victoryCondition) {
                generateGame();
                counter = 5;
            }
            if (questionCounter === victoryCondition + 1) {
                endGame();
            }
        }
    })
    $(".choice3").click(function() {
        if (choice[questionCounter][2] === answer[questionCounter]) {
            console.log("correct");
            correct++;
            questionCounter++;
            if (questionCounter <= victoryCondition) {
                counter = 3;
                generateGame();
                counter = 5;
            }
            if (questionCounter === victoryCondition + 1) {
                endGame();
            }
        } else {
            console.log("incorrect");
            incorrect++;
            questionCounter++;
            if (questionCounter <= victoryCondition) {
                generateGame();
                counter = 5;
            }
            if (questionCounter === victoryCondition + 1) {
                endGame();
            }
        }
    })
    $(".choice4").click(function() {
        if (choice[questionCounter][3] === answer[questionCounter]) {
            console.log("correct");
            correct++;
            questionCounter++;
            if (questionCounter <= victoryCondition) {
                generateGame();
            }
            if (questionCounter === victoryCondition + 1) {
                endGame();
            }
        } else {
            console.log("incorrect");
            incorrect++;
            questionCounter++;
            if (questionCounter <= victoryCondition) {
                generateGame();
            }
            if (questionCounter === victoryCondition + 1) {
                endGame();
            }
        }
    })



    var counter = 5;
    var clock;
    var victoryCondition = 1;
    function timer() {
        clock = setInterval(decrement, 1000);
        function decrement() {
            if (counter > 0) {
                counter--;
            }
            if (counter === 0) {
                clearInterval(clock);
                console.log(victoryCondition);
                console.log(questionCounter);
                if (questionCounter >= victoryCondition) {
                    endGame();
                }
                if(questionCounter < victoryCondition) {
                    questionCounter++;
                    generateGame();
                    counter = 5;
                }
            }
            $(".timer").html(counter);
        }
    }


    if(questionCounter < 10) {
        generateGame();
    }










   


    // display question
    // pick question from array
    // display question
    // start timer
    // listen for user choice
    // check correct/ incorrect, award points
    // print solution
    // load next question and answers, reset timer
    // if timer = 0, lost a point, display answer

});