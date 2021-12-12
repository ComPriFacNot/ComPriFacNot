/**
 * :en: Test case.
 * :de: Testfall.
 *
 * @author see git history
 * @version 1.3, 2021-12-12
 * @since 1.0, 2021-12-01
 */
class TestCase {
    
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
    public static addToMap(pvMap: Map<string, TestCase>, pvId: string, pvInput: string, 
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
    private ivId: string;
    
    /**
     * Eingabe.
     *
     * @type {string}
     * @see getInput
     * @see setInput
     */
    private ivInput: string;

    /**
     * Erwartete Ausgabe.
     *
     * @see getOutputExpected
     * @see setOutputExpected
     * @type {any}
     */
    private ivOutputExpected: any;
    
    /**
     * Erwartete Ausnahme oder Fehler.
     *
     * @see getThrowableExpected
     * @see setThrowableExpected
     * @type {any}
     */
    private ivThrowableExpected: any;

    /**
     * Konstruktor.
     *
     * @param {string} pvId Identifyer
     * @param {string} pvInput Eingabe
     * @param {any} pvOutputExpected Erwartete Ausgabe
     * @param {any} pvThrowableExpected Erwartete Ausnahme/Fehler
     */
    constructor(pvId: string, pvInput: string, pvOutputExpected: any, pvThrowableExpected: any) {
        this.setId(pvId);
        this.setInput(pvInput);
        this.setOutputExpected(pvOutputExpected);
        this.setThrowableExpected(pvThrowableExpected);
    }

    /**
     * Getter für {@link ivId}.
     * 
     * @see ivId
     * @see setId
     */
    public getId() {
        return this.ivId;
    }

    /**
     * Getter für {@link ivInput}.
     *
     * @returns {string} {@link ivInput}
     * @see ivInput
     * @see setInput
     */
    public getInput(): string {
        return this.ivInput;
    }
    
    /**
     * Getter für {@link ivOutputExpected}.
     *
     * @returns Erwartete Ausgabe
     * @see ivOutputExpected
     * @see setOutputExpected
     */
    public getOutputExpected() {
        return this.ivOutputExpected;
    }
    
    /**
     * Getter für {@link ivThrowableExpected}.
     *
     * @returns Erwartete Ausnahme/Fehler
     * @see ivThrowableExpected
     * @see setThrowableExpected
     */
    public getThrowableExpected() {
        return this.ivThrowableExpected;
    }
    
    /**
     * Setter für {@link ivId}.
     *
     * @param {string} pvId
     * @see ivId
     * @see getId
     */
    private setId(pvId: string) {
        this.ivId = pvId;
    }
    
    /**
     * Setter für {@link ivInput}.
     *
     * @param {string} pvInput Eingabe
     * @see ivInput
     * @see getInput
     */
    private setInput(pvInput: string) {
        this.ivInput = pvInput;
    }
    
    /**
     * Setter für {@link ivOutputExpected}.
     *
     * @param {any} pvOutputExpected Erwartete Ausgabe
     * @see ivOutputExpected
     * @see getOutputExpected
     */
    private setOutputExpected(pvOutputExpected: any) {
        this.ivOutputExpected = pvOutputExpected;
    }
    
    /**
     * Setter für {@link ivThrowableExpected}.
     *
     * @param {any} pvThrowable Erwartete Ausnahme/Fehler
     * @see ivThrowableExpected
     * @see getThrowableExpected
     */
    private setThrowableExpected(pvThrowable: any) {
        this.ivThrowableExpected = pvThrowable;
    }
}