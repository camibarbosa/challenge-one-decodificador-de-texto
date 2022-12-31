# Decodificador de texto 
![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=%20CONCLUÍDO&color=GREEN&style=for-the-badge)

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

![screencapture-camibarbosa-github-io-challenge-one-decodificador-de-texto-2022-12-29-20_24_37](https://user-images.githubusercontent.com/97048604/210020570-f62ace2e-b698-419b-b64b-1e0bf8a7dd16.png)
