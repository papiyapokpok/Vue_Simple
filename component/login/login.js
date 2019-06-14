var app = new Vue({
    el:"#app-login",
    data: {
        inputData: {
            email:"",
            password:""
        },
        loginData: [],
        alert: false
    },
    methods: {
        getInputData:function() {
            this.loginData.push({
                email: this.inputData.email,
                pass: this.inputData.password
            })
            this.alert = true
            console.log(this.alert)
        }
    },
    // mounted() {
    //     axios
    //         .get('')
    //         .then(response => (this.info = response))
    // },
    computed: {
        
    },
    watch: {
        
    },
    
})
