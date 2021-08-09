import { AboutUs, Academics, StudentLife } from "./MenuDisplays";

export const TOP_LINKS = [
  { name: "Donate", url: "#" },

  { name: "Gallery", url: "#" },

  { name: "Staff", url: "#" },
];

export const STUDENT_LIFE_LINKS = [
  { name: " What do people say about us? ", link: "#" },
  { name: " Student Activities ", link: "#" },
  { name: " Life After ALU", link: "#" },
];

export const ACADEMICS_LINKS = [
  {
    groupName: "Academic Calendar  ",
    links: [{ name: "Academic Calendar", link: "#" }],
  },
  {
    groupName: " Core Courses ",
    links: [
      { name: "Academic Calendar", link: "#" },
      { name: "Entrpreneurial Leadership", link: "#" },
      { name: " Data & Decisions", link: "#" },
      { name: " Project Management", link: "#" },
    ],
  },
  {
    groupName: "ALC Mauritius",
    links: [
      { name: "Computing", link: "#" },
      { name: " Engeneering Studies", link: "#" },
      { name: " Social Sciences", link: "#" },
      { name: " Business Management", link: "#" },
    ],
  },

  {
    groupName: "ALU Rwanda",
    links: [
      { name: "Global Challenges", link: "#" },
      { name: " Computer Science", link: "#" },
      { name: " Business Management", link: "#" },
      { name: " Social Sciences", link: "#" },
    ],
  },
];

export const ABOUT_US_LINKS = [
  {
    groupName: "Advantage",
    links: [
      { name: "The ALU Advantage", link: "#" },
      { name: " Our Mission", link: "#" },
      { name: " Life After ALU", link: "#" },
      { name: " Social Sciences", link: "#" },
    ],
  },
  {
    groupName: "Meet US",
    links: [
      { name: "The Staff", link: "#" },
      { name: " Work @ALU", link: "#" },
      { name: " The Founding Fathers", link: "#" },
    ],
  },

  {
    groupName: "Patnerships",
    links: [
      { name: "ALU Partners", link: "#" },
      { name: " Meet the creators of this platform", link: "#" },
    ],
  },
];

export const NAV_DEFAULT_LINKS = [
  {
    id: "home",
    link: "#",
    name: "Home",
  },
  {
    id: "academics",
    link: "#",
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
    link: "#testimonials",
    name: "Contact",
  },
];
