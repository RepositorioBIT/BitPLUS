require('dotenv').config()

const express = require("express")
const mongoose = require("mongoose")
const Fact = require("./fact_model")

const app = express()
const PORT = process.env.PORT
const BIND_HOST = process.env.BIND_HOST
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PORT = process.env.MONGO_PORT
const MONGO_DB = process.env.MONGO_DB

app.use(express.json())

try {
	mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`)
	console.log("Conexión establecida con la base de datos")

	app.get("/api/dogFact", async(req, res) => {
		try {
			const count = await Fact.countDocuments();
			if (count === 0) {
				res.status(404).json({ error: "No se encontraron datos en la base de datos" });
				return;
			}

			const random = Math.floor(Math.random() * count);
			const randomFact = await Fact.aggregate([
				{ $skip: random },
				{ $limit: 1 }
			]);

			res.status(200).json({ fact: randomFact[0] });
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Error al obtener el dato aleatorio" });
		}
	})

	app.post("/api/dogFact", async(req, res) => {
		const newFact = new Fact(req.body)

		await newFact.save()
		res.status(200).json(newFact)
	})

	app.listen(PORT, BIND_HOST, ()=> {
		console.log("Servidor ejecutandose en el puerto: ", PORT)
	})
} catch (error) {
	console.log(error)
}
