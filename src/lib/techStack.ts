import type { Component } from 'vue'
import AtIconActix from '@/components/atoms/icons/AtIconActix.vue'
import AtIconBevy from '@/components/atoms/icons/AtIconBevy.vue'
import AtIconCoolify from '@/components/atoms/icons/AtIconCoolify.vue'
import AtIconCypress from '@/components/atoms/icons/AtIconCypress.vue'
import AtIconDocker from '@/components/atoms/icons/AtIconDocker.vue'
import AtIconDrizzle from '@/components/atoms/icons/AtIconDrizzle.vue'
import AtIconGithub from '@/components/atoms/icons/AtIconGithub.vue'
import AtIconGraphql from '@/components/atoms/icons/AtIconGraphql.vue'
import AtIconHetzner from '@/components/atoms/icons/AtIconHetzner.vue'
import AtIconMicrosoftAzure from '@/components/atoms/icons/AtIconMicrosoftAzure.vue'
import AtIconMikroOrm from '@/components/atoms/icons/AtIconMikroOrm.vue'
import AtIconMongodb from '@/components/atoms/icons/AtIconMongodb.vue'
import AtIconNestjs from '@/components/atoms/icons/AtIconNestjs.vue'
import AtIconPostgresql from '@/components/atoms/icons/AtIconPostgresql.vue'
import AtIconRailway from '@/components/atoms/icons/AtIconRailway.vue'
import AtIconRender from '@/components/atoms/icons/AtIconRender.vue'
import AtIconRust from '@/components/atoms/icons/AtIconRust.vue'
import AtIconSass from '@/components/atoms/icons/AtIconSass.vue'
import AtIconTailwind from '@/components/atoms/icons/AtIconTailwind.vue'
import AtIconTauri from '@/components/atoms/icons/AtIconTauri.vue'
import AtIconTypescript from '@/components/atoms/icons/AtIconTypescript.vue'
import AtIconVercel from '@/components/atoms/icons/AtIconVercel.vue'
import AtIconVite from '@/components/atoms/icons/AtIconVite.vue'
import AtIconVue from '@/components/atoms/icons/AtIconVue.vue'
import AtIconWebAssembly from '@/components/atoms/icons/AtIconWebAssembly.vue'
import AtIconWebpack from '@/components/atoms/icons/AtIconWebpack.vue'

export const techList = {
  typescript: 'TypeScript',
  rust: 'Rust',
  tauri: 'Tauri',
  tailwind: 'Tailwind',
  sass: 'Sass',
  vuejs: 'Vue.js',
  cypress: 'Cypress',
  webassembly: 'WebAssembly',
  vite: 'Vite',
  webpack: 'Webpack',
  graphql: 'GraphQL',
  nestjs: 'NestJS',
  actix: 'Actix',
  bevy: 'Bevy',
  mikroorm: 'MikroORM',
  drizzle: 'Drizzle',
  postgresql: 'PostgreSQL',
  mongodb: 'MongoDB',
  docker: 'Docker',
  github: 'GitHub',
  vercel: 'Vercel',
  coolify: 'Coolify',
  railway: 'Railway',
  render: 'Render',
  hetzner: 'Hetzner',
  microsoftazure: 'Microsoft Azure',
} as const

export type TechKey = keyof typeof techList
type TechTitle = (typeof techList)[TechKey]

export interface Tech {
  name: TechKey
  title: TechTitle
  description: string
  link: `https://${string}`
  icon: Component
}

