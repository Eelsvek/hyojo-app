require('dotenv').config();

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

export default {
  bootstrapVue: {
    componentPlugins: [
      'ButtonPlugin',
      'DropdownPlugin',
      'FormPlugin',
      'FormGroupPlugin',
      'FormInputPlugin',
      'IconsPlugin',
      'ModalPlugin',
      'NavPlugin',
      'NavbarPlugin',
      'SidebarPlugin',
      'TabsPlugin',
    ],
  },
  dev: !IS_PRODUCTION,
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
  },
  modules: ['bootstrap-vue/nuxt'],
  plugins: [{ src: '@/plugins/vuelidate' }],
  rootDir: './',
  server: {
    port: process.env.PORT || 3000,
  },
  srcDir: 'src/',
};
