import 'dotenv/config';
import colors from 'colors';
import readline from 'readline';
import OpenAI from 'openai';

colors.enable();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function chatbot() {
  console.log("Bienvenido al chatbot GPT-4".brightCyan);
  
  // Solicitar el contenido del sistema
  rl.question("Por favor, define el rol del sistema (content del system): ".brightCyan, async (contentRole) => {
    console.log(`El rol del sistema ha sido configurado como: "${contentRole}"`.brightCyan);

    // Bucle para preguntas y respuestas
    while (true) {
      const entradaUsuario = await new Promise((resolve) => {
        rl.question("Tu pregunta: ".yellow, resolve);
      });

      // Verificar si el usuario quiere salir
      if (entradaUsuario.toLowerCase() === "adios") {
        console.log("¡Gracias por usar el chatbot! Hasta luego.".brightCyan);
        rl.close();
        break;
      }

      try {
        // Enviar la pregunta a OpenAI
        const respuesta = await openai.chat.completions.create({
          model: 'gpt-4o-mini',
          messages: [
            { role: "system", content: contentRole },
            { role: "user", content: entradaUsuario },
          ],
        });

        // Mostrar la respuesta de OpenAI
        console.log("Respuesta de OpenAI:".brightCyan);
        console.log(respuesta.choices[0].message.content.green);
      } catch (error) {
        console.error("Error al comunicarse con OpenAI:".brightCyan, error.message.red);
      }
    }
  });
}

chatbot();