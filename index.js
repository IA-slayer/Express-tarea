const app = require("./src/app/app");
const datbaconexion = require("./src/database/conexion");
const port = 3000;

datbaconexion()
  .then(() => {
    // Iniciar el servidor Express después de conectar a la base de datos
    app.listen(port, () => {
      console.log(`Aplicacion corriendo en ${port}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error.message);
    // Manejar el error adecuadamente, por ejemplo, cerrar la aplicación o intentar reconectar
  });