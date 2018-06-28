$(document).ready(function () {


    var questions = [
        {
            question: "What does CSS stand for?",
            choice1: "Computer Style Sheet",
            choice2: "Cascading Style Sheets",
            choice3: "Caschading Style Sheet",
            choice4: "Computer Style Sheets",
            answer: "Cascading Style Sheets",
            userAnswer: false
        },
        {
            question: "What does HTML stand for?",
            choice1: "Home Text Markup Language",
            choice2: "House Text Markup Language",
            choice3: "Hovel Text Markup Language",
            choice4: "Hyper Text Markup Language",
            answer: "Hyper Text Markup Language",
            userAnswer: false
        }
    ];

    for (var i = 0; i < questions.length; i++) {
        // draw questions and choices
        $(".question").html(questions[i].question);
        $(".choice1").html(questions[i].choice1);
        $(".choice2").html(questions[i].choice2);
        $(".choice3").html(questions[i].choice3);
        $(".choice4").html(questions[i].choice4);
        
        var choice = "";
        $(".choice1").click(function() {
            choice = 0;
            console.log(choice)
        })
        

        

    }
});


// display question
    // pick question from array
    // display question
    // start timer
    // listen for user choice
    // check correct/ incorrect, award points
    // print solution
    // load next question and answers, reset timer
    // if timer = 0, lost a point, display answer