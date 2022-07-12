var data1 = [1, 1, 1, 2, 2, 4, 1, 1];
var data2 = [2, 1, 2, 2, 2, 8, 1, 1];
var data3 = [3, 3, 3, 3, 2, 4, 1, 1];
(sortedArr = []), (count = 1);
sortedArr = data1.sort(function (a, b) {
  return a - b;
});
for (var i = 0; i < sortedArr.length; i = i + count) {
  count = 1;
  for (var j = i + 1; j < sortedArr.length; j++) {
    if (sortedArr[i] === sortedArr[j]) count++;
  }
  document.write("Total data paling banyak keluar adalah angka " + sortedArr[i] + " dengan jumlah " + count + "<br>");
}
