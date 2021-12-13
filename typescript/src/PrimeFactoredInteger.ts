/**
 * en: Class PrimeFactoredInteger: Into prime factors split integer.
 * de: Klasse PrimeFactoredInteger: In Primfaktoren zerlegte ganze Zahl.
 * 
 * @author See git history
 * @version 1.4, 2021-12-10
 * @since 1.0, 2021-11-29
 */
class PrimeFactoredInteger {

    /**
     * Vergleicht zwei Instanzen.
     *
     * @param {PrimeFactoredInteger} pvFirst Erste Instanz
     * @param {PrimeFactoredInteger} pvSecond Zweite Instanz
     * @returns {boolean} Wahrheitswert, ob beide Instanzen gleich oder beide null sind
     */
    public static equals(pvFirst: PrimeFactoredInteger, pvSecond: PrimeFactoredInteger): boolean {
        /** @type {boolean} */
        let lvResult: boolean; // Rückgabewert
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
     * @param {string} pvSerialized Serialisierung
     * @returns {PrimeFactoredInteger} Neue Instanz
     */
    public static forSerialized(pvSerialized: string): PrimeFactoredInteger {
        /** @type {PrimeFactoredInteger} */
        let lvResult: PrimeFactoredInteger;
        if (pvSerialized == null) {
            lvResult = null;
        } else {
            const lcSerializedLength = pvSerialized.length;
            if (lcSerializedLength == 0) {
                throw "Deserialization error: Empty input";
            }
            const lcFirstChar = pvSerialized[0];
            /** @type {number} */
            let lvSign: number;
            /** @type {string} */
            let lvComponentsJson: string;
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
            /** @type {Array<[number, number]>} */
            const lcComponentsEntriesArray: Array<[number, number]> = JSON.parse(lvComponentsJson);
            const lcComponentsMap = new Map(lcComponentsEntriesArray);
            lvResult = new PrimeFactoredInteger(lcComponentsMap, lvSign);
        }
        
        return lvResult;
    }

    /**
     * :en: Components map (keys: 0, 1 or prime factor; values: exponent; on keys 0 or 1 always 1).
     * :de: Komponentenmappe (Keys: 0, 1 oder Primfaktor; Values: Exponenten; bei Keys 0 oder 1
     *      immer 1).
     * 
     * @see getComponentsMap
     * @see setComponentsMap
     * @type {Map<number, number>}
     */
    private ivComponentsMap: Map<number, number>;

    /**
     * :en: Sign: -1 (negative value), 0 (value 0) or 1 (positive value).
     * :de: Vorzeichen: -1 (bei negativem Wert), 0 (bei 0) oder 1 (bei positivem Wert).
     * 
     * @type {number}
     * @see getSign
     * @see setSign
     */
    private ivSign: number;

    /**
     * :en: Constructor.
     * :de: Konstruktor.
     * 
     * @param {Map<number, number} pvComponentsMap en: Components map; de: Komponentenmappe
     * @param {number} pvSign en: Sign; de: Vorzeichen
     */
    constructor(pvComponentsMap: Map<number, number>, pvSign: number = 1) {
        this.setComponentsMap(pvComponentsMap);
        let lvSign = pvSign;
        if (pvComponentsMap != null) {
            if (pvComponentsMap.has(0)) {
                lvSign = 0;
            }
        }
        this.setSign(lvSign);
    }
    
    /**
     * :en: Returns the components as JSON.
     * :de: Liefert die Komponenten als JSON.
     * 
     * @returns {string} Components as JSON
     */
    public getComponentsJson(): string {
        const lcComponentsMap = this.getComponentsMap();
        const lcComponentsEntries = lcComponentsMap.entries();
        const lcPrimeFactorsArray = Array.from(lcComponentsEntries);
        const lcResult = JSON.stringify(lcPrimeFactorsArray);
        
        return lcResult;
    }
    
    /**
     * :en: Setter for {@link ivComponentsMap}.
     * :de: Getter für {@link ivComponentsMap}.
     * 
     * @returns {Map<number, number>} Map of components
     * @see ivComponentsMap
     * @see setComponentsMap
     */
    public getComponentsMap(): Map<number, number> {
        return this.ivComponentsMap;
    }

    /**
     * :en: Setter for {@link ivSign}.
     * :de: Getter für {@link ivSign}.
     * 
     * @return {number} {@link ivSign}
     * @see ivSign
     * @see setSign
     */
    public getSign(): number {
        return this.ivSign;
    }

    /**
     * :en: Setter for {@link ivComponentsMap}.
     * :de: Setter für {@link ivComponentsMap}.
     * 
     * @param {Map<number, number>} pvMap Komponentenmappe
     * @see ivComponentsMap
     * @see getComponentsMap
     */
    private setComponentsMap(pvMap: Map<number, number>) {
        this.ivComponentsMap = pvMap;
    }
   
    /**
     * :en: Setter for {@link ivSign}.
     * :de: Setter für {@link ivSign}.
     * 
     * @param {number} pvSign {@link ivSign}
     * @see ivSign
     * @see getSign
     */
    private setSign(pvSign: number) {
        this.ivSign = pvSign;
    }
    
    /**
     * :en: Returns the sum of all powers.
     * :de: Liefert die Summe aller Potenzen.
     * 
     * @returns {number} en: Sum of all powers; de: Summe aller Potenzen.
     */
    public toNumber(): number {
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
     * :en: Returns a serialization containing &lt;Sign&gt;&lt;Components&gt;.
     * :de: Liefert eine Serialisierung im Aufbau &lt;Vorzeichen&gt;&lt;Komponenten&gt;.
     * 
     * &lt;Sign&gt;:  "-", "0" oder ""
     * 
     * &lt;Components&gt;: JSON-Stringify of the components
     * 
     * @returns {string} Serialization
     */
    public toSerialized(): string {
        const lcSign = this.getSign();
        const lcComponentsJson = this.getComponentsJson();
        const lcResult = ((lcSign == 0) ? "0" : (lcSign < 0) ? "-" : "") + lcComponentsJson;
        
        return lcResult;
    }

    /**
     * :en: Returns a self description of this instance.
     * :de: Liefert eine Selbstbeschreibung dieser Instanz.
     * 
     * @returns {string} en: Self description of this instance;
     *                   de: Selbstbeschreibung dieser Instanz
     */
     toString(): string {
        const lcSign = this.getSign();
        const lcComponentsJson = this.getComponentsJson();
        const lcResult = "PrimeFactoredInteger["
            + "sign=" + lcSign
            + "; components=" + lcComponentsJson + "]";

        return lcResult;
    }

}