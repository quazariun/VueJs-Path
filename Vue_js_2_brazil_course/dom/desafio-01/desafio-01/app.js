new Vue({
  el: '#desafio',
  data: {
    nome: 'Eduardo',
    idade: 22,
    src: 'https://vignette.wikia.nocookie.net/karakai-jouzu-no-takagi-san/images/a/ab/Episode_1_Screenshot_3.png/revision/latest/scale-to-width-down/340?cb=20180514055609'
  },
  methods: {
    mult_idade_por_3() {
      return this.idade*3;
    },
    random_numbers() {
      return Math.random();
    }
  }
})