<template>
<div>
<main>

<!--LISTAGEM DE ITENS-->
<div class="container text-center">
  <div class="row d-flex justify-content-center" >
    <ul class="list-group col-10 col-md-4 mt-3">
        <li class="list-group-item titulo-tabela">Segunda</li>
        <span v-if="segunda.length">
          <li class="list-group-item item-tabela" v-on:click="remover(tarefa.dia, tarefa.id)" v-for="tarefa in segunda" :key="tarefa.id"  >
                    {{ tarefa.tarefa }} - {{ tarefa.hora }}
          </li>
        </span>
        <li class="list-group-item item-tabela" v-else>
          Sem tarefas
        </li>
    </ul>

    <ul class="list-group col-10 col-md-4 mt-3">
        <li class="list-group-item titulo-tabela">Terça</li>
        <span v-if="terca.length">
          <li class="list-group-item item-tabela" v-on:click="remover(tarefa.dia, tarefa.id)" v-for="tarefa in terca" :key="tarefa.id">
                  {{ tarefa.tarefa }} - {{ tarefa.hora }}
          </li>
        </span>
        <li class="list-group-item item-tabela" v-else>
          Sem tarefas
        </li>
    </ul>

    <ul class="list-group col-10 col-md-4 mt-3">
        <li class="list-group-item titulo-tabela">Quarta</li>
        <span v-if="quarta.length">
          <li class="list-group-item item-tabela" v-on:click="remover(tarefa.dia, tarefa.id)" v-for="tarefa in quarta" :key="tarefa.id">
                  {{ tarefa.tarefa }} - {{ tarefa.hora }}
          </li>
        </span>
        <li class="list-group-item item-tabela" v-else>
          Sem tarefas
        </li>
    </ul>

    <ul class="list-group col-10 col-md-4 mt-3">
        <li class="list-group-item titulo-tabela">Quinta</li>
        <span v-if="quinta.length">
          <li class="list-group-item item-tabela" v-on:click="remover(tarefa.dia, tarefa.id)" v-for="tarefa in quinta" :key="tarefa.id">
                  {{ tarefa.tarefa }} - {{ tarefa.hora }}
          </li>
        </span>
        <li class="list-group-item item-tabela" v-else>
          Sem tarefas
        </li>
    </ul>

    <ul class="list-group col-10 col-md-4 mt-3">
        <li class="list-group-item titulo-tabela">Sexta</li>
        <span v-if="sexta.length">
          <li class="list-group-item item-tabela" v-on:click="remover(tarefa.dia, tarefa.id)" v-for="tarefa in sexta" :key="tarefa.id">
                  {{ tarefa.tarefa }} - {{ tarefa.hora }}
          </li>
        </span>
         <li class="list-group-item item-tabela" v-else>
          Sem tarefas
        </li>
    </ul>
  </div>
</div>

<div id="demo" class="collapse">

<!--Botões-->
<div class="botoes d-flex flex-column">
<!--INFO-->
<!-- Button to Open the Modal -->
<button type="button" class="button" data-bs-toggle="modal" data-bs-target="#myModal">
<img src="../assets/img/info.png" alt="Botão informação">
</button>
<!-- The Modal -->
<div class="modal" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Informações</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
       Para remover os elementos do lista, dê um clique único sobre o item.
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>

<!-- Button to Open the Modal -->
<button type="button" class="button" data-bs-toggle="modal" data-bs-target="#ModalAdicionar">
<img src="../assets/img/plus.png" alt="Botão Adicionar">
</button>
<!-- The Modal -->
<div class="modal" id="ModalAdicionar">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Modal Header -->
      <div class="modal-header">
        <h4 class="modal-title">Adicionar</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- Modal body -->
      <div class="modal-body">
        <form @submit.prevent="adicionar" class="text-center">
          <div class="mb-3">
            <label for="text" class="form-label">Tarefa:</label>
              <input type="text" class="form-control" id="tarefa" placeholder="Digite uma tarefa" name="text">
          </div>
          <div class="mb-3 mt-3 ">
            <label for="dia" class="form-label">Dia:</label>
              <select id="dia" name="dia" class="form-select">
                <option value="segunda">Segunda</option>
                <option value="terça">Terça</option>
                <option value="quarta">Quarta</option>
                <option value="quinta">Quinta</option>
                <option value="sexta">Sexta</option>
              </select>
          </div>
          <div class="mb-3 mt-3 ">
            <label for="hora" class="form-label">Hora:</label>
            <input type="text" class="form-control" id="hora" placeholder="hora" name="hora">
          </div>
          <button type="submit" class="btn btn-primary">Adicionar</button>
        </form>
      </div>

      <!-- Modal footer -->
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
      </div>

    </div>
  </div>
</div>


<!--DOWNLOAD-->
<button v-on:click="GerarPdf" class="button"><img src="../assets/img/download-arrow.png" alt="Botão Download"/></button>
</div>

</div>

