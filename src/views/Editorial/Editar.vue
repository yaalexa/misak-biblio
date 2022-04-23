<template>
<div>
   <div>
     <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <form @submit.prevent="actualizar">
                <div>
                    <section>
                        <h1>Editar Editorial</h1>
                        <label for="">name: </label>
                        <input type="text" v-model="editorial.name" id="name" name="name">
                        <br><br>
                    </section>
                </div>   
                <div class="col-12">
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>  
            </form>        

        </div>
    </div>
</div>
</div>

</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"EditarEditorial",
    data(){
        return {
            editorial:{
                name:""
            }
        }
    },
     components:{
        Header,
      //  Footer
    },
    mounted:function(){
        this.form.editorialid = this.$route.params.id;
        axios.get("http://localhost:8000/api/editorials?id="+ this.form.editorialid)
        .then( datos =>{
            this.form.name = datos.data[0].name;
        })


    },
    methods:{
        async mostrarEditorial(){
            await this.axios.get(`http://127.0.0.1:8000/api/editorials/${this.$route.params.id}`).then(response=>{
                const { name} = response.data
                this.editorial.name = name
              
            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`http://127.0.0.1:8000/api/editorials/${this.$route.params.id}`,this.editorial).then(response=>{
                this.$router.push({name:"MostrarEditorial"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>