export const techStack: Tech[] = [
  {
    name: 'typescript',
    title: 'TypeScript',
    description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
    link: 'https://www.typescriptlang.org/',
    icon: AtIconTypescript,
  },
  {
    name: 'rust',
    title: 'Rust',
    description: 'Rust is a general-purpose programming language emphasizing performance, type safety, and concurrency.',
    link: 'https://www.rust-lang.org/',
    icon: AtIconRust,
  },
  {
    name: 'tauri',
    title: 'Tauri',
    description: 'Tauri is a framework for building tiny, fast binaries for all major desktop and mobile platforms with frontend web technologies such as Vue.js, React, Svelte etc.',
    link: 'https://v2.tauri.app/',
    icon: AtIconTauri,
  },
  {
    name: 'tailwind',
    title: 'Tailwind',
    description: 'Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.',
    link: 'https://tailwindcss.com/',
    icon: AtIconTailwind,
  },
  {
    name: 'sass',
    title: 'Sass',
    description: 'Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.',
    link: 'https://sass.com/',
    icon: AtIconSass,
  },
  {
    name: 'vuejs',
    title: 'Vue.js',
    description: 'An approachable, performant and versatile framework for building web user interfaces.',
    link: 'https://vuejs.org/',
    icon: AtIconVue,
  },
  {
    name: 'cypress',
    title: 'Cypress',
    description: 'Cypress is a frontend test automation tool for regression testing of web applications. ',
    link: 'https://www.cypress.io/',
    icon: AtIconCypress,
  },
  {
    name: 'webassembly',
    title: 'WebAssembly',
    description: 'WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.',
    link: 'https://webassembly.org/',
    icon: AtIconWebAssembly,
  },
  {
    name: 'vite',
    title: 'Vite',
    description: 'Vite is a blazing fast frontend build tool powering the next generation of web applications.',
    link: 'https://vite.dev/',
    icon: AtIconVite,
  },
  {
    name: 'webpack',
    title: 'Webpack',
    description: 'Vite is a blazing fast frontend build tool powering the next generation of web applications.',
    link: 'https://vite.dev/',
    icon: AtIconWebpack,
  },
  {
    name: 'graphql',
    title: 'GraphQL',
    description: 'GraphQL is a data query and manipulation language for APIs that allows a client to specify what data it needs ("declarative data fetching").',
    link: 'https://graphql.org/',
    icon: AtIconGraphql,
  },
  {
    name: 'nestjs',
    title: 'NestJS',
    description: 'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    link: 'https://nestjs.com/',
    icon: AtIconNestjs,
  },
  {
    name: 'actix',
    title: 'Actix',
    description: 'Actix Web is a powerful, pragmatic, and extremely fast web framework for Rust.',
    link: 'https://nestjs.com/',
    icon: AtIconActix,
  },
  {
    name: 'bevy',
    title: 'Bevy',
    description: 'A simple data-driven game engine built in Rust.',
    link: 'https://bevyengine.org/',
    icon: AtIconBevy,
  },
  {
    name: 'drizzle',
    title: 'Drizzle',
    description: 'Drizzle ORM is a lightweight and modern TypeScript ORM (Object-Relational Mapping) designed for working with SQL databases.',
    link: 'https://orm.drizzle.team/',
    icon: AtIconDrizzle,
  },
  {
    name: 'mikroorm',
    title: 'MikroORM',
    description: 'TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns.',
    link: 'https://mikro-orm.io/',
    icon: AtIconMikroOrm,
  },
  {
    name: 'postgresql',
    title: 'PostgreSQL',
    description: 'PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.',
    link: 'https://www.postgresql.org/',
    icon: AtIconPostgresql,
  },
  {
    name: 'mongodb',
    title: 'MongoDB',
    description: 'MongoDB is a NoSQL database that handles large, diverse data efficiently. Instead of tables and rows like relational databases, it uses a document-oriented model, storing data in flexible, JSON-like (BSON) documents.',
    link: 'https://www.mongodb.com/',
    icon: AtIconMongodb,
  },
  {
    name: 'docker',
    title: 'Docker',
    description: 'Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers.',
    link: 'https://www.docker.com/',
    icon: AtIconDocker,
  },
  {
    name: 'vercel',
    title: 'Vercel',
    description: 'Vercel provides developers tools and cloud infrastructure to build, scale, and secure a faster, more personalized web.',
    link: 'https://www.vercel.com/',
    icon: AtIconVercel,
  },
  {
    name: 'railway',
    title: 'Railway',
    description: 'Railway simplifies your infrastructure stack from servers to observability with a single, scalable, easy-to-use platform.',
    link: 'https://railway.app/',
    icon: AtIconRailway,
  },
  {
    name: 'render',
    title: 'Render',
    description: 'Render is a modern cloud platform that provides developers with a way to deploy and manage applications, websites, and APIs. It automates the process of deploying code, handling scaling, and managing infrastructure.',
    link: 'https://render.com/',
    icon: AtIconRender,
  },
  {
    name: 'coolify',
    title: 'Coolify',
    description: 'Coolify is a self-hosted, open-source platform for deploying and managing applications, similar to Heroku.',
    link: 'https://coolify.io/',
    icon: AtIconCoolify,
  },
  {
    name: 'hetzner',
    title: 'Hetzner',
    description: 'Hetzner is a web hosting company offering cloud services, VPS, and dedicated servers at affordable prices.',
    link: 'https://hetzner.com/',
    icon: AtIconHetzner,
  },
  {
    name: 'microsoftazure',
    title: 'Microsoft Azure',
    description: 'Azure is the cloud computing platform. It has management, access and development of applications and services to individuals, companies, and governments through its global infrastructure. ',
    link: 'https://render.com/',
    icon: AtIconMicrosoftAzure,
  },
  {
    name: 'github',
    title: 'GitHub',
    description: 'GitHub is a developer platform that allows developers to create, store, manage, and share their code.',
    link: 'https://www.github.com/',
    icon: AtIconGithub,
  },
]
