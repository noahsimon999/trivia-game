$(document).ready(function () {

    var questionCounter = 0;

    var questions = [
        "What does CSS stand for?",
        "What does HTML stand for?"
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
        $(".question").html(questions[questionCounter]);
        $(".choice1").html(choice[questionCounter][0]);
        $(".choice2").html(choice[questionCounter][1]);
        $(".choice3").html(choice[questionCounter][2]);
        $(".choice4").html(choice[questionCounter][3]);
    }


    var correct = 0;
    var incorrect = 10 - correct;


    function endGame() {
        // correct, incorrect, 
        $(".endGame").html("<p>You got " + correct + "correct</p>")
    }


    $(".choice1").click(function() {
        if (choice[questionCounter][0] === answer[questionCounter]) {
            console.log("correct");
            questionCounter++;
            generateGame();
            if (questionCounter === 2) {
                endGame();
            }
        }
    })
    $(".choice2").click(function() {
        if (choice[questionCounter][1] === answer[questionCounter]) {
            console.log("correct");
            questionCounter++;
            generateGame();
            if (questionCounter === 2) {
                endGame();
            }
        }
    })
    $(".choice3").click(function() {
        if (choice[questionCounter][2] === answer[questionCounter]) {
            console.log("correct");
            questionCounter++;
            generateGame();
            if (questionCounter === 2) {
                endGame();
            }
        }
    })
    $(".choice4").click(function() {
        if (choice[questionCounter][3] === answer[questionCounter]) {
            console.log("correct");
            questionCounter++;
            generateGame();
            if (questionCounter === 2) {
                endGame();
            }
        }
    })



    var counter = 3;
    function timer() {
        clock = setInterval(decrement, 1000);
        function decrement() {
            if (counter > 0) {
                counter--;
            }
            if (counter === 0) {
                clearInterval(clock);
                console.log(questionCounter);
                if (questionCounter === 1) {
                    endGame();
                }
                if(questionCounter < 1) {
                    questionCounter++;
                    generateGame();
                    counter = 3;
                    timer();
                }
               
                
            }
            $(".timer").html(counter);
        }
    }


    if(questionCounter < 10) {
        timer();
        generateGame();
    }










    // var questions = [
    //     {
    //         question: "What does CSS stand for?",
    //         choice1: "Computer Style Sheet",
    //         choice2: "Cascading Style Sheets",
    //         choice3: "Caschading Style Sheet",
    //         choice4: "Computer Style Sheets",
    //         answer: "Cascading Style Sheets",
    //         userAnswer: false
    //     },
    //     {
    //         question: "What does HTML stand for?",
    //         choice1: "Home Text Markup Language",
    //         choice2: "House Text Markup Language",
    //         choice3: "Hovel Text Markup Language",
    //         choice4: "Hyper Text Markup Language",
    //         answer: "Hyper Text Markup Language",
    //         userAnswer: false
    //     }
    // ];

    // for (var i = 0; i < questions.length; i++) {
    //     // draw questions and choices
    //     $(".question").html(questions[i].question);
    //     $(".choice1").html(questions[i].choice1);
    //     $(".choice2").html(questions[i].choice2);
    //     $(".choice3").html(questions[i].choice3);
    //     $(".choice4").html(questions[i].choice4);
    // }



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