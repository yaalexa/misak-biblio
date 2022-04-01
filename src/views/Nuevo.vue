<template>
    <div>
        <Header />
            <div class="container  izquierda">
                 <form action="" class="form-horizontal">
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
                            <label for="" class="control-label col-sm-3">PDF</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="pdf" id="pdf" v-model="form.pdf">
                            </div>
                        </div>
                        <div class="col">
                          <label for="" class="control-label col-sm-5">IMAGEN</label>
                          <div class="col-sm-7">
                             <b-form-file accept="image/jpeg, image/png, image/gif" name="img" id="img" v-model="form.img"></b-form-file>
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
                            <label for="" class="control-label col-sm-3">ID AUTOR</label>
                            <div class="col-sm-7">
                                <input type="text" class="form-control" name="author_books_id" id="author_books_id" v-model="form.author_books_id">
                            </div>
                        </div>
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
                        <div class="col">
                          <label for="" class="control-label col-sm-5">ID NIVELES DE EDUCACION</label>
                          <div class="col-sm-7">
                             <input type="text" class="form-control" name="material_educational_leves_id" id="material_educational_leves_id" v-model="form.material_educational_leves_id">
                          </div>
                        </div> 
                    </div>


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
            form:{
                "name":"",
                "isbn" : "",
                "year": "", 
                "num_pages" : "",
                "priority":"",
                "pdf" :"",
                "img" : "",
                "material_users_id" : "",
                "type_material_id" : "",
                "author_books_id" : "" ,
                "editorial_id" : "" ,
                "area_id" : "",
                "material_educational_leves_id" : "",
            }
        }
    },
    components:{
        Header,
        //Footer
    },
    methods:{
        guardar(){
            
            axios.post("http://127.0.0.1:8000/api/material",this.form)
            .then(data =>{
                console.log(data);
                this.makeToast("Hecho","materila creado","success");
                this.$router.push("/dashboard");
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
        
    }
}
</script>
<style scoped>
.left{
    text-align:  left;
}
   .izquierda{
        text-align: left;
        width: 50%;
    }
</style>