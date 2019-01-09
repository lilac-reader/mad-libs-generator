var data;

function setup (){
  noCanvas();
   Tabletop.init( { key: '11huFVGhHsMfN6y2Ci0KtIsCRJ5f1r_O2y_tY2P4IAGU',
                   callback: gotData,
                   simpleSheet: true } )


var button = createButton('generate madlib');
button.mousePressed(generate);
}

function generate (){
  console.log('generate');
}
function gotData(stuff, tabletop) { 
                      data=stuff;
                   }