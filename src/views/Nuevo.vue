<template>
    <div>
        <Header />

            <div class="container  izquierda">
                 <form @submit.prevent="addLibro" action="" class="form-horizontal" enctype="multipart/form-data">
                    <div class="form-group left">
                       <label for="" class="control-label col-sm-2">Nombre</label>
                       <div class="col-sm-10">
                          <input type="text" class="form-control" name="name" id="name" v-model="form.name">
                       </div>
                    </div>
                  <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">Año</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="year" id="year" v-model="form.year">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">ISBN</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="isbn" id="isbn" v-model="form.isbn">
                          </div>
                        </div> 
                    </div>
                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3"># Paginas</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="num_pages" id="num_pages" v-model="form.num_pages">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">PRIORIDAD</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="priority" id="priority" v-model="form.priority">
                          </div>
                        </div> 
                    </div>

                    <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">USUARIO MATERIAL</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="material_users_id" id="material_users_id" v-model="form.material_users_id">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">ID TIPO DE MATERIAL</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="type_material_id" id="type_material_id" v-model="form.type_material_id">
                          </div>
                        </div> 
                    </div>
                   
                    <div class="form-group left row">
                      
                        <div class="col">
                          <label for="" class="control-label col-sm-5">EDITORIAL ID</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="editorial_id" id="editorial_id" v-model="form.editorial_id">
                          </div>
                        </div> 
                    </div>
                  <div class="form-group left row">
                      <div class="col">
                            <label for="" class="control-label col-sm-3">ID AREA</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="area_id" id="area_id" v-model="form.area_id">
                            </div>
                        </div>
                       
                    </div>
                    <div class="col">
                          <label for="" class="control-label col-sm-5">pdf</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="pdf" id="pdf" v-model="form.pdf">
                          </div>
                        </div>
                    <br>
                    Imagen:
                    <br>
                    <input type="file" @change="obtenerImagen" name="img" id="" >
                    <br><br>

                    <figure>
                        <img width="200" height="200" :src="imagen" alt="Foto-Libro">
                    </figure>


                    <div class="form-group">
                      <button type="button" class="btn btn-primary" v-on:click="guardar()" >Guardar</button> 
                      <button type="button" class="btn btn-dark margen" v-on:click="salir()"  >Salir</button>
                      
                    </div> 
                </form>


            </div>
        <!-- <Footer /> -->

    </div>
</template>
<script>
import Header from '@/components/Header.vue'
//import Footer from '@/components/Footer.vue'
import axios from 'axios';
export default {
    name:"Nuevo",
    data:function(){
        return {
            imagenMiniatura:'',
            form:{
                "name":"",
                "isbn" : "",
                "year": "", 
                "num_pages" : "",
                "priority":"",
                "pdf" :"",
                "img" : "",
                "type_material_id" : "",
                "editorial_id" : "" ,
                "area_id" : ""
            }
        }
    },
    components:{
        Header,
        //Footer
    },
    methods:{
        obtenerImagen(e){
            let file = e.target.files[0];
            this.form.img= file;
            this.cargarImagen(file);
        },
        cargarImagen(file){
            let reader =new FileReader();
            reader.onload = (e)=>{
                this.imagenMiniatura = e.target.result;
            }
            reader.readAsDataURL(file);
        },
        
        /* addLibro(){
            let formData =new FormData();
            formData.append('img', this.form.img);

            axios.post("http://127.0.0.1:8000/api/materials",formData)
            .then(Response => {
                console.log(Response.data);
            })
        }, */
         guardar(){
            
            axios.post("http://127.0.0.1:8000/api/materials",this.form)
            .then(data =>{
                console.log(data);
                 this.makeToast("Hecho","material creado","success");
                /*this.$router.push("/dashboard"); */
            }).catch( e =>{
                console.log(e);
                 this.makeToast("Error","Error al guardar","error");
            })
        },
        salir(){
            this.$router.push("/dashboard");
        },
         makeToast(titulo,texto,tipo) {
            this.toastCount++
            this.$bvToast.toast(texto, {
            title: titulo,
            variant: tipo,
            autoHideDelay: 5000,
            appendToast: true
            })
        } 
        
    },
    computed:{
            imagen(){
                return this.imagenMiniatura;
            }
        },
    
}
</script>



<style scoped>
.left {
  text-align: left;
}
.izquierda {
  text-align: left;
  width: 70%;
  margin-left: 400px;
  margin-top: 20px;
}
</style>
