'use strict';
class Tamgiac {
    a = 0;
    b = 0;
    c = 0;
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    isTamGIac( a = this.a, b = this.b, c = this.c ) {
        if( a + b <= c || a + c <= b || b + c <= a) {
            return false;
        }
        else {
            return true;
        }
    }
    isTamGiacVuong( a = this.a, b = this.b, c = this.c ) {
        if(a*a + b*b == c*c || b*b + c*c == a*a || a*a + c*c == b*b) {
            return true;
        }
        else {
            return false;
        }
    }
    isTamGiacCan( a = this.a, b = this.b, c = this.c ) {
        if( a == b || a == c || b == c) {
            return true;
        }
        else {
            return false;
        }
    }
}


function btnOutput_click() {
    const a = Number(document.getElementById('inputA').value);
    const b = Number(document.getElementById('inputB').value);
    const c = Number(document.getElementById('inputC').value);
    console.log(a, b, c);
    if( a == undefined || b == undefined || c == undefined) {
        alert('Please enter all 3 valid values');
    }
    else {
        const tamgiacA = new Tamgiac(a, b, c);
        console.log("đÃ log được tamgiacA");
        if( tamgiacA.isTamGIac() == true) {
            console.log("đaay là tam giác");
            if( tamgiacA.isTamGiacCan == true) {
                const outPutNodes = document.createElement('div');
                outPutNodes.innerHTML = "Tam giác cân";
                console.log("đaay là tam giác cân");
            }
            if( tamgiacA.isTamGiacVuong == true) {
                const outPutNodes = document.createElement('div');
                outPutNodes.innerHTML = `Tam giác vuông`;
                console.log("đaay là tam giác vuông");
            }
            else {
                const outPutNodes = document.createElement('div');
                outPutNodes.innerHTML = `Tam giac thường`;
            }
        }
        else {
            alert('3 values are not Tam giac')
        }
    }

}