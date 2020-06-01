const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



function setup(){
    var canvas = createCanvas(1530,660);
    engine = Engine.create();
    world = engine.world;
    supporter = new Supporter(800,100,200,20);
    bob = new Bob(800,590,10);
    handofbob = new Handofbob(bob.body,supporter.body);
}



function draw(){
    background(117,26,126);
    Engine.update(engine);
    supporter.display();
    handofbob.display();
    bob.display();

}

