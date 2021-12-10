/**
 * Testlauf.
 *
 * @author see git history
 * @version 1.1, 2021-12-10
 * @since 1.0, 2021-12-01
 */
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _TestRun_ivOutputActual, _TestRun_ivThrowableActual, _TestRun_ivTestCase;
class TestRun {
    /**
     * Konstruktor.
     *
     * @param {TestCase} pvTestCase Testfall
     * @param {any} pvOutputActual Tatsächliche Ausgabe
     * @param {any} pvThrowableActual Tatsächliche Ausnahme/Fehler
     */
    constructor(pvTestCase, pvOutputActual, pvThrowableActual) {
        /**
         * Tatsächtliche Ausgabe.
         *
         * @type {any}
         */
        _TestRun_ivOutputActual.set(this, void 0);
        /**
         * Tatsächliche Ausnahme/Fehler.
         *
         * @type {any}
         */
        _TestRun_ivThrowableActual.set(this, void 0);
        /**
         * TestCase Testfall.
         *
         * @type {TestCase}
         */
        _TestRun_ivTestCase.set(this, void 0);
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
        return __classPrivateFieldGet(this, _TestRun_ivOutputActual, "f");
    }
    /**
     * Getter für #ivThrowableActual.
     *
     * @returns any Tatsächliche Ausnahme/Fehler
     */
    getThrowableActual() {
        return __classPrivateFieldGet(this, _TestRun_ivThrowableActual, "f");
    }
    /**
     * Getter für #ivTestCase.
     *
     * @returns {TestCase} Testfall
     */
    getTestCase() {
        return __classPrivateFieldGet(this, _TestRun_ivTestCase, "f");
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
     * Setter für #ivOutputActual.
     *
     * @param {any} pvOutputActual Tatsächliche Ausgabe
     */
    setOutputActual(pvOutputActual) {
        __classPrivateFieldSet(this, _TestRun_ivOutputActual, pvOutputActual, "f");
    }
    /**
     * Setter für #ivThrowableActual.
     *
     * @param {any} pvThrowableActual Tatsächliche Ausnahme/Fehler
     */
    setThrowableActual(pvThrowableActual) {
        __classPrivateFieldSet(this, _TestRun_ivThrowableActual, pvThrowableActual, "f");
    }
    /**
     * Setter für #ivTestCase.
     *
     * @param {TestCase} pvTestCase any Testfall
     */
    setTestCase(pvTestCase) {
        __classPrivateFieldSet(this, _TestRun_ivTestCase, pvTestCase, "f");
    }
}
_TestRun_ivOutputActual = new WeakMap(), _TestRun_ivThrowableActual = new WeakMap(), _TestRun_ivTestCase = new WeakMap();
