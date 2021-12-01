/**
 * Testfall.
 *
 * @author see git history
 * @version 1.0, 2021-12-01
 * @since 1.0, 2021-12-01
 */
 
class TestCase {
    
    /**
     * Erzeugt einen neuen TestCase und fügt ihn einer Mappe hinzu.
     *
     * @param pvMap Map Testfallmappe
     * @param pvId String Identifyer
     * @param pvInput String Eingabe
     * @param pvOutputExpected any Erwartete Ausgabe
     * @param pvThrowableExpected any Erwartete Ausnahme/Fehler
     */
    static addToMap(pvMap, pvId, pvInput, pvOutputExpected, pvThrowableExpected) {
        const lcInstance = new TestCase(pvId, pvInput, pvOutputExpected, pvThrowableExpected);
        pvMap.set(pvId, lcInstance);
    }
    
    /**
     * String Identifier.
     *
     * @see getId()
     * @see #setId()
     */
    #ivId;
    
    /**
     * String Eingabe.
     *
     * @see getInput()
     * @see setInput()
     */
    #ivInput;

    /**
     * any Erwartete Ausgabe.
     *
     * @see getOutputExpected()
     * @see setOutputExpected()
     */
    #ivOutputExpected;
    
    /**
     * any Erwartete Ausnahme oder Fehler.
     *
     * @see getThrowableExpected()
     * @see setThrowableExpected()
     */
    #ivThrowableExpected;

    /**
     * Konstruktor.
     *
     * @param pvId Identifyer
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
     * Getter für #ivId.
     * 
     * @see #ivId
     * @see #setId()
     */
    getId() {
        return this.#ivId;
    }

    /**
     * Getter für #ivInput.
     *
     * @returns String #ivInput
     */
    getInput() {
        return this.#ivInput;
    }
    
    /**
     * Getter für #ivOutputExpected.
     *
     * @returns any Erwartete Ausgabe
     */
    getOutputExpected() {
        return this.#ivOutputExpected;
    }
    
    /**
     * Getter für #ivThrowableExpected.
     *
     * @returns any Erwartete Ausnahme/Fehler
     */
    getThrowableExpected() {
        return this.#ivThrowableExpected;
    }
    
    /**
     * Setter für #ivId.
     *
     * @see #ivId
     * @see #getId()
     */
    #setId(pvId) {
        this.#ivId = pvId;
    }
    
    /**
     * Setter für #ivInput.
     *
     * @param pvInput String Eingabe
     */
    #setInput(pvInput) {
        this.#ivInput = pvInput;
    }
    
    /**
     * Setter für #ivOutputExpected.
     *
     * @param pvOutputExpected any Erwartete Ausgabe
     */
    #setOutputExpected(pvOutputExpected) {
        this.#ivOutputExpected = pvOutputExpected;
    }
    
    /**
     * Setter für #ivThrowableExpected.
     *
     * @param pvThrowable Erwartete Ausnahme/Fehler
     */
    #setThrowableExpected(pvThrowable) {
        this.#ivThrowableExpected = pvThrowable;
    }
}