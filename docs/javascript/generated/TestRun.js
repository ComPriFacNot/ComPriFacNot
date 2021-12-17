/**
 * Testlauf.
 *
 * @author see git history
 * @version 1.3, 2021-12-17
 * @since 1.0, 2021-12-01
 */
class TestRun {
    /**
     * :en: Constructor.
     * :de: Konstruktor.
     *
     * @param {TestCase} pvTestCase Testfall
     * @param {any} pvOutputActual Tatsächliche Ausgabe
     * @param {any} pvThrowableActual Tatsächliche Ausnahme/Fehler
     */
    constructor(pvTestCase, pvOutputActual, pvThrowableActual) {
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
    get outputActual() {
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
    get testCase() {
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
    get throwableActual() {
        return this.ivThrowableActual;
    }
    /**
     * Prüft, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher übereinstimmen.
     *
     * @returns {boolean} Wahrheitswert, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher
     *                    übereinstimmen
     */
    matches() {
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
    set outputActual(pvOutputActual) {
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
    set testCase(pvTestCase) {
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
    set throwableActual(pvThrowableActual) {
        this.ivThrowableActual = pvThrowableActual;
    }
}
