const fs = require('fs')
const contenido = fs.readFileSync("./archivo.txt", "utf-8")
console.log(contenido)