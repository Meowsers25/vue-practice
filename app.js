new Vue ({
    el: '#app',
    data: {
        title: 'Let\'s learn Vue',
        name: 'Katie',
        url: 'http://www.youtube.com',
        classes: ['one', 'two']
    },
    methods: {
        greet(time) {
            return `Hello, and good ${time}, ${this.name}`
        }
    }
})
