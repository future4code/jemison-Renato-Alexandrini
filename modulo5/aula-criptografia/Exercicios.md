# Exercícios da aula de criptografia

### Exercício 01

#### A primeira implementação que vamos fazer refere-se à função que vai cuidar do hash da nossa senha. Vamos utilizar um bem famoso e muito recomendado para senhas de usuários: bcryptjs. A principal vantagem dele é que é gerada uma string aleatória e atrelada à entrada da criptografia. Isso impede que se faça o ataque chamado de rainbow table, que consiste em montar uma tabela com infinitas possibilidades da saída do hash. 

#### Abaixo, há o exemplo de uso da função de hash
```
import * as bcrypt from "bcryptjs";

const rounds = Number(process.env.BCRYPT_COST);
const salt = await bcrypt.genSalt(rounds);
const result = await bcrypt.hash(s, salt);
console.log("encrypted message: ", result);
```

#### a) O que são os round e salt? Que valores são recomendados para o round? Que valor você usou? Por quê?
R) - rounds e salts são valores utilizados pela biblioteca bcrypt para aumentar ou diminuir a complexidade da criptografia.
O valor recomendado varia de acordo com a complexidade do projeto, mas por padrão utilizamos o valor 12, para não deixar a aplicação lenta.

#### b) Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por criptografar uma string usando o bcryptjs.   
R) - Resposta no código

#### c) Agora, crie a função que verifique se uma string é correspondente a um hash, use a função compare do bcryptjs
R) - Resposta no código



### Exercício 02

#### Na aula anterior, implementamos os endpoints de signup e login sem utilizar a criptografia. Vamos agora colocar isso. A ideia é simples: no cadastro, antes de salvar o usuário no banco, temos que criptografar a senha, para que, no banco, não fique a senha em si. Já, no login, em vez de comparar a senha enviada diretamente com a salva no banco, usaremos a biblioteca de Hash para isso. 

#### a) Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.
R) - Para realizar os teste, precisamos primeiro inserir a criptografia no signup, para que o usuário seja adicionado ao banco de dados com a senha criptografada, para então depois conseguirmos testar a leitura da criptografia no login.

#### b) Faça a alteração do primeiro endpoint
R) - Resposta no código

#### c) Faça a alteração do segundo endpoint
R) - Resposta no código

#### d) No exercício da aula anterior, nós criamos o endpoint user/profile. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.
R) - No endpoint de visulizar o profile, não é necessário adicionar alterações relacionadas a criptografia, pois nesta parte do código, o token já será exigido, sendo assim a verificação da senha criptografada já terá sido realizada no login para a validação deste token.




