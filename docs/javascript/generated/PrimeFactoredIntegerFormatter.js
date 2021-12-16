/**
 * :en: Class PrimeFactoredIntegerParser: Formats a PrimeFactoredInteger.
 * :de: Klasse PrimeFactoredIntegerFormatter: Formatiert einen PrimeFactoredInteger.
 *
 * @author See git history
 * @version 1.3, 2021-12-16
 * @since 1.0, 2021-11-29
 */
class PrimeFactoredIntegerFormatter {
    /**
     * :en: Formats a PrimeFactoredInteger as ComPriFacNot.
     * :de: Formatiert ein PrimeFactoredInteger als ComPriFacNot.
     *
     * @param {PrimeFactoredInteger} pvInteger PrimeFactoredInteger
     * @since 1.3, 2021-12-16
     */
    static formatComPriFacNot(pvInteger) {
        let lvResult;
        if (pvInteger == null) {
            lvResult = null;
        }
        else {
            const lcSign = pvInteger.getSign();
            if (lcSign == 0) {
                lvResult = "0";
            }
            else {
                lvResult = (lcSign == -1) ? "-" : "";
                const lcComponentsMap = pvInteger.getComponentsMap();
                for (const [lcBase, lcExponent] of lcComponentsMap) {
                    if (lcBase < 10) {
                        lvResult += lcBase;
                    }
                    else {
                        lvResult += "(#" + lcBase + ")";
                    }
                    if (lcExponent > 1) {
                        lvResult += "^(#" + lcExponent + ")"; /*
                            TODO exchange with superscript notation */
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
    static formatDecimal(pvPrimeFactoredInteger, pvLocale) {
        const lcNumber = pvPrimeFactoredInteger.toNumber();
        const lcI18nNumberFormat = new Intl.NumberFormat(pvLocale);
        const lcResult = lcI18nNumberFormat.format(lcNumber);
        return lcResult;
    }
    /**
     * :en: Constructor.
     * :de: Konstruktor.
     */
    constructor() { }
}
