<template>
    <div class="pagen">
           
                <Header/>
            
            <div class="container izquierda">
                <div class="contenedor">
                   <div class="fadeIn first">
                  <img class=""src="@/assets/LocoWeb3.png" id="icon" alt="User Icon" />
                </div>
                </div>


               

            </div>

        
    </div>
</template>
<script>
import Header from '@/components/Header.vue';

import axios from 'axios';
export default {
    name:"welcome",
    data(){
        return {
            material:null,
            pagina:1
        }
    },
    components:{
        Header,
      //  Footer
    },
 
}
</script>
<style  scoped>
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
  min-height: 100%;
  padding: 20px;
  max-width:100%;
}

#icon {
  width:100%;
  position: relative;
  background-position: center center;
  background-size: 100px auto;
  margin-left: 10em;
  margin-top: 18em;
}
</style>