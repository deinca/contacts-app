new Vue({
  // tranferm data
  el:'#vue-app',
  data:{
    name:'Botas',
    job:'Criminal',
    website: 'https://shrek.fandom.com/es/wiki/El_Gato_con_Botas',
    // html hardcoded ready to bind
    websiteHtmlTag: '<a href="http://www.cuentoscortos.com/cuentos-clasicos/el-gato-con-botas">Read story</a>',
    age: 24
  },
  // set-up functions
  methods:{
    greet: function(time){
      return 'Good ' + time + ' ' + this.name;
    },
    add: function(increase){
      this.age+= increase;
    },
    remove: function(dencrease){
      this.age-= dencrease;
    }
  }
});
