# Exercícios da aula de relações em SQL

### Exercício 01

#### No nosso sistema, os filmes podem ser avaliados com uma nota de 0 a 10. Só que, agora, queremos pegar comentários junto com essas notas.
#### Para isso, teremos que criar uma tabela para guardar essas informações. 

#### As avaliações estão diretamente relacionadas aos filmes. Cada filme pode ter várias avaliações; e uma avaliação está sempre atrelada a apenas um filme.
#### Ou seja, é uma relação **1:N**. Essa situação é representada colocando uma referência da tabela de filmes na tabela de avaliação, através de uma chave estrangeira.
#### Abaixo, há a Query que cria essa tabela
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
)
```
#### a) Explique o que é uma chave estrangeira
R) Chave estrangeira é o dado que referencia diretamnete uma ocorrência em outra tabela do mesmo banco de dados

#### b) Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
R)
```
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(10),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "001", 
  "Não assisti, não consigo opinar.....",
  10,
"001"  
);
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "002", 
  "Até assisti, mas, não consigo opinar.....",
  9,
"002"  
);
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "003", 
  "Muito Bom!",
  8,
"003"  
);
INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "004", 
  "Perfeito!",
  10,
"004"  
);
```

#### c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
R) O workbench apresenta um erro que não é possível criar uma ocorrência na tabela por conta de uma falha na chave estrangeira 

#### d) Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating.
R)
```
ALTER TABLE Movies
DROP COLUMN rating;
```
#### e) Tente apagar um filme que possua avaliações. Anote e explique o resultado da query.
R) O Workbench apresenta um erro que não é possível deletar nem atualizar uma linha que contenha um dado parente, no caso o id do filme como chave estrangeira.


### Exercício 02

#### Algo muito importante que está faltando na nossa aplicação é representar o elenco dos filmes. Até agora, possuímos uma tabela com os filmes e outra tabela com os atores. Nós sabemos que um ator pode participar de vários filmes; e um filme pode ser estrelado por vários autores. Isso caracteriza uma relação N:M.

#### Essa relação é normalmente representada por uma tabela de relação. No nosso caso, vamos chamar essa tabela de MovieCast ("elenco do filme"). Ela vai possuir apenas duas colunas que fazem referências aos filmes e aos atores através de duas chaves estrangeiras.
```
CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
```

#### a) Explique, com as suas palavras, essa tabela
R)Esta tabela é uma simples junção de um id de um ator com um id de filme, ao buscar pelo id do filme, vc vai retornar todos os atores que fizeram o filme e ao buscar o id do ator, vai retornar todos os filmes que ele fez.

#### b) Crie, ao menos, 6 relações nessa tabela 
R)
```
INSERT INTO MovieCast (actor_id, movie_id)
VALUES(
"001",
"001"
);
INSERT INTO MovieCast (actor_id, movie_id)
VALUES(
"002",
"001"
);
INSERT INTO MovieCast (actor_id, movie_id)
VALUES(
"004",
"002"
);
INSERT INTO MovieCast (actor_id, movie_id)
VALUES(
"004",
"001"
);
INSERT INTO MovieCast (actor_id, movie_id)
VALUES(
"003",
"003"
);
INSERT INTO MovieCast (actor_id, movie_id)
VALUES(
"001",
"004"
);
```

#### c) Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
R)O Workbench apresenta o mesmo erro que não é possível adicionar nem atualizar a linha por conta de um erro na chave estrangeira

#### d) Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
R)O Workbench apresenta o mesmo erro que não é possível deletar nem atualizar uma linha que contenha um dado parente



### Exercício 03

#### Para ler informações dessas tabelas, nós podemos aproveitar a relação entre elas e já juntar informações delas duas. Isso pode ser feito através do operador JOIN. 
#### Vamos começar estudando o INNER JOIN. Esse operador retorna somente os dados que possuem correspondentes nas duas tabelas. Então, por exemplo, se quisermos pegar todos os filmes que já foram avaliados e as suas respectivas avaliações, poderíamos fazer assim: 
```
SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;
```
#### a) Explique, com suas palavras, a query acima. O que é o operador ON?
R) O Operador ON indica qual o dado que será utilizado para encontrar as relações entre as tabelas

#### b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
R)SELECT m.id, m.name as movies_id, r.rate as rating FROM Movies m
INNER JOIN Rating r ON m.id = r.movie_id;


### Exercício 04

#### Existem outros dois operadores do tipo `JOIN`: `LEFT JOIN` e `RIGHT JOIN`. O primeiro retorna **todas as ocorrências** da **primeira** tabela (à esquerda) e, então, procura todas as correspondências dessa tabela na outra. O segundo operador retorna **todas as ocorrências** da **segunda** tabela (à direita) e, então, procura todas as correspondências na outra tabela.

#### a) Escreva uma query que retorne todos os filmes e suas avaliações (com essa avaliação existindo ou não). A sua query deve retornar somente o nome, id, nota do filme e comentário
R)
```
SELECT m.name, m.id as movies_id,  r.rate as rating, r.comment as rating_comment
FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

