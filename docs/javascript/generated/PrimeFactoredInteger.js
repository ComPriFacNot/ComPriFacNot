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
     * :en: Constructor.
     * :de: Konstruktor.
     *
     * @param {Map<number, number} pvComponentsMap en: Components map; de: Komponentenmappe
     * @param {number} pvSign en: Sign; de: Vorzeichen
     */
    constructor(pvComponentsMap, pvSign = 1) {
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
     * Vergleicht zwei Instanzen.
     *
     * @param {PrimeFactoredInteger} pvFirst Erste Instanz
     * @param {PrimeFactoredInteger} pvSecond Zweite Instanz
     * @returns {boolean} Wahrheitswert, ob beide Instanzen gleich oder beide null sind
     */
    static equals(pvFirst, pvSecond) {
        /** @type {boolean} */
        let lvResult; // Rückgabewert
        if (pvFirst == null) {
            lvResult = pvSecond == null;
        }
        else if (pvSecond == null) {
            lvResult = false;
        }
        else {
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
    static forSerialized(pvSerialized) {
        /** @type {PrimeFactoredInteger} */
        let lvResult;
        if (pvSerialized == null) {
            lvResult = null;
        }
        else {
            const lcSerializedLength = pvSerialized.length;
            if (lcSerializedLength == 0) {
                throw "Deserialization error: Empty input";
            }
            const lcFirstChar = pvSerialized[0];
            /** @type {number} */
            let lvSign;
            /** @type {string} */
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
            /** @type {Array<[number, number]>} */
            const lcComponentsEntriesArray = JSON.parse(lvComponentsJson);
            const lcComponentsMap = new Map(lcComponentsEntriesArray);
            lvResult = new PrimeFactoredInteger(lcComponentsMap, lvSign);
        }
        return lvResult;
    }
    /**
     * :en: Returns the components as JSON.
     * :de: Liefert die Komponenten als JSON.
     *
     * @returns {string} Components as JSON
     */
    getComponentsJson() {
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
    getComponentsMap() {
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
    getSign() {
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
    setComponentsMap(pvMap) {
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
    setSign(pvSign) {
        this.ivSign = pvSign;
    }
    /**
     * :en: Returns the sum of all powers.
     * :de: Liefert die Summe aller Potenzen.
     *
     * @returns {number} en: Sum of all powers; de: Summe aller Potenzen.
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
     * :en: Returns a serialization containing &lt;Sign&gt;&lt;Components&gt;.
     * :de: Liefert eine Serialisierung im Aufbau &lt;Vorzeichen&gt;&lt;Komponenten&gt;.
     *
     * &lt;Sign&gt;:  "-", "0" oder ""
     *
     * &lt;Components&gt;: JSON-Stringify of the components
     *
     * @returns {string} Serialization
     */
    toSerialized() {
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
    toString() {
        const lcSign = this.getSign();
        const lcComponentsJson = this.getComponentsJson();
        const lcResult = "PrimeFactoredInteger["
            + "sign=" + lcSign
            + "; components=" + lcComponentsJson + "]";
        return lcResult;
    }
}
