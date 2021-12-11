var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _PrimeFactoredIntegerTestSuite_addToMap, _PrimeFactoredIntegerTestSuite_createTestCasesMap;
/**
 * Testsuite für PrimeFactoredInteger.
 *
 * @author see git history
 * @version 1.3, 2021-12-11
 * @since 1.0, 2021-12-01
 */
class PrimeFactoredIntegerTestSuite {
    /**
     * :en: Initializes this class.
     * :de: Initialisiert diese Klasse.
     *
     * @since 1.3, 2021-12-11
     */
    static initialize() {
        PrimeFactoredIntegerTestSuite.TEST_CASES_MAP
            = __classPrivateFieldGet(PrimeFactoredIntegerTestSuite, _a, "m", _PrimeFactoredIntegerTestSuite_createTestCasesMap).call(PrimeFactoredIntegerTestSuite);
    }
}
_a = PrimeFactoredIntegerTestSuite, _PrimeFactoredIntegerTestSuite_addToMap = function _PrimeFactoredIntegerTestSuite_addToMap(pvMap, pvId, pvInput, pvOutputExpectedSerialized, pvThrowableExpected = null) {
    const lcOutputExpected = PrimeFactoredInteger.forSerialized(pvOutputExpectedSerialized);
    TestCase.addToMap(pvMap, pvId, pvInput, lcOutputExpected, pvThrowableExpected);
}, _PrimeFactoredIntegerTestSuite_createTestCasesMap = function _PrimeFactoredIntegerTestSuite_createTestCasesMap() {
    /** @type {Map<string, TestCase>} */
    const lcResult = new Map();
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Good: -1", "-1", "-[[1,1]]");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Good: 0", "0", "0[[0,1]]");
    const lcBasicDigitsMap = ComPriFacNotConcept.BASIC_DIGITS_MAP;
    for (const [lcBasicDigit, lcBasicDigitValue] of lcBasicDigitsMap) {
        if (lcBasicDigit != "0") {
            const lcTestName = "Good: " + lcBasicDigit;
            const lcResultExpcected = "[[" + lcBasicDigitValue + ",1]]";
            __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, lcTestName, lcBasicDigit, lcResultExpcected);
        }
    }
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #1: -", "-", null, "Parse error #1: The string \"-\" is no valid number");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #2: 00", "00", null, "Parse error #2: If the first digit is \"0\", this must be the one and only char.");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #2: 11", "11", null, "Parse error #2: If the first digit is \"1\", this must be the one and only char.");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #3: -0", "-0", null, "Parse error #3: The digit \"0\" may only used as solely digit, " +
        "not together with others");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #3: 20", "20", null, "Parse error #3: The digit \"0\" may only used as solely digit, " +
        "not together with others");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #3: 21", "21", null, "Parse error #3: The digit \"1\" may only used as solely digit, " +
        "not together with others");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #4: (", "(", null, "Parse error #4: Missing \")\" after \"(\"");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #5: ()", "()", null, "Parse error #5: After \"(\" must follow \"#\", \"$\" or \"0\"");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #6: ?", "?", null, "Parse error #6: Unknown char \"?\" at offset 0");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #7: 22", "22", null, "Parse error #7: Base digit \"2\" used 2 or more times");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #8: 2^(", "2^(", null, "Parse error #8: Missing \")\" after \"^(\"");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #9: 2^(0)", "2^(0)", null, "Parse error #9: Exponent must be positive, neither negative nor 0");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #10: 2^2", "2^2", null, "Parse error #10: Missing \"(\" after \"^\"");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #11: 2^", "2^", null, "Parse error #11: Missing \"(\" after \"^\"");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #12: empty", "", null, "Parse error #12: Input string is empty");
    __classPrivateFieldGet(this, _a, "m", _PrimeFactoredIntegerTestSuite_addToMap).call(this, lcResult, "Bad #13: null", null, null, "Parse error #13: Input is null");
    return lcResult;
};
