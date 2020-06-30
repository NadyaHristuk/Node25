const express = require('express');
const dotenv = require('dotenv');
const Joi = require('@hapi/joi');
const cors = require('cors');
const fetch = require('node-fetch');

dotenv.config();

const app = express(); //server
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(addAllowOriginHeader);
// app.options('*', addCorsHeaders);
app.use(cors({ origin: "http://localhost:3000" }));

const reqHeaders = () => {
	return (req, res, next) => {
		if (req.headers['content-type'] !== 'application/json') {
			res.status(400).send('Not application/json');
		} else {
			next();
		}
	};
};

app.post('/server', reqHeaders, (req, res) => {
        res.send(req.body);
})

const schema = Joi.object({
    city: Joi.string().required()
})

app.post('/weather', validateWeatherQueryParams,  getWeather)

function validateWeatherQueryParams(req, res, next) {
    const result = schema.validate(req.body);
    console.log(result);
    if (result.error) {

        res.status(400).josn({"message": "missing required name field"});
    }

    next();

}

async function getWeather(req, res) {
	const { city } = req.body;

	const response = await fetch(
		`http://api.weatherstack.com/current?access_key=${process.env.KEY}&query=${city}`
	);
	const responseBody = await response.json();

	if (responseBody.error) {
		return res.status(responseBody.code).send(responseBody.error);
	}

	return res.status(200).send(responseBody);
}


function addAllowOriginHeader(req, res, next) {
	res.set('Access-Control-Allow-Origin', 'http://localhost:3000');
	next();
}

function addCorsHeaders(req, res, next) {
	res.set('Access-Control-Allow-Methods', req.headers['access-control-request-method']);
	res.set('Access-Control-Allow-Headers', req.headers['access-control-request-headers']);

	res.status(200).send();
}

app.listen(PORT, () => {console.log('Server is running '+PORT)})