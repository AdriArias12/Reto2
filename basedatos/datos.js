// Lista que contiene la informacion de los elementos que se mostraran en el carrusel de la pagina principal

const elementos_carrusel = [
    {
        nombre: "Anillos", descripcion:"Los anillos personalizados son una forma única de expresar tu estilo y personalidad. Ya sea que elijas un diseño clásico o moderno, estos anillos hechos a medida reflejan tu individualidad y te permiten llevar contigo un símbolo significativo en todo momento.", imagen:"img/anillo2.png"
    },

    { 
        nombre: "Collares", descripcion:"Nuestros collares de oro son mucho más que un accesorio: son el reflejo de tu esencia. Cada diseño, desde el más delicado hasta el más imponente, está pensado para realzar tu elegancia y convertir cada instante en un recuerdo brillante. Llévalos como símbolo de belleza, fuerza y distinción que te acompañará siempre.", imagen:"img/collar3.png"
    },

    { 
        nombre: "Aretes", descripcion:"Los aretes son el toque perfecto que transforma cualquier look. Con diseños que van de lo sutil a lo sofisticado, cada par resalta tu belleza natural y refleja tu estilo único. Más que un accesorio, son destellos de elegancia que iluminan cada momento de tu vida.", imagen:"img/aretes.png"
    },

    { 
        nombre: "Dije", descripcion:"Los dijes personalizados en oro son pequeños tesoros que cuentan tu historia. Cada diseño único guarda un significado especial, convirtiéndose en un símbolo eterno de tus recuerdos, sueños o emociones. Llévalos cerca de tu corazón y haz que tu joya sea tan única como tú.", imagen:"img/dije2.jpg"
    },



]

// Lista para categiria del mes
const lista_categorias = [
    {
        codigo: "1000",
        nombre: "Aretes",
        descripcion:"",
        imagen:"img/aretes3.jpg" 
    },
    
    {
        codigo: "2000",
        nombre: "Anillos",
        descripcion:"",
        imagen:"img/anillo4.png" 
    },

    {
        codigo: "3000",
        nombre: "Collares",
        descripcion:"",
        imagen:"img/collar4.png" 
    },

    {
        codigo: "4000",
        nombre: "Tobilleras",
        descripcion:"",
        imagen:"img/tobilleras.png" 
    },

    {
        codigo: "5000",
        nombre: "Pulseras",
        descripcion:"",
        imagen:"img/pulsera3.jpg" 
    },

    {
        codigo: "6000",
        nombre: "Personalizados",
        descripcion:"",
        imagen:"img/personalizados.png" 
    }

]

// Lista de productos
const lista_productos = [
    { 
        codigo: "2001",
        nombre: "Anillo de oro amarillo 18k",
        descripcion:"Anillo de oro amarillo 18k con diseño clásico y elegante, perfecto para cualquier ocasión.",
        imagen:"img/anillo4.png",
        precio: 250000,
        codigo_categoria:"2000",
        clasificacion: 5
    },

    { 
        codigo: "6001",
        nombre: "Dije de virgen oro amarillo 18k",
        descripcion:"Dije de oro amarillo 18k con diseño de la virgen de Guadalupe, perfecto para los creyentes.",
        imagen:"img/dije2.jpg ",
        precio: 150000,
        codigo_categoria:"6000",
        clasificacion: 4
    },

    { 
        codigo: "4001",
        nombre: "Tobillera con detalles en oro 18k",
        descripcion:"Tobilleta de oro amarillo 18k con distintos dijes personalizados, para resaltar tu personalidad.",
        imagen:"img/tobilleras.png",
        precio: 200000,
        codigo_categoria:"4000",
        clasificacion: 4
    },

    { 
        codigo: "1001",
        nombre: "Aretes topos en oro 18k",
        descripcion:"Aretes en topo de oro amarillo 18k que te harán lucir elegante en cualquier ocasión.",
        imagen:"img/aretes.png",
        precio: 100000,
        codigo_categoria:"1000",
        clasificacion: 4
    },

    { 
        codigo: "1002",
        nombre: "Candongas en oro 18k",
        descripcion:"Candongas de oro amarillo 18k que te ayudarán a lucer excelente en una noche formal.",
        imagen:"img/aretes3.jpg",
        precio: 120000,
        codigo_categoria:"1000",
        clasificacion: 4
    },

    { 
        codigo: "3001",
        nombre: "Collares básicos en oro 18k",
        descripcion:"Collares de oro amarillo 18k que podrás personalizar con cualquier dije.",
        imagen:"img/collar4.png",
        precio: 160000,
        codigo_categoria:"3000",
        clasificacion: 5
    },

    { 
        codigo: "5001",
        nombre: "Pulsera tejida con balines en oro 18k",
        descripcion:"Pulsera tejida con balines de oro amarillo 18k que podrás usar en cualquier ocasión.",
        imagen:"img/pulsera2.png",
        precio: 180000,
        codigo_categoria:"5000",
        clasificacion: 5
    },

    { 
        codigo: "2002",
        nombre: "Argollas de matrimonio de oro amarillo 18k",
        descripcion:"Argollas de matrimonios de oro amarillo 18k que serán tan eternas como tu vida en pareja.",
        imagen:"img/anillo3.png",
        precio: 800000,
        codigo_categoria:"2000",
        clasificacion: 5
    },

    { 
        codigo: "5002",
        nombre: "Pulsera básica gruesa en oro 18k",
        descripcion:"Pulsera básica gruesa de oro amarillo 18k que es un regalo perfecto para tu enamorado.",
        imagen:"img/pulsera.jpg",
        precio: 170000,
        codigo_categoria:"5000",
        clasificacion: 5
    },
] ;


//Lista que representa el carrito de compras del usuario
let carrito = [];