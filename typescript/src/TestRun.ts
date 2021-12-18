/**
 * Testlauf.
 *
 * @author see git history
 * @version 1.3, 2021-12-17
 * @since 1.0, 2021-12-01
 */

class TestRun {
    
    /**
     * :en: Actual output.
     * :de: Tatsächtliche Ausgabe.
     * 
     * @see outputActual
     * @type {any}
     */
    private ivOutputActual: any;

    /**
     * :en: Actual error/exception.
     * :de: Tatsächliche Fehler/Ausnahme.
     * 
     * @see throwableActual
     * @type {any}
     */
    private ivThrowableActual: any;
    
    /**
     * :en: Test case.
     * :de: Testfall.
     * 
     * @see testCase
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
       this.testCase = pvTestCase;
       this.outputActual = pvOutputActual;
       this.throwableActual = pvThrowableActual;
    }

    /**
     * :en: Getter for {@link ivOutputActual}.
     * :de: Getter für {@link ivOutputActual}.
     *
     * @returns {any} {@link ivOutputActual}
     * @see ivOutputActual
     * @see outputActual
     */
    public get outputActual(): any {
        return this.ivOutputActual;
    }

    /**
     * :en: Getter for {@link #ivTestCase}.
     * :de: Getter für {@link #ivTestCase}.
     *
     * @returns {TestCase} Testfall
     * @see ivTestCase
     * @see testCase
     */
     public get testCase(): TestCase {
        return this.ivTestCase;
    }
    
    /**
     * :en: Getter for {@link ivThrowableActual}.
     * :de: Getter für {@link ivThrowableActual}.
     *
     * @returns any Tatsächliche Ausnahme/Fehler
     * @see ivThrowableActual
     * @see throwableActual
     */
    public get throwableActual() {
        return this.ivThrowableActual;
    }
    
    /**
     * Prüft, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher übereinstimmen.
     *
     * @returns {boolean} Wahrheitswert, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher
     *                    übereinstimmen
     */
    public matches(): boolean {
       const lcTestCase = this.testCase;
       const lcOutputActual = this.outputActual;
       const lcThrowableActual = this.throwableActual;
       const lcOutputExpected = lcTestCase.outputExpected;
       const lcThrowableExpected = lcTestCase.throwableExpected;
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
     * @see outputActual
     */
    public set outputActual(pvOutputActual: any) {
        this.ivOutputActual = pvOutputActual;
    }
 
    /**
     * :en: Setter for {@link #ivTestCase}.
     * :de: Setter für {@link #ivTestCase}.
     *
     * @param {TestCase} pvTestCase Testfall
     * @see ivTestCase
     * @see testCase
     */
     public set testCase(pvTestCase: TestCase) {
        this.ivTestCase = pvTestCase;
    }

    /**
     * :en: Setter for {@link ivThrowableActual}.
     * :de: Setter für {@link ivThrowableActual}.
     *
     * @param {any} pvThrowableActual Tatsächliche Ausnahme/Fehler
     * @see ivThrowableActual
     * @see throwableActual
     */
    public set throwableActual(pvThrowableActual: any) {
        this.ivThrowableActual = pvThrowableActual;
    }
    
}