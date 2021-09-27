import fetch from 'node-fetch';
import { convertXML } from 'simple-xml-to-json';
import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log('Server started and listening on port ' + PORT);
});

app.get('/api/movies', async (req, res) => {
	try {
		if (!req.query.title) throw "Query parameter 'title' is required";
		const { title } = req.query;

		if (typeof title !== 'string')
			throw "Query parameter 'title' must be of type String";

		const movie = await getMovieData(title);

		res.status(200).json(movie);
	} catch (error) {
		res.status(400).json({ message: error });
	}
});

const getMovieData = async (title) => {
	const response = await fetch(
		`http://www.omdbapi.com/?t=${title}&apikey=${process.env.API_KEY}&r=xml`,
	);
	const data = await response.text();
	const dataToJson = convertXML(data);
	return dataToJson;
	//console.log(dataToJson);
};
