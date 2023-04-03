// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

var alfabet = 'NEGIE1';

var splitString = alfabet.split('');
var sumString = alfabet.length - 1;

function reverse(str) {
     var stringNew = '';
     var stringFinal = ''
     for(var i = str.length - 2; i >= 0; i--){
          stringNew = stringNew + str[i];
     }
     stringFinal = stringNew + str[5];
     return stringFinal;
}

console.log(reverse('NEGIE1'))