<div class="d-flex justify-content-end align-content-end">
  <button type="button" class="btn btn-primary botoes button" style="margin: 15px; margin-top: 0;" data-bs-toggle="collapse" data-bs-target="#demo">
    <img src="../assets/img/menu-3.png" alt="abrir menu">
  </button>
</div>

</main>

</div>
</template>

<script>
//Import do gerador de PDF;
import GerarPdf from '../services/GerarPdf';


export default {
  name: 'Grid',
  props: {
    
  },
  data() {
    return {
        tarefas: 0,
        segunda: [],
        terca: [],
        quarta: [],
        quinta: [],
        sexta: [],
    }
  },
  methods: {
      adicionar() {
          this.tarefas++;
          let id = this.tarefas;

          let tarefa = document.getElementById("tarefa").value;
          
          let dia = document.getElementById('dia');
          dia = dia.options[dia.selectedIndex].value;
          
          let hora = document.getElementById("hora").value;
          
          if (tarefa != "" && hora != ""){
            if (dia === 'segunda'){
                this.segunda.push({
                  id: id,
                  tarefa: tarefa,
                  dia: dia,
                  hora: hora
                });
            }

            if (dia === 'terça'){
                this.terca.push({
                  id: id,
                  tarefa: tarefa,
                  dia: dia,
                  hora: hora
                });
            }

            if (dia === 'quarta'){
                this.quarta.push({
                  id: id,
                  tarefa: tarefa,
                  dia: dia,
                  hora: hora
                });
            }

            if (dia === 'quinta'){
                this.quinta.push({
                  id: id,
                  tarefa: tarefa,
                  dia: dia,
                  hora: hora
                });
            }

            if (dia === 'sexta'){
                this.sexta.push({
                  id: id,
                  tarefa: tarefa,
                  dia: dia,
                  hora: hora
                });
            }
          }

          document.getElementById("tarefa").value = "";
          document.getElementById("hora").value = "";

      },
      
      remover(dia,id) {
        if (dia == "segunda") {
          let arrayN = this.segunda.filter((item) => item.id !== id); 
          this.segunda = arrayN;
        }

        else if (dia == "terça") {
          let arrayN = this.terca.filter((item) => item.id !== id); 
          this.terca = arrayN;
        }

        else if (dia == "quarta") {
          let arrayN = this.quarta.filter((item) => item.id !== id); 
          this.quarta = arrayN;
        }

        else if (dia == "quinta") {
          let arrayN = this.quinta.filter((item) => item.id !== id); 
          this.quinta = arrayN;
        }

        else if (dia == "sexta") {
          let arrayN = this.sexta.filter((item) => item.id !== id); 
          this.sexta = arrayN;
        }

        

      },

      GerarPdf: function () {
        let seg = this.segunda;
        let ter = this.terca;
        let qua = this.quarta;
        let qui = this.quinta;
        let sex = this.sexta;

        //indexmax
        let indexmax = [seg.length, ter.length, qua.length, qui.length, sex.length];
        indexmax = Math.max.apply(Math, indexmax);
        
        let tabela_dados = [];

        for (let i = 0; i < indexmax; i++){
          if (seg[i] == null || seg[i] == 'null') {
            seg[i] = "";
          } 
          else if (seg[i] != null || seg[i] != 'null') {
            seg[i] = seg[i].tarefa+" - "+seg[i].hora;
          }

          if (ter[i] == null || ter[i] == 'null') {
            ter[i] = "";
          }
          else if (ter[i] != null || ter[i] != 'null') {
            ter[i] = ter[i].tarefa+" - "+ter[i].hora;
          }

          if (qua[i] == null || qua[i] == 'null') {
            qua[i] = "";
          }
          else if (qua[i] != null || qua[i] != 'null') {
            qua[i] = qua[i].tarefa+" - "+qua[i].hora;
          }

          if (qui[i] == null || qui[i] == 'null') {
            qui[i] = "";
          }
          else if (qui[i] != null || qui[i] != 'null') {
            qui[i] = qui[i].tarefa+" - "+qui[i].hora;
          }

          if (sex[i] == null || sex[i] == 'null') {
            sex[i] = "";
          }
          else if (sex[i] != null || sex[i] != 'null') {
            sex[i] = sex[i].tarefa+" - "+sex[i].hora;
          }

          tabela_dados.push([seg[i], ter[i], qua[i], qui[i], sex[i]]);
        }

        GerarPdf(tabela_dados);
      },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@font-face {
  font-family: bernadette;
  src: url('../assets/font/bernadette.ttf');
}
main {
  font-family: bernadette;
  background-color: #e8f1f2;
}

.titulo-tabela {
  background-color: #00d8ff;
  color: white;
  border: 1px solid #13293d;
}

.item-tabela {
  background-color: rgba(255, 255, 255, .7);
}

.botoes {
  margin: 10px;
  margin-top: 50px;
  align-items: end;
}

.button {
  border: 1px solid #13293d;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  padding: 0; 
  margin: 4px;
  
}

.button img {
  width: 100%;
}

</style>
