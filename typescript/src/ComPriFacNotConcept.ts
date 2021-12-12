/**
 * :en: Class ComPriFacNotConcept: Underlying concept of ComPriFacNot.
 * :de: Klasse ComPriFacNotConcept: Zugrundeliegendes ComPriFacNot-Konzept.
 * 
 * @author See git history
 * @version 1.1, 2021-12-12
 * @since 1.0, 2021-12-10
 */
 class ComPriFacNotConcept {
    
    /**
     * :en: URL to JSON file for basic digits.
     * :de: URL zur JSON-Datei mit den Grundziffern.
     */
    private static BASIC_DIGITS_JSON_URL = "../../basic-digits.jsonc"; 

    /**
     * :en: Basic digits.
     * :de: Basisziffern.
     */
    public static BASIC_DIGITS: string; // = "012357BDHJNdVbfrlS...";

    /**
     * :en: Array of numbers of basic digits.
     * :de: Zuordnungsreihe Basisziffern zu Zahlen.
     */
    public static BASIC_DIGITS_VALUES: Array<number>; /*
        = [0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, ...]; */

    /**
     * :en: Content from basic-digits.jsonc; keys: chars; values: numbers.
     * :de: Inhalt von basic-digits.jsonc; Schlüssel: Zeichen; Werte: Zahlen.
     * 
     * @type Map<string, number>
     */
    public static BASIC_DIGITS_MAP: Map<string, number>;

    /**
     * :en: Error/exception in initialization. The call-back-function must evaluate this field
     *      first.
     * :de: Fehler/Ausnahme bei der Initialisierung. Die Rückruffunktion muss dieses Feld zuerst
     *      auswerten.
     * 
     * @since 1.1, 2021-12-12
     */
    public static INITIALIZATION_THROWABLE: any = null;

    /**
     * :en: Initializes this class and calls a call-back-function afterwards.
     * :de: Initialisiert diese Klasse und ruft anschließend eine Call-Back-Funktion auf.
     * 
     * @param {any} pvCallBack Call-back-function
     */
    public static initialize(pvCallBack: any) {
        try {
            const lcRequest = new XMLHttpRequest();
            lcRequest.onreadystatechange = function() {
                try {
                    const lcStatus = this.status;
                    if (this.readyState == XMLHttpRequest.DONE) {
                        if (lcStatus == 200) {
                            const lcResponseText = this.responseText; // JSON with comments (.jsonc)
                            const lcFirstBracket = lcResponseText.indexOf("["); // Start of data
                            const lcJson = lcResponseText.substring(lcFirstBracket);
                            const lcBasicDigitsDupels: Array<Array<any>> = JSON.parse(lcJson);
                            const lcBasicDigitsMap: Map<string, number> = new Map<string, number>();
                            const lcBasicDigitsArray = new Array<string>();
                            const lcBasicDigitsValues = new Array<number>();
                            let i = -1;
                            for (const lcBasicDigitsDupel of lcBasicDigitsDupels) {
                                i++;
                                const lcBasicDigit: string = lcBasicDigitsDupel[0];
                                const lcBasicDigitValue: number = lcBasicDigitsDupel[1];
                                lcBasicDigitsMap.set(lcBasicDigit, lcBasicDigitValue);
                                lcBasicDigitsArray[i] = lcBasicDigit;
                                lcBasicDigitsValues[i] = lcBasicDigitValue;
                            }
                            const lcBasicDigitsString = lcBasicDigitsArray.join("");
                            ComPriFacNotConcept.BASIC_DIGITS = lcBasicDigitsString;
                            ComPriFacNotConcept.BASIC_DIGITS_VALUES = lcBasicDigitsValues;
                            ComPriFacNotConcept.BASIC_DIGITS_MAP = lcBasicDigitsMap;
                            // window.alert(lcBasicDigitsString);
                        } else {
                            const lcMessage = "Initialization error: HTTP-Status expected: 200; " +
                                "HTTP-Status actual: " + lcStatus;
                            const lcError = new Error(lcMessage);
                            ComPriFacNotConcept.INITIALIZATION_THROWABLE = lcError;
                        }
                        pvCallBack();
                    }
                } catch (lcError: any) {
                    ComPriFacNotConcept.INITIALIZATION_THROWABLE = lcError;
                    pvCallBack();
                }
            };
            const lcCurrentScript = document.currentScript;
            if (lcCurrentScript instanceof HTMLScriptElement) {
                const lcSrc = lcCurrentScript.src;
                const lcUrl = lcSrc + "/../" + ComPriFacNotConcept.BASIC_DIGITS_JSON_URL;
                lcRequest.open("GET", lcUrl, true);
                lcRequest.send();
            }
        } catch (lcError: any) {
            ComPriFacNotConcept.INITIALIZATION_THROWABLE = lcError;
            pvCallBack();
        }
    }

    /**
     * en: Constructor.
     * de: Konstruktor.
     */
    constructor() {}    

}