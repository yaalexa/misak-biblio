<template>
<div>
     <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <form @submit.prevent="crear">
                    <div>
                        <h1>Crear Tipo de Material</h1>
                        <label for="">name: </label>
                        <input type="text" v-model="tipomaterial.name">
                        <br><br>
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn btn-primary">Guardar</button>
                    </div>    
                </form>    
            </section>

        </div>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"CrearTipomaterial",
    data(){
        return {
            tipomaterial:{
                name:""
            }
        }
    },
    components:{
        Header,
      //  Footer
    },
    methods:{
        async crear(){
            await this.axios.post('http://127.0.0.1:8000/api/type_materials',this.tipomaterial).then(response=>{
                this.$router.push({name:"MostrarTipomaterial"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>