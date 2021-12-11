/**
 * :en: Class PrimeFactoredIntegerParser: Parses a ComPriFacNot string.
 * :de: Klasse PrimeFactoredIntegerParser: Parst einen ComPriFacNot-String.
 *
 * @author See git history
 * @version 1.6, 2021-12-11
 * @since 1.0, 2021-11-29
 */
class PrimeFactoredIntegerParser {
    /**
     * en: Constructor.
     * de: Konstruktor.
     */
    constructor() { }
    /**
     * en: Parses a ComPriFacNot formatted string to a PrimeFactoredInteger.
     * de: Parst einen ComPriFacNot-formatierten String zu einem PrimeFactoredInteger.
     *
     * @param {string} pvComPriFacNot en: ComPriFacNot formatted integer;
     *                                de: ComPriFacNot-formatierte ganze Zahl
     * @returns {PrimeFactoredInteger} en: Parsed prime factors; de: Geparste Primfaktorenzerlegung
     */
    static parseComPriFacNot(pvComPriFacNot) {
        /** @type {Map<number, number>} */
        const lcComponents = new Map();
        let lvSign = 1;
        if (pvComPriFacNot != null) {
            let lcTrimmed = pvComPriFacNot.trim();
            const lcInputLength = lcTrimmed.length;
            if (lcInputLength > 0) {
                const lcFirstChar = lcTrimmed.substring(0, 1);
                /** @type {string} */
                let lvAbsolute;
                if (lcFirstChar == "-") { // Sonderfall negative Zahlen
                    lvSign = -1;
                    lvAbsolute = lcTrimmed.substring(1);
                    if (lvAbsolute == "") {
                        throw "Parse error #1: The string \"-\" is no valid number";
                    }
                    if (lvAbsolute == "1") { // Sonderfall -1
                        lcComponents.set(1, 1);
                        lvAbsolute = lvAbsolute.substring(1);
                    }
                }
                else {
                    lvAbsolute = lcTrimmed;
                }
                if ((lcFirstChar == "0") || (lcFirstChar == "1")) { // Sonderfall 0 und 1
                    const lcBase = (lcTrimmed == "0") ? 0 : 1;
                    lvSign = lcBase;
                    lcComponents.set(lcBase, 1);
                    if (lcInputLength > 1) { // Bei 0 oder 1 darf kein weiteres Zeichen mehr kommen
                        throw "Parse error #2: If the first digit is \"" + lcFirstChar
                            + "\", this must be the one and only char.";
                    }
                }
                else { // Zerlegung in Komponenten ...
                    const lcAbsoluteLength = lvAbsolute.length;
                    for (let i = 0; i < lcAbsoluteLength; i++) {
                        const lcChar = lvAbsolute[i];
                        /** @type {number} */
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
                                // TODO Prüfen, ob lvBase eine Primzahl ist
                                i = lcIndexClosingBracket;
                                break;
                            default:
                                const lcBasicDigitIndex = ComPriFacNotConcept.BASIC_DIGITS.indexOf(lcChar);
                                if (lcBasicDigitIndex > -1) { // Basisziffer
                                    lvBase = ComPriFacNotConcept.BASIC_DIGITS_VALUES[lcBasicDigitIndex];
                                }
                                else {
                                    throw "Parse error #6: Unknown char \"" + lcChar
                                        + "\" at offset " + i;
                                }
                                break;
                        }
                        if (lcComponents.has(lvBase)) { // Basisziffer wurde bereits verwendet
                            throw "Parse error #7: Base digit \"" + lvBase +
                                "\" used 2 or more times";
                        }
                        let lvExponentNumber = 1;
                        if (i + 1 < lcAbsoluteLength) { // es könnte ein Exponent folgen
                            const lcNextChar = lvAbsolute[i + 1];
                            if (lcNextChar == "^") { // Sonderfall Exponent in ComPriFacNot
                                if (i + 2 < lcAbsoluteLength) {
                                    const lcAfterNextChar = lvAbsolute[i + 2];
                                    if (lcAfterNextChar == "(") {
                                        const lcIndexClosingBracket = lvAbsolute.indexOf(")", i
                                            + 3);
                                        if (lcIndexClosingBracket == -1) { // kein ")"
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
                                    const lcSuperIndex = PrimeFactoredIntegerParser.EXPONENT_SUPERS.indexOf(lcExponentChar);
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
                        lcComponents.set(lvBase, lvExponentNumber);
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
}
/**
 * :en: Super scripted chars.
 * :de: Hochgestellte Zeichen.
 */
PrimeFactoredIntegerParser.EXPONENT_SUPERS = "⁰¹²³⁴⁵⁶⁷⁸⁹";
