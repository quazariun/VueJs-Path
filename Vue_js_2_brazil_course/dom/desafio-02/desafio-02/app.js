new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Isso aqui eh um teste!!!')
        },
        atualizarInput(event) {
            this.valor = event.target.value
        }
    }
})