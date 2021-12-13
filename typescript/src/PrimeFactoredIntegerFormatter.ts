/**
 * :en: Class PrimeFactoredIntegerParser: Formats a PrimeFactoredInteger.
 * :de: Klasse PrimeFactoredIntegerFormatter: Formatiert einen PrimeFactoredInteger.
 * 
 * @author See git history
 * @version 1.2, 2021-12-12
 * @since 1.0, 2021-11-29
 */
 class PrimeFactoredIntegerFormatter {
    
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
     * :en: Constructor.
     * :de: Konstruktor.
     */
    constructor() {}    

}