
# Exercícios introdução a SQL

#### Exercício 01

Começaremos pela tabela de atores. Nós vamos guardar as seguintes informações: id, nome, salário, data de nascimento e sexo

Abaixo está a query que cria essa tabela no MySQL

>CREATE TABLE Actor (
>    id VARCHAR(255) PRIMARY KEY,
>    name VARCHAR (255) NOT NULL,
>    salary FLOAT NOT NULL,
>    birth_date DATE NOT NULL,
>    gender VARCHAR(6) NOT NULL
>);

##### a) Nesta tabela, utilizamos o FLOAT para declarar o salário, porque esta é uma forma de representar um número não inteiro em uma tabela.
##### Explique os demais comandos que estão nessa query.

R) O comando "VARCHAR(255)" cria um dado do tipo string limitado ao número de caracteres indicado dentro dos parênteses
"PRIMARY KEY" - indica que este valor será único para cada dado adicionado na nossa tabela sendo tratado como o ID do nosso dado
"NOT NULL" - indica que o dado não pode ficar vazio
"DATE" - indica um dado criado por padrão no formato de uma data 


##### b) O comando SHOW é bem útil para nos prover informações sobre bancos, tabelas, e mais. Utilize os comandos:
##### SHOW DATABASES e SHOW TABLES. Explique os resultados.

R)O comando SHOW DATABASE mostra as informações gerais do banco de dados, sobre os Schemas contidos neste banco
O comando SHOW TABLES mostra as informações das tabelas inseridas neste Schema


##### c) O comando DESCRIBE pode ser usado para ver estrutura de uma tabela. Utilize o comando  DESCRIBE Actor e explique os resultados.

R)O comando "DESCRIBE Actor" mostra os detalhes dos dados adicionados à tabela atores, qual o tipo do dados e as restrições dele


#### Exercício 02

O próximo passo é colocar dados nessa tabela. Vamos começar criando a linha de um ator brasileiro muito famoso.

>INSERT INTO Actor (id, name, salary, birth_date, gender)
>VALUES(
>  "001", 
>  "Tony Ramos",
>  400000,
>  "1948-08-25", 
>  "male"
>);

Atente-se a 3 fatos nessa query:

1. A ordem dos valores (`VALUES`) é definida pela lista colocada depois do nome da tabela (`ACTOR`): `(id, name, salary, birth_date)`.
2. Os valores `VARCHAR` (strings) devem ser indicados com `"`
3. As datas seguem o padrão: `YYYY-MM-DD`

##### a) Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R$1.200.000 e data de nascimento 23 de Agosto de 1963

R)
>INSERT INTO Actor (id, name, salary, birth_date, gender)
>VALUES(
>  "002", 
>  "Glória Pires",
>  1200000,
>  "1963-08-23", 
>  "female"
>);

##### b) Escreva uma query que tente adicionar um outro elemento a tabela com o mesmo id do item anterior 002. Isso gerará um erro.
##### Anote a mensagem de erro, traduza e explique porque esse erro aconteceu.

R)O Workbench apresenta um erro número 1062 de entrada de chave primária duplicada. O que significa que não podem haver dois dados com a mesma chave primária.


##### Tente usar as queries abaixo. Você vai reparar que elas vão gerar um erro. Anote as mensagens de erro, traduza e explique porque esses erros aconteceram.
##### Por fim, corrija individualmente cada query para que funcione, teste o comando e anote-o também como resposta

##### c)
>INSERT INTO Actor (id, name, salary)
>VALUES(
>  "003", 
>  "Fernanda Montenegro",
>  300000,
>  "1929-10-19", 
>  "female"
>);

R)Erro 1136 - contagem da coluna não combina com a contagem da linha 1 - foram declarados menos itens do que estão sendo adicionados no dado.

##### d)
>INSERT INTO Actor (id, salary, birth_date, gender)
>VALUES(
>  "004",
>  400000,
>  "1949-04-18", 
>  "male"
>);

R)Erro 1364 - campo 'Name' não possui um valor padrão - Indica que não foi criado um valor padrão para o campo nome e ele foi criado com a restrição de não poder ficar vazio.

