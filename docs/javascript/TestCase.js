/**
 * Testfall.
 *
 * @author see git history
 * @version 1.1, 2021-12-03
 * @since 1.0, 2021-12-01
 */
class TestCase {
    
    /**
     * Erzeugt einen neuen TestCase und fügt ihn einer Mappe hinzu.
     *
     * @param {Map<string, TestCase>} pvMap Map Testfallmappe
     * @param {string} pvId Identifyer
     * @param {string} pvInput Eingabe
     * @param pvOutputExpected Erwartete Ausgabe
     * @param pvThrowableExpected Erwartete Ausnahme/Fehler
     */
    static addToMap(pvMap, pvId, pvInput, pvOutputExpected, pvThrowableExpected) {
        const lcInstance = new TestCase(pvId, pvInput, pvOutputExpected, pvThrowableExpected);
        pvMap.set(pvId, lcInstance);
    }
    
    /**
     * Identifier.
     *
     * @see getId
     * @see setId
     * @type {string}
     */
    #ivId;
    
    /**
     * Eingabe.
     *
     * @see getInput
     * @see #setInput
     */
    #ivInput;

    /**
     * Erwartete Ausgabe.
     *
     * @see getOutputExpected
     * @see #setOutputExpected
     */
    #ivOutputExpected;
    
    /**
     * Erwartete Ausnahme oder Fehler.
     *
     * @see getThrowableExpected
     * @see setThrowableExpected
     */
    #ivThrowableExpected;

    /**
     * Konstruktor.
     *
     * @param {string} pvId Identifyer
     * @param pvInput Eingabe
     * @param pvOutputExpected Erwartete Ausgabe
     * @param pvThrowableExpected Erwartete Ausnahme/Fehler
     */
    constructor(pvId, pvInput, pvOutputExpected, pvThrowableExpected) {
        this.#setId(pvId);
        this.#setInput(pvInput);
        this.#setOutputExpected(pvOutputExpected);
        this.#setThrowableExpected(pvThrowableExpected);
    }

    /**
     * Getter für {@link #ivId}.
     * 
     * @see #ivId
     * @see #setId
     */
    getId() {
        return this.#ivId;
    }

    /**
     * Getter für {@link #ivInput}.
     *
     * @returns {@link #ivInput}
     * @see #ivInput
     * @see #setInput
     */
    getInput() {
        return this.#ivInput;
    }
    
    /**
     * Getter für {@link #ivOutputExpected}.
     *
     * @returns Erwartete Ausgabe
     * @see #ivOutputExpected
     * @see #setOutputExpected
     */
    getOutputExpected() {
        return this.#ivOutputExpected;
    }
    
    /**
     * Getter für {@link #ivThrowableExpected}.
     *
     * @returns Erwartete Ausnahme/Fehler
     * @see #ivThrowableExpected
     * @see #setThrowableExpected
     */
    getThrowableExpected() {
        return this.#ivThrowableExpected;
    }
    
    /**
     * Setter für {@link #ivId}.
     *
     * @param {string} pvId
     * @see #ivId
     * @see getId
     */
    #setId(pvId) {
        this.#ivId = pvId;
    }
    
    /**
     * Setter für {@link #ivInput}.
     *
     * @param pvInput Eingabe
     * @see #ivInput
     * @see getInput
     */
    #setInput(pvInput) {
        this.#ivInput = pvInput;
    }
    
    /**
     * Setter für {@link #ivOutputExpected}.
     *
     * @param pvOutputExpected Erwartete Ausgabe
     * @see #ivOutputExpected
     * @see getOutputExpected
     */
    #setOutputExpected(pvOutputExpected) {
        this.#ivOutputExpected = pvOutputExpected;
    }
    
    /**
     * Setter für {@link #ivThrowableExpected}.
     *
     * @param pvThrowable Erwartete Ausnahme/Fehler
     * @see #ivThrowableExpected
     * @see getThrowableExpected
     */
    #setThrowableExpected(pvThrowable) {
        this.#ivThrowableExpected = pvThrowable;
    }
}