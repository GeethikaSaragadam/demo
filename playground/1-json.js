const fs = require('fs')
const { userInfo } = require('os')
// const book = {

//     title:'Ego is the Enemy',
//     author:'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)




// const dataBuffer=fs.readFileSync(`1-json.json`)
// const dataJSON=dataBuffer.toString()
// const data=JSON.parse(dataJSON)
// console.log(data.title)



const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name='geeethika'
user.age= 24


const userJSON = JSON.stringify(user)
fs.writeFileSync('1-json.json',userJSON)


















// console.log(bookJSON)

// const parseData = JSON.parse(bookJSON)
// console.log(parseData.author)