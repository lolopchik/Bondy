<script>
import axios from "axios"
    axios.defaults.baseURL = "https://serverbondy.onrender.com";
    
    export default {
        data(){
            return {
                usersD: [],
                usersB: [],
                Bonc: false,
                Dyc: true
            };
        },
        props:{
            user: Object,
            logan: Boolean
        },
        methods: {
            //загрузка всех пользователей
            async users1(){
                let us = await axios.get('/usersD');
                this.usersD = us.data
            },
            async users2(){
                let us = await axios.get('/usersB');
                this.usersB = us.data
            },
            //переход топов
            dy(){
                this.Dyc=true;
                this.Bonc=false
            },
            bondy(){
                this.Dyc=false;
                this.Bonc=true
            },
        },
        mounted(){
            
            if(this.logan==false){
                this.$router.push({name: "login"})
            } else{this.users1(); this.users2()}
            
        }
    }
</script>

<template>
    <h2>топ 100</h2>
    <header>
    <nav> <h6 style="margin-top: 10px;"><button style="background-color: #D037F6; color: #161D27;" @click="dy()">Dy coin</button> / <button style="background-color: #D037F6; color: #161D27;" @click="bondy()" >BonDy coin</button></h6></nav>
  </header>
  <main>
  <div v-if="Dyc">
    <div v-for="(user, index) in usersD">
        <div>
            <h6>{{user.name}} = {{ user.dycoin }} Dy coin- на {{ index +1}} месте</h6>
        </div>
        <hr>
    </div>
  </div>
  <div v-if="Bonc">
    <div v-for="(user, index) in usersB">
        <div>
            <h6>{{user.name}} = {{ user.bondycoin }} BonDy coin- на {{ index +1}} месте</h6>
        </div>
        <hr>
    </div>
  </div>
    
  </main>
</template>


<style>

</style>
