const faqData = [
    {
        id:1,
        status:"open",
        question: "Comment puis-je réserver une chambre d'hôtel ?",
        answer: "Pour réserver une chambre, vous pouvez utiliser notre site web en sélectionnant les dates de votre séjour et en choisissant la chambre souhaitée. Vous recevrez une confirmation par e-mail après avoir complété la réservation."
    },
    {
        id:2,
        status:"open",
        question: "Quels sont les moyens de paiement acceptés ?",
        answer: "Nous acceptons les paiements par carte de crédit (Visa, MasterCard, American Express), PayPal et les virements bancaires. Les paiements en espèces peuvent être effectués à la réception de l'hôtel."
    },
    {
        id:3,
        status:"closed",
        question: "Puis-je annuler ou modifier ma réservation ?",
        answer: "Oui, vous pouvez annuler ou modifier votre réservation jusqu'à 24 heures avant la date d'arrivée prévue. Veuillez nous contacter par e-mail ou téléphone pour effectuer ces changements."
    },
    {
        id:4,
        status:"open",
        question: "L'hôtel propose-t-il des services de navette ?",
        answer: "Oui, notre hôtel propose un service de navette depuis et vers l'aéroport. Veuillez réserver ce service à l'avance en fournissant les détails de votre vol."
    },
    {
        id:5,
        status:"open",
        question: "",
        answer: ""
    },
    {
        id:6,
        status:"closed",
        question: "",
        answer: ""
    }
];


// Fonction pour rendre les questions et réponses en HTML
function renderFAQ(faqData) {
    const faqContainer = document.querySelector('.faq');
    faqData.forEach(item => {
        const faqItem = document.createElement('div');

        faqItem.classList.add('faq-item');

        const faqQuestion = document.createElement('button');
        faqQuestion.classList.add('faq-question');
        faqQuestion.setAttribute("idData", item.id)
        
        faqQuestion.textContent = item.question;
        faqItem.appendChild(faqQuestion);

        const faqAnswer = document.createElement('div');
        faqAnswer.classList.add('faq-answer');
        faqAnswer.innerHTML = '<p>' + item.answer + '</p>';
        faqItem.appendChild(faqAnswer);

        faqQuestion.addEventListener('click', function() {
            toggleAnswer(faqQuestion);
        });

        faqContainer.appendChild(faqItem);
    });
}

// Appel de la fonction pour afficher les FAQ lors du chargement de la page
document.addEventListener('DOMContentLoaded', function () {
    renderFAQ(faqData);
});

// Ajout des click listeners pour toggle des réponses
document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(function (item) {
        item.querySelector('.faq-question').addEventListener('click', function () {
            var answer = item.querySelector('.faq-answer');
            var isVisible = answer.style.display === 'block';

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(function (ans) {
                ans.style.display = 'none';
            });

            // Toggle the current answer
            if (!isVisible) {
                answer.style.display = 'block';
            }
        });
    });
});

// Ajout des click listeners pour toggle du modal de l'ajout
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('addQuestionModal');
    var btn = document.getElementById('addQuestionBtn');
    var span = document.getElementsByClassName('close')[0];
    var form = document.getElementById('addQuestionForm');

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

});