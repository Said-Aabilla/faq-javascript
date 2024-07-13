/**
 * Adds a new question to the system.
 * 
 * This function should take in parameters required to define a new question,
 * such as the question text, possible answers, and correct answer(s).
 * It will then process this data and store the new question in the appropriate
 * data structure or database.
 * 
 * @param {string} questionText - The text of the question.
 * @param {Array<string>} possibleAnswers - An array of possible answer options.
 * @param {string | Array<string>} correctAnswer - The correct answer(s).
 */

const { createElement } = require("react");

const questionText = document.getElementById('question');
const correctAnswer = document.getElementById('answer');
const form = document.getElementById('addQuestionForm');

form.addEventListener('submit', () => {
    addNewQuestion(questionText, correctAnswer);
    renderFAQ();
    displayQuestionCount();
});
function addNewQuestion(questionText, correctAnswer) {
    // Function body to be implemented
    faqData.push({
        id: length + 1,
        question: questionText.value,
        answer: correctAnswer.value
    });
}

/**
 * Displays the total number of questions on the FAQ page.
 * 
 * This function should retrieve the current number of questions
 * from the data structure or database where they are stored. It will then
 * update the appropriate element on the FAQ page to show this number.
 * 
 * @param {string} faqElementId - The ID of the HTML element where the number of questions will be displayed.
 */

const questionCount = document.getElementById("questionCount");

function displayQuestionCount(faqElementId) {
    // Function body to be implemented
    questionCount.textContent = `Nombre de questions : ${faqData.length}`
}

/**
 * Initializes the question list to zero.
 * 
 * This function should reset the list of questions to an empty state.
 * This might involve clearing an array, object, or database table where
 * the questions are stored.
 */
function initializeQuestionList() {
    // Function body to be implemented
    faqData = [];
}


/**
 * Deletes a specific question from the system.
 * 
 * This function should take an identifier for the question to be deleted.
 * It will then remove the question from the appropriate data structure.
 * 
 * @param {string | number} questionId - The identifier of the question to be deleted.
 */


function deleteQuestion(questionId) {
    // Function body to be implemented
    faqData.forEach(item => {
        
    })

    
}



