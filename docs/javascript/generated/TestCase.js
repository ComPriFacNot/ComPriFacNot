/**
 * :en: Test case.
 * :de: Testfall.
 *
 * @author see git history
 * @version 1.4, 2021-12-17
 * @since 1.0, 2021-12-01
 */
class TestCase {
    /**
     * :en: Constructor.
     * :de: Konstruktor.
     *
     * @param {string} pvId Identifyer
     * @param {string} pvInput :en: Input :de: Eingabe
     * @param {any} pvOutputExpected :en: Expected output :de: Erwartete Ausgabe
     * @param {any} pvThrowableExpected :en: Expected error/exception
     *                                  :de: Erwarteter Fehler/Ausnahme
     */
    constructor(pvId, pvInput, pvOutputExpected, pvThrowableExpected) {
        this.id = pvId;
        this.input = pvInput;
        this.outputExpected = pvOutputExpected;
        this.throwableExpected = pvThrowableExpected;
    }
    /**
     * :en: Creates a new instance and adds it to a map.
     * :de: Erzeugt einer neue Instanz und fügt ihn einer Mappe hinzu.
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
     * :en: Getter for {@link ivId}.
     * :de: Getter für {@link ivId}.
     *
     * @see ivId
     * @see id
     */
    get id() {
        return this.ivId;
    }
    /**
     * :en: Getter for {@link ivInput}.
     * :de: Getter für {@link ivInput}.
     *
     * @returns {string} {@link ivInput}
     * @see ivInput
     * @see input
     */
    get input() {
        return this.ivInput;
    }
    /**
     * :en: Getter for {@link ivOutputExpected}.
     * :de: Getter für {@link ivOutputExpected}.
     *
     * @returns :en: Expected output :de: Erwartete Ausgabe
     * @see ivOutputExpected
     * @see outputExpected
     */
    get outputExpected() {
        return this.ivOutputExpected;
    }
    /**
     * :en: Getter for {@link ivThrowableExpected}.
     * :de: Getter für {@link ivThrowableExpected}.
     *
     * @returns Erwartete Ausnahme/Fehler
     * @see ivThrowableExpected
     * @see throwableExpected
     */
    get throwableExpected() {
        return this.ivThrowableExpected;
    }
    /**
     * :en: Setter for {@link ivId}.
     * :de: Setter für {@link ivId}.
     *
     * @param {string} pvId {@link ivId}
     * @see ivId
     * @see id
     */
    set id(pvId) {
        this.ivId = pvId;
    }
    /**
     * :en: Setter for {@link ivInput}.
     * :de: Setter für {@link ivInput}.
     *
     * @param {string} pvInput :en: Input :de: Eingabe
     * @see ivInput
     * @see input
     */
    set input(pvInput) {
        this.ivInput = pvInput;
    }
    /**
     * :en: Setter for {@link ivOutputExpected}.
     * :de: Setter für {@link ivOutputExpected}.
     *
     * @param {any} pvOutputExpected :en: Expected output :de: Erwartete Ausgabe
     * @see ivOutputExpected
     * @see outputExpected
     */
    set outputExpected(pvOutputExpected) {
        this.ivOutputExpected = pvOutputExpected;
    }
    /**
     * :en: Setter for {@link ivThrowableExpected}.
     * :de: Setter für {@link ivThrowableExpected}.
     *
     * @param {any} pvThrowable :en: Expected error/exception :de: Erwarteter Fehler/Ausnahme
     * @see ivThrowableExpected
     * @see throwableExpected
     */
    set throwableExpected(pvThrowable) {
        this.ivThrowableExpected = pvThrowable;
    }
}
