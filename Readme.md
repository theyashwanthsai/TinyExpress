# TinyExpress Readme

## Project Overview

TinyExpress is a lightweight JavaScript framework designed to mimic the functionality of Express.js, a popular web application framework for Node.js. While Express.js is powerful and feature-rich, it may be overkill for some smaller projects. TinyExpress offers a simpler alternative for building web applications with a minimal footprint.

## Features

TinyExpress provides the following key features:

1. **Routing**: Define routes for your application, including handling different HTTP methods like GET, POST, PUT, and DELETE.

2. **Middleware**: Utilize middleware functions to perform tasks such as request processing, authentication, logging, and error handling. **ToDO**

3. **Request and Response Objects**: Access and manipulate request and response objects for easy interaction with clients.

4. **Error Handling**: Handle errors gracefully by implementing custom error handling middleware.

5. **Simplicity**: TinyExpress is designed to be straightforward and easy to use, making it a great choice for small to medium-sized projects.

## Getting Started

## Basic Usage

```Javascript
let myexpress = require('./src/myexpress'); //import the module
const app = myexpress();

app.get('/', (req, res) => {
    res.writeHead(200);
    res.write("HEllow");
    res.end();
});

app.listen(3000, () => console.log('example app listening on port 3000!'))

```