##### e)
>INSERT INTO Actor (id, name, salary, birth_date, gender)
>VALUES(
>  "005", 
>  "Juliana Paes",
>  719333.33,
>  1979-03-26, 
>  "female"
>);

R)Erro 1292 - Valor da data incorreto (1950) - Sem as aspas no campo da data, so valores foram calculado 1979 -3 -26 resultando em 1950 em vez de 1979/03/26

#### f)Por fim, crie mais um ator e mais uma atriz e prossiga para os próximos exercícios.

R)
>INSERT INTO Actor (id, name, salary, birth_date, gender)
>VALUES(
>  "003", 
>  "Grande Otelo",
>  500000,
>  "1960-01-13", 
>  "male"
>);
>INSERT INTO Actor (id, name, salary, birth_date, gender)
>VALUES(
>  "004", 
>  "Silvio Luiz",
>  300000,
>  "1950-02-14", 
>  "male"
>);
>INSERT INTO Actor (id, name, salary, birth_date, gender)
>VALUES(
>  "005", 
>  "Juliana Paes",
>  600000,
>  "1980-05-13", 
>  "female"
>);

#### Exercício 03

##### Com os dados criados, podemos nos aventurar nas queries de seleção de dados. Elas são indicadas pelo operador SELECT. Talvez a query mais famosa que existe é:
>SELECT * FROM Actor
##### Ela faz com que se retornem todas as colunas (ou "informações") de todas as linhas (ou "entradas") da nossa tabela. 
>SELECT id, salary from Actor 
##### Agora, se quisermos colocar uma condição para retornar as linhas (entradas), devemos usar o operador WHERE e colocar a nossa condição que pode usar alguns operadores (=, !=, >, etc). Abaixo, está uma query que retorna somente o id e o nome dos atores.
>SELECT id, name from Actor WHERE gender = "male"


##### a) Escreva uma query que retorne todas as informações das atrizes

R) SELECT id, name from Actor WHERE gender = "female"


##### b) Escreva uma query que retorne o salário do ator com o nome Tony Ramos

R) SELECT salary from Actor WHERE name = "Tony Ramos";


##### c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Explique o resultado.

R)SELECT id, name, salary, birth_date from Actor WHERE gender = "invalid";
Ele não apresenta nenhum erro, porém o retorno vem vazio, pois não existe nenhum gênero chamado "invalid"

##### d)Escreva uma query que retorne o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000

R)SELECT id, name, salary from Actor WHERE salary <+ 500000;


##### e) Tente usar a query abaixo. Você vai reparar que ela vai gerar um erro. Anote a mensagem de erro, traduza e explique porque esse erro aconteceu. Por fim, corrija individualmente a query para que funcione, teste o comando e anote-o também como resposta
>SELECT id, nome from Actor WHERE id = "002"

R)Erro 1054 nome da coluna 'nome' desconhecido  - Ao trocar o nome do campo 'name' por 'nome' o workbench deixa de reconhecer a coluna.

O coreto é: SELECT id, name from Actor WHERE id = "002";


#### Exercício 04

##### - Exercício 4
  
  ##### Para finalizar o nosso estudo nas tabelas de atores, vamos fazer uma query mais complexa. Queremos encontrar todos os atores e atrizes:
    * cujos nomes começam com "A" ou "J"; e
    * cujos salários são maiores do que R$300.000
##### Para fazer a primeira parte, vamos usar o comparador LIKE, que permite comparar strings. Para verificar se uma palavra começa com a letra "A", usamos a sintaxe: LIKE "A%" porque % indica uma string genérica. O operador "ou" é indicado por OR. Assim, a primeira condição é indicada por: WHERE name LIKE "A%" OR name LIKE "J%". 
##### Já a segunda parte é simples: salary > 300000. O que pode confundir é o operador lógico "e" (AND). A ideia aqui é que todos os atores terão o salário maior do que R$300.000, mas seus nomes poderão começar com o "A" ou "J". Dessa forma, a query vai ficar dessa forma (preste atenção nos parênteses):
##### Assim como o `LIKE` existem os operadores: 
* `BETWEEN`: permite verificar se um valor está entre dois: `BETWEEN valor1 AND valor2`.
* `NOT`: que indica uma negação de comparação. Pode ser usado antes de outros operadores como: `NOT LIKE`, `NOT BETWEEN`

