/**
 * Testfall.
 *
 * @author see git history
 * @version 1.2, 2021-12-10
 * @since 1.0, 2021-12-01
 */
class TestCase {
    
    /**
     * Erzeugt einen neuen TestCase und fügt ihn einer Mappe hinzu.
     *
     * @param {Map<string, TestCase>} pvMap Map Testfallmappe
     * @param {string} pvId Identifyer
     * @param {string} pvInput Eingabe
     * @param {any} pvOutputExpected Erwartete Ausgabe
     * @param {any} pvThrowableExpected Erwartete Ausnahme/Fehler
     */
    static addToMap(pvMap: Map<string, TestCase>, pvId: string, pvInput: string, 
        pvOutputExpected: any, pvThrowableExpected: any) {
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
    #ivId: string;
    
    /**
     * Eingabe.
     *
     * @type {string}
     * @see getInput
     * @see #setInput
     */
    #ivInput: string;

    /**
     * Erwartete Ausgabe.
     *
     * @see getOutputExpected
     * @see #setOutputExpected
     * @type {any}
     */
    #ivOutputExpected: any;
    
    /**
     * Erwartete Ausnahme oder Fehler.
     *
     * @see getThrowableExpected
     * @see setThrowableExpected
     * @type {any}
     */
    #ivThrowableExpected: any;

    /**
     * Konstruktor.
     *
     * @param {string} pvId Identifyer
     * @param {string} pvInput Eingabe
     * @param {any} pvOutputExpected Erwartete Ausgabe
     * @param {any} pvThrowableExpected Erwartete Ausnahme/Fehler
     */
    constructor(pvId: string, pvInput: string, pvOutputExpected: any, pvThrowableExpected: any) {
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
     * @returns {string} {@link #ivInput}
     * @see #ivInput
     * @see #setInput
     */
    getInput(): string {
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
    #setId(pvId: string) {
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
     * @param {any} pvOutputExpected Erwartete Ausgabe
     * @see #ivOutputExpected
     * @see getOutputExpected
     */
    #setOutputExpected(pvOutputExpected: any) {
        this.#ivOutputExpected = pvOutputExpected;
    }
    
    /**
     * Setter für {@link #ivThrowableExpected}.
     *
     * @param {any} pvThrowable Erwartete Ausnahme/Fehler
     * @see #ivThrowableExpected
     * @see getThrowableExpected
     */
    #setThrowableExpected(pvThrowable: any) {
        this.#ivThrowableExpected = pvThrowable;
    }
}