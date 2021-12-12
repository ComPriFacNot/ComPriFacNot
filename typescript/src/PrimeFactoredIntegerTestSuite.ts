/**
 * Testsuite für PrimeFactoredInteger.
 *
 * @author see git history
 * @version 1.3, 2021-12-11
 * @since 1.0, 2021-12-01
 */
class PrimeFactoredIntegerTestSuite {
    
    /**
     * Testfallmappe. Keys: Testfall-IDs; Values: Testfälle.
     */
    static TEST_CASES_MAP: Map<string, TestCase>;
    
    /**
     * Fügt einer Testfallmappe einen Testfall hinzu.
     *
     * @param {Map<string, TestCase>} pvMap Map Testfallmappe
     * @param {string} pvId Test-ID
     * @param {string} pvInput Ungeparste Eingabe
     * @param {string} pvOutputExpectedSerialized Serialisierte Ausgabe
     * @param pvThrowableExpected Ausnahme/Fehler
     */
    static #addToMap(pvMap: Map<string, TestCase>, pvId: string, pvInput: string, 
        pvOutputExpectedSerialized: string, pvThrowableExpected = null) {
        const lcOutputExpected = PrimeFactoredInteger.forSerialized(pvOutputExpectedSerialized);
        TestCase.addToMap(pvMap, pvId, pvInput, lcOutputExpected, pvThrowableExpected);
    }
    
    /**
     * Erzeugt eine Testfallmappe.
     */
    static #createTestCasesMap() {
        /** @type {Map<string, TestCase>} */
        const lcResult: Map<string, TestCase> = new Map<string, TestCase>();
        this.#addToMap(lcResult, "Good: -1", "-1", "-[[1,1]]");
        this.#addToMap(lcResult, "Good: 0", "0", "0[[0,1]]");
        const lcBasicDigitsMap = ComPriFacNotConcept.BASIC_DIGITS_MAP;
        for (const [lcBasicDigit, lcBasicDigitValue] of lcBasicDigitsMap) {
            if (lcBasicDigit != "0") {
                const lcTestName = "Good: " + lcBasicDigit;
                const lcResultExpcected = "[[" + lcBasicDigitValue + ",1]]";
                this.#addToMap(lcResult, lcTestName, lcBasicDigit, lcResultExpcected);        
            }
        }
        this.#addToMap(lcResult, "Bad #1: -", "-", null, 
            "Parse error #1: The string \"-\" is no valid number");
        this.#addToMap(lcResult, "Bad #2: 00", "00", null, 
            "Parse error #2: If the first digit is \"0\", this must be the one and only char.");
        this.#addToMap(lcResult, "Bad #2: 11", "11", null, 
            "Parse error #2: If the first digit is \"1\", this must be the one and only char.");
        this.#addToMap(lcResult, "Bad #3: -0", "-0", null,
            "Parse error #3: The digit \"0\" may only used as solely digit, " +
                "not together with others");
        this.#addToMap(lcResult, "Bad #3: 20", "20", null,
            "Parse error #3: The digit \"0\" may only used as solely digit, " +
                "not together with others");
        this.#addToMap(lcResult, "Bad #3: 21", "21", null,
            "Parse error #3: The digit \"1\" may only used as solely digit, " +
                "not together with others");
        this.#addToMap(lcResult, "Bad #4: (", "(", null,
            "Parse error #4: Missing \")\" after \"(\"");
        this.#addToMap(lcResult, "Bad #5: ()", "()", null, 
            "Parse error #5: After \"(\" must follow \"#\", \"$\" or \"0\"");
        this.#addToMap(lcResult, "Bad #6: ?", "?", null,
            "Parse error #6: Unknown char \"?\" at offset 0");
        this.#addToMap(lcResult, "Bad #7: 22", "22", null,
            "Parse error #7: Base digit \"2\" used 2 or more times");
        this.#addToMap(lcResult, "Bad #8: 2^(", "2^(", null,
            "Parse error #8: Missing \")\" after \"^(\"");
        this.#addToMap(lcResult, "Bad #9: 2^(0)", "2^(0)", null,
            "Parse error #9: Exponent must be positive, neither negative nor 0");
        this.#addToMap(lcResult, "Bad #10: 2^2", "2^2", null,
            "Parse error #10: Missing \"(\" after \"^\"");
        this.#addToMap(lcResult, "Bad #11: 2^", "2^", null,
            "Parse error #11: Missing \"(\" after \"^\"");
        this.#addToMap(lcResult, "Bad #12: empty", "", null,
            "Parse error #12: Input string is empty");
        this.#addToMap(lcResult, "Bad #13: null", null, null,
            "Parse error #13: Input is null");
        
        return lcResult;
    }

    /**
     * :en: Initializes this class.
     * :de: Initialisiert diese Klasse.
     * 
     * @since 1.3, 2021-12-11
     */
    public static initialize() {
        PrimeFactoredIntegerTestSuite.TEST_CASES_MAP 
            = PrimeFactoredIntegerTestSuite.#createTestCasesMap();
    }
    
}