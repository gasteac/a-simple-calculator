const botonNum = document.getElementsByName('datanumber');
const botonOp = document.getElementsByName('dataop');
const botonBorra = document.getElementsByName('databorra')[0];
const botonIgual = document.getElementsByName('dataigual')[0];
var result = document.getElementById('result');
var opeAct = '';
var opeAnt = '';
var operacion = undefined;

botonNum.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarNum(boton.innerText);
    })
});

botonOp.forEach(function(boton){
    boton.addEventListener('click', function(){
        agregarOp(boton.innerText);
    })
});

botonIgual.addEventListener('click', function(){
    calcular();
    actualizarDisp();
});

botonBorra.addEventListener('click', function(){
    clear();
    actualizarDisp();
});

function agregarOp(op){
    if(opeAct == '') return;
    if(opeAnt !== ''){
        calcular()
    }
    operacion = op.toString();
    opeAnt = opeAct;
    opeAct = '';
}

function calcular (){
    var calculo;
    const anterior = parseFloat(opeAnt);
    const actual = parseFloat(opeAct);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual; break;
        case '-':
            calculo = anterior - actual; break;
        case 'x':
            calculo = anterior * actual; break;
        case '/':
            calculo = anterior / actual; break;
        default: return;
    }
    opeAct=calculo;
    operacion=undefined;
    opeAnt='';
}

function agregarNum(num){
    opeAct = opeAct.toString() + num.toString();
    actualizarDisp();
}

function clear(){
    opeAct='';
    opeAnt='';
    operacion = undefined;
}

function actualizarDisp(){
    result.value = opeAct;
}
