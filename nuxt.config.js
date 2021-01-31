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
      'LayoutPlugin', // TODO - delete this, maybe...
      'ModalPlugin',
      'NavPlugin',
      'NavbarPlugin',
      'SidebarPlugin',
      'TabsPlugin',
    ],
  },
  css: ['@/assets/main.scss'],
  dev: !IS_PRODUCTION,
  env: {},
  modules: ['bootstrap-vue/nuxt'],
  plugins: [{ src: '@/plugins/vuelidate' }],
  rootDir: './',
  server: {
    port: process.env.PORT || 3000,
  },
  srcDir: 'src/',
};
