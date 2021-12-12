/**
 * Testlauf.
 *
 * @author see git history
 * @version 1.2, 2021-12-12
 * @since 1.0, 2021-12-01
 */

class TestRun {
    
    /**
     * :en: Actual output.
     * :de: Tatsächtliche Ausgabe.
     * 
     * @see getOutputActual
     * @see setOutputActual
     * @type {any}
     */
    private ivOutputActual: any;

    /**
     * :en: Actual error/exception.
     * :de: Tatsächliche Fehler/Ausnahme.
     * 
     * @see getThrowableActual
     * @see setThrowableActual
     * @type {any}
     */
    private ivThrowableActual: any;
    
    /**
     * :en: Test case.
     * :de: Testfall.
     * 
     * @see getTestCase
     * @see setTestCase
     * @type {TestCase}
     */
    private ivTestCase: TestCase;

    /**
     * :en: Constructor.
     * :de: Konstruktor.
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
     * :en: Getter for {@link ivOutputActual}.
     * :de: Getter für {@link ivOutputActual}.
     *
     * @returns {any} {@link ivOutputActual}
     * @see ivOutputActual
     * @see setOutputActual
     */
    public getOutputActual(): any {
        return this.ivOutputActual;
    }

    /**
     * :en: Getter for {@link #ivTestCase}.
     * :de: Getter für {@link #ivTestCase}.
     *
     * @returns {TestCase} Testfall
     * @see ivTestCase
     * @see setTestCase
     */
     public getTestCase(): TestCase {
        return this.ivTestCase;
    }
    
    /**
     * :en: Getter for {@link ivThrowableActual}.
     * :de: Getter für {@link ivThrowableActual}.
     *
     * @returns any Tatsächliche Ausnahme/Fehler
     * @see ivThrowableActual
     * @see setThrowableActual
     */
    public getThrowableActual() {
        return this.ivThrowableActual;
    }
    
    /**
     * Prüft, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher übereinstimmen.
     *
     * @returns {boolean} Wahrheitswert, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher
     *                    übereinstimmen
     */
    public matches(): boolean {
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
     * :en: Setter for {@link ivOutputActual}.
     * :de: Setter für {@link ivOutputActual}.
     *
     * @param {any} pvOutputActual Tatsächliche Ausgabe
     * @see ivOutputActual
     * @see getOutputActual
     */
    public setOutputActual(pvOutputActual: any) {
        this.ivOutputActual = pvOutputActual;
    }
 
    /**
     * :en: Setter for {@link #ivTestCase}.
     * :de: Setter für {@link #ivTestCase}.
     *
     * @param {TestCase} pvTestCase Testfall
     * @see ivTestCase
     * @see getTestCase
     */
     public setTestCase(pvTestCase: TestCase) {
        this.ivTestCase = pvTestCase;
    }

    /**
     * :en: Setter for {@link ivThrowableActual}.
     * :de: Setter für {@link ivThrowableActual}.
     *
     * @param {any} pvThrowableActual Tatsächliche Ausnahme/Fehler
     * @see ivThrowableActual
     * @see getThrowableActual
     */
    public setThrowableActual(pvThrowableActual: any) {
        this.ivThrowableActual = pvThrowableActual;
    }
    
}