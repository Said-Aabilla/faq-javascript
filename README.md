# FAQ Management Application

## Description
This application provides functionality for managing a FAQ (Frequently Asked Questions) section. It allows users to:
- Add new questions and answers
- View existing FAQs
- Toggle visibility of answers
- Close questions individually or all at once

The application also includes a modal for adding new FAQs and supports storing and retrieving FAQs from a data array.

## Code Structure

### JavaScript Functions

1. **`addNewQuestion(questionText, correctAnswer)`**  
   - Attaches a submit event to the form for adding a new question.
   - When submitted, a new question and answer are added to the FAQ list.

2. **`displayQuestionCount()`**  
   - Displays the count of questions in the FAQ section.

3. **`initializeQuestionList()`**  
   - Initializes the list of questions on page load, fetching from the `faqData` array.

4. **`deleteQuestion(questionId)`**  
   - Deletes a specific question from the list by `questionId`.

5. **`renderFAQ(faqData)`**  
   - Renders the FAQ items to the page based on the `faqData` array.
   - Each FAQ item includes a question (button) that, when clicked, toggles the visibility of its answer.

### Event Listeners

1. **Page Load (`DOMContentLoaded`)**  
   - Calls `renderFAQ()` to display the initial FAQ items.
   - Sets up listeners for toggling answers.

2. **Toggle Answer Visibility**  
   - Listens for clicks on FAQ questions to show or hide answers.
   - Hides all answers when a new answer is displayed.

3. **Toggle Modal Visibility**  
   - Sets up the modal for adding new questions.
   - Shows the modal on button click and hides it on close or outside click.

## Data Structure

The initial FAQ data is stored in an array (`faqData`) with each FAQ object containing:
- **`id`**: A unique identifier for each question.
- **`status`**: Indicates if the question is "open" or "closed."
- **`question`**: The text of the FAQ question.
- **`answer`**: The text of the FAQ answer.

### Sample FAQ Data (`faqData`)

```json
[
    {
        "id": 1,
        "status": "open",
        "question": "Comment puis-je réserver une chambre d'hôtel ?",
        "answer": "Pour réserver une chambre, vous pouvez utiliser notre site web en sélectionnant les dates de votre séjour et en choisissant la chambre souhaitée. Vous recevrez une confirmation par e-mail après avoir complété la réservation."
    },
    {
        "id": 2,
        "status": "open",
        "question": "Quels sont les moyens de paiement acceptés ?",
        "answer": "Nous acceptons les paiements par carte de crédit (Visa, MasterCard, American Express), PayPal et les virements bancaires. Les paiements en espèces peuvent être effectués à la réception de l'hôtel."
    },
    {
        "id": 3,
        "status": "closed",
        "question": "Puis-je annuler ou modifier ma réservation ?",
        "answer": "Oui, vous pouvez annuler ou modifier votre réservation jusqu'à 24 heures avant la date d'arrivée prévue. Veuillez nous contacter par e-mail ou téléphone pour effectuer ces changements."
    }
]

