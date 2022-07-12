let n = 7;

// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = n; j > i; j--) {
    document.write("");
  }
  // printing star
  for (let k = 0; k < i * 1 - 1; k++) {
    document.write("*");
  }
  document.write("<br/>");
}
