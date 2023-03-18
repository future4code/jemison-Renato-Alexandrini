
// Na aula, vimos que os arquivos escritos em Typescript, com sua extensão `.ts` passam por um processo de conversão de typescript para Javascript para que
// possam ser lidos e executados. Este processo é chamado de **transpilação**. 

// Com a biblioteca `typescript` instalada, temos acesso ao comando `tsc` no terminal. O `tsc` é o comando responsável por fazer a transpilação dos arquivos.

// Abaixo, há um exemplo de código escrito em Typescript. 

// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.

//r)
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?

// r)Para apenas transpilar para js podemos digitar no console do Visual Studio 'tsc exercico-4.ts', ou no package.json adicionar 
// um script dando um nome para ele e adicionando o comando tsc para o arquivo


// c) E se este arquivo estivesse dentro de uma pasta chamada src. O processo seria diferente? Se sim, descreva as diferenças.

// r) Caso o arquivo esteja dentro de uma pasta, precisamos alterar o caminho no momento de rodar o tsc para ./src/exercicio-4.ts
// ou adicionar a pasta de origem dentro do arquivo tsconfig.json, na parte de 'rootDir', como fizemos no começo deste exercício.

// d) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// r)Podemos executar o comando tsc dentro da pasta sem especificar o nome do arquivo, que ele devera executar a transpilação em todos os arquivos .ts