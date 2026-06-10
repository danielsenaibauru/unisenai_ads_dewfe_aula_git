JavaScript

var display = document.getElementById('display');
var buttons = document.querySelectorAll('.btn');
var clearButton = document.getElementById('clear'); // Seleciona o botão 'C' pelo ID
var currentInput = '';

console.log("Sistema iniciado. Aguardando entrada do usuário...");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        var value = this.textContent;
        console.log("Botão clicado:", value);

        if (value === '=') {
            try {
                var resultado = eval(currentInput); 
                
                display.value = resultado;
                currentInput = resultado.toString(); 
            } catch (error) {
                display.value = "Erro";
                currentInput = '';
            }
        } else {
            currentInput += value;
            display.value = currentInput;
        }
    });
}

clearButton.addEventListener('click', function() {
    console.log("Botão Limpar clicado");
    currentInput = '';
    display.value = '';
});