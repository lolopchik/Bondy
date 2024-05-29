<script>

    
    export default {
        data(){
            return {

                login: "",
                pasworld: "",
                
                
            };
        },
        props:{
            
            user: Object,
            logan: Boolean,
            par: Boolean,
            log: Boolean
        },
        methods: {
            register(){
                this.$router.push({name: 'register'})
            },
            
        },
        
    }
</script>

<template>
    <form @submit.prevent="$emit('login1', login, pasworld)">
        <h1>Вход в BonDyCoin</h1>
        <label for="inputPassword5" class="form-label">введите Логин</label>
        <div class="input1"><div class="input">
        <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" v-model="login">
        <h5 v-if="log" style="color: red;">неверный логин</h5>
    </div></div>
        <label for="inputPassword4" class="form-label">введите Пароль</label>
        <div class="input1">
        <div class="input">
        <input type="password" id="inputPassword4" class="form-control" aria-describedby="passwordHelpBlock" v-model="pasworld">
        <h5 v-if="par" style="color: red;">неверный пароль</h5>
    </div></div>
    <button type="submit" class="btn reg">Войти</button>
    <p>нет аккаунта? <a @click="register()" class="as">Зарегестрироваться</a></p>
    </form>
</template>


<style>

</style>