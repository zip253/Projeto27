
//Referência módulos
const Engine = Matter.Engine;
  const Render = Matter.Render;
const World = Matter.World;
  const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
  const Body = Matter.Body;
const Composites = Matter.Composites;
  const Composite = Matter.Composite;

//Criando variáveis
var engine;
  var world;
var chao;
  var botao_mutar;
var cenoura;
  var v_link1;
var v_link2;
  //var v_link3;
var coelho;
  var botao_cortar1;
var botao_cortar2;
  //var botao_cortar3;
var botao_balao;
  var corda1;
var corda2;
  //var corda3;
var estrela1;
  var estrela2;
var pontos0; 


//Criando variáveis de imagens
var fundoimg;
  var cenouraimg;
var coelhoimg;
  var estrelaimg;
var pontos0img;
  var estrelaAimg;
var pontos1img;
  var pontos2img;


//Criando variáveis de animação
var coelhoPani;
  var coelhoCani;
var coelhoTani;

//Criando variáveis sons
var s_ar;
  var s_cortar;
var s_triste;
  var s_fundo;
var s_comendo;



//Fução preload
function preload(){

  fundoimg=loadImage("./assets/background.png");
    cenouraimg=loadImage("./assets/cenoura.png");
  estrelaimg=loadImage("./assets/estrela.png");
    

  coelhoPani=loadAnimation("./assets/pisca1.png","./assets/pisca2.png","./assets/pisca3.png");
    coelhoCani=loadAnimation("./assets/come0.png","./assets/come1.png","./assets/come2.png","./assets/come3.png","./assets/come4.png");
  coelhoTani=loadAnimation("./assets/triste1.png","./assets/triste2.png","./assets/triste3.png");
    pontos0img=loadAnimation("./assets/estrelaA2.png");
  pontos1img=loadAnimation("./assets/estrelas2.png");
    pontos2img=loadAnimation("./assets/estrelas1.png");


  s_ar=loadSound("./assets/air.wav");
    s_cortar=loadSound("./assets/rope_cut.mp3");
  s_triste=loadSound("./assets/sad.wav");
    s_fundo=loadSound("./assets/sound1.mp3");
  s_comendo=loadSound("./assets/eating_sound.mp3");




    coelhoCani.looping = false;
    coelhoTani.looping = false;
}

