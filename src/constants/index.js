import {
  frontend,
  backend,
  mobile,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  ecommerce,
  rent,
  booking,
  bus,
  employee,
  coverhunt,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Mobile App Developer',
    icon: mobile,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Mobile App Developer Intern',
    company_name: 'United Trucking Driver',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'March 2021 - May 2021',
  },
  {
    title: 'Software Engineer Intern',
    company_name: 'Zhewu Tech',
    icon: microverse,
    iconBg: '#333333',
    date: 'Febraury 2022 - April 2022',
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Beacon Business Group',
    icon: kelhel,
    iconBg: '#333333',
    date: 'August 2022 - June 2023',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'E-Commerce App',
    description: 'An E-Commerce Web App that show list of items',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Redux',
        color: 'green-text-gradient',
      },
      {
        name: 'MUI',
        color: 'pink-text-gradient',
      },
    ],
    image: ecommerce,
    repo: 'git@github.com:davidhailu0/Ecommerce-App.git',
    demo: 'https://verdant-druid-9504e4.netlify.app',
  },
  {
    id: 'project-2',
    name: 'Home Renting Website',
    description:
      'A Website where you can rent and advertise your house for rent',
    tags: [
      {
        name: 'PHP',
        color: 'blue-text-gradient',
      },
      {
        name: 'Ajax',
        color: 'green-text-gradient',
      },
    ],
    image: rent,
    repo: 'git@github.com:davidhailu0/Renting_Website.git',
    demo: 'https://rentingwebsite.000webhostapp.com/',
  },
  {
    id: 'project-3',
    name: 'Bus Ticket Booking',
    description: 'An Web App that can let you book ticket online',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'node.js',
        color: 'pink-text-gradient',
      },
    ],
    image: booking,
    repo: 'git@github.com:davidhailu0/busticket-client.git',
    demo: 'https://bus-client.onrender.com/',
  },
  {
    id: 'project-4',
    name: 'Bus Company Manager',
    description: `A Web application that allows trip managers to control different information like bus, trip and employee`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: bus,
    repo: 'git@github.com:davidhailu0/busticket-bus.git',
    demo: 'https://bus-company-2jel.onrender.com',
  },
  {
    id: 'project-5',
    name: 'Employee Management App',
    description:
      'This web app performs the basic CRUD operations',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind.css',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
    ],
    image: employee,
    repo: 'git@github.com:davidhailu0/employee_management.git',
    demo: 'https://idyllic-kashata-ee112a.netlify.app',
  },
];

export { services, technologies, experiences, projects };
