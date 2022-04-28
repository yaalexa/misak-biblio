<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>Autores</h1> 
                 <router-link :to='{name:"CrearAutor"}' class="btn btn-success">Crear Autor</router-link>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dirección</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Editar | Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="author in author" :key="author.id">
                            <td>{{ author.id }}</td>
                            <td>{{ author.name }}</td>
                            <td>{{ author.address }}</td>
                            <td>{{ author.phone }}</td>
                            <td>
                                <router-link :to='{name:"EditarAutor", params:{id:author.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrarAutor(author.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                            </td>
                            </tr>
                        </tbody>
                </table>
            </section>    
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios'; 
export default {
    name:"MostrarAutor",
    data(){
        return {
            author:[]
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted(){
        this.mostrarAutor()
    },
    methods:{
        async mostrarAutor(){
            await this.axios.get('http://127.0.0.1:8000/api/authors').then(response=>{
                this.author = response.data
            }).catch(error=>{
                console.log(error)
                this.author = []
            })
        },
        borrarAutor(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/authors/${id}`).then(response=>{
                    this.mostrarAutor()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>

<style>
    body{
        margin: 0%;
    }
    .pantalla{
        display: flex;
    }
    .cara1{
        height: 100vh;
        width: 20%;
        
    }
    .cara2{
        width: 80%;
        height: 100vh;
    }
</style>