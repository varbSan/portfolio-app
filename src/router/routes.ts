import type { RouteRecordRaw } from 'vue-router'
import PgAbout from '@/pages/PgAbout.vue'
import PgExperiences from '@/pages/PgExperiences.vue'
import PgHome from '@/pages/PgHome.vue'
import PgProjects from '@/pages/PgProjects.vue'

export const routeKeys = {
  home: 'Home',
  experiences: 'Experiences',
  projects: 'Projects',
  about: 'About',
} as const

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: routeKeys.home,
    component: PgHome,
    meta: {
      label: 'Home', // translate
    },
  },
  {
    path: '/experiences',
    name: routeKeys.experiences,
    component: PgExperiences,
    meta: {
      label: 'Experiences', // translate
    },
  },
  {
    path: '/projects',
    name: routeKeys.projects,
    component: PgProjects,
    meta: {
      label: 'Projects', // translate
    },
  },
  {
    path: '/about',
    name: routeKeys.about,
    component: PgAbout,
    meta: {
      label: 'About', // translate
    },
  },

]
