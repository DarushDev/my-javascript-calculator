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

    $("#btn-dot").click(function(){
        if(isResult){
            total.text("0.");
            isResult = false;
        } else if(total.text().indexOf(".") === -1){
            total.text(total.text() + ".");
        }

        isOperatorClicked = false;
    });

    btnEquals.click(function(){
        isResult = true;
        distinct.text("");
        total.text(round(eval(finalResult + total.text())));
        isOperatorClicked = false;
        finalResult = "";
    });

    $("#btn-backspace").click(function(){
        console.log(total.text().length);
        if(total.text().length === 1){
            total.text("0");
            isResult = true;
        } else {
            total.text(total.text().substr(0, total.text().length-1));
        }
    });

    $("#btn-clear").click(function(){
        total.text("0");
        distinct.text("");
        finalResult = "";
        isResult = true;
    });

    function round(value) {
        return Number(Math.round(value+'e'+4)+'e-'+4);
    }

});