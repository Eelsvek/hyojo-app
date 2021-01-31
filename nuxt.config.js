export default {
  bootstrapVue: {
    componentPlugins: [
      'DropdownPlugin',
      'FormPlugin',
      'IconsPlugin',
      'ModalPlugin',
      'NavPlugin',
      'SidebarPlugin',
      'TabsPlugin',
    ],
  },
  modules: ['bootstrap-vue/nuxt'],
  plugins: [{ src: '@/plugins/vuelidate' }],
  srcDir: 'src/',
};
