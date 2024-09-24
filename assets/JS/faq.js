// Selecciona todas las preguntas de FAQ
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        // Obtener el elemento contenedor (padre) de la pregunta
        const faqItem = question.parentElement;
        
        // Alterna la clase 'active' para mostrar u ocultar la respuesta
        faqItem.classList.toggle('active');
        
        // Alterna el estado de otras respuestas
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active'); // Colapsar cualquier otra pregunta abierta
            }
        });
    });
});
