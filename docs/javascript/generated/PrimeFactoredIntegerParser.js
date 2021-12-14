/**
 * :en: Class PrimeFactoredIntegerParser: Parses a ComPriFacNot string.
 * :de: Klasse PrimeFactoredIntegerParser: Parst einen ComPriFacNot-String.
 *
 * @author See git history
 * @version 1.8, 2021-12-14
 * @since 1.0, 2021-11-29
 */
class PrimeFactoredIntegerParser {
    /**
     * :en: Constructor.
     * :de: Konstruktor.
     */
    constructor() { }
    /**
     * :en: Getter for {@link cvAliasDigitsParsed}.
     * :de: Getter für {@link cvAliasDigitsParsed}.
     *
     * @returns {PrimeFactoredInteger[]} {@link cvAliasDigitsParsed}
     * @see cvAliasDigitsParsed
     * @see setAliasDigitsParsed
     * @since 1.8, 2021-12-14
     */
    static getAliasDigitsParsed() {
        return PrimeFactoredIntegerParser.cvAliasDigitsParsed;
    }
    /**
     * :en: Getter for {@link cvExponentSupers}.
     * :de: Getter für {@link cvExponentSupers}.
     *
     * @returns {string} {@link cvExponentSupers}
     * @see cvExponentSupers
     */
    static getExponentSupers() {
        return PrimeFactoredIntegerParser.cvExponentSupers;
    }
    /**
     * :en: Initializes this class.
     * :de: Initialisiert diese Klasse.
     *
     * @since 1.8, 2021-12-14
     */
    static initialize() {
        const lcAliasDigits = ComPriFacNotConcept.getAliasDigits();
        const lcAliasDigitsValues = ComPriFacNotConcept.getAliasDigitsValues();
        const lcAliasDigitsCount = lcAliasDigits.length;
        const lcAliasDigitsParsed = new Array();
        for (let i = 0; i < lcAliasDigitsCount; i++) {
            const lcAliasDigitValue = lcAliasDigitsValues[i];
            const lcAliasDigitParsed = PrimeFactoredIntegerParser.parseComPriFacNot(lcAliasDigitValue);
            lcAliasDigitsParsed[i] = lcAliasDigitParsed;
        }
        PrimeFactoredIntegerParser.setAliasDigitsParsed(lcAliasDigitsParsed);
    }
    /**
     * :en: Parses a ComPriFacNot formatted string to a PrimeFactoredInteger.
     * :de: Parst einen ComPriFacNot-formatierten String zu einem PrimeFactoredInteger.
     *
     * @param {string} pvComPriFacNot :en: ComPriFacNot formatted integer;
     *                                :de: ComPriFacNot-formatierte ganze Zahl
     * @returns {PrimeFactoredInteger} :en: Parsed prime factors;
     *                                 :de: Geparste Primfaktorenzerlegung
     */
    static parseComPriFacNot(pvComPriFacNot) {
        const lcComponents = new Map();
        let lvSign = 1;
        if (pvComPriFacNot != null) {
            let lcTrimmed = pvComPriFacNot.trim();
            const lcInputLength = lcTrimmed.length;
            if (lcInputLength > 0) {
                const lcFirstChar = lcTrimmed.substring(0, 1);
                /** @type {string} */
                let lvAbsolute;
                if (lcFirstChar == "-") { // Special case negative numbers
                    lvSign = -1;
                    lvAbsolute = lcTrimmed.substring(1);
                    if (lvAbsolute == "") {
                        throw "Parse error #1: The string \"-\" is no valid number";
                    }
                    if (lvAbsolute == "1") { // Special case -1
                        lcComponents.set(1, 1);
                        lvAbsolute = lvAbsolute.substring(1);
                    }
                }
                else {
                    lvAbsolute = lcTrimmed;
                }
                if ((lcFirstChar == "0") || (lcFirstChar == "1")) { // Special cases 0 and 1
                    const lcBase = (lcTrimmed == "0") ? 0 : 1;
                    lvSign = lcBase;
                    lcComponents.set(lcBase, 1);
                    if (lcInputLength > 1) { // On 0 or 1 no other char is allowed to not follow
                        throw "Parse error #2: If the first digit is \"" + lcFirstChar
                            + "\", this must be the one and only char.";
                    }
                }
                else { // Zerlegung in Komponenten ...
                    const lcBases = new Set();
                    const lcAbsoluteLength = lvAbsolute.length;
                    const lcBasicDigits = ComPriFacNotConcept.getBasicDigits();
                    const lcBasicDigitsValues = ComPriFacNotConcept.getBasicDigitsValues();
                    const lcAliasDigits = ComPriFacNotConcept.getAliasDigits();
                    const lcAliasDigitsParsed = PrimeFactoredIntegerParser.getAliasDigitsParsed();
                    const lcExponentSupers = PrimeFactoredIntegerParser.getExponentSupers();
                    for (let i = 0; i < lcAbsoluteLength; i++) {
                        const lcChar = lvAbsolute[i];
                        let lvBase;
                        switch (lcChar) {
                            case "0": // /* fall through */
                            case "1": // 0 oder 1 dürfen nur allein angegeben werden
                                throw "Parse error #3: The digit \"" + lcChar
                                    + "\" may only used as solely digit, not together with others";
                            case "(": // Sonderfall "(...)" (Primzahl, aber keine Grundziffer)
                                const lcIndexClosingBracket = lvAbsolute.indexOf(")", i + 1);
                                if (lcIndexClosingBracket == -1) { // kein ")"
                                    throw "Parse error #4: Missing \")\" after \"(\"";
                                }
                                const lcBaseUnparsed = lvAbsolute.substring(i + 1, lcIndexClosingBracket);
                                const lcFirstBaseUnparsedChar = lcBaseUnparsed[0];
                                switch (lcFirstBaseUnparsedChar) {
                                    case "#": // Dezimalzahl
                                        const lcBaseDecimal = lcBaseUnparsed.substring(1);
                                        lvBase = Number.parseInt(lcBaseDecimal);
                                        break;
                                    case "$": // Hexadezimalzahl
                                        const lcBaseHexadecimal = lcBaseUnparsed.substring(1);
                                        lvBase = Number.parseInt(lcBaseHexadecimal, 16);
                                        break;
                                    case "0": // Oktalzahl
                                        const lcBaseOctal = lcBaseUnparsed.substring(1);
                                        lvBase = Number.parseInt(lcBaseOctal, 8);
                                        break;
                                    default:
                                        throw "Parse error #5: After \"(\" must follow" +
                                            " \"#\", \"$\" or \"0\"";
                                }
                                // TODO Check, if lvBase is a prime number
                                i = lcIndexClosingBracket;
                                break;
                            default:
                                const lcBasicDigitIndex = lcBasicDigits.indexOf(lcChar);
                                if (lcBasicDigitIndex > -1) { // Basic digit ...
                                    lvBase = lcBasicDigitsValues[lcBasicDigitIndex];
                                }
                                else { // no basic digit ...
                                    const lcAliasDigitIndex = lcAliasDigits.indexOf(lcChar);
                                    if (lcAliasDigitIndex > -1) { // Alias digit ...
                                        lvBase = lcAliasDigitsParsed[lcAliasDigitIndex];
                                    }
                                    else { // neither basic nor alias digit ...
                                        throw "Parse error #6: Unknown char \"" + lcChar
                                            + "\" at offset " + i;
                                    }
                                }
                                break;
                        }
                        if (lcBases.has(lvBase)) {
                            // Basis wurde bereits verwendet
                            throw "Parse error #7: Base \"" + lvBase +
                                "\" used 2 or more times";
                        }
                        lcBases.add(lvBase);
                        let lvExponentNumber = 1;
                        if (i + 1 < lcAbsoluteLength) { // an exponent might follow ...
                            const lcNextChar = lvAbsolute[i + 1];
                            if (lcNextChar == "^") { // special case exponent in ComPriFacNot ...
                                if (i + 2 < lcAbsoluteLength) {
                                    const lcAfterNextChar = lvAbsolute[i + 2];
                                    if (lcAfterNextChar == "(") {
                                        const lcIndexClosingBracket = lvAbsolute.indexOf(")", i
                                            + 3);
                                        if (lcIndexClosingBracket == -1) { // no ")"
                                            throw "Parse error #8: Missing \")\" after \"^(\"";
                                        }
                                        const lcExponentUnparsed = lvAbsolute.substring(i + 3, lcIndexClosingBracket);
                                        const lcExponentParsed = PrimeFactoredIntegerParser.parseComPriFacNot(lcExponentUnparsed);
                                        const lcExponentSign = lcExponentParsed.getSign();
                                        if (lcExponentSign != 1) {
                                            throw "Parse error #9: Exponent must be positive, " +
                                                "neither negative nor 0";
                                        }
                                        lvExponentNumber = lcExponentParsed.toNumber();
                                        i = lcIndexClosingBracket;
                                    }
                                    else {
                                        throw "Parse error #10: Missing \"(\" after \"^\"";
                                    }
                                }
                                else {
                                    throw "Parse error #11: Missing \"(\" after \"^\"";
                                }
                            }
                            else {
                                let lcExponent = "";
                                for (let j = i + 1; j < lcAbsoluteLength; j++) {
                                    const lcExponentChar = lvAbsolute[j];
                                    const lcSuperIndex = lcExponentSupers.indexOf(lcExponentChar);
                                    if (lcSuperIndex > -1) { // Exponentenzeichen
                                        lcExponent += lcSuperIndex;
                                    }
                                    else if (lcExponentChar == "¯") { // Sonderfall Macron
                                        // nop
                                    }
                                    else {
                                        // kein Exponentenzeichen
                                        break;
                                    }
                                    i++;
                                }
                                lvExponentNumber = (lcExponent == "")
                                    ? 1 : Number.parseInt(lcExponent);
                            }
                        }
                        if (typeof lvBase === "number") { // Basic digit ...
                            const lcNewExponent = ((lcComponents.has(lvBase))
                                ? lcComponents.get(lvBase) : 0) + lvExponentNumber;
                            lcComponents.set(lvBase, lcNewExponent);
                        }
                        else { // Alias digit ...
                            const lcAliasDigitParsedComponents = lvBase.getComponentsMap();
                            for (const [lcAliasBase, lcAliasExponent] of lcAliasDigitParsedComponents) {
                                const lcNewExponent = ((lcComponents.has(lcAliasBase))
                                    ? lcComponents.get(lcAliasBase) : 0) +
                                    lcAliasExponent * lvExponentNumber;
                                lcComponents.set(lcAliasBase, lcNewExponent);
                            }
                        }
                    }
                }
            }
            else { // Leerstring
                throw "Parse error #12: Input string is empty";
            }
        }
        else { // null
            throw "Parse error #13: Input is null";
        }
        const lcResult = new PrimeFactoredInteger(lcComponents, lvSign);
        return lcResult;
    }
    /**
     * :en: Setter for {@link cvAliasDigitsParsed}.
     * :de: Setter für {@link cvAliasDigitsParsed}.
     *
     * @params {PrimeFactoredInteger[]} pvAliasDigitsParsed {@link cvAliasDigitsParsed}
     * @see cvAliasDigitsParsed
     * @see getAliasDigitsParsed
     * @since 1.8, 2021-12-14
     */
    static setAliasDigitsParsed(pvAliasDigitsParsed) {
        PrimeFactoredIntegerParser.cvAliasDigitsParsed = pvAliasDigitsParsed;
    }
}
/**
 * :en: Super scripted chars.
 * :de: Hochgestellte Zeichen.
 *
 * @see getExponentSupers
 */
PrimeFactoredIntegerParser.cvExponentSupers = "⁰¹²³⁴⁵⁶⁷⁸⁹";