#### b) Escreva uma query que retorne todas as relações de elenco, junto com as informações do filme. A sua query deve retornar o id do filme, título do filme e id do ator
R)
```
SELECT m.id as movies_id, m.name, mc.actor_id FROM Movies m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

#### c) Escreva uma query que retorne a média das avaliações de todos os filmes agrupada em relação aos filmes (mesmo que ele não tenha sido avaliado ainda)
R)
```
SELECT AVG(r.rate), m.id, m.name FROM Movies m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

### Exercício 05

#### Agora, para finalizar, vamos ver uma query com a nossa relação M:N. Nela, nós temos 3 tabelas envolvidas: Movie, Actor e MovieCast. Já vimos que conseguimos juntar informações de duas tabelas na mesma query, certo? Agora, vamos tentar unir as informações das três tabelas de uma vez só.

#### Para isso, só precisamos usar o operador JOIN duas vezes, mas em uma ordem que faça sentido. Primeiro, unimos uma das tabelas independentes (Movie e Actor) com a tabela de junção MovieCast, e, só então, unimos com a outra tabela independente. Veja essa query abaixo:
```
SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

#### a) Explique, com suas palavras essa query. Por que há a necessidade de dois JOIN?
R) São utilizados os dois JOINs pois estamos unindo informações de 3 tabelas diferentes, sendo que a tabela MovieCast está servindo para acharmos quais atores fazem quais filmes

#### b) Altere a query para que ela retorne o id e o título do filme, e o id e o nome do ator. Coloque alias para facilitar o endentimento do retorno da query
R)
```
SELECT m.id as movie_id, m.name, a.id as actor_id, a.name FROM Movies m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

#### c) A query abaixo deveria ser a resposta do item b. Tente rodá-la. Anote e explique o resultado.
```
SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```
R)A primeira linha faz a request de todos os itens que queremos apresentar, mesmo os que estão em tabelas diferentes, entãoa  segunda linha acha as conexões entre atores e filmes e a ultima linha
usa a conexão da segunda liha para identificar os atores que fizeram os filmes e para dar sentido ao alias utilizado na primeira linha dos dados que estão na tabela Actor.

#### d) Desafio: Faça uma query que retorne todos os filmes com o nome de seus atores e as suas avaliações (nota e comentário)
R)
```
SELECT 
	m.id as movie_id, 
    m.name, 
    a.id as actor_id, 
    a.name, 
    r.rate, 
    r.comment 
FROM Movies m
LEFT JOIN Rating r on r.movie_id = m.id
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```


### Exercício 06

#### Para finalizar esse exercício, você vai ter que implementar, a sós, uma nova relação no nosso sistema: os Óscar dos filmes. Armazene o nome do óscar (Óscar de melhor filme,  Óscar de melhor direção, etc) e a data em que o filme o ganhou. Lembre-se que, nesse caso, estamos só considerando o óscar para os filmes.

#### a) Que tipo de relação é essa?
R) É uma relação de muitos para muitos(n:m), pois a cada ano uma categoria de oscar vai premiar um filme diferente e um filme pode ser premiado com mais de uma estatueta.

#### b) Explicite a query que você usou para criar a tabela
R)
``` 
CREATE TABLE OscarPremiation (
		category VARCHAR(255) NOT NULL,
		premiationYear YEAR NOT NULL,
		movie_id VARCHAR(10),
    actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
    PRIMARY KEY (category, premiationYear)
);
```
Eu pensei em criar uma chave primária composta entre categoria e ano de premiação, para evitar de uma categoria ser repetida no mesmo ano, então a tabela recebe uma categoria e um ano que são obrigatórios e depois como chave estrangeira pode receber o id de um filme ou o id de um ator, no caso de categorias como melhor ator, por isso não coloquei nenhum dos campos obrigatórios

#### c) Crie ao menos 2 óscar para cada um dos filmes 
R)
```
INSERT INTO OscarPremiation (category, premiationYear, movie_id)
VALUES(
"Best Movie",
"2020",
"004"
);
INSERT INTO OscarPremiation (category, premiationYear, movie_id)
VALUES(
"Best Movie",
"2021",
"002"
);
INSERT INTO OscarPremiation (category, premiationYear, movie_id)
VALUES(
"Best Sound Effects",
"2021",
"003"
);
INSERT INTO OscarPremiation (category, premiationYear, movie_id)
VALUES(
"Best Visual Effects",
"2020",
"004"
);
```

#### d) Faça uma query que retorne todos os filmes e seus respectivos óscar
R)
```
SELECT m.name, m.id as movies_id,  o.category as category, o.premiationYear as premiationYear
FROM Movies m
LEFT JOIN OscarPremiation o ON m.id = o.movie_id;
```