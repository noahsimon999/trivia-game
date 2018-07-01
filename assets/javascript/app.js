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
        $(".question").show();
        $(".choice1").show();
        $(".choice2").show();
        $(".choice3").show();
        $(".choice4").show();
        $(".question").html("<img src="+questions[questionCounter]+">");
        $(".choice1").html(choice[questionCounter][0]);
        $(".choice2").html(choice[questionCounter][1]);
        $(".choice3").html(choice[questionCounter][2]);
        $(".choice4").html(choice[questionCounter][3]);
        $(".endGame").hide();
        $(".endGame2").hide();
    }

    function right() {
        correct++;
        $(".question").hide();
        $(".choice1").hide();
        $(".choice2").hide();
        $(".choice3").hide();
        $(".choice4").hide();
        $(".endGame").show();
        $(".endGame2").show();
        $(".endGame").html("<p>The correct answer is " + answer[questionCounter] + "</p>");
        setTimeout(transitionTime, 1000 * 3);
    }

    function wrong() {
        incorrect++;
        $(".question").hide();
        $(".choice1").hide();
        $(".choice2").hide();
        $(".choice3").hide();
        $(".choice4").hide();
        $(".endGame").show();
        $(".endGame2").show();
        $(".endGame").html("<p>The correct answer is " + answer[questionCounter] + "</p>");
        setTimeout(transitionTime, 1000 * 3);
    }

    function endGame() {
        clearInterval(clock);
        $(".timer").hide();
        $(".question").hide();
        $(".choice1").hide();
        $(".choice2").hide();
        $(".choice3").hide();
        $(".choice4").hide();
        $(".endGame").show();
        $(".endGame2").show();
        $(".endGame").html("<p>You got " + correct + "correct</p>");
        $(".endGame2").html("<p>You got " + incorrect + "incorrect</p>");
    }


// starts game
    if(questionCounter < 2) {
        generateGame();
        timer();
    }
// moves the game forward
    function transitionTime() {
        if (questionCounter < 1) {
            questionCounter++;
            generateGame();
            counter = 5;
            timer();
        }
        else {
            endGame();
        }
    }

    var correct = 0;
    var incorrect = 0;
    
//listens for a click and checks the answer
    $(".choice1").click(function() {
        if (choice[questionCounter][0] === answer[questionCounter]) {
            console.log("correct");
            right();
        } else {
            console.log("incorrect");
            
            wrong();
        }
    })
    $(".choice2").click(function() {
        if (choice[questionCounter][1] === answer[questionCounter]) {
            console.log("correct");
            right();
        } else {
            console.log("incorrect");
            wrong();
        }
    })
    $(".choice3").click(function() {
        if (choice[questionCounter][2] === answer[questionCounter]) {
            console.log("correct");
            right();
        } else {
            console.log("incorrect");
            wrong();
        }
    })
    $(".choice4").click(function() {
        if (choice[questionCounter][3] === answer[questionCounter]) {
            console.log("correct");
            right();
        } else {
            console.log("incorrect");
            wrong();
        }
    })
    

// countdown timer used on every question
    var counter = 5;
    var clock;
    function timer() {
        clock = setInterval(decrement, 1000);
        function decrement() {
            if (counter > 0) {
                counter--;
            }
            if (counter <= 0) {
                clearInterval(clock);
                console.log(questionCounter);
                if(questionCounter < 1) {
                    wrong();
                } else {
                    endGame();
                }
            }
            $(".timer").html(counter);
        }
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