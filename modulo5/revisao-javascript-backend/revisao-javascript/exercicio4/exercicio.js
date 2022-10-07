

let lista = [
    {
        nome: "Banana"
    },
    {
        nome: "Laranja"
    },
    {
        nome: "Cebola"
    }
]
let newArray = []
const UnicList = (secondArray) => {
    let arrayJunction = [...lista, ...secondArray]
arrayJunction.forEach((item)=>{
    let duplicatedItem = newArray.findIndex(dupItem =>{
        return item.nome == dupItem.nome }) > -1
    if(!duplicatedItem){
        newArray.push(item)
    }
})
 console.log(newArray)
}

let list2 = [{ nome: 'Banana' }, { nome: 'Acerola' }, { nome: 'Cebola' }, { nome: 'Jabuticaba' }, { nome: 'Banana' }, { nome: 'Cenoura' }]
UnicList(list2)

let list3 = [{ nome: 'Couve' }, { nome: 'Repolho' }, { nome: 'Manga' }, { nome: 'Jabuticaba' }, { nome: 'Banana' }, { nome: 'Banana' }, { nome: 'Banana' },{ nome: 'Banana' },{ nome: 'Cebola' }]
UnicList(list3)