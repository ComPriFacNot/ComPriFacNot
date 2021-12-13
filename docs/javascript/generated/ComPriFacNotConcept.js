/**
 * :en: Class ComPriFacNotConcept: Underlying concept of ComPriFacNot.
 * :de: Klasse ComPriFacNotConcept: Zugrundeliegendes ComPriFacNot-Konzept.
 *
 * @author See git history
 * @version 1.2, 2021-12-12
 * @since 1.0, 2021-12-10
 */
class ComPriFacNotConcept {
    /**
     * en: Constructor.
     * de: Konstruktor.
     */
    constructor() { }
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
     * :en: Initializes this class and calls a call-back-function afterwards.
     * :de: Initialisiert diese Klasse und ruft anschließend eine Call-Back-Funktion auf.
     *
     * @param {any} pvCallBack Call-back-function
     */
    static initialize(pvCallBack) {
        try {
            const lcRequest = new XMLHttpRequest();
            lcRequest.onreadystatechange = function () {
                try {
                    const lcStatus = this.status;
                    if (this.readyState == XMLHttpRequest.DONE) {
                        if (lcStatus == 200) {
                            const lcResponseText = this.responseText; // JSON with comments (.jsonc)
                            const lcFirstBracket = lcResponseText.indexOf("["); // Start of data
                            const lcJson = lcResponseText.substring(lcFirstBracket);
                            const lcBasicDigitsDupels = JSON.parse(lcJson);
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
                            // window.alert(lcBasicDigitsString);
                        }
                        else {
                            const lcMessage = "Initialization error: HTTP-Status expected: 200; " +
                                "HTTP-Status actual: " + lcStatus;
                            const lcError = new Error(lcMessage);
                            ComPriFacNotConcept.setInitializationThrowable(lcError);
                        }
                        pvCallBack();
                    }
                }
                catch (lcError) {
                    ComPriFacNotConcept.setInitializationThrowable(lcError);
                    pvCallBack();
                }
            };
            const lcCurrentScript = document.currentScript;
            if (lcCurrentScript instanceof HTMLScriptElement) {
                const lcSrc = lcCurrentScript.src;
                const lcBasicDigitsJsonUrl = ComPriFacNotConcept.getBasicDigitsJsonUrl();
                const lcUrl = lcSrc + "/../" + lcBasicDigitsJsonUrl;
                lcRequest.open("GET", lcUrl, true);
                lcRequest.send();
            }
        }
        catch (lcError) {
            ComPriFacNotConcept.setInitializationThrowable(lcError);
            pvCallBack();
        }
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
