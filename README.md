# Infor engineer test - Task 2

Simple XML to JSON transformator for movie data.

>**GET** /'movies'

- required query string **title**

Example:
`
localhost:4001/movies?title=Titanic
`

Returns information about the titled movie. Response is transformed JSON from XML from endpoint
`
http://www.omdbapi.com/
`

## Table of contents

- [Installation](#installation)
- [Technologies](#technologies)
- [NPM Libraries](#npm-libraries)
- [Framework](#framework)
- [Note](#note)
- [Status](#status)

## Installation

Initialize git in your folder of choise with

```bash
git init
```

Then clone this repository

```bash
git clone https://github.com/zbynekpelunek/infor-task2
```

Install all required node modules

```bash
npm i
```

Add file *.env* to the root folder and fill it with values shown in *.env.example*

Finally, start the server

```bash
npm start
```

Using Postman or just browser, you can now access the API endpoint on localhost

`
localhost:4001/movies?title=<movie_title>
`

### Technologies

- Javascript
- Typescript

### NPM Libraries

- node-fetch
  - required to fetch data from other API endpoints
- simple-xml-to-json
  - very light library for xml to json transformation

### Framework

- Express.JS

### Note

The task also contains typescript code with everything prepared to simply use typescript instead of javascript, unfortunately, because of error from node-fetch (code: 'ERR_REQUIRE_ESM') I couldn't finish it.

### Status

 Task is: _complete_
