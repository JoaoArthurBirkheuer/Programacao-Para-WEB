/**
 * Crie um arquivo JavaScript com funções para manipular arquivos de texto no sistema de
arquivos do sistema operacional. O arquivo a ser manipulado no formato texto deverá conter
uma coleção de objetos JSON. As seguintes funções devem ser criadas:
a. Função que recebe nome (nome e caminho) de um arquivo e retorna a leitura dos dados
existentes nele.
i. Exemplo: Recebe “dados.txt” e o retorno do método deve ser um conteúdo: {
"nome": "CSS3", "ano": 2020 }, { "nome": "HTML5", "ano": 2018 }, {
"nome": "JavaScript", "ano": 2015 }
b. Função que recebe um objeto JSON e o nome (nome e caminho) de um arquivo e
adiciona o objeto recebido na coleção de objetos JSON existentes no arquivo em
questão.
i. Exemplo: Adiciona o elemento { "nome": "CSS3", "ano": 2020 } na lista de
objetos do arquivo.
c. Função que recebe um nome de um atributo e o nome (nome e caminho) de um arquivo
e retorna um objeto cujo nome exista na coleção de objetos.
i. Exemplo: Recebe o valor "CSS3" e retorna { "nome": "CSS3", "ano": 2020 }
d. Função que recebe um nome de um atributo e o nome (nome e caminho) de um arquivo
e remove o objeto cujo nome exista na coleção de objetos.
i. Exemplo: Recebe o valor "CSS3" e remove o objeto com esse valor.
 */