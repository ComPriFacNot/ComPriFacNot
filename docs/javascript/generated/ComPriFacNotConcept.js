/**
 * :en: Class ComPriFacNotConcept: Underlying concept of ComPriFacNot.
 * :de: Klasse ComPriFacNotConcept: Zugrundeliegendes ComPriFacNot-Konzept.
 *
 * @author See git history
 * @version 1.5, 2021-12-16
 * @since 1.0, 2021-12-10
 */
class ComPriFacNotConcept {
    /**
     * en: Constructor.
     * de: Konstruktor.
     */
    constructor() { }
    /**
     * :en: Getter for {@link cvAliasDigits}.
     * :de: Getter für {@link cvAliasDigits}.
     *
     * @returns {string} {@link cvAliasDigits}
     * @see cvAliasDigits
     * @see aliasDigits
     * @since 1.3, 2021-12-13
     */
    static get aliasDigits() {
        return ComPriFacNotConcept.cvAliasDigits;
    }
    /**
     * :en: Getter for {@link cvAliasDigitsJsonUrl}.
     * :de: Getter für {@link cvAliasDigitsJsonUrl}.
     *
     * @returns {string} {@link cvAliasDigitsJsonUrl}
     * @see cvAliasDigitsJsonUrl
     * @since 1.3, 2021-12-13
     */
    static get aliasDigitsJsonUrl() {
        return ComPriFacNotConcept.cvAliasDigitsJsonUrl;
    }
    /**
     * :en: Getter for {@link cvAliasDigitsMap}.
     * :de: Getter für {@link cvAliasDigitsMap}.
     *
     * @returns {Map<string, string>} {@link cvAliasDigitsMap}
     * @see cvAliasDigitsMap
     * @see aliasDigitsMap
     * @since 1.3, 2021-12-13
     */
    static get aliasDigitsMap() {
        return ComPriFacNotConcept.cvAliasDigitsMap;
    }
    /**
     * :en: Getter for {@link cvAliasDigitsValues}.
     * :de: Getter für {@link cvAliasDigitsValues}.
     *
     * @returns {Array<string>} {@link cvAliasDigitsValues}
     * @see cvAliasDigitsValues
     * @see aliasDigitsValues
     * @since 1.3, 2021-12-13
     */
    static get aliasDigitsValues() {
        return ComPriFacNotConcept.cvAliasDigitsValues;
    }
    /**
     * :en: Getter for {@link cvBasicDigits}.
     * :de: Getter für {@link cvBasicDigits}.
     *
     * @returns {string} {@link cvBasicDigits}
     * @see cvBasicDigits
     * @see basicDigits
     * @since 1.2, 2021-12-12
     */
    static get basicDigits() {
        return ComPriFacNotConcept.cvBasicDigits;
    }
    /**
     * :en: Getter for {@link cvBasicDigitsJsonUrl}.
     * :de: Getter für {@link cvBasicDigitsJsonUrl}.
     *
     * @returns {string} {@link cvBasicDigitsJsonUrl}
     * @see cvBasicDigitsJsonUrl
     * @since 1.2, 2021-12-12
     */
    static get basicDigitsJsonUrl() {
        return ComPriFacNotConcept.cvBasicDigitsJsonUrl;
    }
    /**
     * :en: Getter for {@link cvBasicDigitsMap}.
     * :de: Getter für {@link cvBasicDigitsMap}.
     *
     * @returns {Map<string, number>} {@link cvBasicDigitsMap}
     * @see cvBasicDigitsMap
     * @see basicDigitsMap
     * @since 1.2, 2021-12-12
     */
    static get basicDigitsMap() {
        return ComPriFacNotConcept.cvBasicDigitsMap;
    }
    /**
     * :en: Getter for {@link cvBasicDigitsValues}.
     * :de: Getter für {@link cvBasicDigitsValues}.
     *
     * @returns {Array<number>} {@link cvBasicDigitsValues}
     * @see cvBasicDigitsValues
     * @see basicDigitsValues
     * @since 1.2, 2021-12-12
     */
    static get basicDigitsValues() {
        return ComPriFacNotConcept.cvBasicDigitsValues;
    }
    /**
     * :en: Getter for {@link cvBasicDigitsValuesMap}.
     * :de: Getter für {@link cvBasicDigitsValuesMap}.
     *
     * @returns {Map<number, string>} {@link cvBasicDigitsValuesMap}
     * @see cvBasicDigitsValuesMap
     * @see basicDigitsValuesMap
     * @since 1.5, 2021-12-16
     */
    static get basicDigitsValuesMap() {
        return ComPriFacNotConcept.cvBasicDigitsValuesMap;
    }
    /**
     * :en: Getter for {@link cvExponentSupers}.
     * :de: Getter für {@link cvExponentSupers}.
     *
     * @returns {string} {@link cvExponentSupers}
     * @see cvExponentSupers
     * @since 1.5, 2021-12-16
     */
    static get exponentSupers() {
        return ComPriFacNotConcept.cvExponentSupers;
    }
    /**
     * :en: Getter for {@link cvInitializationThrowable}.
     * :de: Getter für {@link cvInitializationThrowable}.
     *
     * @returns {any} {@link cvInitializationThrowable}
     * @see cvInitializationThrowable
     * @see initializationThrowable
     * @since 1.2, 2021-12-12
     */
    static get initializationThrowable() {
        return ComPriFacNotConcept.cvInitializationThrowable;
    }
    /**
     * :en: Getter for {@link cvCurrentScriptSrc}.
     * :de: Getter für {@link cvCurrentScriptSrc}.
     *
     * @returns {string} {@link cvCurrentScriptSrc}
     * @see cvCurrentScriptSrc
     * @see currentScriptSrc
     * @since 1.3, 2021-12-13
     */
    static get currentScriptSrc() {
        return ComPriFacNotConcept.cvCurrentScriptSrc;
    }
    /**
     * :en: Initializes this class and calls a call-back-function afterwards.
     * :de: Initialisiert diese Klasse und ruft anschließend eine Call-Back-Funktion auf.
     *
     * @param {() => any} pvCallBack Call-back-function
     */
    static initialize(pvCallBack) {
        const lcCurrentScript = document.currentScript;
        if (!(lcCurrentScript instanceof HTMLScriptElement)) {
            const lcMessage = "Initialization error: currentScript not instanceof HTMLScriptElement!";
            const lcError = new Error(lcMessage);
            ComPriFacNotConcept.initializationThrowable = lcError;
            pvCallBack();
        }
        else {
            const lcSrc = lcCurrentScript.src;
            ComPriFacNotConcept.currentScriptSrc = lcSrc; // must be saved before asynch call
            const lcBasicDigitsJsonUrl = ComPriFacNotConcept.basicDigitsJsonUrl;
            ComPriFacNotConcept.loadJson(lcBasicDigitsJsonUrl, function (pvBasicJsonContent) {
                // Basic digits JSON could be loaded successfully
                const lcBasicDigitsDupels = JSON.parse(pvBasicJsonContent);
                const lcBasicDigitsMap = new Map();
                const lcBasicDigitsArray = new Array();
                const lcBasicDigitsValues = new Array();
                const lcBasicDigitsValuesMap = new Map();
                let i = -1;
                for (const lcBasicDigitsDupel of lcBasicDigitsDupels) {
                    i++;
                    const lcBasicDigit = lcBasicDigitsDupel[0];
                    const lcBasicDigitValue = lcBasicDigitsDupel[1];
                    lcBasicDigitsMap.set(lcBasicDigit, lcBasicDigitValue);
                    lcBasicDigitsValuesMap.set(lcBasicDigitValue, lcBasicDigit);
                    lcBasicDigitsArray[i] = lcBasicDigit;
                    lcBasicDigitsValues[i] = lcBasicDigitValue;
                }
                const lcBasicDigitsString = lcBasicDigitsArray.join("");
                ComPriFacNotConcept.basicDigits = lcBasicDigitsString;
                ComPriFacNotConcept.basicDigitsValues = lcBasicDigitsValues;
                ComPriFacNotConcept.basicDigitsMap = lcBasicDigitsMap;
                ComPriFacNotConcept.basicDigitsValuesMap = lcBasicDigitsValuesMap;
                const lcAliasDigitsJsonUrl = ComPriFacNotConcept.aliasDigitsJsonUrl;
                ComPriFacNotConcept.loadJson(lcAliasDigitsJsonUrl, function (pvAliasJsonContent) {
                    // Alias digits JSON could be loaded successfully
                    const lcAliasDigitsDupels = JSON.parse(pvAliasJsonContent);
                    const lcAliasDigitsMap = new Map();
                    const lcAliasDigitsArray = new Array();
                    const lcAliasDigitsValues = new Array();
                    const lcAliasDigitsValuesMap = new Map();
                    let i = -1;
                    for (const lcAliasDigitsDupel of lcAliasDigitsDupels) {
                        i++;
                        const lcAliasDigit = lcAliasDigitsDupel[0];
                        const lcAliasDigitValue = lcAliasDigitsDupel[1];
                        lcAliasDigitsMap.set(lcAliasDigit, lcAliasDigitValue);
                        lcAliasDigitsValuesMap.set(lcAliasDigitValue, lcAliasDigit);
                        lcAliasDigitsArray[i] = lcAliasDigit;
                        lcAliasDigitsValues[i] = lcAliasDigitValue;
                    }
                    const lcAliasDigitsString = lcAliasDigitsArray.join("");
                    ComPriFacNotConcept.aliasDigits = lcAliasDigitsString;
                    ComPriFacNotConcept.aliasDigitsValues = lcAliasDigitsValues;
                    ComPriFacNotConcept.aliasDigitsMap = lcAliasDigitsMap;
                    /* ComPriFacNotConcept.aliasDigitsValuesMap = lcAliasDigitsValuesMap;
                        // TODO for future use (?) */
                    pvCallBack();
                }, function () {
                    // Alias digits JSON could not be loaded successfully
                    pvCallBack();
                });
            }, function () {
                // Basic digits JSON could not be loaded successfully
                pvCallBack();
            });
        }
    }
    /**
     * :en: Loads JSON (asynch) and calls call-back-function.
     * :de: Lädt JSON (asynchron) und ruft Call-Back-Funktion.
     *
     * @param {string} pvJsonUrl URL for JSON
     * @param {(pvJsonContent: string) => any} pvOnSuccess Call-back-function on success
     * @param {() => any} pvOnError Call-back-function on error
     * @since 1.3, 2021-12-13
     */
    static loadJson(pvJsonUrl, pvOnSuccess, pvOnError) {
        const lcCurrentScriptSrc = ComPriFacNotConcept.currentScriptSrc;
        const lcUrl = lcCurrentScriptSrc + "/../" + pvJsonUrl;
        const lcRequest = new Request(lcUrl);
        const lcFetchPromise = fetch(lcRequest);
        lcFetchPromise.then(pvResponse => {
            try {
                const lcResponseOk = pvResponse.ok;
                if (lcResponseOk) {
                    const lcResponseTextPromise = pvResponse.text(); // JSON with comments (.jsonc)
                    lcResponseTextPromise.then(pvResponseText => {
                        const lcFirstBracket = pvResponseText.indexOf("["); // Start of data
                        const lcJson = pvResponseText.substring(lcFirstBracket);
                        pvOnSuccess(lcJson);
                    });
                }
                else {
                    const lcStatus = pvResponse.status;
                    const lcMessage = "Initialization error: Load of JSON " + pvJsonUrl +
                        " failed: HTTP-Status expected: 200; " +
                        "HTTP-Status actual: " + lcStatus;
                    const lcError = new Error(lcMessage);
                    ComPriFacNotConcept.initializationThrowable = lcError;
                    pvOnError();
                }
            }
            catch (lcError) {
                ComPriFacNotConcept.initializationThrowable = lcError;
                pvOnError();
            }
        }, (pvReason) => {
            ComPriFacNotConcept.initializationThrowable = pvReason;
            pvOnError();
        });
    }
    /**
     * :en: Setter for {@link #cvAliasDigits}.
     * :de: Setter für {@link #cvAliasDigits}.
     *
     * @param {string} pvAliasDigits {@link #cvAliasDigits}
     * @see cvAliasDigits
     * @see aliasDigits
     * @since 1.3, 2021-12-13
     */
    static set aliasDigits(pvAliasDigits) {
        ComPriFacNotConcept.cvAliasDigits = pvAliasDigits;
    }
    /**
     * :en: Getter for {@link cvAliasDigitsMap}.
     * :de: Getter für {@link cvAliasDigitsMap}.
     *
     * @param {Map<string, string>} pvAliasDigitsMap {@link cvAliasDigitsMap}
     * @see cvAliasDigitsMap
     * @see aliasDigitsMap
     * @since 1.3, 2021-12-13
     */
    static set aliasDigitsMap(pvAliasDigitsMap) {
        ComPriFacNotConcept.cvAliasDigitsMap = pvAliasDigitsMap;
    }
    /**
     * :en: Setter for {@link cvAliasDigitsValues}.
     * :de: Setter für {@link cvAliasDigitsValues}.
     *
     * @param {Array<string>} pvAliasDigitsValues {@link cvAliasDigitsValues}
     * @see cvAliasDigitsValues
     * @see aliasDigitsValues
     * @since 1.3, 2021-12-13
     */
    static set aliasDigitsValues(pvAliasDigitsValues) {
        ComPriFacNotConcept.cvAliasDigitsValues = pvAliasDigitsValues;
    }
    /**
     * :en: Setter for {@link #cvBasicDigits}.
     * :de: Setter für {@link #cvBasicDigits}.
     *
     * @param {string} pvBasicDigits {@link #cvBasicDigits}
     * @see cvBasicDigits
     * @see basicDigits
     * @since 1.2, 2021-12-12
     */
    static set basicDigits(pvBasicDigits) {
        ComPriFacNotConcept.cvBasicDigits = pvBasicDigits;
    }
    /**
     * :en: Getter for {@link cvBasicDigitsMap}.
     * :de: Getter für {@link cvBasicDigitsMap}.
     *
     * @param {Map<string, number>} pvBasicDigitsMap {@link cvBasicDigitsMap}
     * @see cvBasicDigitsMap
     * @see basicDigitsMap
     * @since 1.2, 2021-12-12
     */
    static set basicDigitsMap(pvBasicDigitsMap) {
        ComPriFacNotConcept.cvBasicDigitsMap = pvBasicDigitsMap;
    }
    /**
    * :en: Setter for {@link cvBasicDigitsValues}.
    * :de: Setter für {@link cvBasicDigitsValues}.
    *
    * @param {Array<number>} pvBasicDigitsValues {@link cvBasicDigitsValues}
    * @see cvBasicDigitsValues
    * @see basicDigitsValues
    * @since 1.2, 2021-12-12
    */
    static set basicDigitsValues(pvBasicDigitsValues) {
        ComPriFacNotConcept.cvBasicDigitsValues = pvBasicDigitsValues;
    }
    /**
     * :en: Setter for {@link cvBasicDigitsValuesMap}.
     * :de: Setter für {@link cvBasicDigitsValuesMap}.
     *
     * @param {Map<number, string>} pvBasicDigitsValuesMap {@link cvBasicDigitsValuesMap}
     * @see cvBasicDigitsValuesMap
     * @see basicDigitsValuesMap
     * @since 1.5, 2021-12-16
     */
    static set basicDigitsValuesMap(pvBasicDigitsValuesMap) {
        ComPriFacNotConcept.cvBasicDigitsValuesMap = pvBasicDigitsValuesMap;
    }
    /**
     * :en: Setter for {@link cvCurrentScriptSrc}.
     * :de: Setter für {@link cvCurrentScriptSrc}.
     *
     * @param {string} pvCurrentScriptSrc {@link cvCurrentScriptSrc}
     * @see cvCurrentScriptSrc
     * @see currentScriptSrc
     * @since 1.3, 2021-12-13
     */
    static set currentScriptSrc(pvCurrentScriptSrc) {
        ComPriFacNotConcept.cvCurrentScriptSrc = pvCurrentScriptSrc;
    }
    /**
     * :en: Setter for {@link cvInitializationThrowable}.
     * :de: Setter für {@link cvInitializationThrowable}.
     *
     * @param {any} pvInitializationThrowable {@link cvInitializationThrowable}
     * @see cvInitializationThrowable
     * @see initializationThrowable
     * @since 1.2, 2021-12-12
     */
    static set initializationThrowable(pvInitializationThrowable) {
        ComPriFacNotConcept.cvInitializationThrowable = pvInitializationThrowable;
    }
}
/**
 * :en: URL to JSON file for alis digits.
 * :de: URL zur JSON-Datei mit den Aliasziffern.
 *
 * @see aliasDigitsJsonUrl
 * @since 1.3, 2021-12-13
 */
ComPriFacNotConcept.cvAliasDigitsJsonUrl = "../../alias-digits.jsonc";
/**
 * :en: URL to JSON file for basic digits.
 * :de: URL zur JSON-Datei mit den Grundziffern.
 *
 * @see basicDigitsJsonUrl
 */
ComPriFacNotConcept.cvBasicDigitsJsonUrl = "../../basic-digits.jsonc";
/**
 * :en: Super scripted chars for exponents.
 * :de: Hochgestellte Zeichen für Exponenten.
 *
 * @see exponentSupers
 * @since 1.5, 2021-12-16
 */
ComPriFacNotConcept.cvExponentSupers = "⁰¹²³⁴⁵⁶⁷⁸⁹";
/**
 * :en: Error/exception in initialization. The call-back-function must evaluate this field
 *      first.
 * :de: Fehler/Ausnahme bei der Initialisierung. Die Rückruffunktion muss dieses Feld zuerst
 *      auswerten.
 *
 * @see initializationThrowable
 * @since 1.1, 2021-12-12
 */
ComPriFacNotConcept.cvInitializationThrowable = null;
