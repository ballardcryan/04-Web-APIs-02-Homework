var timer = document.getElementById("countdown");
var gameScore = document.getElementById("score");
var playerScore = document.getElementById("yourScore");
var initials = document.getElementById("initials");

var score = 0

function showScore() {
    gameScore.textContent = "Current Score: " + score;
};

var count = 60;

var interval 

function countdown() {
    interval = setInterval(function () {
        count--;
        timer.textContent = "Time Left: " + count;

        if (count === 0) {
            clearInterval(interval);
            timer.textContent = "Time Expired!";
            endQuizLogic();          
        }        
    }, 1000);
};

function endQuizLogic() {
    $(".modal").removeClass("is-active");
    $(".field").removeClass("is-hidden");
    playerScore.textContent = "Quiz Complete! Your score is " + score + "!";
    clearInterval(interval);      
};

function formHandler() {
    localStorage.setItem(initials.value, score);
};

$("#start").click(function () {
    $("#initModal").removeClass("is-active");
    $("#question1").addClass("is-active");
    countdown();
    showScore();
    questionOneLogic();
});

function questionOneLogic() {
    $(".incorrect1").click(function () {
        $(event.target).removeClass("is-info");
        $(event.target).addClass("is-danger");
        setTimeout(function () {
            $("#question1").removeClass("is-active");
        }, 500);
        setTimeout(function () {
            $("#question2").addClass("is-active");
        }, 500);
        count -= 10;
        showScore();
        questionTwoLogic();
    });

    $("#correct1").click(function () {
        $("#correct1").removeClass("is-info");
        $("#correct1").addClass("is-success");
        setTimeout(function () {
            $("#question1").removeClass("is-active");
        }, 500);
        setTimeout(function () {
            $("#question2").addClass("is-active");
        }, 500);
        score += 1;
        console.log(score);
        showScore();
        questionTwoLogic();
    });
};

function questionTwoLogic(){
    $(".incorrect2").click(function () {
        $(event.target).removeClass("is-info");
        $(event.target).addClass("is-danger");
        setTimeout(function () {
            $("#question2").removeClass("is-active");
        }, 500);
        setTimeout(function () {
            $("#question3").addClass("is-active");
        }, 500);
        count -= 10;
        showScore();
        questionThreeLogic();
    });

    $("#correct2").click(function () {
        $("#correct2").removeClass("is-info");
        $("#correct2").addClass("is-success");
        setTimeout(function () {
            $("#question2").removeClass("is-active");
        }, 500);
        setTimeout(function () {
            $("#question3").addClass("is-active");
        }, 500);
        score += 1;
        console.log(score);
        showScore();
        questionThreeLogic();
    });
};

function questionThreeLogic(){
    $(".incorrect3").click(function () {
        $(event.target).removeClass("is-info");
        $(event.target).addClass("is-danger");
        setTimeout(function () {
            $("#question3").removeClass("is-active");
        }, 500);
        setTimeout(function () {
            $("#question4").addClass("is-active");
        }, 500);
        count -= 10;
        showScore();
        questionFourLogic();
    });

    $("#correct3").click(function () {
        $("#correct3").removeClass("is-info");
        $("#correct3").addClass("is-success");
        setTimeout(function () {
            $("#question3").removeClass("is-active");
        }, 500);
        setTimeout(function () {
            $("#question4").addClass("is-active");
        }, 500);
        score += 1;
        console.log(score);
        showScore();
        questionFourLogic();
    });
};

function questionFourLogic(){
    $(".incorrect4").click(function () {
        $(event.target).removeClass("is-info");
        $(event.target).addClass("is-danger");
        setTimeout(function () {
            $("#question4").removeClass("is-active");
        }, 500);
        setTimeout(function () {
            $("#question5").addClass("is-active");
        }, 500);
        count -= 10;
        showScore();
        questionFiveLogic();
    });

    $("#correct4").click(function () {
        $("#correct4").removeClass("is-info");
        $("#correct4").addClass("is-success");
        setTimeout(function () {
            $("#question4").removeClass("is-active");
        }, 500);
        setTimeout(function () {
            $("#question5").addClass("is-active");
        }, 500);
        score += 1;
        console.log(score);
        showScore();
        questionFiveLogic();
    });
};

function questionFiveLogic(){
    $(".incorrect5").click(function () {
        $(event.target).removeClass("is-info");
        $(event.target).addClass("is-danger");
        setTimeout(function () {
            $("#question5").removeClass("is-active");
        }, 500);
        count -= 10;
        showScore();
        endQuizLogic();
    });

    $("#correct5").click(function () {
        $("#correct5").removeClass("is-info");
        $("#correct5").addClass("is-success");
        setTimeout(function () {
            $("#question5").removeClass("is-active");
        }, 500);
        score += 1;
        console.log(score);
        showScore();
        endQuizLogic();        
    });
};

