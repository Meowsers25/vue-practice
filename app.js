new Vue ({
    el: '#app',
    data: {
        title: 'Let\'s learn Vue',
        name: 'Katie'
    },
    methods: {
        greet(time) {
            return `Hello, and good ${time}, ${this.name}`
        }
    }
})
