const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile("/workspaces/rsogame/index.html")
   });
const port = 7080;
app.listen(port, () => {
 console.log(`Server is running at http://localhost:${port}`);
});