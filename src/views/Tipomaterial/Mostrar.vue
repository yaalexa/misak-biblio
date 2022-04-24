<template>
    <div class="pantalla">
        <div class="cara1">
            <header>
                <Header/>
            </header>
        </div>
        <div class="cara2">
            <section>
                <h1>Tipo de material</h1> 
                 <router-link :to='{name:"CrearTipomaterial"}' class="btn btn-success">Crear Tipo de Material</router-link>
                    <table class="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tipo material</th>
                            <th scope="col">Editar | Borrar</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr  v-for="tipomaterial in tipomaterial" :key="tipomaterial.id">
                            <td>{{ tipomaterial.id }}</td>
                            <td>{{ tipomaterial.name }}</td>
                    <hr>
                    <br>

                    <tr>
                        
                            
                             <td>1</td>
                            <td>Folletos
            <td>
                                <router-link :to='{name:"EditarTipomaterial", params:{id:tipomaterial.id}}' class="btn btn-info"><font-awesome-icon icon="fa-solid fa-pen-to-square" /> Editar</router-link>
                                <a type="button" @click="borrartipomaterial(tipomaterial.id)" class="btn btn-danger"><font-awesome-icon icon="fa-solid fa-trash-can" />Borrar</a>
                            </td> 
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
    name:"MostrarTipomaterial",
    data(){
        return {
            tipomaterial:[]
        }
    },
    components:{
        Header,
      //  Footer
    },
    mounted(){
        this.mostrar_tipomaterial()
    },
    methods:{
        async mostrartipomaterial(){
            await this.axios.get('http://127.0.0.1:8000/api/type_materials').then(response=>{
                this.tipomaterial = response.data
            }).catch(error=>{
                console.log(error)
                this.tipomaterial = []
            })
        },
        borrartipomaterial(id){
            if(confirm("¿Confirma eliminar el tipo de material?")){
                this.axios.delete(`http://127.0.0.1:8000/api/type_materials/${id}`).then(response=>{
                    this.mostrartipomaterial()
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
    .btn btn-info{
        background-color: rgb(69, 156, 190);
    }
    .btn btn-danger{
        background-color: rgb(199, 71, 71);
    }
</style>