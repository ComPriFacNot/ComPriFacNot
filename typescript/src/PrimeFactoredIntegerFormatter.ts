/**
 * :en: Class PrimeFactoredIntegerParser: Formats a PrimeFactoredInteger.
 * :de: Klasse PrimeFactoredIntegerFormatter: Formatiert einen PrimeFactoredInteger.
 * 
 * @author See git history
 * @version 1.4, 2021-12-16
 * @since 1.0, 2021-11-29
 */
 class PrimeFactoredIntegerFormatter {
    
    /**
     * :en: Format option for basic digits: All digits allowed.
     * :de: Formatoption für Grundziffern: Alle Ziffern erlaubt.
     * 
     * @see FORMAT_BASIC_DIGITS_0_ALL
     * @since 1.4, 2021-12-16
     */
     private static cvFormatBasicDigits0All: number = 0;

     /**
     * :en: Format option for basic digits: Octal digts (0 - 7) only.
     * :de: Formatoption für Grundziffern: Nur Oktalziffern (0 - 7).
     * 
     * @see FORMAT_BASIC_DIGITS_1_OCTALS_ONLY
     * @since 1.4, 2021-12-16
     */
    private static cvFormatBasicDigits1OctalsOnly: number = 1;

      /**
     * :en: Format option for basic digits: Decimals digts (0 - 9) only.
     * :de: Formatoption für Grundziffern: Nur Dezimalziffern (0 - 9).
     * 
     * @see FORMAT_BASIC_DIGITS_2_DECIMALS_ONLY
     * @since 1.4, 2021-12-16
     */
    private static cvFormatBasicDigits2DecimalsOnly: number = 2;

    /**
     * :en: Format option for basic digits: Hexadecimals digts (0 - F) only.
     * :de: Formatoption für Grundziffern: Nur Hexadezimalziffern (0 - F).
     * 
     * @see FORMAT_BASIC_DIGITS_3_HEXADECIMALS_ONLY
     * @since 1.4, 2021-12-16
     */
    private static cvFormatBasicDigits3HexadecimalsOnly: number = 3;

    /**
     * :en: Getter for {@link cvFormatBasicDigits0All}.
     * :de: Getter für {@link cvFormatBasicDigits0All}.
     * 
     * @see cvFormatBasicDigits0All
     * @since 1.4, 2021-12-16
     */
    public static get FORMAT_BASIC_DIGITS_0_ALL(): number {
        return PrimeFactoredIntegerFormatter.cvFormatBasicDigits0All;
    }

    /**
     * :en: Getter for {@link cvFormatBasicDigits1DecimalOnly}.
     * :de: Getter für {@link cvFormatBasicDigits1DecimalOnly}.
     * 
     * @see cvFormatBasicDigits1OctalsOnly
     * @since 1.4, 2021-12-16
     */
    public static get FORMAT_BASIC_DIGITS_1_OCTALS_ONLY(): number {
        return PrimeFactoredIntegerFormatter.cvFormatBasicDigits1OctalsOnly;
    }    
    
    /**
     * :en: Getter for {@link cvFormatBasicDigits2DecimalOnly}.
     * :de: Getter für {@link cvFormatBasicDigits2DecimalOnly}.
     * 
     * @see cvFormatBasicDigits2DecimalOnly
     * @since 1.4, 2021-12-16
     */
    public static get FORMAT_BASIC_DIGITS_2_DECIMALS_ONLY(): number {
        return PrimeFactoredIntegerFormatter.cvFormatBasicDigits2DecimalsOnly;
    }

    /**
     * :en: Getter for {@link cvFormatBasicDigits3HexadecimalOnly}.
     * :de: Getter für {@link cvFormatBasicDigits3HexadecimalOnly}.
     * 
     * @see cvFormatBasicDigits3HexadecimalOnly
     * @since 1.4, 2021-12-16
     */
    public static get FORMAT_BASIC_DIGITS_3_HEXADECIMALS_ONLY(): number {
        return PrimeFactoredIntegerFormatter.cvFormatBasicDigits3HexadecimalsOnly;
    }
    
    /**
     * :en: Formats a PrimeFactoredInteger as ComPriFacNot.
     * :de: Formatiert ein PrimeFactoredInteger als ComPriFacNot.
     * 
     * @param {PrimeFactoredInteger} pvInteger PrimeFactoredInteger
     * @param {number} pvBasicDigitsDigest Basic digits format
     * @since 1.3, 2021-12-16
     */
    public static formatComPriFacNot(pvInteger: PrimeFactoredInteger, 
            pvBasicDigitsDigest: number = PrimeFactoredIntegerFormatter.FORMAT_BASIC_DIGITS_0_ALL
            ): string {
        let lvResult: string;
        if (pvInteger == null) {
            lvResult = null;
        } else {
            const lcSign = pvInteger.sign;
            if (lcSign == 0) {
                lvResult = "0";
            } else {
                lvResult = (lcSign == -1) ? "-" : "";
                const lcComponentsMap = pvInteger.componentsMap;
                const lcBasicDigitsDigistAllAllowed =
                    pvBasicDigitsDigest == PrimeFactoredIntegerFormatter.FORMAT_BASIC_DIGITS_0_ALL;
                const lcBasicDigitsDigestDecAllowed = lcBasicDigitsDigistAllAllowed ||
                    (pvBasicDigitsDigest
                        >= PrimeFactoredIntegerFormatter.FORMAT_BASIC_DIGITS_2_DECIMALS_ONLY);
                const lcBasicDigitsDigestHexAllowed = lcBasicDigitsDigistAllAllowed ||
                    (pvBasicDigitsDigest
                        >= PrimeFactoredIntegerFormatter.FORMAT_BASIC_DIGITS_3_HEXADECIMALS_ONLY);
                const lcBasicDigits = ComPriFacNotConcept.basicDigits;
                const lcBasicDigitsValues = ComPriFacNotConcept.basicDigitsValues;
                const lcBasicDigitsCount = lcBasicDigits.length;
                const lcBasicDigitsMax = lcBasicDigitsValues[lcBasicDigitsCount - 1];
                const lcBasicDigitsValuesMap = ComPriFacNotConcept.basicDigitsValuesMap;
                for (const [lcBase, lcExponent] of lcComponentsMap) {
                    if (lcBase < 8) { // Octal digits are always allowed
                        lvResult += lcBase;
                    } else if ((lcBase < 10) && lcBasicDigitsDigestDecAllowed) { // Decimal digit
                        lvResult += lcBase;
                    } else if ((lcBase < 16) && lcBasicDigitsDigestHexAllowed) { // Hexadec. digit
                        const lcBaseHex = lcBase.toString(16).toUpperCase();
                        lvResult += lcBaseHex;
                    } else if ((lcBase <= lcBasicDigitsMax) && lcBasicDigitsDigistAllAllowed) {
                        // ComPriFacNot digit
                        const lcBaseDigit = lcBasicDigitsValuesMap.get(lcBase);
                        if (lcBaseDigit == null) {
                            const lcMessage = "Format error: Base " + lcBase +
                                " is no prime number!";
                            throw lcMessage;
                        }
                        lvResult += lcBaseDigit;
                    } else { // Decimal surrogate ...
                        if (lcBasicDigitsDigestHexAllowed) { // Hexadecimal allowed ...
                            const lcBaseHex = lcBase.toString(16).toUpperCase();
                            lvResult += "($" + lcBaseHex + ")";
                        } else if (lcBasicDigitsDigestDecAllowed) { // Only decimal allowed ...
                            lvResult += "(#" + lcBase + ")";
                        } else { // Only octal allowed ...
                            const lcBaseOct = lcBase.toString(8);
                            lvResult += "(0" + lcBaseOct + ")";
                        }
                    }
                    if (lcExponent > 1) {
                        const lcExponentSupered = PrimeFactoredIntegerFormatter.formatExponent(
                            lcExponent);
                        lvResult += lcExponentSupered;
                    }
                }
            }
        }

        return lvResult;
    }

    /**
     * :en: Formats a PrimeFactoredInteger as decimal number.
     * :de: Formatiert einen PrimeFactoredInteger als Dezimalzahl.
     * 
     * @param {PrimeFactoredInteger} pvPrimeFactoredInteger
     *          :en: PrimeFactoredInteger to format
     *          :de: Zu formatierendes PrimeFactoredInteger
     * @param {string} pvLocale
     *          :en: Locale
     *          :de: Gebietsschema 
     * @returns {string} 
     *          :en: Decimal formatted PrimeFactoredInteger
     *          :de: Dezimal-formatiertes PrimeFactoredInteger
     */
    public static formatDecimal(pvPrimeFactoredInteger: PrimeFactoredInteger,
            pvLocale: string): string {
        const lcNumber = pvPrimeFactoredInteger.toNumber();
        const lcI18nNumberFormat = new Intl.NumberFormat(pvLocale);
        const lcResult = lcI18nNumberFormat.format(lcNumber);
        
        return lcResult;
    }

    /**
     * :en: Formats an exponent.
     * :de: Formatiert einen Exponenten.
     * 
     * @param {number} pvExponent Exponent
     * @returns {string} Formatted exponent
     * @since 1.4, 2021-12-16
     */
    public static formatExponent(pvExponent: number): string {
        let lvResult = "";
        const lcExponentDecimal = "" + pvExponent;
        const lcExponentDecimalLength = lcExponentDecimal.length;
        const lcExponentSupers = ComPriFacNotConcept.exponentSupers;
        for (let i = 0; i < lcExponentDecimalLength; i++) {
            const lcExponentChar = lcExponentDecimal[i];
            const lcExponentNumber = Number.parseInt(lcExponentChar);
            const lcExponentSuperchar = lcExponentSupers[lcExponentNumber];
            lvResult += lcExponentSuperchar;
        }

        return lvResult;
    }

    /**
     * :en: Constructor.
     * :de: Konstruktor.
     */
    constructor() {}    

}