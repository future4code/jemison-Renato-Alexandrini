import { Character } from "./interfaces";

export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        input.life === undefined ||
        input.strength === undefined ||
        input.defense === undefined
    ) {
        return false;
    }

    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false;
    }

    return true;
};


export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
  ) => {
    if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
      if(defender.life <= 0){
        return 'Defensor faleceu'
      }
    }
    if(attacker.strength<defender.defense){
        return 'Defesa maior que o ataque'
    }
  };

  //c. Explique, com as suas palavras, as diferenças entre as duas implementações(com e sem a função validator injetada)
  /*R) Com a função validator injetada, nós conseguimos testar a função que recebe o validator, sem precisar testar de fato a função que valida, pois como ela é um atributo da função
  pode receber qualquer outra função que retorne o valor esperado.
  */ 

  //a. De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes? Justifique
  /*R)Devemos criar um Mock da função ValidateCharacter, para conseguir testar com mais facilidade a função performAttack, já que a função performAttack precisa do resultado da
  função validateCharacter para funcionar.
   */

