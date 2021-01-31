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
  modules: ['bootstrap-vue/nuxt'],
  plugins: [{ src: '@/plugins/vuelidate' }],
  srcDir: 'src/',
};
