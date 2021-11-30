/**
 * 🇩🇪 Klasse PrimeFactoredIntegerParser: Parst einen ComPriFacNot-String.
 * 🇪🇳 Class PrimeFactoredIntegerParser: Parses a ComPriFacNot string.
 * 
 * @author See git history
 * @version 1.0, 2021-11-30
 * @since 1.0, 2021-11-29
 */
 class PrimeFactoredIntegerParser {
    
    /**
     * 🇩🇪 Basisziffern.
     * 🇪🇳 Basic digits.
     */
    static BASIC_DIGITS = "012357BDHJN";

     /**
     * 🇩🇪 Hochgestellte Zeichen.
     * 🇪🇳 Super scripted chars.
     */
    static EXPONENT_SUPERS = "⁰¹²³⁴⁵⁶⁷⁸⁹";

    /**
     * 🇩🇪 Zuordnungsreihe Basisziffern zu Zahlen.
     * 🇪🇳 Array of numbers of basic digits.
     */
    static BASIC_DIGITS_ARRAY = [0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

    /*
    static {
        BASIC_DIGITS_MAP.set("0", 0);
        BASIC_DIGITS_MAP.set("1", 1);
        BASIC_DIGITS_MAP.set("2", 2);
        BASIC_DIGITS_MAP.set("3", 3);
        BASIC_DIGITS_MAP.set("5", 5);
        BASIC_DIGITS_MAP.set("7", 7);
        BASIC_DIGITS_MAP.set("B", 11);
        BASIC_DIGITS_MAP.set("D", 13);
        BASIC_DIGITS_MAP.set("H", 17);
        BASIC_DIGITS_MAP.set("J", 19);
        BASIC_DIGITS_MAP.set("N", 23);
    }
    */

    /**
     * 🇩🇪 Konstruktor.
     * 🇪🇳 Constructor.
     */
    constructor() {}
    
    /**
     * 🇩🇪 Parst einen ComPriFacNot-formatierten String zu einem PrimeFactoredInteger.
     * 🇪🇳 Parses a ComPriFacNot formatted string to a PrimeFactoredInteger.
     * 
     * @param string pvComPriFacNot 🇩🇪 ComPriFacNot-formatierte ganze Zahl 🇪🇳 ComPriFacNot formatted integer
     * @returns PrimeFactoredInteger 🇩🇪 Geparste Primfaktorenzerlegung 🇪🇳 Parsed prime factors
     */
    static parseComPriFacNot(pvComPriFacNot) {
        const lcPrimeFactors = new Map();
        if (pvComPriFacNot != null) {
            const lcTrimmed = pvComPriFacNot.trim();
            const lcInputLength = lcTrimmed.length;
            if (lcInputLength > 0) {
                // TODO Sonderfall 0 berücksichtigen
                // Zerlegung in Komponenten ...
                for (let i = 0; i < lcInputLength; i++) {
                    const lcChar = pvComPriFacNot[i];
                    const lcBasicDigitIndex = this.BASIC_DIGITS.indexOf(lcChar);
                    if (lcBasicDigitIndex > -1) { // Basisziffer
                        const lcBase = this.BASIC_DIGITS_ARRAY[lcBasicDigitIndex];
                        let lcExponent = "";
                        if (i < lcInputLength - 1) { // es könnte ein Exponent folgen
                            for (let j = i + 1; j < lcInputLength; j++) {
                                const lcExponentChar = pvComPriFacNot[j];
                                const lcSuperIndex = this.EXPONENT_SUPERS.indexOf(lcExponentChar);
                                if (lcSuperIndex > -1) { // Exponentenzeichen
                                    lcExponent += lcSuperIndex;
                                    i++;
                                } else { // TODO Sonderfall Macron
                                    // kein Exponentenzeichen
                                    break;
                                }
                            }
                        }
                        let lcExponentNumber = (lcExponent == "") ? 1 : Number.parseInt(lcExponent);
                        lcPrimeFactors.set(lcBase, lcExponentNumber);
                    } else { // TODO Sonderfälle wie "-", "^(...)", "(...)" berücksichtigen
                        throw "Parse error: Unknown char \"" + lcChar + "\" at offset " + i;
                    }
                }
            }
        }
        const lcResult = new PrimeFactoredInteger(lcPrimeFactors);

        return lcResult;
    }
}