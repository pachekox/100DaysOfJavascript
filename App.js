const app = Vue.createApp({
    data(){
        return{
            name:'patrick'
        }
    },
    methods:{
        updateName(){
            this.name = "Patrick"
        }
    }
})

app.mount('#app')