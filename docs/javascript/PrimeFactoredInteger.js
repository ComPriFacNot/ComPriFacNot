/**
 * 🇩🇪 Klasse PrimeFactoredInteger: In Primfaktoren zerlegte ganze Zahl.
 * 🇪🇳 Class PrimeFactoredInteger: Into prime factors split integer.
 * 
 * @author See git history
 * @version 1.2, 2021-12-01
 * @since 1.0, 2021-11-29
 */
class PrimeFactoredInteger {

    /**
     * Vergleicht zwei Instanzen.
     *
     * @returns boolean Wahrheitswert, ob beide Instanzen gleich oder beide null sind
     */
    static equals(pvFirst, pvSecond) {
        let lvResult; // Rückgabewert
        if (pvFirst == null) {
            lvResult = pvSecond == null;
        } else if (pvSecond == null) {
            lvResult = false;
        } else {
            const lcFirstSerialized = pvFirst.toSerialized();
            const lcSecondSerialized = pvSecond.toSerialized();
            lvResult = lcFirstSerialized == lcSecondSerialized;
        }
        
        return lvResult;
    }

    /**
     * Factory-Methode zur Instanzerzeugung aus einer Serialisierung (toSerialized()).
     *
     * @param pvSerialized String Serialisierung
     */
    static forSerialized(pvSerialized) {
        let lvResult;
        if (pvSerialized == null) {
            lvResult = null;
        } else {
            const lcSerializedLength = pvSerialized.length;
            if (lcSerializedLength == 0) {
                throw "Deserialization error: Empty input";
            }
            const lcFirstChar = pvSerialized[0];
            let lvSign;
            let lvComponentsJson;
            switch (lcFirstChar) {
                case "-":
                    lvSign = -1;
                    lvComponentsJson = pvSerialized.substring(1);
                    break;
                case "0":
                    lvSign = 0;
                    lvComponentsJson = pvSerialized.substring(1);
                    break;
                default:
                    lvSign = 1;
                    lvComponentsJson = pvSerialized;
                    break;
            }
            const lcComponentsEntriesArray = JSON.parse(lvComponentsJson);
            const lcComponentsMap = new Map(lcComponentsEntriesArray);
            lvResult = new PrimeFactoredInteger(lcComponentsMap, lvSign);
        }
        
        return lvResult;
    }

    /**
     * 🇩🇪 Komponentenmappe (Keys: 0, 1 oder Primfaktor; Values: Exponenten; bei Keys 0 oder 1
     * immer 1).
     * 🇪🇳 Components map (keys: 0, 1 or prime factor; values: exponent; on keys 0 or 1 always 1)
     * 
     * @see getComponentsMap
     * @see #setComponentsMap
     */
    #ivComponentsMap;

    /**
     * 🇩🇪 Vorzeichen: -1 (bei negativem Wert), 0 (bei 0) oder 1 (bei positivem Wert).
     * 🇪🇳 Sign: -1 (negative value), 0 (value 0) or 1 (positive value)
     */
    #ivSign;

    /**
     * 🇩🇪 Konstruktor.
     * 🇪🇳 Constructor.
     * 
     * @param Map pvComponentsMap 🇩🇪 Komponentenmappe 🇪🇳 Components map
     * @param number pvSign 🇩🇪 Vorzeichen 🇪🇳 Sign
     */
    constructor(pvComponentsMap, pvSign = 1) {
        this.#setComponentsMap(pvComponentsMap);
        let lvSign = pvSign;
        if (pvComponentsMap != null) {
            if (pvComponentsMap.has(0)) {
                lvSign = 0;
            }
        }
        this.#setSign(lvSign);
    }
    
    /**
     * Liefert die Komponenten als JSON.
     */
    getComponentsJson() {
        const lcComponentsMap = this.getComponentsMap();
        const lcComponentsEntries = lcComponentsMap.entries();
        const lcPrimeFactorsArray = Array.from(lcComponentsEntries);
        const lcResult = JSON.stringify(lcPrimeFactorsArray);
        
        return lcResult;
    }
    
    /**
     * Getter für #ivComponentsMap.
     * 
     * @returns Map Primfaktorenmappe
     * @see #ivComponentsMap
     * @see #setComponentsMap
     */
    getComponentsMap() {
        return this.#ivComponentsMap;
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
     * Setter für #ivComponentsMap.
     * 
     * @returns Map Primfaktorenmappe
     * @see #ivComponentsMap
     * @see getComponentsMap
     */
    #setComponentsMap(pvMap) {
        this.#ivComponentsMap = pvMap;
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
        const lcComponentsMap = this.getComponentsMap();
        const lcMapSize = lcComponentsMap.size;
        let lvResult = 0;
        if (lcMapSize > 0) {
            lvResult = 1;
            const lcComponentsEntries = lcComponentsMap.entries();
            for (const [lcKey, lcValue] of lcComponentsEntries) {
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
     * Liefert eine Serialisierung im Aufbau &lt;Vorzeichen&gt;&lt;Components&gt;.
     * &lt;Vorzeichen&gt;:  "-", "0" oder ""
     * &gt;Components&gt;: JSON-Stringify des Components-Map-Entries-Arrays
     */
    toSerialized() {
        const lcSign = this.getSign();
        const lcComponentsJson = this.getComponentsJson();
        const lcResult = ((lcSign == 0) ? "0" : (lcSign < 0) ? "-" : "") + lcComponentsJson;
        
        return lcResult;
    }

    /**
     * 🇩🇪 Liefert eine Selbstbeschreibung dieser Instanz.
     * 🇪🇳 Returns a self description of this instance.
     * 
     * @returns string 🇩🇪 Selbstbeschreibung dieser Instanz. 🇪🇳 Self description of this instance.
     */
     toString() {
        const lcSign = this.getSign();
        const lcComponentsJson = this.getComponentsJson();
        const lcResult = "PrimeFactoredInteger["
            + "sign=" + lcSign
            + "; components=" + lcComponentsJson + "]";

        return lcResult;
    }

}