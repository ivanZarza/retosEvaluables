const app = require("./app");
const { conectarMongoDB } = require("./database");

async function conectarse() {
    try {
        await conectarMongoDB();
        app.listen(3000, () => {
            console.log("Server on port 3000");
        });
    } catch (error) {
        console.error("Error al conectar a MongoDB", error);
    }
}

conectarse();