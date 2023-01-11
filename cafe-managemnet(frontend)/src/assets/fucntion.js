function count() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var mod = document.getElementById("operation").value;
    document.getElementById('result').value = eval(num1 + mod + num2);
  }