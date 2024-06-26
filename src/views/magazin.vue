<script>
import dayjs from 'dayjs'


import axios from "axios"
axios.defaults.baseURL = "http://localhost:3000";

export default {
    data(){
        return {
            
            
            
            money:'Недостаточно средств для покупки',
            dy1: true,
            bondy1: false,
            dat:"",
            ada: false
        }
    },
    props:{
            user: Object,
            errmoney: Boolean,
            errmoney1: Boolean,
            logan: Boolean,
            
        },
    methods: {
      //переход магазов
      dy(){
        this.dy1=true;
        this.bondy1=false
      },
      bondy(){
        this.dy1=false;
        this.bondy1=true
      },
      getPrettyTime(time) {
        
      let diff = dayjs(time).diff(dayjs(), "seconds");
      let duration = dayjs.duration(diff, "seconds").format("HH:mm:ss");
      return duration;
    },
    vren(){
      if(this.user.rest!=0 && this.user.dycoin>=10000000){
        this.$emit('postvrem');
        this.ada=false
      }
      
    }
    
      //рест
    
    
    },
    mounted() {
      
      setInterval(()=> {if(this.ada==false){
        let diff = dayjs(this.user.data1).diff(dayjs(), "seconds");
        if (diff>0){
        this.dat= this.getPrettyTime(this.user.data1)}
        else{
          this.$emit('stop')
          this.ada=true
        }
      }
        
      }, 1000)
      if(this.logan==false){
    this.$router.push({name: "login"})
   }
    }
    
}
</script>

<template>
  
  <header>
    <nav> <h6 style="margin-top: 10px;"><button style="background-color: #D037F6; color: #161D27;" @click="dy()">Dy магазин</button> / <button style="background-color: #D037F6; color: #161D27;" @click="bondy()" >BonDy магазин</button></h6></nav>
  </header>
  <main>
    <h1 v-if="user.data1!=''"> vrema {{ dat}}</h1>
  <section v-if="dy1">
    <h1>магазин для кликера Dycoin</h1>
    <h2>у вас {{ user.dycoin }} Dy coin</h2>
    <h3 v-if="errmoney" style="color: red;">{{  money }}</h3>
    <hr>
    
        <h4>+1 за клик. У вас {{ user.bust1 }} шт.  Цена: {{ user.price1 }} DyCoin <button @click="$emit('bust1', user)" class="btn">купить</button></h4>
        <br>
        <h4>+5 за клик. У вас {{ user.bust2 }} шт.  Цена: {{ user.price2 }} DyCoin <button @click="$emit('bust2', user)" class="btn">купить</button></h4>
        <br>
        <h4>+20 за клик. У вас {{ user.bust3 }} шт.  Цена: {{ user.price3 }} DyCoin <button @click="$emit('bust3', user)" class="btn">купить</button></h4>
        <br>
        <h4>+100 за клик. У вас {{ user.bust4 }} шт.  Цена: {{ user.price4 }} DyCoin <button @click="$emit('bust4', user)" class="btn">купить</button></h4>
        <br>
        <h4>+500 за клик. У вас {{ user.bust5 }} шт.  Цена: {{ user.price5 }} DyCoin <button @click="$emit('bust5', user)" class="btn">купить</button></h4>
        <br>
        <h4>+2500 за клик. У вас {{ user.bust6 }} шт.  Цена: {{ user.price6 }} DyCoin <button @click="$emit('bust6', user)" class="btn">купить</button></h4> 
        <hr>
      </section>
    
    <section v-if="bondy1">
      <h2>У вас {{ user.bondycoin }} BonDy Coin</h2>
      <h3 v-if="errmoney1" style="color: red;">{{  money }}</h3>
      <h5 v-if="user.rest==0">чтобы получать BonDyCoin сделайте хотябы 1 рест</h5>
      <div v-if="user.rest==0"><h5 >1 рест = 1 BonDyCoin / за раз вы получаете {{ user.rest }} BonDy coin</h5> 
      <br>
      <h3> отправить 10 000 000 Dy coin на изготовление {{ user.rest }} BonDy coin <br> <button class="btn" @click="vren()">отправить</button></h3>
      <br></div>
      
      <h5>у вас {{ user.rest }} рестов</h5>
      <h6><button @click="$emit('rest', user)" class="btn">сделать рест</button></h6>
      <h6><b><em>Чтобы сделать рест надо 1 000 000 000 Dy coin</em></b></h6>
      
    </section>
  </main>
</template>


<style >
  nav, header, ol, li{
    text-align: center;
  }
</style>