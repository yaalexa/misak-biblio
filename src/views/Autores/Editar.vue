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
                        <h1>Editar Autor</h1>
                        
                        <label for="">Nombre: </label>
                        <input type="text" v-model="author.name" id="name" name="name">

                        <label for="">Dirección: </label>
                        <input type="text" v-model="author.address" id="name" name="name">

                        <label for="">Telefono: </label>
                        <input type="text" v-model="author.phone" id="name" name="name">
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
    name:"EditarAutor",
    data(){
        return {
            author:{
                name:"",
                address:"",
                phone:""
            }
        }
    },
     components:{
        Header,
      //  Footer
    },
    mounted:function(){
        this.form.authorid = this.$route.params.id;
        axios.get("http://localhost:8000/api/authors?id="+ this.form.authorid)
        .then( datos =>{
            this.form.name = datos.data.name;
        })


    },
    methods:{
        async mostrarAutor(){
            await this.axios.get(`http://127.0.0.1:8000/api/authors/${this.$route.params.id}`).then(response=>{
                const { name} = response.data
                this.author.name = name
              
            }).catch(error=>{
                console.log(error)
            })
        },
        async actualizar(){
            await this.axios.put(`http://127.0.0.1:8000/api/authors/${this.$route.params.id}`,this.author).then(response=>{
                this.$router.push({name:"MostrarAutor"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>