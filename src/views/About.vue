<template>
  <div class="about mt-5">
    <h1><b>PlannerCron</b></h1>
    <div class="container mt-3 normal">
      <div class="mt-4 p-5 bg-dark text-white rounded">
        <p>O PlannerCron é uma ferramenta que te ajuda na hora de organizar o que fazer na semana. Crie um cronograma das coisas que você vai fazer naquela semana e gere um pdf para você poder guardar.</p> 
      </div>
    </div>

    <div class="mt-5">
      <h1>Processo de Criação do Projeto</h1>
      <div class="container mt-3 normal">
      <div class="mt-4 p-5 bg-dark text-white rounded">
        <p>O PlannerCron é um projeto que busca ajudar estudantes a se organizar diariamente, ele foi pensado e feito para ser adaptável tanto ao computador quanto ao celular. Na construção dele foram usadas técnicas de design
        minimalista, com um layout limpo e com poucos componentes na tela, ele é perfeito para você que precisa criar um cronograma de um jeito simples e sem muitos cliques.
        </p> 
      </div>
      </div>
    </div>

    <div class="mt-5">
      <h1>Tecnologias Utilizadas</h1>
      <div class="container mt-3 normal">
      <div class="mt-4 p-5 bg-dark text-white rounded d-flex justify-content-center">
        <div class="list-group col-12 col-xl-8 ">
          <a href="https://vuejs.org/" class="bg-success text-light list-group-item text-list list-group-item-action">
            <img src="https://br.vuejs.org/images/logo.png" alt="logo vue.js">Vue.js
          </a>
          <a href="https://getbootstrap.com/" class="list-group-item list-group-item-action purple text-list">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/800px-Bootstrap_logo.svg.png" alt="logo bootstrap">
            Bootstrap
          </a>
          <a href="http://raw.githack.com/MrRio/jsPDF/master/docs/index.html" class="list-group-item list-group-item-action berge">
          <img id="jspdf" height="100px" src="https://camo.githubusercontent.com/54ed74d0938e90aa54fc062f91767281c46cfd9964787f1b4a7b898eca9e887e/68747470733a2f2f706172616c6c2e61782f706172616c6c61782d323031362f696d672f7376672f6a737064662d6c6f676f2e737667" alt="logo JsPdf">
            JsPdf com JsPdf-AutoTable
          </a>
        </div>
      </div>
      </div>
    </div>

    <div class="mt-5">
      <h1>Prototipos do projeto</h1>
      <div class="container mt-3 normal">
        <div class="col-12">
        <!-- Carousel -->
          <div id="demo" class="carousel slide" data-bs-ride="carousel">

           
            <!-- The slideshow/carousel -->
            <div class="carousel-inner">
              <div class="carousel-item active ">
                <img src="../assets/img/slide/1.png" alt="slide-1" class="d-block w-100">
              </div>
              <div class="carousel-item">
                <img src="../assets/img/slide/2.png" alt="slide-2" class="d-block w-100">
              </div>
              <div class="carousel-item">
                <img src="../assets/img/slide/3.png" alt="slide-3" class="d-block w-100">
              </div>
              <div class="carousel-item">
                <img src="../assets/img/slide/4.png" alt="slide-4" class="d-block w-100">
              </div>
              <div class="carousel-item">
                <img src="../assets/img/slide/5.png" alt="slide-5" class="d-block w-100">
              </div>
            </div>

            <!-- Left and right controls/icons -->
            <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
              <span class="carousel-control-prev-icon"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
              <span class="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      
      </div>
    </div>

    <div class="mt-5">
      <h1>Contatos</h1>
      <div class="container mt-3 normal contatos">
      <div class="mt-4 p-5 text-white rounded row ">
        <a href="https://www.linkedin.com/in/joão-porfirio/" class="rede-sociais col-sm-12 col-md-4">
         <img  src="../assets/img/linkedin.png" alt="LinkedIn"/>LinkedIn
        </a>
        
        <a href="https://github.com/Porfirio-Prodigy/" class="rede-sociais col-sm-12 col-md-4">
         <img  src="../assets/img/github.png" alt="Github"/>Github
        </a>

        <a href="https://www.instagram.com/joaoporfirio6431/" class="rede-sociais col-sm-12 col-md-4">
         <img  src="../assets/img/instagram.png" alt="Instagram"/>Instagram
        </a>
      </div>
      </div>
    </div>


  </div>
</template>

<style scoped>
@font-face {
  font-family: bernadette;
  src: url('../assets/font/bernadette.ttf');
}
.normal {
  font-family: Arial, Helvetica, sans-serif;
}
h1 {
  font-family: bernadette;
}

.purple {
  background-color: #2c0b5b;
}

.berge {
  background-color: #085372;
  font-size: 20px;
  color: white;
  padding: 0;
}

.text-list {
  font-size: 20px;
  color: white;
}

.text-list img {
  width: 40px;
}

.carousel-control-next, .carousel-control-prev {
  background-color: rgba(0,0,0, .3);
}

.contatos {
  background-color: #085372;
}

.rede-sociais {
  text-decoration: none;
  font-size: 25px;
  color: white;
}

.rede-sociais img {
  width: 30px;
  margin: 0;
  padding: 0;
  margin-right: 5px;
  margin-bottom: 20px;
}

</style>
