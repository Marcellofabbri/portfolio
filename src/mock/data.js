import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Marcello Fabbri', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Marcello Fabbri',
  name: '',
  subtitle: 'Software developer',
  cta: 'EXPLORE',
};

// ABOUT DATA
export const aboutData = {
  img: 'Github1.jpg',
  paragraphOne:
    "I delved into the world of programming in late '19, when I joined the London Makers Academy bootcamp, which I completed this past spring. I was able to develop the necessary skills to continue learning afterwards and work on a number of personal projects to expand my horizons. My focus is on my agility, my learning speed, and a good range of knowledge and adaptability",
  paragraphTwo:
    "Before my career change, I had been working in hospitality from '13 to '19. I worked in restaurants and went from waiter to general manager in four years, and spent two further years covering that position in a busy establishment within Waterloo Station, earning a wealth of experience in problem solving, quick thinking, organization, and, certainly, building stamina and relentless patience.",
  paragraphThree:
    "I grew up in Northern Italy and lived there till '13, and during my time there I completed my studies and attained a bachelor degree in Environmental Science at University of Bologna.",
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vRWeyAgUsvXAXhnNb_f-z73dYtrUoTvikxXIOBypVSjz6wITYR3cV2LdJZYUDCCD-0VIm1IBQ8MHh5t/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'covid-19-tracker-3-screens.png',
    title: 'COVID-19 TRACKER',
    info: 'MOBILE',
    tech: 'Flutter - Dart',
    info2:
      'An app for tracking figures from each country regarding the pandemic. Developerd in Flutter, in the language Dart. Daily figures fetched from a free API. Alternative country names taken into account. Interactive charts built by gathering historic data from another API. Not allowed for publishing as per T&C re: coronavirus apps on all mobile outlets',
    repo: 'https://github.com/Marcellofabbri/Covid-19-App', // if no repo, the button will not show up
    video: 'https://www.youtube.com/watch?v=VhD25VmOOTg',
  },
  {
    id: nanoid(),
    img: 'dailyroadmap-4-screens-header.png',
    title: 'DAILY ROAD MAP',
    info: 'MOBILE',
    tech: 'SQLite - Java (Android) - MVVM',
    info2:
      'An app for visualizing one\'s daily schedule in the form of a "subway-style" map. Developed in Java, and structured with MVVM architecture, this second app proves to be much more maintainable and expandable than my first one. Currently available on Google Play.',
    repo: 'https://github.com/Marcellofabbri/dailyroadmap', // if no repo, the button will not show up
    video: '',
    googlePlay: 'https://play.google.com/store/apps/details?id=eu.marcellofabbri.dailyroadmap',
  },
  {
    id: nanoid(),
    img: 'trender-end.png',
    title: 'TRENDER',
    info: 'WEB',
    tech: 'Postgres - Java (Spring Boot) - React - Redux - Docker',
    info2:
      'This full stack web app tries to make visualization of personal records easy by adding custom data and seeing it rendered as a chart. It employs a Postgres database, a Java (Spring Boot) back end, and a React+Redux frontend. I experimented with Docker to containerize this app.',
    url: '',
    repo: 'https://github.com/Marcellofabbri/trender', // if no repo, the button will not show up,
    video: 'https://youtu.be/s5QB92owk0Q',
  },
  {
    id: nanoid(),
    img: 'fitnessstand-4-screens-header.png',
    title: 'FITNESS STAND',
    info: 'MOBILE',
    tech: 'SQLite - Java (Android) - MVVM',
    info2:
      "This app will testify about the user's fitness consistency and how they are faring against self set standards. In time, the calendar will show the distribution of workout sessions and the Stats panel will provide an indication of the user's tendency.",
    url: '',
    repo: 'https://github.com/Marcellofabbri/fitnessStand_android', // if no repo, the button will not show up,
    video: '',
    googlePlay:
      'https://play.google.com/store/apps/details?id=eu.marcellofabbri.fitnessstandandroid',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'marcellogfabbri@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
