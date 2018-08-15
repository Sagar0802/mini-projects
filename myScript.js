function createTable() {
    var output = document.getElementById("Tablecontent");
    var html = "<div class='table-responsive-md collapse the-fieldset' id='table'>";
    html += "<table class='table table-bordered  table-dark mx-auto'>";
    var count = 1;
    for (var row = 0; row < 6; row++) {
        html += "<tr >";
        for (var col = 0; col < 6; col++) {
            html += "<td class='cel'>cell - " + ((col+1)+(row*6)) + "</td>";
            count++;
        }
        html += "</tr>";

    }
    html += "</table>";
    html += "</div>";
    output.innerHTML = html;
}

function randomName() {
    var output = document.getElementById("randomNameContent");
    var chars=["Good","Bad","Nice","Humble","Worst"];
    var rand=Math.floor(Math.random()*chars.length);
    var rand_char=chars[rand];
    var name=document.getElementById("name");
    output.innerHTML +=name.value+", you are "+rand_char+"!!<br>";
}


// calculator functions
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2"); 
var output = document.getElementById("calcontent");

function add() {
    
    var result=Number(num1.value)+Number(num2.value);
    output.value=result;
}
function subtract() {
    
    var result=Number(num1.value)-Number(num2.value);
    output.value=result;
}
function multiply() {
    
    var result=Number(num1.value)*Number(num2.value);
    output.value=result;
}
function divide() {
    if (Number(num1)  != 0) {
        var result = Number(num1.value) / Number(num2.value);
        output.value=result;
    }
    else
    {
        output.value="Numerator(number 1) Should not be 0";
    }
}
$(".reset").click(function() {
    $('input[type=text]').each(function(){
       $(this).val('');
    });
  });
   

// crack Code

  var coutput = document.getElementById("codeContent");
  var c1 = document.getElementById("code1");
  var c2 = document.getElementById("code2");
  var c3 = document.getElementById("code3");
  var cCode=[];
  for (var x = 0;x < 3; x++) {
      var rand=Math.floor(Math.random()*9);
     cCode.push(rand);
      
  }
 
//   coutput.innerHTML=cCode+"<br>";
function ccCheck() {
    if (c1.value>cCode[0]) {
        coutput.innerHTML+="H,";
    }
   if(c1.value<cCode[0]) {
        coutput.innerHTML+="S,";
    }
    if(c1.value==cCode[0]){
        coutput.innerHTML+=c1.value+",";
    } 
    if (c2.value>cCode[1]) {
        coutput.innerHTML+="H,";
    }
    if(c2.value<cCode[1]) {
        coutput.innerHTML+="S,";
    } 
    if(c2.value==cCode[1]){
        coutput.innerHTML+=c2.value+",";
    }
    if (c3.value>cCode[2]) {
        coutput.innerHTML+="H<br>";
    }
    if(c3.value<cCode[2]) {
        coutput.innerHTML+="S<br>";
    } 
    if(c3.value==cCode[2]){
        coutput.innerHTML+=c3.value+"<br>";
    }
    if((c1.value==cCode[0])&&(c2.value==cCode[1])&&(c3.value==cCode[2])){
        coutput.innerHTML+="You Guessed it!!!";
    }
    
}

// shuffle array


    var arr=["HTML5","JavaScript","AngularJS","ReactJS","MangoDB"];
    var ArrayContent=document.getElementById("originalArray");
    var ShuffledAaary=document.getElementById("ShuffledArray");
    ArrayContent.innerHTML+="("+arr+")";
    // ArrayContent.innerHTML+="<button type='button' class='btn btn-primary floadt-right' onclick='shuffle("+arr+")'> Shuffle</button>";
   function makeShuffle() {
       shuffle(arr);
   }
    function shuffle(ary) {
        console.log(ary);
        for(var x=ary.length-1;x>0;x--)
        {
            var holder=Math.floor(Math.random()*(x+1));
            var temp=ary[x];
            ary[x]=ary[holder];
            ary[holder]=temp;
        }

        ShuffledAaary.innerHTML+="("+ary+")<br>";
    }
