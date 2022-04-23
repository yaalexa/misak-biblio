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
                        <h1>Crear Nuevo Autores</h1>
                        <label for="">name: </label>
                        <input type="text" v-model="autor.name">
                        <br><br>
                        <label for="">Direccion: </label>
                        <input type="text" v-model="autor.address">
                        <br><br>
                        <label for="">Telefono </label>
                        <input type="text" v-model="autor.phone">
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
    name:"CrearAutores",
    data(){
        return {
            autor:{
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
    methods:{
        async crear(){
            await this.axios.post('http://127.0.0.1:8000/api/authors',this.autor).then(response=>{
                this.$router.push({name:"MostrarAutores"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>