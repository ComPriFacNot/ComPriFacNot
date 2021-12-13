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
     * :en: Basic digits.
     * :de: Basisziffern.
     * 
     * @see getBasicDigits
     * @see setBasicDigits
     */
    private static cvBasicDigits: string; // = "012357BDHJNdVbfrlS...";

    /**
     * :en: URL to JSON file for basic digits.
     * :de: URL zur JSON-Datei mit den Grundziffern.
     * 
     * @see getBasicDigitsJsonUrl
     */
    private static cvBasicDigitsJsonUrl = "../../basic-digits.jsonc"; 

    /**
     * :en: Array of numbers of basic digits.
     * :de: Zuordnungsreihe Basisziffern zu Zahlen.
     * 
     * @see getBasicDigitsValues
     * @see setBasicDigitsValues
     */
    private static cvBasicDigitsValues: Array<number>; /*
        = [0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, ...]; */

    /**
     * :en: Content from basic-digits.jsonc; keys: chars; values: numbers.
     * :de: Inhalt von basic-digits.jsonc; Schlüssel: Zeichen; Werte: Zahlen.
     * 
     * @type Map<string, number>
     * @see getBasicDigitsMap
     * @see setBasicDigitsMap
     */
    private static cvBasicDigitsMap: Map<string, number>;

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
    private static cvInitializationThrowable: any = null;

    /**
     * :en: Getter for {@link cvBasicDigits}.
     * :de: Getter für {@link cvBasicDigits}.
     * 
     * @returns {string} {@link cvBasicDigits}
     * @see cvBasicDigits
     * @see setBasicDigits
     * @since 1.2, 2021-12-12
     */
    public static getBasicDigits(): string {
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
    private static getBasicDigitsJsonUrl(): string {
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
    public static getBasicDigitsMap(): Map<string, number> {
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
    public static getBasicDigitsValues(): Array<number> {
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
     public static getInitializationThrowable(): any {
        return ComPriFacNotConcept.cvInitializationThrowable;
    }

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
                            ComPriFacNotConcept.setBasicDigits(lcBasicDigitsString);
                            ComPriFacNotConcept.setBasicDigitsValues(lcBasicDigitsValues);
                            ComPriFacNotConcept.setBasicDigitsMap(lcBasicDigitsMap);
                            // window.alert(lcBasicDigitsString);
                        } else {
                            const lcMessage = "Initialization error: HTTP-Status expected: 200; " +
                                "HTTP-Status actual: " + lcStatus;
                            const lcError = new Error(lcMessage);
                            ComPriFacNotConcept.setInitializationThrowable(lcError);
                        }
                        pvCallBack();
                    }
                } catch (lcError: any) {
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
        } catch (lcError: any) {
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
    private static setBasicDigits(pvBasicDigits: string) {
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
    private static setBasicDigitsMap(pvBasicDigitsMap: Map<string, number>) {
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
    private static setBasicDigitsValues(pvBasicDigitsValues: Array<number>) {
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
    private static setInitializationThrowable(pvInitializationThrowable: any) {
        ComPriFacNotConcept.cvInitializationThrowable = pvInitializationThrowable;
    }
    
    /**
     * en: Constructor.
     * de: Konstruktor.
     */
    constructor() {}    

}