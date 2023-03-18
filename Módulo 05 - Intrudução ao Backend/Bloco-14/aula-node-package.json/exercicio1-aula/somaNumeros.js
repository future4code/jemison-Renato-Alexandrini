let n1 = Number(process.argv[2])
let n2 = Number(process.argv[3])

const Somar = ((n1,n2)=>{
    return n1+n2
})
const resposta = Somar(n1, n2)

console.log(resposta);
