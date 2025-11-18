import app from "./app.js";
import db from "./db/index.js";

const PORT = 3000; //TODO : implement env and fetch port from there later
async function start() {
    try{
        await db.sequelize.sync();
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
    }catch(err){
        console.error("DB connection error:", err);
    }

}

start();