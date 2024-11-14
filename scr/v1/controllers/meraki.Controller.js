export class MerakiController {
    static getMerakiData(req, res) {
        // Este método maneja las solicitudes GET para la validación
        try {
            // Responde con el validador para confirmar la configuración de la API
            return res.send('909415abfb1ab86854b5b6a94d8bb529d8091b02');
        } catch (error) {
            console.error(error);
            return res.status(400).json({ status: "error inesperado" });
        }
    }

    static postMerakiData(req, res) {
        // Este método maneja las solicitudes POST con datos de ubicación
        try {
            // Imprime los datos de ubicación recibidos en la terminal
            console.log('Datos de ubicación recibidos:', req.body);

            // Aquí puedes procesar los datos según tus necesidades
            // Por ejemplo, guardarlos en una base de datos o enviarlos a otro servicio

            // Envía una respuesta para confirmar la recepción de los datos
            return res.status(200).json({ message: "Datos recibidos" });
        } catch (error) {
            console.error(error);
            return res.status(400).json({ status: "error inesperado" });
        }
    }
}
