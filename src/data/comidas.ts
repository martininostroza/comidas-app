
export type Comida = {
  nombre: string;
  descripcion: string;
  imagen: string;
};

export const comidas: Comida[] = [
  {
    nombre: 'Mote con Huesillo',
    descripcion: 'Bebida típica chilena hecha con duraznos y trigo pelado.',
    imagen: '/comidas/mote-con-huesillo.jpeg'
  },
  {
    nombre: 'Ensalada Chilena',
    descripcion: 'Tomate, cebolla y cilantro con un toque de aceite y sal.',
    imagen: '/comidas/ensalada-chilena.jpeg'
  },
  {
    nombre: 'Humita',
    descripcion: 'Pasta de maíz con cebolla y albahaca envuelta en hoja de maíz.',
    imagen: '/comidas/humitas.jpeg'
  },
  {
    nombre: 'Charquicán',
    descripcion: 'Guiso de carne, papas, zapallo y verduras.',
    imagen: '/comidas/charquican.jpeg'
  },
  {
    nombre: 'Cazuela',
    descripcion: 'Sopa de carne o pollo con verduras y papas.',
    imagen: '/comidas/cazuela.jpeg'
  },
  {
    nombre: 'Sopaipillas',
    descripcion: 'Frituras de masa de zapallo, perfectas con pebre o chancaca.',
    imagen: '/comidas/sopaipillas.jpeg'
  },
  {
    nombre: 'Helado',
    descripcion: 'Frío y delicioso postre.',
    imagen: '/comidas/helado.jpeg'
  }
];


