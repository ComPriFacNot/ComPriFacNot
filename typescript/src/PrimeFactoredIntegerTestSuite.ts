/**
 * Testsuite für PrimeFactoredInteger.
 *
 * @author see git history
 * @version 1.6, 2021-12-17
 * @since 1.0, 2021-12-01
 */
class PrimeFactoredIntegerTestSuite {
    
    /**
     * :en: Test cases map. Keys: Test case IDs; Values: Test cases.
     * :de: Testfallmappe. Schlüssel: Testfall-IDs; Werte: Testfälle.
     * 
     * @see testCasesMap
     */
    private static cvTestCasesMap: Map<string, TestCase>;
    
    /**
     * :en: Adds a test case to a test cases map.
     * :de: Fügt einer Testfallmappe einen Testfall hinzu.
     *
     * @param {Map<string, TestCase>} pvMap Map Test cases map
     * @param {string} pvId Test ID
     * @param {string} pvInput Unparsed input
     * @param {string} pvOutputExpectedSerialized Serialized output
     * @param pvThrowableExpected Error/exception
     */
    private static addToMap(pvMap: Map<string, TestCase>, pvId: string, pvInput: string, 
        pvOutputExpectedSerialized: string, pvThrowableExpected = null) {
        const lcOutputExpected = PrimeFactoredInteger.forSerialized(pvOutputExpectedSerialized);
        TestCase.addToMap(pvMap, pvId, pvInput, lcOutputExpected, pvThrowableExpected);
    }
    
    /**
     * :en: Creates a test cases map.
     * :de: Erzeugt eine Testfallmappe.
     */
    private static createTestCasesMap() {
        const lcResult = new Map<string, TestCase>();
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Good: -1", "-1", "-[[1,1]]");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Good: 0", "0", "0[[0,1]]");
        const lcBasicDigitsMap = ComPriFacNotConcept.basicDigitsMap;
        for (const [lcBasicDigit, lcBasicDigitValue] of lcBasicDigitsMap) {
            if (lcBasicDigit != "0") {
                const lcTestName = "Good: Basic digit " + lcBasicDigit;
                const lcResultExpcected = "[[" + lcBasicDigitValue + ",1]]";
                PrimeFactoredIntegerTestSuite.addToMap(lcResult, lcTestName, lcBasicDigit,
                    lcResultExpcected);        
            }
        }
        const lcAliasDigitsMap = ComPriFacNotConcept.aliasDigitsMap;
        const lcAliasDigitsParsed = PrimeFactoredIntegerParser.aliasDigitsParsed;
        let i = -1;
        for (const [lcAliasDigit] of lcAliasDigitsMap) {
            i++;
            const lcTestName = "Good: Alias digit " + lcAliasDigit;
            const lcAliasDigitParsed = lcAliasDigitsParsed[i];
            const lcResultExpcected = lcAliasDigitParsed.toSerialized();
            PrimeFactoredIntegerTestSuite.addToMap(lcResult, lcTestName, lcAliasDigit,
                lcResultExpcected);        
        }
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #1: -", "-", null, 
            "Parse error #1: The string \"-\" is no valid number");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #2: 00", "00", null, 
            "Parse error #2: If the first digit is \"0\", this must be the one and only char.");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #2: 11", "11", null, 
            "Parse error #2: If the first digit is \"1\", this must be the one and only char.");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #3: -0", "-0", null,
            "Parse error #3: The digit \"0\" may only used as solely digit, " +
                "not together with others");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #3: 20", "20", null,
            "Parse error #3: The digit \"0\" may only used as solely digit, " +
                "not together with others");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #3: 21", "21", null,
            "Parse error #3: The digit \"1\" may only used as solely digit, " +
                "not together with others");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #4: (", "(", null,
            "Parse error #4: Missing \")\" after \"(\"");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #5: ()", "()", null, 
            "Parse error #5: After \"(\" must follow \"#\", \"$\" or \"0\"");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #6: ?", "?", null,
            "Parse error #6: Unknown char \"?\" at offset 0");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #7: 22", "22", null,
            "Parse error #7: Base \"2\" used 2 or more times");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #8: 2^(", "2^(", null,
            "Parse error #8: Missing \")\" after \"^(\"");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #9: 2^(0)", "2^(0)", null,
            "Parse error #9: Exponent must be positive, neither negative nor 0");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #10: 2^2", "2^2", null,
            "Parse error #10: Missing \"(\" after \"^\"");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #11: 2^", "2^", null,
            "Parse error #11: Missing \"(\" after \"^\"");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #12: empty", "", null,
            "Parse error #12: Input string is empty");
        PrimeFactoredIntegerTestSuite.addToMap(lcResult, "Bad #13: null", null, null,
            "Parse error #13: Input is null");
        
        return lcResult;
    }

    /**
     * :en: Getter for {@link cvTestCasesMap}.
     * :de: Getter für {@link cvTestCasesMap}.
     * 
     * @returns {Map<string, TestCase>} {@link cvTestCasesMap}
     * @see cvTestCasesMap
     * @see testCasesMap
     * @since 1.4, 2021-12-12
     */
    public static get testCasesMap(): Map<string, TestCase> {
        return PrimeFactoredIntegerTestSuite.cvTestCasesMap;
    }

    /**
     * :en: Initializes this class.
     * :de: Initialisiert diese Klasse.
     * 
     * @since 1.3, 2021-12-11
     */
    public static initialize() {
        const lcTestCasesMap = PrimeFactoredIntegerTestSuite.createTestCasesMap();
        PrimeFactoredIntegerTestSuite.testCasesMap = lcTestCasesMap;
    }
 
    /**
     * :en: Setter for {@link cvTestCasesMap}.
     * :de: Setter für {@link cvTestCasesMap}.
     * 
     * @param {Map<string, TestCase>} pvTestCasesMap {@link cvTestCasesMap}
     * @see cvTestCasesMap
     * @see testCasesMap
     * @since 1.4, 2021-12-12
     */
    public static set testCasesMap(pvTestCasesMap: Map<string, TestCase>) {
        PrimeFactoredIntegerTestSuite.cvTestCasesMap = pvTestCasesMap;
    }    
    
}