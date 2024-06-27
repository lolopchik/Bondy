<script >
    import axios from "axios"
    axios.defaults.baseURL = "https://serverbondy.onrender.com";

export default {
  data() {
    return {
      
      
    };
  },
  props:{
    user: Object,
    logan: Boolean
  },

  methods: {
    

    
    //клик
    
  },
  mounted() {
   if(this.logan==false){
    this.$router.push({name: "login"})
   }
  }
};
</script>

<template>
  <h1 >у вас {{user.dycoin}} Dy coin</h1>
  <div class="dy" @click="$emit('click1', user)"><img src="../assets/dycoin.png" ></div>
  
</template>

<style>
body{
 background-color: #161D27;
 color: #ffffff;
 font-family: comic sans ms;
}

.btn{
  background-color: #377CF6;
  
}

img{
    width:45%;
    height:45%;
    border-radius: 50%;
}
img:active{
    transform: scale(0.8);
    
    border-radius: 50%;
}
.dy{
    
    text-align: center;
}
h1,  h2, h3, h4, h5, h6, b, em{
    text-align: center;
}
</style>