function setup(){
  createCanvas(600,700);
  engine = Engine.create();
  world = engine.world;
 
  //-------------Corpos------------

  //Chão
  
    //Propriedades
    var pr_chao={

      isStatic:true
    }

      //Criando corpo
      chao=Bodies.rectangle(300,690,1000,20,pr_chao);

        //Adicionando ao mundo
        World.add(world,chao);




  //Corda

    corda1 = new c_corda(7,{x:200,y:90});
      corda2 = new c_corda(7,{x:400,y:90});
    //corda3 = new c_corda(4,{x:400,y:225});


  //Cenoura
  
    //Propriedades
    var pr_cenoura={

      isStatic:false,
      //density:0.0000001
    }

      //Criando corpo
      cenoura=Bodies.rectangle(350,350,10,20,pr_cenoura);

        //Adicionando ao mundo
        //World.add(world,cenoura);

          //Prendendo a corda
          Matter.Composite.add(corda1.body,cenoura);
            Matter.Composite.add(corda2.body,cenoura);
          //Matter.Composite.add(corda3.body,cenoura);



  //Link

    //Criando link  
    v_link1 = new c_link(corda1,cenoura);
      v_link2 = new c_link(corda2,cenoura);
    //v_link3 = new c_link(corda3,cenoura);


  //Coelho

    //Criando sprite
    coelho=createSprite(250,height-80,100,100);

      //Diminuindo velocidade das animações
        coelhoPani.frameDelay = 17;
          coelhoCani.frameDelay = 17;
        coelhoTani.frameDelay = 17;

        //Adicionando animações
        coelho.addAnimation("piscando",coelhoPani);
          coelho.addAnimation("comendo",coelhoCani);
        coelho.addAnimation("triste",coelhoTani);

          //Definindo animação
          coelho.changeAnimation("piscando");

            //Ajustando tamanho
            coelho.scale=0.18410;


    //Botão cortar1

      //Criando imagem
      botao_cortar1=createImg("./assets/botao.png");

        //Criando posição
        botao_cortar1.position(180,90);

          //Tamanho botão
          botao_cortar1.size(50,50);

            //Clique
            botao_cortar1.mouseClicked(cortar1);

    //Botão cortar2

    //Criando imagem
    botao_cortar2=createImg("./assets/botao.png");

      //Criando posição
      botao_cortar2.position(390,90);

        //Tamanho botão
        botao_cortar2.size(50,50);

          //Clique
          botao_cortar2.mouseClicked(cortar2);

    /*//Botão cortar3

    //Criando imagem
    botao_cortar3=createImg("./assets/botao.png");

      //Criando posição
      botao_cortar3.position(360,200);

        //Tamanho botão
        botao_cortar3.size(50,50);

          //Clique
          botao_cortar3.mouseClicked(cortar3);
    */


    
    //Botão balão

      //Criando imagem
      botao_balao=createImg("./assets/balao.png");

        //Criando posição
        botao_balao.position(260,370);

          //Tamanho botão
          botao_balao.size(120,120);

            //Clique
            botao_balao.mouseClicked(assoprar);


    //Botão mutar

      //Criando imagem
      botao_mutar=createImg("./assets/mute.png");

        //Criando posição
        botao_mutar.position(width-50,20);

          //Tamanho botão
          botao_mutar.size(50,50);

            //Clique
            botao_mutar.mouseClicked(mutado);


    //Estrelas acesas

      //Criando sprite
      estrela1=createSprite(320,50,20,20);
        estrela2=createSprite(50,370,20,20);

        //Adicionado imagens
        estrela1.addImage(estrelaimg);
          estrela2.addImage(estrelaimg);

          //Ajustando tamanho
          estrela1.scale=0.02;
            estrela2.scale=0.02;

    //Pontos

      //Criando sprite
      pontos0=createSprite(50,20,30,30);

        //Adicionando animação
        pontos0.addAnimation("p0",pontos0img);
          pontos0.addAnimation("p1",pontos1img);
        pontos0.addAnimation("p2",pontos2img);
          //Ajustando tamanho
          pontos0.scale = 0.15;

            //Ajustando animação
            pontos0.changeAnimation("p0");
             

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw(){
  background(fundoimg);
    s_fundo.play();
  s_fundo.setVolume(0.001);

  Engine.update(engine);

  //Desenhando corpos

    //Chão
    rect(chao.position.x,chao.position.y,600,20);   

    //Cordas
    corda1.show();
      corda2.show();
    //corda3.show();

    //Cenoura
      //Deletando cenoura na hora certa
      if (cenoura!=null){
        push();
          imageMode(CENTER);
            image(cenouraimg,cenoura.position.x,cenoura.position.y,40,70);
        pop();
      }



  //Colisão cenoura e coelho
    if (colisao(cenoura,coelho,80) === true){

      coelho.changeAnimation("comendo");
      cenoura=null;

        //Som
        s_comendo.play();
          s_comendo.setVolume(0.2);
    }
      else if(colisao(cenoura,coelho,80) === false){
        coelho.changeAnimation("piscando");
      }

  //Perdendo e coelho ficando triste
    if (cenoura!=null&&cenoura.position.y>=650){

      coelho.changeAnimation("triste");
      cenoura=null;

      //Som
      s_triste.play();
        s_triste.setVolume(0.2);
    }


    //Apagando estrelas
    if (colisao(cenoura,estrela1,20) === true){

      pontos0.changeAnimation("p1")
      estrela1.visible=false;
    }

    if (colisao(cenoura,estrela2,40) === true){

      pontos0.changeAnimation("p2")
      estrela2.visible=false;
    }
    
  drawSprites();
}

//====================================== Funções Personalizadas ==========================================



//Função cortar1
function cortar1(){

  corda1.break();
    v_link1.remover();
  v_link1 = null;

    //Som
    s_cortar.play();
      s_cortar.setVolume(0.2);
}

//Função cortar2
function cortar2(){

  corda2.break();
    v_link2.remover();
  v_link2 = null;

    //Som
    s_cortar.play();
      s_cortar.setVolume(0.2);
}

/* //Função cortar3
function cortar3(){

  corda3.break();
    v_link3.remover();
  v_link3 = null;

    //Som
    s_cortar.play();
      s_cortar.setVolume(0.2);
}
*/


//Função assoprar
function assoprar(){

  Matter.Body.applyForce(cenoura,{x:0,y:0},{x:0,y:-0.005})
    
    //Som
    s_ar.play();
      s_ar.setVolume(0.2);
}




//Função colisão
function colisao(body,sprite,valor){

  if (body!=null){

    var distancia = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y)

      if (distancia<=valor){

        return true;
      }
            else{

              return false;
            }
  }
}

//Função mutar
function mutado(){

  if (s_fundo.isPlaying()){

    s_fundo.stop();
  } else {

    s_fundo.play();
      s_fundo.setVolume(0.001);

  }
}
