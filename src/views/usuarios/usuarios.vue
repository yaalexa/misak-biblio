<template>
    <div>
<div><Header/></div>
<br><br><br><br>

<div class="container izquierda">
                <div class="row">
 
      <div class="col-md-12">
      
        <h1>USUARIOS </h1> 
        
        <input type="text" v-model="buscar" class="form-control" placeholder="Ingrese el documento de la persona a buscar "/>

 
      </div>
 
    </div>
    </div>

        <button class="btn btn-primary" v-on:click="actualizarusuario()" >Buscar</button>
        <button class="btn btn-primary" v-on:click="unuevo()" >Registrar nuevo usuario</button>

        <button class="btn btn-primary" v-on:click="errored=true">Mostrar todo</button>
        <br><br>
<div class="container izquierda" v-if="errored==true">
                <table class="table table-hover">
                <thead>
                    <tr>
                                     <th>ID</th>
                                    <th>Name</th>
                                    <th>fullName</th>
                                    <th>Email</th>
                                    <th>type Document</th>
                                    <th>number Document</th>
                                    <th>Certificate misak</th>


                    </tr>
                </thead>
                <tbody>
                    
                        <tr v-for="user in usuarios" :key="user.id">
                                    <td>{{ user.id }}</td>
                                    <td>{{ user.name }}</td>
                                    <td>{{ user.full_name }}</td>
                                    <td>{{ user.email}}</td>                                    
                                    <td>{{ user.document_type}}</td>
                                    <td>{{ user.document_number}}</td>
                                    <th>{{user.certificate_misak}}</th>


                    </tr>
                     
                </tbody>
                </table>

</div>
    </div>
</template>
<script>
//importamos axios
import Header from '@/components/Header.vue'
import axios from 'axios'
export default {
    name:'Usuarios',
      components:{
    Header,
    //Footer
  },
    mounted(){
       // alert('entro al metodo moin')
       //this.miMetodo();
       this.obtenerUsuarios();
    },
    created(){

    },
    data:function(){
        return{
            usuarios: null,
            loading: true,
            errored:false

        };
    },
    methods:{
        obtenerUsuarios(){
       // alert('estoy en el metodo');
        axios.get('http://127.0.0.1:8000/api/user').then((respuesta)=>{
            console.log(respuesta.data);
            this.usuarios=respuesta.data
        }).catch((error)=>{
            console.log(error);
        });


        },
        unuevo(){
                this.$router.push('/unuevo');
            },
        actualizarusuario(){
            this.$router.push('/actualizarusuarios');
        }
    },
}
</script>

<style  scoped>
    .izquierda{
        text-align: left;
        width: 40%;
    }
   
</style>