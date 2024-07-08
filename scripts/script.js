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