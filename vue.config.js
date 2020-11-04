module.exports = {
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/assets/styles/styles.scss"'
      }
    },
    requireModuleExtension: false
  }
};
