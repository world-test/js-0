const a = parseFloat(prompt('a'));
const b = parseFloat(prompt('b'));
const c = parseFloat(prompt('c'));

function solveQuadrEq(a, b, c) {
    const d = b * b - 4 * a * c;
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        return 'Solution of the equation :  x1= ' + x1 + ', x2= ' + x2;
    }
    else if (d === 0) {
        x1 = -b / (2 * a);
        return 'Solution of the equation : x12= ' + x;
    }
    else if (d < 0)
        return 'No real resuls because discriminant is under 0'
}
alert(solveQuadrEq(a, b, c, ));