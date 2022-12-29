# Decodificador de texto
 Construindo um decodificador de texto com Javascript, primeiro desafio desenvolvido na formação ONE da Oracle.


As "chaves" de criptografia que utilizaremos são:
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "a" é convertida para "ai"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"

## Requisitos:
- Deve funcionar apenas com letras minúsculas
- Não devem ser utilizados letras com acentos nem caracteres especiais
- Deve ser possível converter uma palavra para a versão criptografada e também retornar uma palavra criptografada para a versão original.

### Por exemplo:
"gato" => "gaitober"
gaitober" => "gato"

## Método 
Utilizei o método JavaScript String replace() para fazer uma substituição de string e retorna a operação em uma nova string.  
