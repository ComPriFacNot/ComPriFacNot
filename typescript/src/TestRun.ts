/**
 * Testlauf.
 *
 * @author see git history
 * @version 1.1, 2021-12-10
 * @since 1.0, 2021-12-01
 */

class TestRun {
    
    /**
     * Tatsächtliche Ausgabe.
     * 
     * @type {any}
     */
    #ivOutputActual: any;

    /**
     * Tatsächliche Ausnahme/Fehler.
     * 
     * @type {any}
     */
    #ivThrowableActual: any;
    
    /**
     * TestCase Testfall.
     * 
     * @type {TestCase}
     */
    #ivTestCase: TestCase;

    /**
     * Konstruktor.
     * 
     * @param {TestCase} pvTestCase Testfall
     * @param {any} pvOutputActual Tatsächliche Ausgabe
     * @param {any} pvThrowableActual Tatsächliche Ausnahme/Fehler
     */
    constructor(pvTestCase: TestCase, pvOutputActual: any, pvThrowableActual: any) {
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
     * @returns {TestCase} Testfall
     */
    getTestCase(): TestCase {
        return this.#ivTestCase;
    }
    
    /**
     * Prüft, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher übereinstimmen.
     *
     * @returns {boolean} Wahrheitswert, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher
     *                    übereinstimmen
     */
    matches(): boolean {
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
     * @param {any} pvOutputActual Tatsächliche Ausgabe
     */
    setOutputActual(pvOutputActual: any) {
        this.#ivOutputActual = pvOutputActual;
    }
 
    /**
     * Setter für #ivThrowableActual.
     *
     * @param {any} pvThrowableActual Tatsächliche Ausnahme/Fehler
     */
    setThrowableActual(pvThrowableActual: any) {
        this.#ivThrowableActual = pvThrowableActual;
    }
    
    /**
     * Setter für #ivTestCase.
     *
     * @param {TestCase} pvTestCase any Testfall
     */
    setTestCase(pvTestCase: TestCase) {
        this.#ivTestCase = pvTestCase;
    }
}