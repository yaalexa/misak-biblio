<template>
  <div>
    <div class="fondo">
    <!-- <header/> -->
    <div class="header">
      <img src="../assets/logo.png" alt="" class="logoheader">
      <h1 class="titulo">MATERIAL</h1>
    </div>
    
      <div class="cont">
          <div  v-for="(material, index) in todos" v-bind:key="index">
          <div class="cont1">
          <h2 class="uno">Nombre de material: {{ material.name }}</h2>
          
          <div class="cont2">
            <img v-if="material.img" :src="material.img" fit="fill"/>
          <p class="dos">ISBN: {{ material.isbn }}</p>
          <p class="tres">Año: {{ material.year }}</p>
          <p class="cinco">Numero de paginas: {{ material.num_pages }}</p>
           <img :src="`public/${material.img}`" class="profile-user-img img-fluid img-circle" style="height:40px; width:40px;">

          </div>
          </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
/* import func from 'vue-editor-bridge'; */
import axios from "axios";

export default {
  data() {
    return {
      todos: null,
    };
  },
  mounted() {
    this.getTodos();
  },
  methods: {
    getTodos() {
      axios
        .get("http://127.0.0.1:8000/api/materials")
        .then((response) => {
          this.todos = response.data;
        })
        .catch((errorgrave) => console.log(errorgrave));
    },
    getimg(){
               let img = (this.form.img.length > 100) ? this.form.img : "public/imgages/profile/"+ this.form.img;
                return img;
            },
    
  },
};
</script> 

<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.header{
  background: rgba(8, 2, 2, 0.838);
  display: flex;
  align-items: center;
}
.logoheader{
  width: 8%;
}
.titulo {
  color: aliceblue;
  padding: 5px;
  text-align: center;
  width: 90%;
  
}
/* Cuerpo */
.cont {
  border: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  padding: 50px;
  background-image: url(../assets/fondoWeb.png);
  background-position: 100%;
  background-attachment:fixed;

  
}
.cont1 {
  padding: 10px 40px;
  margin: 10px;
  background-color: rgba(45, 48, 78, 0.822);
  width: 50%;
  border: 1px blue solid;
  
}
.uno {
  padding: 20px;
  /* background-image: url(../assets/Images/2.jpg); */
  color: white;
  background: rgba(20, 30, 137, 0.723);
}
.cont2{
  background-color: rgba(12, 9, 9, 0.582);
  padding: 20px 20px;
}
.dos {
  
  color: white;
}
.tres {
  
  color: white;
}
.cuatro {
  border: 1px solid black;
  width: 99%;
  
}
.cinco{
  color: white;
}
/* .fondo {
  background: rgba(0, 0, 0, 0.712);
  padding: 10px;
  margin: 5px;
  margin-left: 310px;
  align-content: center;
} 
.buscador {
  padding: 20px;
  margin: 10px;
  margin-left: 310px;
  background: rgba(0, 0, 0, 0.672);
  justify-content: flex-end;
  align-items: baseline;
  flex-wrap: wrap;
  display: flex;
}
.barra {
  width: 40%;
}
.boton {
  margin: 5px;
  padding: 5px;
  width: 20%;
}


*/
</style>