<script>
import axios from "axios"
    axios.defaults.baseURL = "https://serverbondy.onrender.com";
    
    export default {
        data(){
            return {

            };
        },
        props:{
            user: Object,
            logan: Boolean
        },
        methods: {

        },
        mounted(){
            if(this.logan==false){
                this.$router.push({name: "login"})
            } 
        }
    }
</script>

<template>
    <h2>ваш аккаунт</h2>
    <hr>
    <h3>Ник: {{ user.name }}, id: {{ user.id }}</h3>
    <h5 style="margin-top: 15px;"><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  узнать о новостях
</button></h5>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="color: #161D27;">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Информация об обновлениях</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Будет добавлена реферальная ссылка, переводы и игры
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">закрыть</button>
      </div>
    </div>
  </div>
</div>
<h5> <button class="btn" @click="$emit('exit')" style=" margin-top: 30px;">выйти из аккаунта</button></h5>
<h5>
    <button class="btn" @click="$emit('delete1', user)" style="background-color: red; margin-top: 30px;">удалить аккаунт</button>
</h5>
</template>


<style>

</style>