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