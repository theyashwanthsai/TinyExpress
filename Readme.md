# TinyExpress 

## Overview

TinyExpress is a lightweight and simplified clone of the popular Node.js web application framework, Express.js. This repository provides a fundamental implementation of key Express features, making it an excellent resource for learning and experimentation.

## Features

TinyExpress provides the following key features:

1. **Routing**: Define routes for your application, including handling different HTTP methods like GET, POST, PUT, and DELETE.

2. **Middleware**: Utilize middleware functions to perform tasks such as request processing, authentication, logging, and error handling. **ToDo**

3. **Request and Response Objects**: Access and manipulate request and response objects for easy interaction with clients.

4. **Error Handling**: Handle errors gracefully by implementing custom error handling middleware.

5. **Simplicity**: TinyExpress is designed to be straightforward and easy to use, making it a great choice for small to medium-sized projects.

## Getting Started

## Basic Usage
> Clone this repo, and in index.js file, you can start with the basic hello-world:
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
