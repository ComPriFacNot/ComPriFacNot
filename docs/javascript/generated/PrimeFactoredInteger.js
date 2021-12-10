var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _PrimeFactoredInteger_instances, _PrimeFactoredInteger_ivComponentsMap, _PrimeFactoredInteger_ivSign, _PrimeFactoredInteger_setComponentsMap, _PrimeFactoredInteger_setSign;
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
        _PrimeFactoredInteger_instances.add(this);
        /**
         * :en: Components map (keys: 0, 1 or prime factor; values: exponent; on keys 0 or 1 always 1).
         * :de: Komponentenmappe (Keys: 0, 1 oder Primfaktor; Values: Exponenten; bei Keys 0 oder 1
         *      immer 1).
         *
         * @see getComponentsMap
         * @see #setComponentsMap
         * @type {Map<number, number>}
         */
        _PrimeFactoredInteger_ivComponentsMap.set(this, void 0);
        /**
         * :en: Sign: -1 (negative value), 0 (value 0) or 1 (positive value).
         * :de: Vorzeichen: -1 (bei negativem Wert), 0 (bei 0) oder 1 (bei positivem Wert).
         *
         * @type {number}
         */
        _PrimeFactoredInteger_ivSign.set(this, void 0);
        __classPrivateFieldGet(this, _PrimeFactoredInteger_instances, "m", _PrimeFactoredInteger_setComponentsMap).call(this, pvComponentsMap);
        let lvSign = pvSign;
        if (pvComponentsMap != null) {
            if (pvComponentsMap.has(0)) {
                lvSign = 0;
            }
        }
        __classPrivateFieldGet(this, _PrimeFactoredInteger_instances, "m", _PrimeFactoredInteger_setSign).call(this, lvSign);
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
     * Liefert die Komponenten als JSON.
     *
     * @returns {string} Komponenten als JSON
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
     * @returns {Map<number, number>} Primfaktorenmappe
     * @see #ivComponentsMap
     * @see #setComponentsMap
     */
    getComponentsMap() {
        return __classPrivateFieldGet(this, _PrimeFactoredInteger_ivComponentsMap, "f");
    }
    /**
     * Getter für #ivSign.
     *
     * @return {number}
     * @see #ivSign
     * @see #setSign
     */
    getSign() {
        return __classPrivateFieldGet(this, _PrimeFactoredInteger_ivSign, "f");
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
     * Liefert eine Serialisierung im Aufbau &lt;Vorzeichen&gt;&lt;Components&gt;.
     * &lt;Vorzeichen&gt;:  "-", "0" oder ""
     * &gt;Components&gt;: JSON-Stringify des Components-Map-Entries-Arrays
     *
     * @returns {string} Serialisierung
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
_PrimeFactoredInteger_ivComponentsMap = new WeakMap(), _PrimeFactoredInteger_ivSign = new WeakMap(), _PrimeFactoredInteger_instances = new WeakSet(), _PrimeFactoredInteger_setComponentsMap = function _PrimeFactoredInteger_setComponentsMap(pvMap) {
    __classPrivateFieldSet(this, _PrimeFactoredInteger_ivComponentsMap, pvMap, "f");
}, _PrimeFactoredInteger_setSign = function _PrimeFactoredInteger_setSign(pvSign) {
    __classPrivateFieldSet(this, _PrimeFactoredInteger_ivSign, pvSign, "f");
};
