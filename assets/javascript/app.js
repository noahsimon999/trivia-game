$(document).ready(function () {

    var questionCounter = 0;

    var questions = [
        "assets/images/Angela_Merkel.jpg",
        "assets/images/Donald_Trump.jpg",
        "assets/images/Donald_Tusk.jpg",
        "assets/images/Emmanuel_Macron.jpg",
        "assets/images/Giuseppe_Conte.jpg",
        "assets/images/Jean-Claude_Juncker.jpg",
        "assets/images/Justin_Trudeau.jpg",
        "assets/images/Shinzō_Abe.jpg",
        "assets/images/Theresa_May.png"
        
    ];

    var choice = [
        ["Annegret Kramp-Karrenbauer", "Julia Klöckner", "Angela Merkel", "Ursula Lehr"],
        ["Donald Trump", "Barack Obama", "Rudy Giuliani", "Jeb Bush"],
        ["Herman Van Rompuy", "Bronisław Komorowski", "Maciej Płażyński", "Donald Tusk"],
        ["Édouard Philippe", "Emmanuel Macron", "	François Hollande", "Antoni Martí"],
        ["Giuseppe Conte", "Sergio Mattarella", "Luigi Di Maio", "Paolo Gentiloni"],
        ["Jean-Claude Juncker", "Herman Van Rompuy", "	Frans Timmermans", "José Manuel Barroso"],
        [" Pierre Trudeau", "David Johnston", "Justin Trudeau", "Stephen Harper"],
        ["Tarō Asō", "Shinzō Abe", "Junichirō Koizumi", "Yasuo Fukuda"],
        ["Elizabeth II", "Harriet Harman", "Maria Miller", "Theresa May"],
    ];

    var answer = [
        "Angela Merkel",
        "Donald Trump",
        "Donald Tusk",
        "Emmanuel Macron",
        "Giuseppe Conte",
        "Jean-Claude Juncker",
        "Justin Trudeau",
        "Shinzō Abe",
        "Theresa May"
    ];

    var winSound = new Audio("assets/soundEffects/applause.wav");

    function generateGame() {
        $(".start").hide();
        $(".restart").hide();
        $(".info").hide();
        $(".rules").hide();
        $(".timer").show();
        $(".timer").html("<p>Time Left: <span class='timeLeft'>15</span></p>")
        $(".question").show();
        $(".question2").show();
        $(".choice1").show();
        $(".choice2").show();
        $(".choice3").show();
        $(".choice4").show();
        $(".spacer").css("padding-bottom", "40px");
        $(".question").html("<img src="+questions[questionCounter]+">");
        $(".question2").html("<h3>Who is this?</h3>");
        $(".choice1").html(choice[questionCounter][0]);
        $(".choice2").html(choice[questionCounter][1]);
        $(".choice3").html(choice[questionCounter][2]);
        $(".choice4").html(choice[questionCounter][3]);
        $(".results").hide();
        $(".endGame").hide();
        $(".endGame2").hide();
        $(".endGame").css("font-size", "1em");
        $(".endGame2").css("font-size", "1em");
    }

    function right() {
        correct++;
        clearInterval(clock);
        $(".restart").hide();
        $(".timer").hide();
        $(".question").show();
        $(".question2").show();
        $(".choice1").hide();
        $(".choice2").hide();
        $(".choice3").hide();
        $(".choice4").hide();
        $(".spacer").hide();
        $(".results").show();
        $(".endGame").show();
        $(".endGame").css("padding-bottom", "40px");
        $(".endGame2").show();
        $(".results").html("<p>You are right!</p>");
        $(".endGame").html("<p>The correct answer is " + answer[questionCounter] + "</p>");
        $(".endGame2").hide();
        setTimeout(transitionTime, 1000 * 3);
    }

    function wrong() {
        incorrect++;
        clearInterval(clock);
        $(".restart").hide();
        $(".timer").hide();
        $(".question").show();
        $(".question2").show();
        $(".choice1").hide();
        $(".choice2").hide();
        $(".choice3").hide();
        $(".choice4").hide();
        $(".spacer").hide();
        $(".results").show();
        $(".endGame").show();
        $(".endGame").css("padding-bottom", "40px");
        $(".endGame2").show();
        $(".results").html("<p>You are wrong!</p>");
        $(".endGame").html("<p>The correct answer is " + answer[questionCounter] + "</p>");
        $(".endGame2").hide();
        setTimeout(transitionTime, 1000 * 3);
    }

    function endGame() {
        clearInterval(clock);
        $(".restart").show();
        $(".restart").html("<button class='restart'>Play Again?</button>");
        $(".restart").css("margin-bottom", "20px");
        $(".timer").hide();
        $(".question").hide();
        $(".question2").hide();
        $(".choice1").hide();
        $(".choice2").hide();
        $(".choice3").hide();
        $(".choice4").hide();
        $(".results").hide();
        $(".endGame").css("padding-bottom", "0px");
        $(".endGame").show();
        $(".endGame2").show();
        $(".endGame").css("font-size", "20px");
        $(".endGame2").css("font-size", "20px");
        $(".endGame").html("<p>You got " + correct + " correct</p>");
        $(".endGame2").html("<p>You got " + incorrect + " incorrect</p>");
        percentage = Math.round((correct/(questionCounter+1))* 100);
        $(".endGame2").append("<p>You scored a " + percentage + "%</p>");
        if(percentage === 100) {
            winSound.play();
        };
        $(".endGame2").append("<a href='https://ajschilt86.github.io/TriviaGame/'>Click here to play state triva!</a>");
    }


// starts game
    $(".start").click(function(){
        generateGame();
        timer();
    })
// moves the game forward
    function transitionTime() {
        if (questionCounter < 8) {
            questionCounter++;
            generateGame();
            counter = 15;
            timer();
        }
        else {
            endGame();
        }
    }

    var correct = 0;
    var incorrect = 0;
    var percentage = 0;

//restart game
$(".restart").click(function(){
    correct = 0;
    incorrect = 0;
    counter = 15;
    questionCounter = 0;
    generateGame();
    timer();
})

    
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
    var counter = 15;
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
                if(questionCounter < 8) {
                    wrong();
                } else {
                    wrong();
                    setTimeout(endGame, 3000);
                }
            }
            $(".timer").html("<p>Time Left: <span class='timeLeft'>" + counter + "</span></p>");
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