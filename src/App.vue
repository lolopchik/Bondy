<script>
import axios from "axios"
    axios.defaults.baseURL = "http://localhost:3000";
// Компоненты
import AppHeader from './components/AppHeader.vue';
import { RouterView } from 'vue-router'

// Главная страница
export default {
	data(){
		return {
			
			logan: false,
			user:{},
			log:false,
      par: false,
			errmoney:false,
			errmoney1:false,
		};
	},
	methods: {
    getPrettyTime(time) {
      let diff = dayjs(time).diff(dayjs(), "seconds");
      duration = dayjs.duration(diff, "seconds").format("HH:mm:ss");
      return duration;
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
		async click1(id){
      this.errmoney1 = false;
      this.errmoney = false;
        let respon = await axios.put('/click', id);
        this.user = respon.data;  
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
