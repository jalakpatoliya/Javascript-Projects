
var val="";


function show(a) {
  this.a=a;
  val+=this.a;

  document.getElementById('screen').innerHTML=val;
  eva();


}

function eva() {

  document.getElementById('ans').innerHTML=eval(val);

}

function clearo() {
  val="";

  document.getElementById('screen').innerHTML=val;
  document.getElementById('ans').innerHTML=eval(val);


}

function deleto() {

  val = val.slice(0, -1);
  document.getElementById('screen').innerHTML=val;

  eva();
}


document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 96:show(0)
        break;
      case 97:show(1)
        break;
      case 98:show(2)
        break;
      case 99:show(3)
        break;
      case 100:show(4)
        break;
      case 101:show(5)
        break;
      case 102:show(6)
        break;
      case 103:show(7)
        break;
      case 104:show(8)
        break;
      case 105:show(9)
        break;
      case 107:show('+')
        break;
      case 109:show('-')
        break;
      case 106:show('*')
        break;
      case 111:show('/')
        break;
      case 48:show(0)
        break;
      case 49:show(1)
        break;
      case 50:show(2)
        break;
      case 51:show(3)
        break;
      case 52:show(4)
        break;
      case 53:show(5)
        break;
      case 54:show(6)
        break;
      case 55:show(7)
        break;
      case 56:show(8)
        break;
      case 57:show(9)
        break;
      case 43:show('+')
        break;
      case 189:show('-')
        break;
      case 42:show('*')
        break;
      case 191:show('/')
        break;
      case 110:show('.')
        break;
      case 190:show('.')
        break;
      case 13:eva()
        break;
      case 187:eva()
        break;
      case 12:eva()
        break;
      case 46:deleto()
        break;
      case 8:deleto()
        break;

    }

});
