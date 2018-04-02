const express = require("express");
const app = express();

const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());

const Animals = require("./models/animals");

// List
app.get("/animals", (request, response) => {
	Animals.list().then(animals => {
		response.status(201).json({ animals });
	});
});

// Read
app.get("/animals/:id", (request, response) => {
	Animals.read(request.params.id).then(animal => {
		response.status(200).json({ animal });
	});
});

// Create
app.post("/animals", (request, response) => {
	Animals.create(request.body.animal).then(animal => {
		response.status(201).json({ animal });
	});
});

// Update
app.put("/animals/:id", (request, response) => {
	Animals.update(request.params.id, request.body.animal).then(animal => {
		response.status(201).json({ animal });
	});
});

// Delete (Notice that "delete" is a keyword so the funtion method is called "remove")
app.delete("/animals/:id", (request, response) => {
	Animals.remove(request.params.id).then(() => {
		response.status(204).json({});
	});
});

module.exports = app;
