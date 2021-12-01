/**
 * 🇩🇪 Klasse PrimeFactoredInteger: In Primfaktoren zerlegte ganze Zahl.
 * 🇪🇳 Class PrimeFactoredInteger: Into prime factors split integer.
 * 
 * @author See git history
 * @version 1.1, 2021-11-30
 * @since 1.0, 2021-11-29
 */
class PrimeFactoredInteger {

    /**
     * Mappe der Primfaktoren. Obwohl 0 und 1 keine Primzahlen sind, kann - falls die Mappe durch einen
     * Wert enthält - der Schlüssel 0 oder 1 und der Wert dazu 1 sein.
     * 
     * @see getPrimeFactorsMap
     * @see #setPrimeFactorsMap
     */
    #ivPrimeFactorsMap;

    /**
     * Vorzeichen: -1 (bei negativem Wert), 0 (bei 0) oder 1 (bei positivem Wert).
     */
    #ivSign;

    /**
     * 🇩🇪 Konstruktor.
     * 🇪🇳 Constructor.
     * 
     * @param Map primeFactorsMap Mappe der Primfaktoren
     */
    constructor(pvPrimeFactorsMap, pvSign = null) {
        this.#setPrimeFactorsMap(pvPrimeFactorsMap);
        let lvSign = pvSign;
        if (pvPrimeFactorsMap != null) {
            if (pvPrimeFactorsMap.has(0)) {
                lvSign = 0;
            }
        }
        if (lvSign == null) {
            lvSign = 1;
        }
        this.#setSign(pvSign);
    }
    
    /**
     * Getter für #ivPrimeFactorsMap.
     * 
     * @returns Map Primfaktorenmappe
     * @see #ivPrimeFactorsMap
     * @see #setPrimeFactorsMap
     */
    getPrimeFactorsMap() {
        return this.#ivPrimeFactorsMap;
    }

    /**
     * Getter für #ivSign.
     * 
     * @return 
     */
    getSign() {
        return this.#ivSign;
    }

    /**
     * Setter für #ivPrimeFactorsMap.
     * 
     * @returns Map Primfaktorenmappe
     * @see #ivPrimeFactorsMap
     * @see getPrimeFactorsMap
     */
    #setPrimeFactorsMap(pvMap) {
        this.#ivPrimeFactorsMap = pvMap;
    }
   
    /**
     * Setter für #ivSign.
     * 
     * @see #ivSign
     * @see getSign
     */
    #setSign(pvSign) {
        this.#ivSign = pvSign;
    }
    
    /**
     * 🇩🇪 Liefert die Summe aller Potenzen.
     * 🇪🇳 Returns the sum of all powers.
     * 
     * @returns string 🇩🇪 Summe aller Potenzen. 🇪🇳 Sum of all powers.
     */
    toNumber() {
        const lcPrimeFactorsMap = this.getPrimeFactorsMap();
        const lcMapSize = lcPrimeFactorsMap.size;
        let lvResult = 0;
        if (lcMapSize > 0) {
            lvResult = 1;
            const lcPrimeFactorsDupels = lcPrimeFactorsMap.entries();
            for (const [lcKey, lcValue] of lcPrimeFactorsDupels) {
                if ((lcKey != 1) && (lcValue != 0)) {
                    const lcPower = lcKey ** lcValue;
                    lvResult *= lcPower;
                } 
            }
        }
        const lcSign = this.getSign();
        lvResult *= lcSign;
        
        return lvResult;
    }

    /**
     * 🇩🇪 Liefert eine Selbstbeschreibung dieser Instanz.
     * 🇪🇳 Returns a self description of this instance.
     * 
     * @returns string 🇩🇪 Selbstbeschreibung dieser Instanz. 🇪🇳 Self description of this instance.
     */
     toString() {
        const lcPrimeFactorsMap = this.getPrimeFactorsMap();
        const lcPrimeFactorsDupels = lcPrimeFactorsMap.entries();
        const lcPrimeFactorsArray = Array.from(lcPrimeFactorsDupels);
        const lcPrimeFactorsJson = JSON.stringify(lcPrimeFactorsArray);
        const lcSign = this.getSign();
        const lcResult = "PrimeFactoredInteger["
            + "sign=" + lcSign
            + "; primeFactorsMap=" + lcPrimeFactorsJson + "]";

        return lcResult;
    }

}