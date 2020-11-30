const express = require('express')
const app = express()
const models = require('./models')

// let character = models.Character.build({
//     name: 'Tavi',
//     race: 'Human',
//     age: 27,
//     class: 'King',
//     abil: 'Single-hand sword, shield, charm, fire magic, light magic, explosive magic, deception, loyalty, stealth, carisma',
//     level: 100,
//     exp: 999999999,
//     hp: 55258,
//     mp: 30247,
//     str: 69,
//     agi: 42,
//     def: 75
// })

character.save()
.then((testCharacter) => {
    console.log(testCharacter)
})

let characters = [] // make this into a database...this is for testing purposes


// app.get('/characters', (req,res) => {
//     characters.push({
//         name: 'Octavius',
//         race: 'human',
//         class: 'adventurer',
//         age: 27,
//         level: 1
//     })

//     res.json(characters)
// })

// app.post('/characters', (req,res) => {

// })


app.listen(5432, () => {
    console.log('DND Server is running...')
})