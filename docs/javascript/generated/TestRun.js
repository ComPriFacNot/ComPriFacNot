/**
 * Testlauf.
 *
 * @author see git history
 * @version 1.2, 2021-12-12
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
    getOutputActual() {
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
    getTestCase() {
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
    getThrowableActual() {
        return this.ivThrowableActual;
    }
    /**
     * Prüft, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher übereinstimmen.
     *
     * @returns {boolean} Wahrheitswert, ob erwartete Ausgabe und Ausnahme/Fehler mit tatsächlicher
     *                    übereinstimmen
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
     * :en: Setter for {@link ivOutputActual}.
     * :de: Setter für {@link ivOutputActual}.
     *
     * @param {any} pvOutputActual Tatsächliche Ausgabe
     * @see ivOutputActual
     * @see getOutputActual
     */
    setOutputActual(pvOutputActual) {
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
    setTestCase(pvTestCase) {
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
    setThrowableActual(pvThrowableActual) {
        this.ivThrowableActual = pvThrowableActual;
    }
}
