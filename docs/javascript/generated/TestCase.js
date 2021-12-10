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
var _TestCase_instances, _TestCase_ivId, _TestCase_ivInput, _TestCase_ivOutputExpected, _TestCase_ivThrowableExpected, _TestCase_setId, _TestCase_setInput, _TestCase_setOutputExpected, _TestCase_setThrowableExpected;
/**
 * Testfall.
 *
 * @author see git history
 * @version 1.2, 2021-12-10
 * @since 1.0, 2021-12-01
 */
class TestCase {
    /**
     * Konstruktor.
     *
     * @param {string} pvId Identifyer
     * @param {string} pvInput Eingabe
     * @param {any} pvOutputExpected Erwartete Ausgabe
     * @param {any} pvThrowableExpected Erwartete Ausnahme/Fehler
     */
    constructor(pvId, pvInput, pvOutputExpected, pvThrowableExpected) {
        _TestCase_instances.add(this);
        /**
         * Identifier.
         *
         * @see getId
         * @see setId
         * @type {string}
         */
        _TestCase_ivId.set(this, void 0);
        /**
         * Eingabe.
         *
         * @type {string}
         * @see getInput
         * @see #setInput
         */
        _TestCase_ivInput.set(this, void 0);
        /**
         * Erwartete Ausgabe.
         *
         * @see getOutputExpected
         * @see #setOutputExpected
         * @type {any}
         */
        _TestCase_ivOutputExpected.set(this, void 0);
        /**
         * Erwartete Ausnahme oder Fehler.
         *
         * @see getThrowableExpected
         * @see setThrowableExpected
         * @type {any}
         */
        _TestCase_ivThrowableExpected.set(this, void 0);
        __classPrivateFieldGet(this, _TestCase_instances, "m", _TestCase_setId).call(this, pvId);
        __classPrivateFieldGet(this, _TestCase_instances, "m", _TestCase_setInput).call(this, pvInput);
        __classPrivateFieldGet(this, _TestCase_instances, "m", _TestCase_setOutputExpected).call(this, pvOutputExpected);
        __classPrivateFieldGet(this, _TestCase_instances, "m", _TestCase_setThrowableExpected).call(this, pvThrowableExpected);
    }
    /**
     * Erzeugt einen neuen TestCase und fügt ihn einer Mappe hinzu.
     *
     * @param {Map<string, TestCase>} pvMap Map Testfallmappe
     * @param {string} pvId Identifyer
     * @param {string} pvInput Eingabe
     * @param {any} pvOutputExpected Erwartete Ausgabe
     * @param {any} pvThrowableExpected Erwartete Ausnahme/Fehler
     */
    static addToMap(pvMap, pvId, pvInput, pvOutputExpected, pvThrowableExpected) {
        const lcInstance = new TestCase(pvId, pvInput, pvOutputExpected, pvThrowableExpected);
        pvMap.set(pvId, lcInstance);
    }
    /**
     * Getter für {@link #ivId}.
     *
     * @see #ivId
     * @see #setId
     */
    getId() {
        return __classPrivateFieldGet(this, _TestCase_ivId, "f");
    }
    /**
     * Getter für {@link #ivInput}.
     *
     * @returns {string} {@link #ivInput}
     * @see #ivInput
     * @see #setInput
     */
    getInput() {
        return __classPrivateFieldGet(this, _TestCase_ivInput, "f");
    }
    /**
     * Getter für {@link #ivOutputExpected}.
     *
     * @returns Erwartete Ausgabe
     * @see #ivOutputExpected
     * @see #setOutputExpected
     */
    getOutputExpected() {
        return __classPrivateFieldGet(this, _TestCase_ivOutputExpected, "f");
    }
    /**
     * Getter für {@link #ivThrowableExpected}.
     *
     * @returns Erwartete Ausnahme/Fehler
     * @see #ivThrowableExpected
     * @see #setThrowableExpected
     */
    getThrowableExpected() {
        return __classPrivateFieldGet(this, _TestCase_ivThrowableExpected, "f");
    }
}
_TestCase_ivId = new WeakMap(), _TestCase_ivInput = new WeakMap(), _TestCase_ivOutputExpected = new WeakMap(), _TestCase_ivThrowableExpected = new WeakMap(), _TestCase_instances = new WeakSet(), _TestCase_setId = function _TestCase_setId(pvId) {
    __classPrivateFieldSet(this, _TestCase_ivId, pvId, "f");
}, _TestCase_setInput = function _TestCase_setInput(pvInput) {
    __classPrivateFieldSet(this, _TestCase_ivInput, pvInput, "f");
}, _TestCase_setOutputExpected = function _TestCase_setOutputExpected(pvOutputExpected) {
    __classPrivateFieldSet(this, _TestCase_ivOutputExpected, pvOutputExpected, "f");
}, _TestCase_setThrowableExpected = function _TestCase_setThrowableExpected(pvThrowable) {
    __classPrivateFieldSet(this, _TestCase_ivThrowableExpected, pvThrowable, "f");
};
