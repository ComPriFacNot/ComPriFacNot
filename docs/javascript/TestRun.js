/**
 * Testlauf.
 *
 * @author see git history
 * @version 1.0, 2021-12-01
 * @since 1.0, 2021-12-01
 */

class TestRun {
    
    /**
     * Tatsächtliche Ausgabe.
     */
    #ivOutputActual;

    /**
     * Tatsächliche Ausnahme/Fehler.
     */
    #ivThrowableActual;
    
    /**
     * TestCase Testfall.
     */
    #ivTestCase;

    /**
     * Konstruktor.
     * 
     * @param pvTestCase Testfall
     * @param pvOutputActual Tatsächliche Ausgabe
     * @param pvThrowableActual Tatsächliche Ausnahme/Fehler
     */
    constructor(pvTestCase, pvOutputActual, pvThrowableActual) {
       this.setTestCase(pvTestCase);
       this.setOutputActual(pvOutputActual);
       this.setThrowableActual(pvThrowableActual);
    }

    /**
     * Getter für #ivOutputActual.
     *
     * @returns any Tatsächliche Ausgabe
     */
    getOutputActual() {
        return this.#ivOutputActual;
    }

    /**
     * Getter für #ivThrowableActual.
     *
     * @returns any Tatsächliche Ausnahme/Fehler
     */
    getThrowableActual() {
        return this.#ivThrowableActual;
    }
    
    /**
     * Getter für #ivTestCase.
     *
     * @returns TestCase Testfall
     */
    getTestCase() {
        return this.#ivTestCase;
    }
    
    /**
     * Prüft, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher übereinstimmen.
     *
     * @returns boolean Wahrheitswert, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher
     *                  übereinstimmen
     */
    matches() {
       const lcTestCase = this.getTestCase();
       const lcOutputActual = this.getOutputActual();
       const lcThrowableActual = this.getThrowableActual();
       const lcOutputExpected = lcTestCase.getOutputExpected();
       const lcThrowableExpected = lcTestCase.getThrowableExpected();
       const lcOutputEquals = PrimeFactoredInteger.equals(lcOutputActual, lcOutputExpected);
       const lcThrowableEquals = lcThrowableActual == lcThrowableExpected;
       const lcResult = lcOutputEquals && lcThrowableEquals;
       
       return lcResult;
    }
    /**
     * Setter für #ivOutputActual.
     *
     * @param pvOutputActual Tatsächliche Ausgabe
     */
    setOutputActual(pvOutputActual) {
        this.#ivOutputActual = pvOutputActual;
    }
 
    /**
     * Setter für #ivThrowableActual.
     *
     * @param pvThrowableActual Tatsächliche Ausnahme/Fehler
     */
    setThrowableActual(pvThrowableActual) {
        this.#ivThrowableActual = pvThrowableActual;
    }
    
    /**
     * Setter für #ivTestCase.
     *
     * @param pvTestCase any Testfall
     */
    setTestCase(pvTestCase) {
        this.#ivTestCase = pvTestCase;
    }
}