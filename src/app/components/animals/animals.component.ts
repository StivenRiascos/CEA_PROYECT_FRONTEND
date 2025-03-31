import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnimalDetailComponent } from './animal-details/animal-detail.component';

interface Animal {
  id: number;
  name: string;
  scientificName: string;
  category: 'aves' | 'terrestres' | 'mamiferos';
  image: string;
  description: string;
  habitat: string;
  diet: string;
  conservation: string;
  curiosities: string[];
}

@Component({
  selector: 'app-animals',
  standalone: true,
  imports: [CommonModule, RouterModule, AnimalDetailComponent],
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss'],
})
export class AnimalsComponent implements OnInit {
  animals: Animal[] = [];
  filteredAnimals: Animal[] = [];
  selectedCategory: 'aves' | 'terrestres' | 'mamiferos' | 'todos' = 'todos';
  selectedAnimal: Animal | null = null;
  showDetail: boolean = false;

  ngOnInit(): void {
    this.loadAnimals();
    this.filteredAnimals = this.animals;
  }

  loadAnimals(): void {
    // Datos de ejemplo para los animales
    this.animals = [
      // AVES
      {
        id: 1,
        name: 'Guacamaya Roja',
        scientificName: 'Ara macao',
        category: 'aves',
        image: '../../../assets/images/guacamaya.jpg',
        description:
          'La guacamaya roja es una de las aves más coloridas y emblemáticas de la Amazonía. Su plumaje es principalmente escarlata con algunas plumas azules y amarillas en las alas.',
        habitat: 'Bosques tropicales y subtropicales húmedos',
        diet: 'Frutos, nueces, semillas y ocasionalmente insectos',
        conservation: 'Vulnerable (VU)',
        curiosities: [
          'Puede vivir hasta 60 años en cautiverio',
          'Forma parejas de por vida',
          'Utiliza su poderoso pico para romper nueces y semillas duras',
        ],
      },
      {
        id: 2,
        name: 'Tucán Toco',
        scientificName: 'Ramphastos toco',
        category: 'aves',
        image: '../../../assets/images/tucan_toco.jpg',
        description:
          'El tucán toco es la especie más grande de tucán, reconocible por su enorme pico naranja y amarillo. A pesar del tamaño de su pico, es muy ligero debido a su estructura hueca.',
        habitat: 'Bosques tropicales y sabanas',
        diet: 'Frutas, insectos, huevos de otras aves y pequeños reptiles',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Su pico mide aproximadamente un tercio de la longitud total de su cuerpo',
          'Duerme con la cola doblada sobre su espalda',
          'Puede lanzar su alimento al aire y atraparlo con su pico',
        ],
      },
      {
        id: 3,
        name: 'Águila Harpía',
        scientificName: 'Harpia harpyja',
        category: 'aves',
        image: '../../../assets/images/aguila_arpia.jpg',
        description:
          'El águila harpía es una de las aves rapaces más poderosas del mundo y la más grande de la Amazonía. Posee garras del tamaño de las de un oso grizzly.',
        habitat: 'Bosques tropicales de tierras bajas',
        diet: 'Mamíferos arbóreos como monos y perezosos',
        conservation: 'Casi amenazada (NT)',
        curiosities: [
          'Sus garras pueden ejercer una presión de hasta 42 kg por cm²',
          'Construye nidos enormes que pueden medir hasta 1.5 metros de diámetro',
          'Puede vivir hasta 35 años en estado salvaje',
        ],
      },
      {
        id: 4,
        name: 'Colibrí Cola de Espátula',
        scientificName: 'Loddigesia mirabilis',
        category: 'aves',
        image: '../../../assets/images/colibro_cola_de_espatula.jpg',
        description:
          'Este colibrí es conocido por la forma única de su cola, que termina en dos largas plumas con puntas en forma de espátula. Es una de las especies más raras y extraordinarias de colibríes.',
        habitat: 'Bosques montanos y áreas de vegetación densa',
        diet: 'Néctar de flores y pequeños insectos',
        conservation: 'En peligro (EN)',
        curiosities: [
          'Es endémico de una pequeña región en el norte de Perú',
          'Puede batir sus alas hasta 80 veces por segundo',
          'Los machos realizan elaborados bailes de cortejo',
        ],
      },
      {
        id: 5,
        name: 'Hoatzin',
        scientificName: 'Opisthocomus hoazin',
        category: 'aves',
        image: '../../../assets/images/Hoatzin.jpg',
        description:
          'El hoatzin, también conocido como "pájaro prehistórico", es una especie única con características primitivas. Las crías nacen con garras en sus alas que les permiten trepar por los árboles.',
        habitat: 'Manglares y bosques inundados',
        diet: 'Hojas, flores y frutos',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Es la única ave que digiere la comida por fermentación, similar a las vacas',
          'Emite un olor desagradable que le ha valido el apodo de "pájaro apestoso"',
          'Las crías pueden nadar para escapar de los depredadores',
        ],
      },
      {
        id: 6,
        name: 'Quetzal Resplandeciente',
        scientificName: 'Pharomachrus mocinno',
        category: 'aves',
        image: '../../../assets/images/quetzal-resplandeciente.jpg',
        description:
          'El quetzal resplandeciente es considerado una de las aves más hermosas del mundo, con su plumaje verde iridiscente y las largas plumas de la cola en los machos.',
        habitat: 'Bosques nubosos de montaña',
        diet: 'Frutas, insectos, lagartijas y pequeños vertebrados',
        conservation: 'Casi amenazada (NT)',
        curiosities: [
          'Era considerado sagrado por las civilizaciones maya y azteca',
          'Los machos pueden tener plumas de cola de hasta 1 metro de longitud',
          'Anida en huecos de árboles muertos',
        ],
      },
      {
        id: 7,
        name: 'Gallito de las Rocas',
        scientificName: 'Rupicola peruvianus',
        category: 'aves',
        image: '../../../assets/images/gallito-de-las-rocas.jpg',
        description:
          'El gallito de las rocas es conocido por su brillante plumaje naranja-rojo y su elaborado ritual de apareamiento. Los machos se reúnen en áreas especiales llamadas "leks" para competir por las hembras.',
        habitat: 'Bosques húmedos montanos',
        diet: 'Frutas, insectos y pequeños vertebrados',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Es el ave nacional de Perú',
          'Los machos realizan danzas elaboradas para atraer a las hembras',
          'Su nombre se debe a que anida en grietas de rocas',
        ],
      },
      {
        id: 8,
        name: 'Búho Cornudo',
        scientificName: 'Bubo virginianus',
        category: 'aves',
        image: '../../../assets/images/buho_cornudo.jpg',
        description:
          'El búho cornudo es una de las especies de búhos más grandes y adaptables. Se caracteriza por los penachos de plumas en su cabeza que parecen cuernos.',
        habitat: 'Diversos hábitats desde bosques hasta desiertos',
        diet: 'Roedores, conejos, aves y otros animales pequeños',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Puede girar la cabeza hasta 270 grados',
          'Sus ojos son tan grandes que no pueden moverse en sus órbitas',
          'Es un depredador nocturno extremadamente silencioso',
        ],
      },
      {
        id: 9,
        name: 'Martín Pescador Amazónico',
        scientificName: 'Chloroceryle amazona',
        category: 'aves',
        image: '../../../assets/images/martin-pescador.jpg',
        description:
          'El martín pescador amazónico es un ave acuática de tamaño mediano con un plumaje verde brillante en la parte superior y blanco en la parte inferior. Tiene un pico largo y fuerte para capturar peces.',
        habitat: 'Ríos, lagos y arroyos de la Amazonía',
        diet: 'Principalmente peces, también crustáceos y insectos acuáticos',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Se zambulle desde perchas para capturar peces bajo el agua',
          'Anida en túneles excavados en barrancos cerca del agua',
          'Puede golpear a sus presas contra una rama para aturdirlas antes de comerlas',
        ],
      },
      {
        id: 10,
        name: 'Cóndor Andino',
        scientificName: 'Vultur gryphus',
        category: 'aves',
        image: '../../../assets/images/CONDOR_ANDINO.jpg',
        description:
          'El cóndor andino es una de las aves voladoras más grandes del mundo. Con una envergadura que puede superar los 3 metros, es un símbolo de los Andes y parte importante de la mitología indígena.',
        habitat: 'Montañas y acantilados de los Andes',
        diet: 'Carroña de animales grandes',
        conservation: 'Vulnerable (VU)',
        curiosities: [
          'Puede vivir hasta 70 años',
          'Puede volar a altitudes de hasta 5,500 metros',
          'No tiene garras para cazar, depende completamente de animales muertos',
        ],
      },

      // TERRESTRES
      {
        id: 11,
        name: 'Tortuga Matamata',
        scientificName: 'Chelus fimbriata',
        category: 'terrestres',
        image: '../../../assets/images/TORTUGA_MATA_MATA.jpg',
        description:
          'La tortuga matamata es una de las especies más extrañas de tortugas, con un caparazón que parece corteza de árbol y una cabeza triangular con protuberancias que le dan un aspecto único.',
        habitat: 'Aguas poco profundas, pantanos y ríos de la cuenca amazónica',
        diet: 'Peces, anfibios y otros pequeños animales acuáticos',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Su nombre proviene de una expresión indígena que significa "mata-mata"',
          'Utiliza su boca como una aspiradora para capturar presas',
          'Puede permanecer sumergida durante largos períodos',
        ],
      },
      {
        id: 12,
        name: 'Iguana Verde',
        scientificName: 'Iguana iguana',
        category: 'terrestres',
        image: '../../../assets/images/IGUANA_VERDE.jpg',
        description:
          'La iguana verde es un gran lagarto arborícola conocido por su coloración verde brillante y su cresta dorsal distintiva. Puede alcanzar hasta 2 metros de longitud incluyendo la cola.',
        habitat: 'Bosques tropicales, generalmente cerca de cuerpos de agua',
        diet: 'Principalmente herbívora: hojas, flores y frutas',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Puede caer desde alturas de más de 15 metros sin lastimarse',
          'Puede permanecer bajo el agua hasta 30 minutos',
          'Utiliza su cola como látigo para defenderse',
        ],
      },
      {
        id: 13,
        name: 'Anaconda Verde',
        scientificName: 'Eunectes murinus',
        category: 'terrestres',
        image: '../../../assets/images/Anaconda.jpg',
        description:
          'La anaconda verde es una de las serpientes más grandes del mundo, pudiendo alcanzar más de 9 metros de longitud. Es una constrictora que habita en ambientes acuáticos de la Amazonía.',
        habitat: 'Pantanos, marismas y ríos de aguas tranquilas',
        diet: 'Mamíferos, aves, reptiles y peces',
        conservation: 'No evaluada (NE)',
        curiosities: [
          'Puede permanecer sumergida hasta 10 minutos',
          'Las hembras son significativamente más grandes que los machos',
          'No es venenosa, mata a sus presas por constricción',
        ],
      },
      {
        id: 14,
        name: 'Rana Venenosa Azul',
        scientificName: 'Dendrobates tinctorius "azureus"',
        category: 'terrestres',
        image: '../../../assets/images/RANA_VENENOSA_AZUL.jpg',
        description:
          'La rana venenosa azul es conocida por su brillante coloración azul eléctrico, que advierte a los depredadores de su toxicidad. Es una de las ranas más vistosas de la Amazonía.',
        habitat: 'Suelo del bosque tropical húmedo',
        diet: 'Pequeños insectos, principalmente hormigas y termitas',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Su veneno es utilizado por indígenas para envenenar las puntas de sus dardos',
          'En cautiverio pierde gran parte de su toxicidad',
          'Los machos cuidan de los renacuajos, transportándolos en su espalda',
        ],
      },
      {
        id: 15,
        name: 'Caimán Negro',
        scientificName: 'Melanosuchus niger',
        category: 'terrestres',
        image: '../../../assets/images/CAIMAN_NEGRO.jpg',
        description:
          'El caimán negro es el más grande de los caimanes, pudiendo alcanzar hasta 6 metros de longitud. Su coloración oscura le ayuda a camuflarse en las aguas turbias de la Amazonía.',
        habitat: 'Ríos, lagos y pantanos de la cuenca amazónica',
        diet: 'Peces, aves, mamíferos y otros reptiles',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Fue cazado intensivamente por su piel hasta casi la extinción',
          'Puede vivir hasta 80 años',
          'Las hembras son madres muy protectoras que cuidan a sus crías durante varios meses',
        ],
      },
      {
        id: 16,
        name: 'Boa Arcoíris',
        scientificName: 'Epicrates cenchria',
        category: 'terrestres',
        image: '../../../assets/images/BOA_ARCOIRIS.jpg',
        description:
          'La boa arcoíris es una serpiente no venenosa conocida por los reflejos iridiscentes de su piel que brillan con los colores del arcoíris bajo la luz directa.',
        habitat: 'Bosques tropicales húmedos y secos',
        diet: 'Pequeños mamíferos, aves y lagartijas',
        conservation: 'No evaluada (NE)',
        curiosities: [
          'Es principalmente nocturna',
          'Puede cambiar ligeramente su coloración según su estado de ánimo',
          'A diferencia de otras boas, es más arbórea que terrestre',
        ],
      },
      {
        id: 17,
        name: 'Tortuga de Río Amazónica',
        scientificName: 'Podocnemis expansa',
        category: 'terrestres',
        image: '../../../assets/images/tortuga_rio_amazonas.jpg',
        description:
          'La tortuga de río amazónica es una de las tortugas de agua dulce más grandes del mundo. Las hembras pueden pesar hasta 90 kg y medir más de 1 metro de longitud.',
        habitat: 'Ríos, lagos y lagunas de la cuenca amazónica',
        diet: 'Omnívora: plantas acuáticas, frutas, carroña y pequeños animales',
        conservation: 'En peligro crítico (CR)',
        curiosities: [
          'Puede vivir más de 100 años',
          'Las hembras regresan a las mismas playas cada año para anidar',
          'Sus huevos y carne han sido tradicionalmente consumidos por poblaciones locales',
        ],
      },
      {
        id: 18,
        name: 'Lagarto Basilisco',
        scientificName: 'Basiliscus basiliscus',
        category: 'terrestres',
        image: '../../../assets/images/lagarto_basilico.jpg',
        description:
          'El lagarto basilisco, también conocido como "lagarto Jesús Cristo", es famoso por su capacidad de correr sobre el agua utilizando sus patas traseras. Posee una cresta distintiva en la cabeza y espalda.',
        habitat: 'Bosques tropicales cerca de cuerpos de agua',
        diet: 'Insectos, pequeños vertebrados, flores y frutas',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Puede correr sobre el agua a una velocidad de 1.5 metros por segundo',
          'Es un excelente nadador y trepador',
          'Los machos son territoriales y defienden su área de otros machos',
        ],
      },
      {
        id: 19,
        name: 'Rana de Cristal',
        scientificName: 'Hyalinobatrachium sp.',
        category: 'terrestres',
        image: '../../../assets/images/rana_de_cristal.jpg',
        description:
          'Las ranas de cristal son conocidas por su piel translúcida que permite ver sus órganos internos, incluyendo el corazón latiendo. Son pequeñas y generalmente de color verde claro.',
        habitat: 'Vegetación cerca de arroyos en bosques tropicales',
        diet: 'Pequeños insectos y artrópodos',
        conservation: 'Varía según la especie',
        curiosities: [
          'Los machos cuidan los huevos hasta que eclosionan',
          'Su piel transparente les ayuda a camuflarse en las hojas',
          'Algunas especies tienen huesos verdes debido a una proteína única',
        ],
      },
      {
        id: 20,
        name: 'Cocodrilo del Orinoco',
        scientificName: 'Crocodylus intermedius',
        category: 'terrestres',
        image: '../../../assets/images/cocodrilo del orinoco.jpg',
        description:
          'El cocodrilo del Orinoco es uno de los cocodrilos más grandes y en mayor peligro de extinción. Puede alcanzar hasta 6.6 metros de longitud y es conocido por su agresividad.',
        habitat: 'Ríos, caños y lagunas de la cuenca del Orinoco',
        diet: 'Peces, mamíferos, aves y otros reptiles',
        conservation: 'En peligro crítico (CR)',
        curiosities: [
          'Es uno de los depredadores más grandes de Sudamérica',
          'Fue cazado intensivamente por su piel hasta casi la extinción',
          'Los programas de conservación han logrado aumentar su población en los últimos años',
        ],
      },

      // MAMÍFEROS
      {
        id: 21,
        name: 'Jaguar',
        scientificName: 'Panthera onca',
        category: 'mamiferos',
        image: '../../../assets/images/jaguar.jpg',
        description:
          'El jaguar es el felino más grande de América y el tercero más grande del mundo. Es un depredador tope con un poderoso mordisco que puede perforar cráneos y caparazones de tortugas.',
        habitat: 'Selvas tropicales, pantanos y bosques secos',
        diet: 'Carnívoro: capibara, pecaríes, tapires, caimanes y tortugas',
        conservation: 'Casi amenazado (NT)',
        curiosities: [
          'Puede rugir pero prefiere un sonido similar a un ronroneo profundo',
          'Es un excelente nadador y trepa árboles con facilidad',
          'Su nombre proviene de la palabra indígena "yaguar" que significa "el que mata de un salto"',
        ],
      },
      {
        id: 22,
        name: 'Mono Tití',
        scientificName: 'Saguinus oedipus',
        category: 'mamiferos',
        image: '../../../assets/images/monotiti.jpg',
        description:
          'El mono tití o tamarino es un pequeño primate reconocible por el pelo blanco que rodea su cara, similar a una melena. Es uno de los primates más pequeños, pesando apenas 500 gramos.',
        habitat: 'Bosques tropicales y manglares',
        diet: 'Frutas, insectos, pequeños vertebrados y néctar',
        conservation: 'En peligro crítico (CR)',
        curiosities: [
          'Vive en grupos familiares donde todos ayudan a criar a las crías',
          'Utiliza más de 40 sonidos diferentes para comunicarse',
          'Marca su territorio con glándulas odoríferas',
        ],
      },
      {
        id: 23,
        name: 'Tapir Amazónico',
        scientificName: 'Tapirus terrestris',
        category: 'mamiferos',
        image: '../../../assets/images/Tapir_amazonico.jpg',
        description:
          'El tapir amazónico es el mamífero terrestre más grande de Sudamérica, pudiendo pesar hasta 300 kg. Su característica más distintiva es su pequeña trompa prensil.',
        habitat: 'Bosques tropicales cerca de cuerpos de agua',
        diet: 'Herbívoro: hojas, brotes, frutas y plantas acuáticas',
        conservation: 'Vulnerable (VU)',
        curiosities: [
          'Es un excelente nadador y buceador',
          'Puede permanecer sumergido hasta 30 segundos',
          'Está más relacionado con caballos y rinocerontes que con cerdos',
        ],
      },
      {
        id: 24,
        name: 'Perezoso de Tres Dedos',
        scientificName: 'Bradypus variegatus',
        category: 'mamiferos',
        image: '../../../assets/images/perezoso-de-tres-dedos.jpg',
        description:
          'El perezoso de tres dedos es conocido por su lento movimiento y estilo de vida. Pasa casi toda su vida colgado boca abajo en los árboles, incluso duerme en esta posición.',
        habitat: 'Dosel de bosques tropicales',
        diet: 'Hojas, brotes y frutas',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Se mueve tan lentamente que algas verdes crecen en su pelaje, camuflándolo',
          'Baja al suelo solo una vez por semana para defecar',
          'Puede girar su cabeza casi 180 grados',
        ],
      },
      {
        id: 25,
        name: 'Capibara',
        scientificName: 'Hydrochoerus hydrochaeris',
        category: 'mamiferos',
        image: '../../../assets/images/capibara.jpg',
        description:
          'La capibara es el roedor más grande del mundo, pudiendo pesar hasta 65 kg. Tiene un cuerpo robusto, hocico cuadrado y patas parcialmente palmeadas que lo hacen excelente nadador.',
        habitat: 'Sabanas y bosques cerca de cuerpos de agua',
        diet: 'Herbívoro: pastos, plantas acuáticas y corteza de árboles',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Puede permanecer sumergido hasta 5 minutos',
          'Es un animal social que vive en grupos de hasta 20 individuos',
          'Otros animales, como aves y monos, suelen posarse sobre ellas para descansar',
        ],
      },
      {
        id: 26,
        name: 'Ocelote',
        scientificName: 'Leopardus pardalis',
        category: 'mamiferos',
        image: '../../../assets/images/ocelote.jpg',
        description:
          'El ocelote es un felino mediano con un hermoso pelaje moteado que le proporciona un excelente camuflaje en la selva. Es un cazador nocturno ágil y sigiloso.',
        habitat: 'Bosques tropicales, manglares y sabanas',
        diet: 'Pequeños mamíferos, aves, reptiles y anfibios',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Tiene una visión nocturna seis veces mejor que la humana',
          'Puede saltar hasta 3 metros horizontalmente',
          'Fue cazado intensivamente por su piel en el pasado',
        ],
      },
      {
        id: 27,
        name: 'Delfín Rosado',
        scientificName: 'Inia geoffrensis',
        category: 'mamiferos',
        image: '../../../assets/images/delfin-rosado.jpg',
        description:
          'El delfín rosado o boto es una especie única de delfín de río con una coloración rosada distintiva. Tiene un hocico largo y una frente abultada, así como aletas pectorales grandes.',
        habitat: 'Ríos y lagos de la cuenca amazónica',
        diet: 'Peces, cangrejos y pequeñas tortugas',
        conservation: 'En peligro (EN)',
        curiosities: [
          'Es el delfín de río más grande, pudiendo medir hasta 2.5 metros',
          'Puede girar su cabeza 180 grados, a diferencia de los delfines marinos',
          'Es parte importante de la mitología de los pueblos amazónicos',
        ],
      },
      {
        id: 28,
        name: 'Oso Hormiguero Gigante',
        scientificName: 'Myrmecophaga tridactyla',
        category: 'mamiferos',
        image: '../../../assets/images/oso_hormiguero.jpg',
        description:
          'El oso hormiguero gigante es un mamífero inconfundible por su hocico alargado, lengua extensible y pelaje grueso con marcas distintivas. A pesar de su nombre, no está relacionado con los osos.',
        habitat: 'Sabanas y bosques tropicales',
        diet: 'Hormigas y termitas',
        conservation: 'Vulnerable (VU)',
        curiosities: [
          'Puede consumir hasta 35,000 hormigas en un solo día',
          'Su lengua puede extenderse hasta 60 cm',
          'Se defiende parándose sobre sus patas traseras y usando sus garras delanteras',
        ],
      },
      {
        id: 29,
        name: 'Nutria Gigante',
        scientificName: 'Pteronura brasiliensis',
        category: 'mamiferos',
        image: '../../../assets/images/nutria_gigante.jpg',
        description:
          'La nutria gigante es la especie más grande de nutria, pudiendo alcanzar hasta 1.8 metros de longitud. Vive en grupos familiares y es conocida por su comportamiento social y vocal.',
        habitat: 'Ríos, lagos y pantanos de la cuenca amazónica',
        diet: 'Principalmente peces, también crustáceos y pequeños caimanes',
        conservation: 'En peligro (EN)',
        curiosities: [
          'Cada individuo tiene un patrón único de manchas en la garganta',
          'Son extremadamente vocales, con un repertorio de hasta 9 sonidos distintos',
          'Construyen madrigueras complejas con mú  con un repertorio de hasta 9 sonidos distintos',
          'Construyen madrigueras complejas con múltiples entradas y una cámara central',
        ],
      },
      {
        id: 30,
        name: 'Mono Aullador',
        scientificName: 'Alouatta seniculus',
        category: 'mamiferos',
        image: '../../../assets/images/mono_aullador.jpg',
        description:
          'El mono aullador es conocido por su potente vocalización que puede escucharse hasta a 5 km de distancia. Tiene un pelaje rojizo y una característica barba.',
        habitat: 'Dosel de bosques tropicales',
        diet: 'Hojas, frutas y flores',
        conservation: 'Preocupación menor (LC)',
        curiosities: [
          'Posee una caja de resonancia en la garganta que amplifica sus aullidos',
          'Es uno de los monos más grandes del Nuevo Mundo',
          'Pasa hasta 80% de su tiempo descansando para digerir las hojas',
        ],
      },
    ];
  }

  filterByCategory(
    category: 'aves' | 'terrestres' | 'mamiferos' | 'todos'
  ): void {
    this.selectedCategory = category;

    if (category === 'todos') {
      this.filteredAnimals = this.animals;
    } else {
      this.filteredAnimals = this.animals.filter(
        (animal) => animal.category === category
      );
    }
  }

  openAnimalDetail(animal: Animal): void {
    this.selectedAnimal = animal;
    this.showDetail = true;
  }

  closeAnimalDetail(): void {
    this.showDetail = false;
  }
}
