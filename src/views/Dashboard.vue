<template>
    <div>
  
                <Header/>
           
            <div class="container izquierda">


                
                <div class="row">
 
      <div class="col-md-12">
      
        <h1>MATERIAL </h1> 
        
        
        <input type="text" v-model="buscar" class="form-control" placeholder="Ejemplo: Charmander"/>              
 
      </div>
 
    </div>
 
    <div class="row mt-3">
 
      <div class="col-md-4" v-for="item in items" v-bind:key="item.id"> 
 
        <div class="card mb-3">
          
          <div class="card-body">
            <h3 class="card-title mb-3">{{ item.nombre }}</h3>
            <p class="card-text"><strong>Tipo:</strong> {{ item.autor }}</p>
            <p class="card-text"><strong>Fortaleza:</strong> {{ item.categoria }}</p>
            <p class="card-text"><strong>Debilidad:</strong> {{ item.autor }}</p>
          </div>
        </div>
 
      </div>
 
    </div>

                <button class="btn btn-primary" v-on:click="nuevo()" >Nuevo Material</button>
                <br><br>
                <table class="table table-hover">
                <thead>
                    <tr>
                                     <th>ID</th>
                                    <th>Nombre</th>
                                    <th>isbn</th>
                                    <th>year</th>
                                    <th>num_pages"</th>
                                    <th>priority</th>
                                    <th>pdf</th>
                                    <th>img</th>
                                    <th>material_users_id</th>
                                    <th>type_material_id</th>
                                    <th>author_books_id</th>
                                    <th>editorial_id</th>
                                    <th>area_id</th>
                                    <th>material_educational_leves_id</th>
                                    <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                        <tr v-for="material in material" :key="material.id">
                                    <td>{{ material.id }}</td>
                                    <td>{{ material.name }}</td>
                                    <td>{{ material.isbn }}</td>
                                    <td>{{ material.year }}</td>
                                    <td>{{ material.num_pages }}</td>
                                    <td>{{ material.priority }}</td>
                                    <td>{{ material.pdf }}</td>
                                    <td>{{ material.img }}</td>
                                    <td>{{ material.material_users_id }}</td>
                                    <td>{{ material.type_material_id }}</td>
                                    <td>{{ material.author_books_id }}</td>
                                    <td>{{ material.editorial_id }}</td>
                                    <td>{{ material.area_id }}</td>
                                    <td>{{ material.material_educational_leves_id }}</td>
                                     <td>
                                    <!--Botón modificar, que carga los datos del formulario con la tarea seleccionada-->
                                    <button class="btn btn-primary btn-sm" @click="editar(material.id)">+</button>
                                    <!--Botón que borra la tarea que seleccionemos-->
                                    <button class="btn btn-secondary btn-sm" @click="editar(material.id)">-</button>
                                 
                                </td>
                    </tr>
                     
                </tbody>
                </table>

            </div>

        <Footer />
    </div>
</template>
<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios';
export default {
    name:"Dashboard",
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
    methods:{
            editar(id){
                this.$router.push('/editar/' + id);
            },
            nuevo(){
                this.$router.push('/nuevo');
            }
    },
    mounted:function(){
        let direccion = "http://localhost:8000/api/material";
        axios.get(direccion).then((result) => {
        this.material = result.data;
        });
        
    }
}
</script>
<style  scoped>
    .izquierda{
        text-align: left;
        width: 50%;
    }
   
</style>