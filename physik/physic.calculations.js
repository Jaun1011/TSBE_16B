/**
 * Ein Auto mit einer Masse von m = 1.2t wird vom
 * Stand aus in 12s auf 100km/h beschleunigt.
 *
 * Berechne die (konstante) beschleunigende Kraft [F],
 * die Leistung des Motors [P] und den zurückgelegten Weg[s],
 * auf dem die Endgeschwindigkeit erreicht wird,
 * sowie die kinetische Energie [W] des Autos nach 12s
 */
function AUFGABE_61(){

    // GEG
    var m = 1200; // kg
    var t = 12; // sec
    var v = from_kmh_to_ms(100); // km/h

    /**
     * GES
     * F = m * a
     * P = F * s
     *
     * W = m * a * s = m/2 * v^2
     * s =  W / m * a
     */

    var a = v / t;
    var F = m * a;
    var W = m / 2 * (v * v);

    //
    var s = W / (m * a);

    console.log("Ausgabe 61");
    console.log("a = " + a);
    console.log("F = " + F + " N");
    console.log("W = " + W + " Nm");
    console.log("s = " + s + " m");
}

/**
 * Ein Kran hat einen Elektromotor mit einer Leistungsaufnahme von 9kW um Lasten zu heben.
 * Welche Masse kann der Kran bei einer Hubgeschwindigkeit von v = 20m/min heben,
 * wenn der Elektromotor einen Wirkungsgrad von 0.9 hat?
 */
function AUFGABE_62(){

}

function from_kmh_to_ms(v){
    return v * 1000 / 3600
}

AUFGABE_61();
AUFGABE_62();

