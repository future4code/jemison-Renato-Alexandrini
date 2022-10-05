
const value = 0
const letter =''
const converted = 0

const TemperatureConverter =(value, letter)=>{
if(typeof(value) != 'number'){
     return console.log("A temperatura precisa ser um valor númerico")
}else if(typeof(value) === 'number' && toUpperCase(letter) === 'F') {
converted = (value * 1.8) + 32
return console.log(`${value}º graus Celsius é equivalente a ${converted}º Farenheit`)
}else if(typeof(value) === 'number' && toUpperCase(letter) === 'K') {
     converted = (value + 273) 
     return console.log(`${value}º graus Celsius é equivalente a ${converted}º Kelvin`)
}
}

TemperatureConverter(20, k)
