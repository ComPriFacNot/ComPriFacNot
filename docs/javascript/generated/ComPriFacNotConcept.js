/**
 * :en: Class ComPriFacNotConcept: Underlying concept of ComPriFacNot.
 * :de: Klasse ComPriFacNotConcept: Zugrundeliegendes ComPriFacNot-Konzept.
 *
 * @author See git history
 * @version 1.0, 2021-12-11
 * @since 1.0, 2021-12-10
 */
class ComPriFacNotConcept {
    /**
     * en: Constructor.
     * de: Konstruktor.
     */
    constructor() { }
    /**
     * :en: Initializes this class and calls a call-back-function afterwards.
     * :de: Initialisiert diese Klasse und ruft anschließend eine Call-Back-Funktion auf.
     *
     * @param {any} pvCallBack Call-back-function
     */
    static initialize(pvCallBack) {
        const lcRequest = new XMLHttpRequest();
        lcRequest.onreadystatechange = function () {
            const lcStatus = this.status;
            if ((this.readyState == 4) && ((lcStatus == 200) || (lcStatus == 0))) {
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
                ComPriFacNotConcept.BASIC_DIGITS = lcBasicDigitsString;
                ComPriFacNotConcept.BASIC_DIGITS_VALUES = lcBasicDigitsValues;
                ComPriFacNotConcept.BASIC_DIGITS_MAP = lcBasicDigitsMap;
                pvCallBack();
                // window.alert(lcBasicDigitsString);
            }
        };
        const lcCurrentScript = document.currentScript;
        if (lcCurrentScript instanceof HTMLScriptElement) {
            const lcSrc = lcCurrentScript.src;
            const lcUrl = lcSrc + "/../" + ComPriFacNotConcept.BASIC_DIGITS_JSON_URL;
            lcRequest.open("GET", lcUrl, true);
            lcRequest.send();
        }
    }
}
/**
 * :en: URL to JSON file for basic digits.
 * :de: URL zur JSON-Datei mit den Grundziffern.
 */
ComPriFacNotConcept.BASIC_DIGITS_JSON_URL = "../../basic-digits.jsonc";
