
const value = 0
const letter = ''
let converted = 0

const TemperatureConverter = (value, letter) => {

     if (typeof (value) != 'number') {
          return console.log("A temperatura precisa ser um valor númerico")
     } else if ((letter).toUpperCase() === 'F') {
      converted = (value * 1.8) + 32
     
          return console.log(`${value}º graus Celsius é equivalente a ${Math.round(converted)}º Fahrenheit`)
     } else if ((letter).toUpperCase() === 'K') {
          converted = value + 273
          return console.log(`${value}º graus Celsius é equivalente a ${converted}º Kelvin`)
     }else{console.log('É necessário escolher entre F - Fahrenheit ou K - Kelvin para converter o seu valor')}
}


TemperatureConverter(25.3, 'f')
TemperatureConverter(30, 'k')
TemperatureConverter(20,'x')
TemperatureConverter('vinte', 'f')
TemperatureConverter('vinte', 'k')
