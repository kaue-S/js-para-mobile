# js-para-mobile
 Revisão e recursos novos de Js para mobile

 ## principais tópicos de atenção e estudos

 ### variáveis e constantes

 `let` e `const` possuem escopo de BLOCO quando declarado dentro de blocos (condicionais, loops), e escopo **global** quando delcarado fora de blocos.

 `var` possui escopo **global** mesmo quando declarado dentro de blocos. Portanto, é acessível em praticamente qualquer lugar dentro da aplicação.

 `const` obrigatoriamente precisa ser inicializada com algum valor/expressão, e este valor/expressão **não pode ser modificado**.


### Funções 

Blocos de códigos reaproveitáveis, podendo que podem ser criados de pelo menos 3 formas: 

- função nomeada/declarada 
- função anônima
- arrow function

Nas bibliotecas e frameworks as sitaxes mais comuns são Arrow function e Nomeada.

**Obs:** Arrow function e Anônima devem ser declaradas antes de serem chamadas.


### Template Literal/string

Forma mais moderna de manipular dados estáticos e dinâmicos, além de permitir de uma forma mais fácil de executar operações dentro de strings/códigos. Lembre-se do uso das **crases** e do bloco `${}` para execução de código dinâmico (variáveis, constantes, funções etc).


### Módulos

São uma maneira de separar lógica/funcionalidads/dados em arquivos dedicados. Ao criar módulos é necessário utilizar os comandos `export` (no módulo a ser exportado) e `import` (no arquivo em que você quer usar no módulo).

Ao exportar apenas o recurso **um recurso**, utiliza-se `export default nomeDoRecurso`, ao exportar **um ou mais** recursos, utiliza-se `export {recurso1, recurso2, recursoN}`.

Ao importar apenas **um recurso**, utiliza-se `import nomeDoRecuro from "local/nomeDoModulo"`. Ao importar **um ou mais** recursos, utilisa-se `import { recurso1, recurso2 } from "local/nomeDoModulo"`.

### Operadores spread e rest ...

- spread (espalhar) é usado para dividir elementos de um array ou propriedades de um objeto para outro array/objeto. Útil para gerar novas estruturas de dados a partir de estruturas existentes.

- rest (coletar/extrair valores): usado para gerar uma lista de parâmetros para a função à partir dos valores de um array. Útil para evitar a necessidade de criar parâmetros manualmente em uma função, ou para quando não sabemos quantos parâmetros serão necessários.


### Destructuring (Desestruturação)

Técnica para extrair valores de arrays e objetos para novas variáveis/constantes. Usada para simplificar o acesso a estes dados, podendo ser aplicada também em parâmetros de funções.

### Métodos para iteração em arrays: map, filter e reduce

São métodos que permitem realizar operações diversas em elementos de arrays. Funcionam como loops especiais, executando uma função conhecida como callback para cada elemento dentro do array.

- map
Percorre os elementos do array e executa algum tipo de transformação, gerando um novo array de dados.

- filter
Percorre os elementos do array filtrando seus valores de acordo com uma ou mais condições, gerando um novo array de dados.

- reduce
Percorre os elementos do array realizando operações (soma, multiplicação, concatenação etc), gerando um único resultado.