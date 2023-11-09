const express = require("express")

const app = express()
const port = 8080
const randomDogFacts = [
        "Dogs are the most popular pet on the planet",
        "They evolved from a now-extinct species of wolf",
        "They can learn over 100 words and gestures",
        "Seventy percent of people sign their dog’s name on their holiday cards",
        "Dogs’ noses can sense heat and thermal radiation, which explains why blind or deaf dogs can still hunt",
        "Yawning is contagious — even for dogs. Research shows that the sound of a human yawn can trigger one from your dog. And it’s four times as likely to happen when it’s the yawn of a person your pet knows"
]

app.get("/api/dogFact", (req, res) => {
    const randomDogFact = randomDogFacts[Math.floor(Math.random()*randomDogFacts.length)]

    res.status(200).json({fact: randomDogFact})
})

app.listen(port, "0.0.0.0", ()=> {
    console.log("Servidor ejecutandose en el puerto: ", port)
})
