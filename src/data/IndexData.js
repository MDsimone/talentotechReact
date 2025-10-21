import guitarra from '../assets/img/guitarra.jpg';
import bateria from '../assets/img/bateria.webp';
import charango from '../assets/img/OIP.jpg';
import g_electrica from '../assets/img/guitarra-electrica.webp';

const productos = [
  {
    id:"guitarra-acustica",
    imagen: guitarra,
    alt: "Guitarra Acústica",
    titulo: "Guitarra Acústica",
    precio: "$2990450",
    descripcion: "Guitarra acústica de alta calidad, ideal para principiantes y profesionales.",
    link:"/producto/guitarra-acustica"
    },
  {
    id:"bateria-completa",
    imagen: bateria,
    alt: "Batería Completa",
    titulo: "Batería Completa",
    precio:"$89900500",
    descripcion: "Batería completa para performance en vivo y estudio de grabación.",
    link:"/producto/bateria-completa"
    },
  {
    id:"charango",
   imagen: charango,
    alt: "Charango",
    titulo: "Charango",
    precio:"$9750",
    descripcion: "B Fino charango construido con maderas secas y solidas, tapa de pino abeto caja de naranjillo",
    link:"/producto/charango"
  },
  {
    id:"guitarra-electrica",
   imagen: g_electrica,
    alt: "Guitarra eléctrica",
    titulo: "Guitarra Eléctrica",
    precio:"$3890.75",
    descripcion: "Guitarra electrica Yamaha RSP02T CG Revstar Professional Estuche Crisp Gold",
    link:"/producto/guitarra-electrica"
  }
];
export default productos;