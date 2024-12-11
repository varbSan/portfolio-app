import type { RouteRecordRaw } from 'vue-router'
import PgAbout from '@/pages/PgAbout.vue'
import PgExperiences from '@/pages/PgExperiences.vue'
import PgHome from '@/pages/PgHome.vue'
import PgInformation from '@/pages/PgInformation.vue'
import PgProjects from '@/pages/PgProjects.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: PgHome,
    meta: {
      label: 'Home', // translate
    },
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: PgExperiences,
    meta: {
      label: 'Experiences', // translate
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: PgProjects,
    meta: {
      label: 'Projects', // translate
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: PgProjects,
    meta: {
      label: 'Projects', // translate
    },
  },
  {
    path: '/information',
    name: 'Information',
    component: PgInformation,
    meta: {
      label: 'Information', // translate
    },
  },
  {
    path: '/about',
    name: 'About',
    component: PgAbout,
    meta: {
      label: 'About', // translate
    },
  },

]
