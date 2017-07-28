$(document).ready(function(){

    var btnEquals = $("#btn-equals");
    var btnDivide = $("#btn-divide");
    var btnTimes = $("#btn-times");
    var btnMinus = $("#btn-minus");
    var btnPlus = $("#btn-plus");

    var distinct = $("#distinct_result");
    var total = $("#total_result");
    var finalResult = "";
    var isResult = true;
    var isOperatorClicked = false;

    $("#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7, #btn8, #btn9, #btn0").click(function(){
        if(isResult){
            total.text($(this).text());
            isResult = false;
        } else {
            total.text(total.text() + $(this).text());
        }

        isOperatorClicked = false;
    });


});