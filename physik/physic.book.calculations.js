

/**
 * Ein Schiffshebewerk gemäss Bild bringt auf dem Wagen
 * mit der Masse m1 = 12000kg ein Schiff mit der Masse m2=35000kg
 * bei einer Steigung von 15% (tan(_a) = 0.15) auf der Höhe h=8m.
 * Der Fahrwiederstand beträgt _uF=0.01.
 * Berechnen Sie:
 * a) Die Hubarbeit
 * b) die Reibungsarbeit
 * c) die Gesamtarbeit
 */
function A20_U1() {
    var m1 = 12000; // kg
    var m2 = 35000; // kg
    var _a = 0.15;
    var _uF = 0.01;
    var h = 8; // m
    var g = 9.81; // m/s^2
    var m = m1 + m2;
    // a
    var Wh = (m1 + m2) * g * h;
    console.log("Wh = " + Wh + " Nm");

    // b
    var _ag = Math.atan(_a);
    var s = h / Math.sin(_ag);

    var Wr = m * g * s *  _uF;
    console.log("Wr = " + Wr+ " Nm");

    var Wg = Wr + Wh;
    console.log("Wg = "+Wg+" Nm");

}


function A20_U2() {
    var v0 = 0; // m/s
    var g = 9.81; // m/s^2

    var s = 59; // m

    var _a = 0.1;
    var _uF = 0.01;
    var m = 600; // kg

    var Fh = m * g;

    
    var h = s * Math.sin(Math.atan(_a));

    console.log(h);


    var Wg = m * g * h ;
    console.log(Wg);

    // W = m/2 * v^2
    // sqrt(w / 0.5 * m) = v


    var ve = Math.sqrt(Wg / (0.5 * m));

    console.log(ve);
}


function degree(func) {
    return func * (180 / Math.PI)
}
A20_U2();

