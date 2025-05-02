const { defineConfig } = require('cypress');

module.exports = defineConfig({
   viewportHeight:880,
   viewportWidth:1280,
   e2e:  {}, 
   /* video: true   <= ESTE COMANDO E SO PARA LIGAR PARA PODERMOS GRAVAR VIDEOS NO VS CODE */
});
