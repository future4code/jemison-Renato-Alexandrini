import axios from "axios";


//Exercício 01

export async function getAddress(cep: string) {
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json`);
  
      return {logradouro:`${data.logradouro}`, bairro:`${data.bairro}`, localidade:`${data.localidade}`, uf:`${data.uf}`}
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  
 