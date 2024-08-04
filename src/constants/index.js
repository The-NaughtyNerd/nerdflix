import {
  movieImg1,
  movieImg2,
  movieImg3,
  movieImg4,
  movieImg5,
} from '../assets';

export const navigation = [
  {
    id: 1,
    link: '/',
    linkName: 'Movies',
    current: true,
  },
  {
    id: 2,
    link: '/tvshows',
    linkName: 'Tv Shows',
    current: false,
  },
  {
    id: 3,
    link: '/series',
    linkName: 'Series',
    current: false,
  },
  {
    id: 4,
    link: '/animations',
    linkName: 'Animations',
    current: false,
  },
];

export const genres = [
  {
    id: 1,
    name: 'Action',
  },
  {
    id: 2,
    name: 'Romance',
  },
  {
    id: 3,
    name: 'Comedy',
  },
  {
    id: 4,
    name: 'Sci-fi',
  },
  {
    id: 5,
    name: 'Thriller',
  },
  {
    id: 6,
    name: 'Fantasy',
  },
  {
    id: 7,
    name: 'Horror',
  },
  {
    id: 8,
    name: 'Drama',
  },
  {
    id: 9,
    name: 'Biography',
  },
  {
    id: 10,
    name: 'Horror',
  },
];

export const movies = [
  {
    id: 1,
    img: movieImg1,
    title: 'Mario',
    year: '2024',
    rating: '7.5',
    genre: 'Adventure, action',
  },
  {
    id: 2,
    img: movieImg2,
    title: 'Tomorrow Job',
    year: '2024',
    rating: '7.5',
    genre: 'Adventure, action',
  },
  {
    id: 3,
    img: movieImg3,
    title: 'Bridgerton',
    year: '2024',
    rating: '7.5',
    genre: 'Adventure, action',
  },
  {
    id: 4,
    img: movieImg4,
    title: 'Power',
    year: '2024',
    rating: '7.5',
    genre: 'Adventure, action',
  },
  {
    id: 5,
    img: movieImg5,
    title: 'Scream',
    year: '2024',
    rating: '7.5',
    genre: 'Adventure, action',
  },
];
