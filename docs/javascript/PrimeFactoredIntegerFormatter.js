/**
 * 🇩🇪 Klasse PrimeFactoredIntegerFormatter: Formatiert einen PrimeFactoredInteger.
 * 🇪🇳 Class PrimeFactoredIntegerParser: Formats a PrimeFactoredInteger.
 * 
 * @author See git history
 * @version 1.0, 2021-11-29
 * @since 1.0, 2021-11-29
 */
 class PrimeFactoredIntegerFormatter {
    /**
     * 🇩🇪 Konstruktor.
     * 🇪🇳 Constructor.
     */
    constructor() {}
    
    /**
     * 🇩🇪 Formatiert einen PrimeFactoredInteger als Dezimalzahl.
     * 🇪🇳 Formats a PrimeFactoredInteger as decimal number.
     * 
     * @param PrimeFactoredInteger 🇩🇪 Zu formatierendes PrimeFactoredInteger 🇪🇳 PrimeFactoredInteger to format
     * @param Locale pvLocale 🇩🇪 Gebietsschema 🇪🇳 Locale
     * @returns string 🇩🇪 Dezimal-formatiertes PrimeFactoredInteger 🇪🇳 Decimal formatted PrimeFactoredInteger
     */
    static formatDecimal(pvPrimeFactoredInteger, pvLocale) {
        const lcNumber = pvPrimeFactoredInteger.toNumber();
        const lcI18nNumberFormat = new Intl.NumberFormat(pvLocale);
        const lcResult = lcI18nNumberFormat.format(lcNumber);
        
        return lcResult;
    }
}