$(document).ready(function() {
    $('header button').click(function(e) {
        e.preventDefault();
        const atividade = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        $(`<h3>${atividade}</h3>`).appendTo(novoItem);
        $(`
        <div class="script">
            <button type="button" id="concluir">
                <img src="./imagens/certo.jpg" alt="Sinal de correto">
            </button>
            <button type="button" id="apagar">
                <img src="./imagens/errado.jpg" alt="Sinal de errado">
            </button>
        </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $('#nova-tarefa').val();
    })

    $('ul').on('click', '#apagar', function(){
        $(this).parents('li').fadeOut(400);
    })

    $('ul').on('click', '#concluir', function () {
        $(this).parents('li').toggleClass('completo');
    });
})