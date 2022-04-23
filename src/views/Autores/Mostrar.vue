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
                 <router-link :to='{name:"CrearAutores"}' class="btn btn-success">Crear autor</router-link>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Editar | Borrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="autor in autor" :key="autor.id">
                            <td>{{ autor.id }}</td>
                            <td>{{ autor.name }}</td>
                            <td>{{ autor.address }}</td>
                            <td>{{ autor.phone }}</td>

                            <td>
                                <router-link :to='{name:"EditarAutores", params:{id:autor.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrarautor(autor.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
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
    name:"MostrarAutores",
    data(){
        return {
            autor:[]
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted(){
        this.mostrarautor()
    },
    methods:{
        async mostrarautor(){
            await this.axios.get('http://127.0.0.1:8000/api/authors').then(response=>{
                this.autor = response.data
            }).catch(error=>{
                console.log(error)
                this.autor = []
            })
        },
        borrarautor(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`http://127.0.0.1:8000/api/authors/${id}`).then(response=>{
                    this.mostrarautor()
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