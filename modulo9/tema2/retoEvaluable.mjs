import 'dotenv/config';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: 'gpt-4o-mini',
  messages: [
    { role: "system", content: "Eres un periodista expecializado en la historia del cine" },
    {
      role: "user",
      content: "Escribe un articulo sobre la evolucion del cine desde el cine mudo hasta nuestros dias ahondando en la importancia de la musica, la fotografia y el guion en la narrativa cinematografica, tambien como los diferentes acontecimientos historicos han influido en el cine(guerras, crisis, pandemias...etc) y como el cine ha influido en la sociedad, incluyendo la llegada de la television y las plataformas de streaming, y como estas han cambiado la forma en que consumimos cine."
    },
    { 
      role: "assistant",
      content: "# La Evolución del Cine: Desde el Cine Mudo Hasta Nuestros Días\nEl cine, como forma de arte y medio de comunicación, ha recorrido un fascinante viaje desde sus humildes comienzos en el siglo XIX hasta convertirse en una de las industrias más influyentes y rentables del mundo. Esta evolución no solo refleja desarrollos tecnológicos, sino también cambios sociales, culturales y artísticos que han moldeado las narrativas que consumimos.\n\n## Los Inicios: El Cine Mudo (1890-1927)\nEl cine comenzó como una mera curiosidad tecnológica a finales del siglo XIX. Los primeros proyectores, como el kinetoscopio de Thomas Edison y el cinematógrafo de los hermanos Lumière, permitieron la proyección de imágenes en movimiento. Las películas silenciosas, que generalmente duraban unos pocos minutos, capturaban escenas cotidianas, actos circenses y pequeños dramas, sin ningún tipo de diálogo sonoro.\n\nDurante la década de 1920, el cine mudo alcanzó su apogeo. Directores como Charlie Chaplin, Buster Keaton y D.W. Griffith no solo se convirtieron en íconos del cine, sino que también comenzaron a explorar la narrativa compleja y el desarrollo de personajes a través del lenguaje visual y la actuación física. Las películas mudas, acompañadas de música en vivo, lograron una profunda conexión emocional con las audiencias, sentando las bases para la narrativa cinematográfica moderna.\n\n## La Revolución del Cine Sonoro (1927-1930)\nEl lanzamiento de \"El cantante de jazz\" (1927), la primera película hablada, marcó el inicio de una nueva era. El cine sonoro transformó la industria, despojando a muchos actores de su estrellato si no podían adaptarse a la nueva forma de actuación. Las películas sonoras abrieron nuevas posibilidades creativas y técnicas, incorporando el uso del di...",
    },
    { role: "user", content: "Escribe un articulo sobre la evolucion del cine desde el cine mudo hasta nuestros dias ahondando en la importancia de la musica, la fotografia y el guion en la narrativa cinematografica, tambien como los diferentes acontecimientos historicos han influido en el cine(guerras, crisis, pandemias...etc) y como el cine ha influido en la sociedad, incluyendo la llegada de la television y las plataformas de streaming, y como estas han cambiado la forma en que consumimos cine." },
    {
      role: "assistant",
      content: `
#### La Edad de Oro de Hollywood (1940-1960)
Durante esta época, el cine se afianzó como un medio dominante de entretenimiento. Los grandes estudios de Hollywood, como MGM, Warner Bros., y Universal, produjeron clásicos atemporales que todavía resuenan en la cultura popular. Películas como "Casablanca" (1942) y "Lo Que el Viento se Llevó" (1939) no solo definieron un estilo, sino que también establecieron estándares narrativos y visuales.
El cine comenzó a experimentar con el color, con películas como "El Mago de Oz" (1939) y "Ben-Hur" (1959), que cautivaron a las audiencias con su esplendor visual. Al mismo tiempo, el neorrealismo italiano trajo consigo una nueva perspectiva, mostrando la vida cotidiana con un enfoque más crudo y auténtico.
#### La Revolución Contracultural y el Nuevo Hollywood (1960-1980)
La década de 1960 marcó un cambio significativo en la narrativa cinematográfica, impulsada por movimientos sociales y políticos. Directores como Martin Scorsese, Francis Ford Coppola y Woody Allen comenzaron a desafiar las normas establecidas, creando películas que reflejaban los conflictos y las ansiedades de una sociedad cambiante. Obras emblemáticas como "El Padrino" (1972) y "Taxi Driver" (1976) no solo fueron un éxito comercial, sino que también desafiaron las convenciones narrativas.
El cine de esta época también se benefició de innovaciones técnicas como el uso de la cámara de mano y el montaje no lineal, lo que permitió a los cineastas explorar la subjetividad de los personajes de maneras inéditas.
#### La Era Digital y el Cine Contemporáneo (1980-Presente)
La llegada de la tecnología digital en la década de 1980 y el 2000 supuso una revolución en la producción y distribución cinematográfica. Con la digitalización, las barreras de entrada se redujeron, permitiendo la creación de cineastas independientes y el florecimiento de festivales de cine locales. Películas como "El Proyecto de la Bruja de Blair" (1999) muestran cómo se pueden lograr grandes narrativas con presupuestos modestos.
A medida que la tecnología avanzó, también lo hicieron las técnicas de animación y efectos especiales. La llegada de CGI (imágenes generadas por computadora) transformó la forma en que se contaban las historias. Franchises como "Star Wars" y "El Señor de los Anillos" redefinieron el cine de blockbuster, estableciendo nuevos estándares para la narrativa épica y la creación de universos ficticios.
Hoy en día, el cine continúa evolucionando, impulsado por la llegada de plataformas de streaming y el acceso inmediato a una vasta cantidad de contenido en línea. Directores de diversas procedencias y estilos están llevando sus visiones al público global, creando un cine más inclusivo y diverso.
#### Conclusión
Desde los días del cine mudo hasta la era digital contemporánea, el cine ha sido un reflejo de la condición humana. Ha evolucionado en su técnica, forma y narración, adaptándose a los cambios en la tecnología y la cultura. A medida que el cine sigue avanzando, es probable que continúe sorprendiendo y desafiando nuestras percepciones, invitándonos a explorar el mundo a través de nuevas historias y visiones. Sin duda, el viaje del cine está lejos de haber terminado; apenas estamos comenzando a entender su potencial y su poder como medio artístico y social.`
    }, 
    {
      role: "user",
      content: "Comenta mas cosas como los eventos en la sociedad que han influido en el cine, como la guerra, la crisis, la pandemia, etc."
    }
  ]
});

console.log(completion.choices[0].message.content);

// Solo use el codigo referente a la memoria, es cierto que del primero al segundo articulo, cambio ciertos puntos que le pedi, pero del segundo al tercero le pedi que ahondase en eventos historicos y no lo hizo, basicamente dijo lo mismo, cambio los rangos de años y añadio un parrafo mas, pero no ahondo en lo que le pedi, por lo que no me sirvio de mucho.
// No quise hacer mucchas peticiones para no gastar demasiado dinero 
// no me funciono la variable de entorno en el sistema, lo hice con el .env
// tuve que cambiar la esxtension de .js a .mjs para poder usar import en vez de require