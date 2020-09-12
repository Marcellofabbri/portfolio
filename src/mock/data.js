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
  cta: 'more',
};

// ABOUT DATA
export const aboutData = {
  img: '3sml.png',
  paragraphOne:
    "I delved into the world of programming in late '19, when I joined the London Makers Academy bootcamp, which I completed this past spring. I was able to develop the necessary skills to go and blaze a trail for myself in the tech industry, and whilst the current recession hinders my quest for the perfect position, I remain concentrated on my personal projects. My focus is on my agility, my learning speed, and a good range of knowledge",
  paragraphTwo:
    "Before my career change, I had been working in hospitality from '13 to '19. I worked in a few restaurants and I went from inexperienced waiter to general manager in four years, and spent two further years covering that position in a busy establishment within Waterloo Station, earning a wealth of experience in problem solving, quick thinking, organization, and, certainly, building stamina.",
  paragraphThree:
    "I grew up in Northern Italy and lived there till '13, and during my time there I completed my studies and attained a bachelor degree in Environmental Science at University of Bologna.",
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vR9VSexZvZYLf84iRwZFR2sBwppa4q61QSa3ffU1zyfW4RJBswP1boMsPDveNASpGAqYr5zqOE3iRRl/pub', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'covid-19-tracker-3-screens.png',
    title: 'COVID-19 TRACKER',
    info: 'Mobile App',
    info2:
      "An app for tracking figures from each country regarding the pandemic. Developed in Flutter, coded in Dart, the app fetches its daily figures from a public API, and get historic figures (for chart drawing) from another online resource.\nThanks to Flutter it's easy to compile both an APK for Android or an IPA for iOS, however coronavirus apps cannot be published under current T&C from all major app outlets.",
    repo: 'https://github.com/Marcellofabbri/Covid-19-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'dailyroadmap-4-screens-header.png',
    title: 'DAILY ROAD MAP',
    info: 'Mobile App',
    info2:
      'An app for visualizing one\'s daily schedule in the form of a "subway-style" map. Developed in Java, and structured with MVVM architecture, this second app proves to be much more maintainable and expandable than my first one. Currently available on Google Play.',
    url: 'https://play.google.com/store/apps/details?id=eu.marcellofabbri.dailyroadmap',
    repo: 'https://github.com/Marcellofabbri/dailyroadmap', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'trender-end.png',
    title: 'TRENDER',
    info: 'Web App',
    info2:
      'This full stack web app aims to make visualization of personal records easy by adding custom data and seeing it rendered as a chart. It employs a Postgres database, a Java (Spring Boot) back end, and a React+Redux frontend, and the deployment will be on Heroku. It is currently under development. It will be accessible soon.',
    url: '',
    repo: 'https://github.com/Marcellofabbri/trender', // if no repo, the button will not show up
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
