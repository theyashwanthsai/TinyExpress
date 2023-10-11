let myexpress = require('./src/myexpress');
const app = myexpress();

app.get('/', (req, res) => {
    res.writeHead(200);
    res.write("HEllow");
    res.end();
});

app.listen(3000, () => console.log('example app listening on port 3000!'))