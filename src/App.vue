<script>
import dayjs from 'dayjs'
import axios from "axios"
    axios.defaults.baseURL = "https://serverbondy.onrender.com";
// Компоненты
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router'

// Главная страница
export default {
	data(){
		return {
			sar: 0,
			logan: false,
			user:{},
			log:false,
      par: false,
			errmoney:false,
			errmoney1:false,
		};
	},
	methods: {
    async stop(){
      let id = this.user.id;
      let dat = await axios.post(`/bon`, {id})
      this.user=dat.data
    },
    async delete1(id){
      
      console.log(id)
        let respon = await axios.put('/delete', id);
        this.logan=false
         this.$router.push({ name: 'login'})

    },
    async exit(){
      this.user={}
        this.logan=false
         this.$router.push({ name: 'login'})
    },
		async login1(login, pasworld, name1){
                this.log = false; 
                this.par= false;
                let readads = await axios.post('/login', {login, pasworld, name1});
                this.user = readads.data;
                if(this.user=="неверный логин"){ this.log=true}
                if(this.user=="неверный пароль"){ this.par=true}
                if(this.user!="неверный логин" && this.user!="неверный пароль"){
                    this.$router.push({ name: 'main'})
					this.logan=true
                }
            },
		// клик
		async click1(){
      
      this.errmoney1 = false;
      this.errmoney = false;
      this.user.dycoin= this.user.dycoin + (1 +this.user.bust1+ this.user.bust2*5 + this.user.bust3*20 + this.user.bust4*100 + this.user.bust5*500 + this.user.bust6* 2500);
      this.sar++
      if(this.sar>=10){this.sar=0
        let id = this.user.id
        let dy = this.user.dycoin
        let respon = await axios.put('/click', {id, dy});
        
        
      } 
    },
	// рест
	async rest(id){
      if(this.user.dycoin>=this.user.pricerest){
        let gg = await axios.put('/rest', id);
        this.user = gg.data;
        this.errmoney1 = false;
      } else { this.errmoney1 = true}
    },

        //бустеры
    async bust1(id){
      if(this.user.dycoin>=this.user.price1){
        let respon = await axios.put('/bust1', id);
        this.user = respon.data
        this.errmoney = false
      } else { this.errmoney= true}
    },
    async bust2(id){
      if(this.user.dycoin>=this.user.price2){
        let respon = await axios.put('/bust2', id);
        this.user = respon.data
        this.errmoney = false
      } else { this.errmoney= true}
    },
    async bust3(id){
      if(this.user.dycoin>=this.user.price3){
        let respon = await axios.put('/bust3', id);
        this.user = respon.data
        this.errmoney = false
      } else { this.errmoney= true}
    },
    async bust4(id){
      if(this.user.dycoin>=this.user.price4){
        let respon = await axios.put('/bust4', id);
        this.user = respon.data
        this.errmoney = false
      } else { this.errmoney= true}
    },
    async bust5(id){
      if(this.user.dycoin>=this.user.price5){
        let respon = await axios.put('/bust5', id);
        this.user = respon.data
        this.errmoney = false
      } else { this.errmoney= true}
    },
    async bust6(id){
      if(this.user.dycoin>=this.user.price6){
        let respon = await axios.put('/bust6', id);
        this.user = respon.data
        this.errmoney = false
      } else { this.errmoney= true}
    },
    async postvrem(){
      let vrem = dayjs().add(1, 'day')
      let id = this.user.id
      let dat = await axios.post(`/vrema`, {vrem, id})
      this.user.data1= dat.data
    },
	},
	components: {
		AppHeader,
		RouterView
	}
};


</script>

<template>
	<div class="app">
		<!-- Шапка -->
		<div class="wrapper">

			<div class="content" ><router-view 
        :errmoney="errmoney"
        :errmoney1="errmoney1"
				:user="user"
				:logan="logan" 
				:log="log" 
				:par="par" 
        @stop="stop"
        @postvrem="postvrem"
        @exit="exit"
				@login1="login1" 
				@click1="click1"  
				@bust1="bust1" 
				@bust2="bust2" 
				@bust3="bust3" 
				@bust4="bust4" 
				@bust5="bust5" 
				@bust6="bust6" 
				@rest="rest"
        @delete1="delete1"
        ></router-view></div>

			<div class="footer" v-if="logan"><app-header></app-header></div>

		</div>

		<!-- Меняющаяся часть -->
		
		
	</div>
</template>

<style>
* {
	margin: 0;
	padding: 0;
}
.content {
	min-height: calc(100vh - 80px);
}
.footer{
	position: sticky;
}
</style>
