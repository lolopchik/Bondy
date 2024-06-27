<script>
    import axios from "axios"
    axios.defaults.baseURL = "https://serverbondy.onrender.com";
    export default {
        data(){
            return {
                login: "",
                pasworld: "",
                ok: "",
                name1: "",
            };
        },
        methods: {
            nam(){
                if(this.name1=="BonDy" || this.name1=="Admin"){ this.ok="нельзя использовать такой ник"} else{this.ok=""}
            },
            async register(login,pasworld, name1){
                if(this.ok==""){
                let readads = await axios.post('/register', {login, pasworld, name1});
                this.ok = readads.data;
                if(this.ok=="аккаунт зарегестрирован"){this.$router.push({name: 'login'})}
                }
            },
            async reg(login){
                
                let readads = await axios.post('/reg', {login});
                this.ok = readads.data;
                 
            },
            paro(){
                this.ok=""
                if(this.pasworld.length<6){
                    this.ok="минимальная длина пароля 6 символов"
                } else {
                    this.ok=""
                }
            },
            logiin(){
                this.$router.push({name: 'login'})
            }
        },
        mounted(){

        }
    }
</script>

<template>
    <form @submit.prevent="register(login, pasworld, name1)">
        <h1>регистрация в BonDyCoin</h1>
        <label for="inputPassword3" class="form-label">введите Ник</label>
        <div class="input1"><div class="input">
        <input type="text" id="inputPassword3" class="form-control" aria-describedby="passwordHelpBlock" v-model="name1" @change="nam()">
    </div></div>
        <label for="inputPassword5" class="form-label">введите Логин</label>
        <div class="input1"><div class="input">
        <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" v-model="login" @change="reg(login)">
    </div></div>
        <label for="inputPassword4" class="form-label">введите Пароль</label>
        <div class="input1">
        <div class="input">
        <input type="password" id="inputPassword4" class="form-control" aria-describedby="passwordHelpBlock" v-model="pasworld" @change="paro()">
        
        <p>минимальная длина пароля - 6 символов</p>
    </div></div>
    <h3 v-if="ok!=''" style="color: red;">{{ ok }}</h3>
    <button type="submit" class="btn reg">Зарегестрироваться</button>
    <p>Есть аккаунт? <a @click="logiin()" class="as">Войти</a></p>
    </form>
</template>

<style>
.as{
    color: #377CF6;
}
 label{
    text-align: center;
    width: 100%;
 }
 input{

text-align: center;

}
form{
    text-align: center;
}
.reg{
    margin-top: 10px;
    
}
 .input{
    
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 50%;
 }

</style>
