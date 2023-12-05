$(document).ready(function() {
    $('#formTarefa').submit(function(event) {
        event.preventDefault(); 

        const tarefa = $('#Tarefa').val();
        if (tarefa !== '') {
            var li = $('<li></li>').text(tarefa);
            $('#ListaTarefas').append(li);
            $('#Tarefa').val(''); 
        } else {
            alert('Por favor, insira o nome da tarefa.');
        }
    });

    $(document).on('click', '#ListaTarefas li', function() {
        $(this).toggleClass('concluido');
    });

    $('#ReiniciarLista').click(function() {
        $('#ListaTarefas').empty(); 
    });
});