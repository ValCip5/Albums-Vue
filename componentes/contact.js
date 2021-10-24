Vue.component('component-contact',{
	data:function(){
		return {
				email:null,
				asunto:null,
				comentario:null,
				enviado: false,
                checkbox: false,
                confirmacion: "quiere recibir datos",
                errores: [],
                arr:[]
		}
	},

	computed : {
    hayErrores: function(){
    	return this.errores.length; 
        }
    },

    template:`
    <section class="sectionUnoContacto pb-4">
        <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-12 elContacto">
                <h2 class="mb-4">Contacto</h2>
                    <p>
                        Te dejamos nuestras redes sociales. Recordá que
                        para contactarte podes hacerlo desde esta sección o bien,
                        por nuestras redes.
                    </p>
                    <ul class="row mt-5 me-auto evenSmaller pb-4">
                        <li class="col"><a class="p-3" target="_blank" href="https://www.facebook.com"><i class="bi-facebook"></i></a></li>
                        <li class="col"><a class="p-3" target="_blank" href="https://www.twitter.com"><i class="bi-twitter"></i></a></li>
                        <li class="col"><a class="p-3" target="_blank" href="https://www.instagram.com"><i class="bi-instagram"></i></a></li>
                        <li class="col"><a class="p-3" target="_blank" href="https://www.linkedin.com"><i class="bi-linkedin"></i></a></li>
                    </ul>
                    
                    <div v-if="enviado === true">
                        <div v-if="hayErrores" class="claseerror pt-3 mb-4">
                            <ul>
                                <li v-for="error in errores">{{error}}</li>
                            </ul>
                        </div>
                            <div v-else class="enviado mb-4">
                                <h3>Enviado con éxito</h3>
                            </div>
                        </div>
            
                        <div class="seMuestra" v-if="this.arr.length > 0" >
                            <h3 class="mb-4">Datos</h3>
                                <ol>
                                    <li class="mb-2" v-for="item in arr" >
                                    {{item.email}}, {{item.asunto}}, {{item.comentario}}
                                    </li>
                                </ol>
                        </div>
                    </div>
                <div class="col-xl-8 col-lg-12 p-5 formContainer">
                <form v-on:submit.prevent="enviarDatitos" novalidate>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" v-model="email" id="email" class="form-control" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="asunto" class="form-label">Asunto</label>
                    <input type="text" v-model="asunto" id="asunto" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="formControl" class="form-label">Tu mensaje</label>
                    <textarea class="form-control" v-model="comentario" id="formControl" rows="7"></textarea>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" v-model="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" id="checkbox" for="exampleCheck1">Deseo recibir información de cuando se me responda.</label>
                </div>
                <div class="text-center">
                    <input type="submit" class="submitBt" value="Enviar"/>
                </div>
                </form>
                </div>
            </div>
        </div>
    </section>`,

    
    methods:{
        enviarDatitos:function(){
           this.enviado = true; 
           this.errores=[] 
                 
          if (!this.email) {
            console.log(!this.email)
            this.errores.push('Debe de haber un email');
          }
          if(this.email && this.email.length < 4) {
            this.errores.push('Los emails no pueden ser asi de cortos');
          }
          if(!this.asunto){
              this.errores.push('No hay nada escrito en el asunto');
          }
          if (!this.comentario) {
            this.errores.push('No hay ningun comentario escrito')
          }
          if(this.comentario && this.comentario.length < 4) {
            this.errores.push('El comentario no puede ser tan corto');
          }
             
        if(this.errores.length == 0){
                       
         nuevoObj = {email: this.email,
                     asunto: this.asunto,
                     comentario: this.comentario,
                     checkbox: this.checkbox
                    }
                
          if(!localStorage.dato){
                this.arr=[]
            }else{
                this.arr=JSON.parse(localStorage.getItem("dato"))
                }
    
            this.arr.push(nuevoObj)
            localStorage.setItem("dato",JSON.stringify(this.arr))
       }
    }
    
    },

        mounted:function(){
            this.arr=JSON.parse(localStorage.getItem("dato")) || [] 
            
        }
    
    });

    
    