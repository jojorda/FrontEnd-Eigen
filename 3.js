/*
Terdapat dua buah array yaitu array INPUT dan array QUERY, silahkan tentukan berapa kali kata dalam QUERY terdapat pada array INPUT
Contoh:
INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = [1, 0, 2] karena kata 'bbb' terdapat 1 pada INPUT, kata 'ac' tidak ada pada INPUT, dan kata 'dz' terdapat 2 pada INPUT
*/

var input = ['xc', 'dz', 'bbb', 'dz'];
var query = ['bbb', 'ac', 'dz'];

function Word() {
     var number = 0;
     var output = [];
     for(var i = 0; i < query.length; i++){
          for(var j = 0; j < input.length; j++){
               if(query[i] == input[j]){
                   number = number + 1;
               }
          }
          output[i] = number;
          number = 0;
     }
     return output;
}

console.log(Word());