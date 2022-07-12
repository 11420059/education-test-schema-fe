function checkNumberInputan1() {
  var input1 = "hallo jesika24 selamat datang!";
  var matches = input1.match(/(\d+)/);

  if (matches) {
    document.write("Sistem kami menolak untuk inputan berisi angka " + matches[0]);
  } else {
    document.write("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input1);
  }
}
function checkNumberInputan2() {
  var input2 = "hallo anggun selamat datang!";
  var matches = input2.match(/(\d+)/);

  if (matches) {
    document.write("Sistem kami menolak untuk inputan berisi angka " + matches[0]);
  } else {
    document.write("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input2);
  }
}
function checkNumberInputan3() {
  var input3 = "hallo ** selamat datang!";
  var matches = input3.match(/(\d+)/);

  if (matches) {
    document.write("Sistem kami menolak untuk inputan berisi angka " + matches[0]);
  } else {
    document.write("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input3);
  }
}
function checkNumberInputan4() {
  var input4 = "hallo Mariage889120! selamat datang!";
  var matches = input4.match(/(\d+)/);

  if (matches) {
    document.write("Sistem kami menolak untuk inputan berisi angka " + matches[0]);
  } else {
    document.write("Sistem memeriksa data anda valid dengan ketentuan kami dengan inputan " + input4);
  }
}
