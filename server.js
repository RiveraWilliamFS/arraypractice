require("dotenv").config();
const app = require("./appProSkater"); 
const connectDB = require("./appProSkater/db/config")

connectDB();

const port = process.env.PORT || 3000; 

app.listen(port, () => {
    console.log(`Server is running on ${port}`); 
});

