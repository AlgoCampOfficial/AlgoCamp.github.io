
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}


function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("It’s an Algorithm that calls itself repeatedly until the problem is solved.", ["Simple Recursive Algorithm", "Backtracking Algorithm","Greedy Algorithm", "Brute Force Algorithm"], "Simple Recursive Algorithm"),
    new Question("An algorithm is important because:", ["It can be used to improve the problem.", "It can be used to highlight the various ways in which a problem can be attacked.", "It can be used to improve the speed at which a program executes a problem.", "It can be used to solve base cases directly and easily."], "It can be used to improve the speed at which a program executes a problem."),
    new Question("This algorithm has the potential of reducing the time that a program takes to solve a problem.", ["Simple Recursive Algorithm", "Divide and Conquer Algorithm","Single Algorithm", "Dynamic Programming Algorithm"], "Django"),
    new Question("Algorithm means:", ["a process of slowing down the speed of a program", "a process or set of rules to be followed in calculations or other problem-solving operations", "a recipe that describes the steps needed for the computer to remove a problem ", "a recipe that does not describe the steps needed for the computer to solve a problem"], "a process or set of rules to be followed in calculations or other problem-solving operations"),
    new Question("A programming algorithm is not computer code. ", ["True", "False", "Maybe", "I don't know"], "True"),
    new Question("Instead of numbered steps, some folks use indentation and write in ________, which is a semi-programming language used to describe the steps in an algorithm. ", ["Code", "Flowchart", "Pseudocode", "Steps"], "Pseudocode"),
    new Question("This characteristic of an algorithm in which it should not end up in an infinite loops or similar.", ["Fixed", "Clear and Unambiguous", "Definite", "Finite-ness"], "Finite-ness"),
    new Question("A characteristic of an algorithm in which it must be just plain instructions that can be implemented in any language, and yet the output will be same, as expected.", ["Well-defined Outputs", "Language Independent", "Clear and Unambiguous", "Well-defined Inputs"], "Language Independent"),
    new Question("Remembers past results and uses them to find new results.", ["Dynamic Programming Algorithm", "Divide and Conquer Algorithm", "Backtracking Algorithm", "Simple Recursive Algorithm"], "Dynamic Programming Algorithm"),
    new Question("There are different ways of solving a problem and that is why it is important to:", ["Formulate an algorithm", "Formulate a good algorithm", "Formulate a moderate algorithm", "Formulate a complex algorithm"], "Formulate a good algorithm"),
    new Question("Dynamic programming is generally used for optimization problems in which:", ["Multiple solutions exist, need to find the best one", "Requires minimal substructure and overlapping subproblem", "Requires minimal substructure and no overlapping subproblem", "Multiple solutions exist, need to find the worst one"], "Multiple solutions exist, need to find the best one"),
    new Question("In order to write an algorithm, following things are needed as a pre-requisite except:", ["The problem that is to be solved by this algorithm.", "The constraints of the problem that must not be considered while solving the problem.", "The input to be taken to solve the problem.", "The output to be expected when the problem is solved."], "The constraints of the problem that must not be considered while solving the problem."),
    new Question("This means checking the algorithm before its implementation.", ["Posteriori Analysis", "Posterior Analysis", "Priori Analysis", "Prior Analysis"], "Priori Analysis"),
    new Question("This analysis helps to get the actual and real analysis report about correctness, space required, time consumed etc.", ["Posteriori Analysis", "Posterior Analysis", "Priori Analysis", "Prior Analysis"], "Posterior Analysis"),
    new Question("This refers to the measure of the time that it will need to execute and get the expected output, and the space it will need to store all the data.", ["Time Complexity of an Algorithm", "Space of an Algorithm", "Complexity of an Algorithm", "Space Complexity of an Algorithm"], "Complexity of an Algorithm"),
    new Question("This refers to the amount of memory that this algorithm requires to execute and get the result.", ["Time Complexity of an Algorithm", "Space of an Algorithm", "Complexity of an Algorithm", "Space Complexity of an Algorithm"], "Space Complexity of an Algorithm"),
    new Question("This refers to the space that is definitely required by the algorithm.", ["Fixed Part", "Unfixed Part", "Variable Part", "Used Part"], "Fixed Part"),
    new Question("This refers to the space that can be different based on the implementation of the algorithm.", ["Fixed Part", "Unfixed Part", "Variable Part", "Used Part"], "Variable Part"),
    new Question("This refers to the amount of time that this algorithm requires to execute and get the result.", ["Time Complexity of an Algorithm", "Space of an Algorithm", "Complexity of an Algorithm", "Space Complexity of an Algorithm"], "Time Complexity of an Algorithm"),
    new Question("Brute Force Algorithm is one of the simplest algorithms in the concept.", ["True", "False", "Maybe", "Neither"], "True")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();