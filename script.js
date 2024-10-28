$(document).ready(function() {
    // Evento de submissão do formulário
    $('#taskForm').submit(function(event) {
        event.preventDefault(); // Evita o envio do formulário
        
        const taskText = $('#taskInput').val().trim();
        if (taskText !== "") {
            // Adiciona um novo item à lista
            $('#taskList').append(`<li>${taskText}</li>`);
            $('#taskInput').val(''); // Limpa o campo de input
        }
    });

    // Evento de clique nos itens da lista para aplicar o efeito
    $('#taskList').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
