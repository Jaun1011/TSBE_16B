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

    console.log("a = " + a);
    console.log("F = " + F + " N");
    console.log("W = " + W + " Nm");
    console.log("s = " + s + " m");
}

/**
 * Ein Kran hat einen Elektromotor mit einer Leistungsaufnahme von 9kW [P] um Lasten zu heben.
 * Welche Masse kann der Kran bei einer Hubgeschwindigkeit von v = 20m/min heben,
 * wenn der Elektromotor einen Wirkungsgrad von 0.9 hat?
 *
 * Winkel sind mit _ gemarkt
 */

function AUFGABE_62(){


    var P = 9000; // Watt
    var g = 9.08067; // m/s^2
    var v =  20 / 60;  // m/min
    var _y = 0.9;// Wirkungsgrad


    // _y = Px / P
    var Px = P * _y; // berechnung der Leistung auf dem Kran

    // Falsch weil wir nich Energie haben
    // var m = P / 0.5 * v;



    /**
      W = Fg * s  = m * g * s
      W = 0.5 * m * v^2 = 0.5 * m * v^2

      Px = m * g * s / t = m * g * v
      m = g * v / Px
     */

    /** Umformung
      _y = Px / P
      _y = m * g * v  / P

      _y * P  = mgv

      _y * P / g * v = m
      m = _y * P / g * v

     */

    //m = _y * P / g * v
    var m =  Px / g * v; //solution
    var m_r = (P * _y) / (g * v);

    // P = 0.5 * m  * v^2
    console.log("m = " + m + " kg");
    console.log("m_r = " + m_r + " kg");


}

/**
 * Das Tauernkraftwerk nutzt einen Höhenunterschied von 890 m aus und
 * kann dabei eine elektrische Spitzenleistung von 220 MW abgeben.
 * Der Wirkungsgrad dieses Kraftwerks beträgt 79 %.
 *
 * Berechne den Wasserverbrauch je Stunde!
 */
function AUFGABE_63(){

    // Geg
    var h = 890; // m
    var Px = 220000; // W
    var _y = 0.79;
    var g = 9.08067;

    var P = Px / _y;


    /**
     P = W / t
     P = F * v

     F = m * g


     W = m * g * s
     W =

     P = m * g * v =  m * g * s / t = m * v / t *
     */
    console.log(P);
}

function test_aufgabe_4() {

    var g = 9.81;   // m/s^2
    var m = 18;     // kg
    var v = 3;      // m/s
    var s = 30;     // m


    var t = s / v;

    var Fg = m * g;
    var F = m * v/t ;





    //var Fr = Fg * _u;

    console.log(Fg);
    console.log(Fw);

/*
    * -----> Fw
---------------
    |
    | Fg, Fn
    v
* */

    // F = Fv + Fr = Fn *
    // Fg = m * a
    // W = m / 2 * v^2
    // Fg * s = m / 2 * v^2
    // Fg = m * v^2 / 2 * s





}

/*
 * Übungsaufgabe 4: Ein Kran wird von Ort A nach Ort B gefahren, die 60 km voneinander entfernt liegen.
 * Der Schwertransporter mit Kran verlässt A um 6 Uhr mit einer Geschwindigkeit von 20 km/h.
 * Um 8 Uhr fährt ein Pkw dem Transporter von B aus mit 80 km/h entgegen.
 * Bestimme Zeitpunkt und Entfernung von B beim Zusammentreffen
 */
function aufgabe_4_script() {
    //geg
    
}



test_aufgabe_4();


function from_kmh_to_ms(v){
    return v * 1000 / 3600;
}



/*
console.log("Ausgabe 61");
AUFGABE_61();
console.log("Ausgabe 62");
AUFGABE_62();
console.log("Ausgabe 63");
AUFGABE_63();
*/