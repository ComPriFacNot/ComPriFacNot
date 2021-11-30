/**
 * 🇩🇪 Klasse PrimeFactoredInteger: In Primfaktoren zerlegte ganze Zahl.
 * 🇪🇳 Class PrimeFactoredInteger: Into prime factors split integer.
 * 
 * @author See git history
 * @version 1.0, 2021-11-30
 * @since 1.0, 2021-11-29
 */
class PrimeFactoredInteger {
    #ivPrimeFactorsMap; // Primfaktorenmappe

    /**
     * 🇩🇪 Konstruktor.
     * 🇪🇳 Constructor.
     * 
     * @param Map primeFactorsMap Mappe der Primfaktoren
     */
    constructor(pvPrimeFactorsMap) {
        this.#ivPrimeFactorsMap = pvPrimeFactorsMap;
    }

    /**
     * Getter für ivPrimeFactorsMap.
     * 
     * @returns Map Primfaktorenmappe
     */
    getPrimeFactorsMap() {
        return this.#ivPrimeFactorsMap;
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
        const lcResult = "PrimeFactoredInteger[primeFactorsMap: " + lcPrimeFactorsJson + "]";

        return lcResult;
    }

}