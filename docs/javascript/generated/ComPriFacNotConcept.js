/**
 * :en: Class ComPriFacNotConcept: Underlying concept of ComPriFacNot.
 * :de: Klasse ComPriFacNotConcept: Zugrundeliegendes ComPriFacNot-Konzept.
 *
 * @author See git history
 * @version 1.3, 2021-12-13
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
     * @see setAliasDigits
     * @since 1.3, 2021-12-13
     */
    static getAliasDigits() {
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
    static getAliasDigitsJsonUrl() {
        return ComPriFacNotConcept.cvAliasDigitsJsonUrl;
    }
    /**
     * :en: Getter for {@link cvAliasDigitsMap}.
     * :de: Getter für {@link cvAliasDigitsMap}.
     *
     * @returns {Map<string, string>} {@link cvAliasDigitsMap}
     * @see cvAliasDigitsMap
     * @see setAliasDigitsMap
     * @since 1.3, 2021-12-13
     */
    static getAliasDigitsMap() {
        return ComPriFacNotConcept.cvAliasDigitsMap;
    }
    /**
     * :en: Getter for {@link cvAliasDigitsValues}.
     * :de: Getter für {@link cvAliasDigitsValues}.
     *
     * @returns {Array<string>} {@link cvAliasDigitsValues}
     * @see cvAliasDigitsValues
     * @see setAliasDigitsValues
     * @since 1.3, 2021-12-13
     */
    static getAliasDigitsValues() {
        return ComPriFacNotConcept.cvAliasDigitsValues;
    }
    /**
     * :en: Getter for {@link cvBasicDigits}.
     * :de: Getter für {@link cvBasicDigits}.
     *
     * @returns {string} {@link cvBasicDigits}
     * @see cvBasicDigits
     * @see setBasicDigits
     * @since 1.2, 2021-12-12
     */
    static getBasicDigits() {
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
    static getBasicDigitsJsonUrl() {
        return ComPriFacNotConcept.cvBasicDigitsJsonUrl;
    }
    /**
     * :en: Getter for {@link cvBasicDigitsMap}.
     * :de: Getter für {@link cvBasicDigitsMap}.
     *
     * @returns {Map<string, number>} {@link cvBasicDigitsMap}
     * @see cvBasicDigitsMap
     * @see setBasicDigitsMap
     * @since 1.2, 2021-12-12
     */
    static getBasicDigitsMap() {
        return ComPriFacNotConcept.cvBasicDigitsMap;
    }
    /**
     * :en: Getter for {@link cvBasicDigitsValues}.
     * :de: Getter für {@link cvBasicDigitsValues}.
     *
     * @returns {Array<number>} {@link cvBasicDigitsValues}
     * @see cvBasicDigitsValues
     * @see setBasicDigitsValues
     * @since 1.2, 2021-12-12
     */
    static getBasicDigitsValues() {
        return ComPriFacNotConcept.cvBasicDigitsValues;
    }
    /**
     * :en: Getter for {@link cvInitializationThrowable}.
     * :de: Getter für {@link cvInitializationThrowable}.
     *
     * @returns {any} {@link cvInitializationThrowable}
     * @see cvInitializationThrowable
     * @see setInitializationThrowable
     * @since 1.2, 2021-12-12
     */
    static getInitializationThrowable() {
        return ComPriFacNotConcept.cvInitializationThrowable;
    }
    /**
     * :en: Getter for {@link cvCurrentScriptSrc}.
     * :de: Getter für {@link cvCurrentScriptSrc}.
     *
     * @returns {string} {@link cvCurrentScriptSrc}
     * @see cvCurrentScriptSrc
     * @see setCurrentScriptSrc
     * @since 1.3, 2021-12-13
     */
    static getCurrentScriptSrc() {
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
            ComPriFacNotConcept.setInitializationThrowable(lcError);
            pvCallBack();
        }
        else {
            const lcSrc = lcCurrentScript.src;
            ComPriFacNotConcept.setCurrentScriptSrc(lcSrc); // must be saved before asynch call
            const lcBasicDigitsJsonUrl = ComPriFacNotConcept.getBasicDigitsJsonUrl();
            ComPriFacNotConcept.loadJson(lcBasicDigitsJsonUrl, function (pvBasicJsonContent) {
                // Basic digits JSON could be loaded successfully
                const lcBasicDigitsDupels = JSON.parse(pvBasicJsonContent);
                const lcBasicDigitsMap = new Map();
                const lcBasicDigitsArray = new Array();
                const lcBasicDigitsValues = new Array();
                let i = -1;
                for (const lcBasicDigitsDupel of lcBasicDigitsDupels) {
                    i++;
                    const lcBasicDigit = lcBasicDigitsDupel[0];
                    const lcBasicDigitValue = lcBasicDigitsDupel[1];
                    lcBasicDigitsMap.set(lcBasicDigit, lcBasicDigitValue);
                    lcBasicDigitsArray[i] = lcBasicDigit;
                    lcBasicDigitsValues[i] = lcBasicDigitValue;
                }
                const lcBasicDigitsString = lcBasicDigitsArray.join("");
                ComPriFacNotConcept.setBasicDigits(lcBasicDigitsString);
                ComPriFacNotConcept.setBasicDigitsValues(lcBasicDigitsValues);
                ComPriFacNotConcept.setBasicDigitsMap(lcBasicDigitsMap);
                const lcAliasDigitsJsonUrl = ComPriFacNotConcept.getAliasDigitsJsonUrl();
                ComPriFacNotConcept.loadJson(lcAliasDigitsJsonUrl, function (pvAliasJsonContent) {
                    // Alias digits JSON could be loaded successfully
                    const lcAliasDigitsDupels = JSON.parse(pvAliasJsonContent);
                    const lcAliasDigitsMap = new Map();
                    const lcAliasDigitsArray = new Array();
                    const lcAliasDigitsValues = new Array();
                    let i = -1;
                    for (const lcAliasDigitsDupel of lcAliasDigitsDupels) {
                        i++;
                        const lcAliasDigit = lcAliasDigitsDupel[0];
                        const lcAliasDigitValue = lcAliasDigitsDupel[1];
                        lcAliasDigitsMap.set(lcAliasDigit, lcAliasDigitValue);
                        lcAliasDigitsArray[i] = lcAliasDigit;
                        lcAliasDigitsValues[i] = lcAliasDigitValue;
                    }
                    const lcAliasDigitsString = lcAliasDigitsArray.join("");
                    ComPriFacNotConcept.setAliasDigits(lcAliasDigitsString);
                    ComPriFacNotConcept.setAliasDigitsValues(lcAliasDigitsValues);
                    ComPriFacNotConcept.setAliasDigitsMap(lcAliasDigitsMap);
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
        const lcRequest = new XMLHttpRequest();
        lcRequest.onreadystatechange = function () {
            try {
                const lcStatus = this.status;
                if (this.readyState == XMLHttpRequest.DONE) {
                    if (lcStatus == 200) {
                        const lcResponseText = this.responseText; // JSON with comments (.jsonc)
                        const lcFirstBracket = lcResponseText.indexOf("["); // Start of data
                        const lcJson = lcResponseText.substring(lcFirstBracket);
                        pvOnSuccess(lcJson);
                    }
                    else {
                        const lcMessage = "Initialization error: Load of JSON " + pvJsonUrl +
                            " failed: HTTP-Status expected: 200; " +
                            "HTTP-Status actual: " + lcStatus;
                        const lcError = new Error(lcMessage);
                        ComPriFacNotConcept.setInitializationThrowable(lcError);
                        pvOnError();
                    }
                }
            }
            catch (lcError) {
                ComPriFacNotConcept.setInitializationThrowable(lcError);
                pvOnError();
            }
        };
        const lcCurrentScriptSrc = ComPriFacNotConcept.getCurrentScriptSrc();
        const lcUrl = lcCurrentScriptSrc + "/../" + pvJsonUrl;
        try {
            lcRequest.open("GET", lcUrl, true);
            lcRequest.send();
        }
        catch (lcError) {
            ComPriFacNotConcept.setInitializationThrowable(lcError);
            pvOnError();
        }
    }
    /**
     * :en: Setter for {@link #cvAliasDigits}.
     * :de: Setter für {@link #cvAliasDigits}.
     *
     * @param {string} pvAliasDigits {@link #cvAliasDigits}
     * @see cvAliasDigits
     * @see getAliasDigits
     * @since 1.3, 2021-12-13
     */
    static setAliasDigits(pvAliasDigits) {
        ComPriFacNotConcept.cvAliasDigits = pvAliasDigits;
    }
    /**
     * :en: Getter for {@link cvAliasDigitsMap}.
     * :de: Getter für {@link cvAliasDigitsMap}.
     *
     * @param {Map<string, string>} pvAliasDigitsMap {@link cvAliasDigitsMap}
     * @see cvAliasDigitsMap
     * @see getAliasDigitsMap
     * @since 1.3, 2021-12-13
     */
    static setAliasDigitsMap(pvAliasDigitsMap) {
        ComPriFacNotConcept.cvAliasDigitsMap = pvAliasDigitsMap;
    }
    /**
     * :en: Setter for {@link cvAliasDigitsValues}.
     * :de: Setter für {@link cvAliasDigitsValues}.
     *
     * @param {Array<string>} pvAliasDigitsValues {@link cvAliasDigitsValues}
     * @see cvAliasDigitsValues
     * @see getAliasDigitsValues
     * @since 1.3, 2021-12-13
     */
    static setAliasDigitsValues(pvAliasDigitsValues) {
        ComPriFacNotConcept.cvAliasDigitsValues = pvAliasDigitsValues;
    }
    /**
     * :en: Setter for {@link #cvBasicDigits}.
     * :de: Setter für {@link #cvBasicDigits}.
     *
     * @param {string} pvBasicDigits {@link #cvBasicDigits}
     * @see cvBasicDigits
     * @see getBasicDigits
     * @since 1.2, 2021-12-12
     */
    static setBasicDigits(pvBasicDigits) {
        ComPriFacNotConcept.cvBasicDigits = pvBasicDigits;
    }
    /**
     * :en: Getter for {@link cvBasicDigitsMap}.
     * :de: Getter für {@link cvBasicDigitsMap}.
     *
     * @param {Map<string, number>} pvBasicDigitsMap {@link cvBasicDigitsMap}
     * @see cvBasicDigitsMap
     * @see getBasicDigitsMap
     * @since 1.2, 2021-12-12
     */
    static setBasicDigitsMap(pvBasicDigitsMap) {
        ComPriFacNotConcept.cvBasicDigitsMap = pvBasicDigitsMap;
    }
    /**
    * :en: Setter for {@link cvBasicDigitsValues}.
    * :de: Setter für {@link cvBasicDigitsValues}.
    *
    * @param {Array<number>} pvBasicDigitsValues {@link cvBasicDigitsValues}
    * @see cvBasicDigitsValues
    * @see getBasicDigitsValues
    * @since 1.2, 2021-12-12
    */
    static setBasicDigitsValues(pvBasicDigitsValues) {
        ComPriFacNotConcept.cvBasicDigitsValues = pvBasicDigitsValues;
    }
    /**
     * :en: Setter for {@link cvCurrentScriptSrc}.
     * :de: Setter für {@link cvCurrentScriptSrc}.
     *
     * @param {string} pvCurrentScriptSrc {@link cvCurrentScriptSrc}
     * @see cvCurrentScriptSrc
     * @see getCurrentScriptSrc
     * @since 1.3, 2021-12-13
     */
    static setCurrentScriptSrc(pvCurrentScriptSrc) {
        ComPriFacNotConcept.cvCurrentScriptSrc = pvCurrentScriptSrc;
    }
    /**
     * :en: Setter for {@link cvInitializationThrowable}.
     * :de: Setter für {@link cvInitializationThrowable}.
     *
     * @param {any} pvInitializationThrowable {@link cvInitializationThrowable}
     * @see cvInitializationThrowable
     * @see getInitializationThrowable
     * @since 1.2, 2021-12-12
     */
    static setInitializationThrowable(pvInitializationThrowable) {
        ComPriFacNotConcept.cvInitializationThrowable = pvInitializationThrowable;
    }
}
/**
 * :en: URL to JSON file for alis digits.
 * :de: URL zur JSON-Datei mit den Aliasziffern.
 *
 * @see getAliasDigitsJsonUrl
 * @since 1.3, 2021-12-13
 */
ComPriFacNotConcept.cvAliasDigitsJsonUrl = "../../alias-digits.jsonc";
/**
 * :en: URL to JSON file for basic digits.
 * :de: URL zur JSON-Datei mit den Grundziffern.
 *
 * @see getBasicDigitsJsonUrl
 */
ComPriFacNotConcept.cvBasicDigitsJsonUrl = "../../basic-digits.jsonc";
/**
 * :en: Error/exception in initialization. The call-back-function must evaluate this field
 *      first.
 * :de: Fehler/Ausnahme bei der Initialisierung. Die Rückruffunktion muss dieses Feld zuerst
 *      auswerten.
 *
 * @see getInitializationThrowable
 * @see setInitializationThrowable
 * @since 1.1, 2021-12-12
 */
ComPriFacNotConcept.cvInitializationThrowable = null;
