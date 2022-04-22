<template>
<div class="pagen">
           
                <Header/>
                <div class="container izquierda">
                <div class="contenedor">
                 
 <b-row class="mt-5">
     <b-col cols="12" md="5">

      <b-card  bg-variant="transparent" class="text-center" text-variant="white"   >
          <b-img  fluid :src="imagem" alt="material.jpg"  ></b-img>
        <b-button variant="warning">Material</b-button>
      </b-card>
      </b-col>
      <b-col cols="12" md="4">
       <b-card  bg-variant="transparent" class="text-center" text-variant="white"  >
          <b-img  fluid :src="imagem" alt="material.jpg"  ></b-img>
        <b-button variant="warning">AUTOR</b-button>
      </b-card>
      </b-col>
      <b-col cols="12" md="4">
       <b-card  bg-variant="transparent" class="text-center" text-variant="white"  >
          <b-img  fluid :src="imagem" alt="material.jpg"  ></b-img>
        <b-button variant="warning">NIVEL</b-button>
      </b-card>
      </b-col>
</b-row>

</div>
</div>
</div>

</template>
<script>
import Header from '@/components/Header.vue';
import imagem from "@/assets/material.png"
import axios from 'axios';
export default {
    name:"welcome",
    data(){
        return {
            material:null,
            pagina:1,
            imagem: imagem
        }
    },
    components:{
        Header,
      //  Footer
    },
 
}
</script>
<style  scoped>
.text-center{
         border-radius: 70%;
         width: 60mm;
}
    .izquierda{
        text-align: left;
        width: 50%;
    }
    .pagen{
    background-image:url("@/assets/Screenshot_2.png");
  height: 100vh;
	 background-repeat:no-repeat;
	 background-size:cover;
	 width:100%;
	 height:100vh;
	 overflow:auto;
    filter: alpha(opacity=50);
   }

   .contenedor {
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
  width: 100%;
  min-width: 100%;
  min-height: 100%;
   height:100vh;
  padding: 20px;
  max-width:100%;
}


</style>