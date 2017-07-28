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

    btnDivide.click(function(){
        if(!isOperatorClicked) {
            isResult = true;
            distinct.text(distinct.text() + total.text() + $(this).text());
            finalResult = round(eval(finalResult + total.text()));
            total.text(finalResult);
            finalResult = finalResult + "/";
            isOperatorClicked = true;
        } else {
            distinct.text(distinct.text().substr(0, distinct.text().length-1) + $(this).text());
            finalResult = finalResult.substr(0, finalResult.length-1) + "/";
        }
    });

    btnTimes.click(function(){
        if(!isOperatorClicked) {
            isResult = true;
            distinct.text(distinct.text() + total.text() + $(this).text());
            finalResult = round(eval(finalResult + total.text()));
            total.text(finalResult);
            finalResult = finalResult + "*";
            isOperatorClicked = true;
        } else {
            distinct.text(distinct.text().substr(0, distinct.text().length-1) + $(this).text());
            finalResult = finalResult.substr(0, finalResult.length-1) + "*";
        }
    });

    btnMinus.click(function(){
        if(!isOperatorClicked) {
            isResult = true;
            distinct.text(distinct.text() + total.text() + $(this).text());
            finalResult = round(eval(finalResult + total.text()));
            total.text(finalResult);
            finalResult = finalResult + "-";
            isOperatorClicked = true;
        } else {
            distinct.text(distinct.text().substr(0, distinct.text().length-1) + $(this).text());
            finalResult = finalResult.substr(0, finalResult.length-1) + "-";
        }
    });

    btnPlus.click(function() {
        if(!isOperatorClicked) {
            isResult = true;
            distinct.text(distinct.text() + total.text() + $(this).text());
            finalResult = round(eval(finalResult + total.text()));
            total.text(finalResult);
            finalResult = finalResult + "+";
            isOperatorClicked = true;
        } else {
            distinct.text(distinct.text().substr(0, distinct.text().length-1) + $(this).text());
            finalResult = finalResult.substr(0, finalResult.length-1) + "+";
        }
    });

    function round(value) {
        return Number(Math.round(value+'e'+4)+'e-'+4);
    }

});