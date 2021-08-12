import { AboutUs, Academics, StudentLife } from "./MenuDisplays";

export const TOP_LINKS = [
  { name: "Donate", url: "#" },

  { name: "Gallery", url: "/gallery" },

  { name: "Staff", url: "/gallery#staff" },
];

export const STUDENT_LIFE_LINKS = [
  { name: " What do people say about us? ", link: "/#testimonials" },
  { name: " Student Activities ", link: "/gallery#student-activities" },
  { name: " Leave an advice to incoming students", link: "/campus/mu#advice" },
];

export const ACADEMICS_LINKS = [
  {
    groupName: "Academic Calendar  ",
    links: [{ name: "Academic Calendar", link: "/academics" }],
  },
  {
    groupName: " Core Courses ",
    links: [
      { name: "Entrpreneurial Leadership", link: "/about#el" },
      { name: " Data & Decisions", link: "/about#DD" },
      { name: " Project Management", link: "/about#projects" },
      { name: " Communication For Impact", link: "/about#cfi" },
    ],
  },
  {
    groupName: "ALC Mauritius",
    url: "mu",
    links: [
      { name: "Computing", link: "/about#computing" },
      { name: " Engeneering Studies", link: "/about#engineering" },
      { name: " Social Sciences", link: "/about#social-sciences" },
      { name: " Business Management", link: "/about#business" },
    ],
  },

  {
    groupName: "ALU Rwanda",
    url: "/campus/rw",
    links: [
      { name: "Global Challenges", link: "/about#gc" },
      { name: " Computer Science", link: "/about#computing" },
      { name: " Business Management", link: "/about#business" },
      { name: " Social Sciences", link: "/about#social-sciences" },
    ],
  },
];

export const ABOUT_US_LINKS = [
  {
    groupName: "Advantage",
    links: [
      { name: "The ALU Advantage", link: "/about" },
      { name: " Our Mission", link: "/about#hubs" },
      { name: " Life After ALU", link: "/gallery" },
    ],
  },
  {
    groupName: "Meet US",
    links: [
      { name: "The Staff", link: "/gallery#staff" },
      { name: " The Founders", link: "/gallery#founders" },
    ],
  },

  {
    groupName: "Patnerships",
    links: [
      { name: "ALU Partners", link: "/#sponsors" },
      { name: " Meet the creators of this platform", link: "/creators" },
    ],
  },
];

export const NAV_DEFAULT_LINKS = [
  {
    id: "home",
    link: "/",
    name: "Home",
  },
  {
    id: "academics",
    link: "academics",
    hasChildren: true,
    name: "Academics",
    jsx: Academics,
  },
  {
    id: "student-life",
    hasChildren: true,
    name: "Student Life",
    jsx: StudentLife,
  },
  {
    id: "About",
    link: "#",
    hasChildren: true,
    jsx: AboutUs,
    name: "About",
  },
  {
    id: "contact",
    link: "/#contact-us",
    name: "Contact",
  },
];
