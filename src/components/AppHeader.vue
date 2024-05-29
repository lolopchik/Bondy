<script>
// переход на страницы
export default {
    methods: {
        magaz(){
      this.$router.push({ name: 'magazin'})
    },
    top(){
      this.$router.push({ name: 'top'})
    },
    akkaynt(){
      this.$router.push({ name: 'akkaynt'})
    },
    main(){
      this.$router.push({ name: 'main'})
    },
    }

}
</script>
<template>
    <footer ><div class="container text-center niz">
  <div class="row align-items-end">
    <div class="col">
      <h3><button @click="top()" class="btn" data-bs-toggle="modal" data-bs-target="#topl">
        топ
</button></h3>
    </div>
    <div class="col">
      <h3><button type="button" class="btn" @click="main()">
        кликер
</button></h3>
</div>
    <div class="col">
      <h3><button type="button" class="btn" @click="magaz()">
        магазин
</button></h3>
</div>
    <div class="col">
      <h3><button @click="akkaynt" class="btn" >
        аккаунт
</button></h3>
    </div>
  </div>
</div></footer>
</template>

<style>
  footer:before{content: '';
  background: linear-gradient(45deg, #f63793, #D037F6, #f63793);
  position: absolute;
  top: -2px;
  left:-2px;
  background-size: 400%;
  z-index: -1;
  filter: blur(5px);
  width: calc(100% + 4px);
  height: calc(100% + 4px);
  animation: glowing 20s linear infinite;
  opacity: 1;
  transition: opacity .3s ease-in-out;
  border-radius: 10px;
}
footer:active:after {
  background: transparent;
}

</style>