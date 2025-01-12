let password = '123aaaaA!@'
//1.check at least has 8 characters
console.log('1.',password.length>= 8)
//2.check if it has upper case letter 
console.log('2.',password.toLowerCase() !=password)
//3.check if it has lower case letter 
console.log('3.',password.toUpperCase() !=password)
//4.check if it has symbol
let noUpperCase=password.toLowerCase()==password
let noLowerCase=password.toUpperCase()==password
let hasSymbol = /[^A-Za-z0-9]/.test(password)
console.log('4.',hasSymbol)