##### a) Explique com as suas palavras a query acima

R)A query inicia filtrando os a linhas que possuam um nome começado em A seguido de quaiquer caracteres e na letra J seguido de qualqeur tipo de caracter e então dentre esses filtrados são apresentados somente os que possuem o campo salário maior 300000


##### b) Escreva uma query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00

R) SELECT * FROM Actor
WHERE (name NOT LIKE "A%" AND name NOT LIKE "J%") AND salary > 350000;

##### c)Escreva uma query com os atores que possuam "G" ou "g" em qualquer parte do nome. 

R)SELECT * FROM Actor
WHERE name LIKE "%g%" or name LIKE "%G%";

##### d)*Escreva uma query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00*

R) SELECT * FROM Actor
WHERE (name LIKE "%a%" or name LIKE "%A%") OR (name LIKE "%g%" or name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;



#### Exercício 05

##### Terminamos de fazer um belo estudo sobre a tabela de Atores. Agora, você vai ficar mais independente. Precisamos criar a tabela de Filmes com as informações: id, nome, sinopse, data de lançamento e avaliação (que pode ser de 0 a 10)

##### a) Escreva a query que cria essa tabela. Para sinopse, utilize o tipo TEXT, pesquise sobre ele se precisar. Explique a query resumidamente.

R)CREATE TABLE Filme (
    id VARCHAR(10) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL,
    sinopse TEXT NOT NULL,
    lançamento DATE NOT NULL,
    avaliacao DOUBLE NOT NULL
);
Criei o id com no máximo 10 caracteres, a sinopse como texto para poder ser adicionado bastante conteúdo nela, a data de lançamento como uma data e a nota como um Double pois geralmente é o formato padrão de notas 5.7 ou 9.0

##### b), c), d), e)
INSERT INTO Filme (id, nome, sinopse, lançamento, avaliacao)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006/01/06", 
  7.0
);
INSERT INTO Filme (id, nome, sinopse, lançamento, avaliacao)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012/12/27", 
  10
);
INSERT INTO Filme (id, nome, sinopse, lançamento, avaliacao)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017/11/02", 
  8.0
);
INSERT INTO Filme (id, nome, sinopse, lançamento, avaliacao)
VALUES(
  "004", 
  "O Alto da Compadecida",
  "As aventuras dos nordestinos João Grilo, um sertanejo pobre e mentiroso, e Chicó, o mais covarde dos homens. Ambos lutam pelo pão de cada dia e atravessam por vários episódios enganando a todos do pequeno vilarejo de Taperoá, no sertão da Paraíba.",
  "2000/09/10", 
  10
);



#### Exercício 06

##### Escreva uma query que:
##### a) Retorne o id, título e avaliação a partir de um id específico;

R)SELECT id, nome, avaliacao from Filme WHERE id = "002";


##### b) Retorne um filme a partir de um nome específico;

R)SELECT id, nome, sinopse, lançamento, avaliacao from Filme WHERE nome = "O alto da Compadecida";


##### c) Retorne o id, título e sinopse dos filmes com avaliação mínima de 7

R)SELECT id, nome, sinopse from Filme WHERE avaliacao >= 7;



#### Exercício 07

##### Escreva uma query que:

##### a) Retorna um filme cujo título contenha a palavra vida

R)SELECT * FROM Filme
WHERE nome LIKE "% vida%";


##### b) Realize a pesquisa de um filme, ou seja: pesquise se o termo de busca está contido no título ou na sinopse. Utilize qualquer TERMO DE BUSCA para exemplificar.

R)SELECT * FROM Filme
WHERE (nome LIKE "% senhora%") OR (sinopse LIKE "% senhora%");


##### c) Procure por todos os filmes que já tenham lançado

R)SELECT * FROM Filme
WHERE (lançamento < "2022-11-09");

##### d) Procure por algum filme que já tenha lançado, com o termo de busca contido no título ou sinopse e com a avaliação maior do que 7. 

R) SELECT * FROM Filme
WHERE (lançamento < "2022-11-09") AND (avaliacao > 7) AND (nome LIKE "% senhora%" OR sinopse LIKE "% senhora%");