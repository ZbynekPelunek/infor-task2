import fetch from 'node-fetch';
const { convertXML } = require('simple-xml-to-json');
import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log('Server started and listening on port ' + PORT);
});

app.get('/api/movies', async (req, res) => {
    if (req.query.title) throw "Query parameter 'title' is required";
    const title: string = (req.query as any).title;

    if (typeof(title) !== 'string') throw "Query parameter 'title' must be of type String";

    try {
        const movie = await getMovieData(title);

        res.status(200).json(movie);
    } catch (error) {
        res.status(400).json({ message: error })
    };

});

interface GetMovieFuncInterface {
    (title: string): Promise<string>;
};

let getMovieData: GetMovieFuncInterface;

getMovieData = async (title) => {
    try {
        const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${process.env.API_KEY}&r=xml`);
        const data: string = await response.text();
        const dataToJson = await convertXML(data);
        return dataToJson;
    } catch (error) {
        console.log(error);
    };

    //console.log(dataToJson);
};