function Calculate() {
    var sum1 = document.getElementById("sum1").value;
    var sum2 = document.getElementById("sum2").value;
    var sum3 = document.getElementById("sum3").value;
    var sum4 = document.getElementById("sum4").value;
    var result = sum1*sum2/(sum3*(1000/sum4))*60;
    var resultcapl = (result*20)/60;
    result = Math.round(result * 10) / 10;
    resultcapl = Math.round(resultcapl * 10) / 10;
    document.getElementById("test").innerHTML = result;
    document.getElementById("testcapl").innerHTML = resultcapl;
}