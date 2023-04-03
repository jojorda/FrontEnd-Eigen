// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu

//Contoh:

// const sentence = "Saya sangat senang mengerjakan soal algoritma"
// longest(sentence)
 
// mengerjakan: 11 character

var sentence = 'Saya sangat senang mengerjakan soal algoritma';
var sentenceSplit = sentence.split(' ');

function longest() {
     var input = '';
     longer = 0;
     for(var i = 0; i <= sentenceSplit.length - 1; i++){
          if(longer < sentenceSplit[i].length){
               longer = sentenceSplit[i].length;
               input = sentenceSplit[i];
          }
     }
     return input + ': ' + longer + ' karakter';
}

console.log(longest());