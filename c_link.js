
// //Classe
// class c_link{

//     constructor(bodyA,bodyB){       //Bodya = corda     Bodyb = cenoura

//         var lastlink = bodyA.body.bodies.lenght-2;
//             this.link = Constraint.create(
//                 {
//                 bodyA:bodyA.body.bodies[lastlink],
//                     pointA:{x:0,y:0},
//                 bodyB:bodyB,
//                     pointB:{x:0,y:0},
//                 length:-10,
//                     stiffness:0.01
//                 });

//         //Adicionando link ao mundo
//         World.add(engine.world,this.link);

//     }
// }


class c_link{
    constructor(bodyA,bodyB)
    {
      var lastlink = bodyA.body.bodies.length-2;
     this.link = Constraint.create(
        {
          bodyA:bodyA.body.bodies[lastlink],
          pointA:{x:0,y:0},
          bodyB:bodyB,
          pointB:{x:0,y:0},
          length:-10,
          stiffness:0.01
        });
        World.add(engine.world,this.link);
    }

    //Criando função remover
    remover(){

      World.remove(engine.world,this.link);
    }
}