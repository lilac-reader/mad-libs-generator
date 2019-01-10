var data;

var txt = 'Are you fed up with $$PLURALNOUN$$? Do you $$VERB$$ but get frustrated that the $$NOUN$$ doesn’t work? Then this $$ADJECTIVE$$ product is right for you!! There is really only one way to grasp how $$ADJECTIVE$$ this product is and that is to $$VERB$$ it!! Here’s how it works: just $$VERB$$ the product $$ADJECTIVE$$ and $$VERB$$ the $$NOUN$$. Isn’t that $$ADJECTIVE$$?! Who needs a $$NOUN$$ when you’ve got this! The best part? Order right now and I’ll send you a free $$NOUN$$ with your order! That’s right! You can get this this amazing product plus  your free gift for only $$NUMBER$$ dollars!!! Try it risk free for $$NUMBER$$ days! If you’re not completely $$ADJECTIVE$$ we give you your money back! Guaranteed!';

function setup (){
  noCanvas();
   Tabletop.init( { key: '11huFVGhHsMfN6y2Ci0KtIsCRJ5f1r_O2y_tY2P4IAGU',
                   callback: gotData,
                   simpleSheet: true } );

}

function generate (){
 // console.log('generate');//
  createP(txt);
}
function gotData(stuff, tabletop) { 
                      data=stuff;
                   }