import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ecommerce',
    title: 'Experiencia E-Commerce Moderna',
    description:
      'Frontend de e-commerce escalable con listado de productos, manejo de estado del carrito y un sistema de componentes responsivo.',
    longDescription:
      'Construido con foco en arquitectura de componentes escalable y manejo de estado limpio. Incluye grilla de productos responsiva, carrito con control de cantidades y primitivas de UI reutilizables diseñadas para mantenibilidad real.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Estructura de componentes escalable',
      'Manejo de estado del carrito de compras',
      'Layout de productos responsivo',
      'Componentes de UI reutilizables',
      'Separación clara de responsabilidades',
    ],
    liveUrl: 'https://www.cuchito.live/juanpa/E-commerce',
    featured: true,
    image: '/images/ecommerce.png',
  },
  {
    id: 'calculator',
    title: 'Calculadora Interactiva',
    description:
      'Calculadora limpia y responsiva con capas de UI y lógica separadas, soporte de teclado y funciones reutilizables.',
    longDescription:
      'Diseñada con separación estricta entre la renderización de UI y la lógica de cómputo. Soporta interacciones completas por teclado, manejo de casos borde y un layout CSS limpio que se adapta a distintos tamaños de pantalla.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Separación UI / lógica',
      'Funciones de cómputo reutilizables',
      'Soporte de interacción por teclado',
      'Layout CSS responsivo',
      'Manejo de casos borde',
    ],
    liveUrl: 'https://www.cuchito.live/juanpa/Calculadora/',
    featured: false,
    image: '/images/calculadora.png',
  },
  {
    id: 'snake',
    title: 'Snake Game',
    description:
      'Juego Snake clásico con game loop propio, sistema de dificultad, puntuación máxima persistente y detección de colisiones.',
    longDescription:
      'Implementación completa del Snake clásico construida desde cero. Incluye un game loop basado en intervalos, detección precisa de colisiones, sistema de niveles de dificultad, persistencia del mejor puntaje y lógica de crecimiento de la serpiente.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Game loop con control de velocidad',
      'Detección de colisiones propia',
      'Sistema de dificultad (Easy / Medium / Hard)',
      'Mejor puntaje persistido en localStorage',
      'Lógica de crecimiento y dirección de serpiente',
    ],
    liveUrl: 'https://www.cuchito.live/juanpa/snake/',
    featured: false,
    image: '/images/snake.png',
  },
  {
    id: 'goat-ranker',
    title: 'GOAT Ranker',
    description:
      'App para calificar y rankear a los mejores futbolistas de la historia. Incluye sistema de ratings, búsqueda en tiempo real y subida de fotos.',
    longDescription:
      'Aplicación interactiva que permite agregar jugadores con foto, país y club, asignarles ratings y ranquearlos. Construida con manejo de estado dinámico, búsqueda en tiempo real y un sistema de tarjetas visuales estilo FIFA.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    highlights: [
      'Sistema de ratings dinámico (S, A, B...)',
      'Búsqueda de jugadores en tiempo real',
      'Subida y previsualización de fotos',
      'Tarjetas de jugador estilo FIFA',
      'Manejo de estado sin frameworks',
    ],
    liveUrl: 'https://www.cuchito.live/juanpa/proy1/',
    featured: false,
    image: '/images/goat-ranker.png',
  },
]
