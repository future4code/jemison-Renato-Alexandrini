import React from 'react';
import styled from 'styled-components';

const Card = styled.section`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  border: 1px solid #000000;
  border-radius: 10px;

  .coral {
    color: coral;
    font-weight: bold;
  }

  :hover {
    cursor: pointer;
    background-color: lightsalmon;
  }
`
function App(){
  const arrayDePessoas =[
    {nome:"Julia", idade:23},
    {nome:"Tati", idade: 26},
    {nome:"Renato", idade: 35},
    {nome:"Leonardo", idade:30},
    {nome:"Pedro", idade:31}
  ]

  const pessoas = arrayDePessoas.map((pessoa, index) =>{
    return (
      <Card key={index}>
        <p>{pessoa.nome}</p>
        <p className='coral'>{pessoa.idade}</p>
      </Card>
    )

})
return(
  <main>
    {pessoas}
  </main>
)
}

export default App;
