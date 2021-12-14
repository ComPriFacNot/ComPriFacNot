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
     * :en: Alias digits.
     * :de: Aliasziffern.
     * 
     * @see getAliasDigits
     * @see setAliasDigits
     * @since 1.3, 2021-12-13
     */
    private static cvAliasDigits: string; // = "4689AĀȀCEFGghKkMmPpQTtWXxYyZz@ØⅬÐↁↂↇↈ";

    /**
     * :en: Basic digits.
     * :de: Basisziffern.
     * 
     * @see getBasicDigits
     * @see setBasicDigits
     */
    private static cvBasicDigits: string; // = "012357BDHJNdVbfrlS...";

    /**
     * :en: URL to JSON file for alis digits.
     * :de: URL zur JSON-Datei mit den Aliasziffern.
     * 
     * @see getAliasDigitsJsonUrl
     * @since 1.3, 2021-12-13
     */
    private static cvAliasDigitsJsonUrl = "../../alias-digits.jsonc"; 

    /**
     * :en: URL to JSON file for basic digits.
     * :de: URL zur JSON-Datei mit den Grundziffern.
     * 
     * @see getBasicDigitsJsonUrl
     */
    private static cvBasicDigitsJsonUrl = "../../basic-digits.jsonc"; 

    /**
     * :en: Array of underlying basic integer of alias digits.
     * :de: Reihe der zugrundeliegenden Basisganzzahlen von Aliasziffern.
     * 
     * @see getAliasDigitsValues
     * @see setAliasDigitsValues
     * @since 1.3, 2021-12-13
     */
    private static cvAliasDigitsValues: Array<string>; /*
        = ["2²", "32", "2³", "3²", "52", "2⁸", "2⁹", "32²", "72", "53", "2³⁰", "5⁹2⁹", "5²2²", ...]
 
    /**
     * :en: Array of numbers of basic digits.
     * :de: Reihe der Werte der Basisziffern.
     * 
     * @see getBasicDigitsValues
     * @see setBasicDigitsValues
     */
    private static cvBasicDigitsValues: Array<number>; /*
        = [0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, ...]; */

    /**
     * :en: Content from alias-digits.jsonc; keys: chars; values: underlying basic integers.
     * :de: Inhalt von alias-digits.jsonc; Schlüssel: Zeichen; Werte: Zugrundeliegende
     *      Basisganzzahl.
     * 
     * @type Map<string, string>
     * @see getAliasDigitsMap
     * @see setAliasDigitsMap
     * @since 1.3, 2021-12-13
     */
    private static cvAliasDigitsMap: Map<string, string>;

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
     * :en: Source (URL) of the current script.
     * :de: Quelle (URL) dieses Skripts.
     * 
     * @see getCurrentScriptSrc
     * @see setCurrentScriptSrc
     * @since 1.3, 2021-12-13
     */
    private static cvCurrentScriptSrc: string;

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
     * :en: Getter for {@link cvAliasDigits}.
     * :de: Getter für {@link cvAliasDigits}.
     * 
     * @returns {string} {@link cvAliasDigits}
     * @see cvAliasDigits
     * @see setAliasDigits
     * @since 1.3, 2021-12-13
     */
    public static getAliasDigits(): string {
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
    private static getAliasDigitsJsonUrl(): string {
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
    public static getAliasDigitsMap(): Map<string, string> {
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
    public static getAliasDigitsValues(): Array<string> {
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
     * :en: Getter for {@link cvCurrentScriptSrc}.
     * :de: Getter für {@link cvCurrentScriptSrc}.
     * 
     * @returns {string} {@link cvCurrentScriptSrc}
     * @see cvCurrentScriptSrc
     * @see setCurrentScriptSrc
     * @since 1.3, 2021-12-13
     */
    private static getCurrentScriptSrc(): string {
        return ComPriFacNotConcept.cvCurrentScriptSrc;
    }

    /**
     * :en: Initializes this class and calls a call-back-function afterwards.
     * :de: Initialisiert diese Klasse und ruft anschließend eine Call-Back-Funktion auf.
     * 
     * @param {() => any} pvCallBack Call-back-function
     */
    public static initialize(pvCallBack: () => any) {
        const lcCurrentScript = document.currentScript;
        if (!(lcCurrentScript instanceof HTMLScriptElement)) {
            const lcMessage =
                "Initialization error: currentScript not instanceof HTMLScriptElement!";
            const lcError = new Error(lcMessage);
            ComPriFacNotConcept.setInitializationThrowable(lcError);
            pvCallBack();
        } else {
            const lcSrc = lcCurrentScript.src;
            ComPriFacNotConcept.setCurrentScriptSrc(lcSrc); // must be saved before asynch call
            const lcBasicDigitsJsonUrl = ComPriFacNotConcept.getBasicDigitsJsonUrl();
            ComPriFacNotConcept.loadJson(lcBasicDigitsJsonUrl, 
                function(pvBasicJsonContent: string) {
                    // Basic digits JSON could be loaded successfully
                    const lcBasicDigitsDupels: Array<Array<any>> = JSON.parse(pvBasicJsonContent);
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

                    const lcAliasDigitsJsonUrl = ComPriFacNotConcept.getAliasDigitsJsonUrl();
                    ComPriFacNotConcept.loadJson(lcAliasDigitsJsonUrl,
                        function(pvAliasJsonContent: string) {
                            // Alias digits JSON could be loaded successfully
                            const lcAliasDigitsDupels: Array<Array<any>> = JSON.parse(
                                pvAliasJsonContent);
                            const lcAliasDigitsMap: Map<string, string> = new Map<string, string>();
                            const lcAliasDigitsArray = new Array<string>();
                            const lcAliasDigitsValues = new Array<string>();
                            let i = -1;
                            for (const lcAliasDigitsDupel of lcAliasDigitsDupels) {
                                i++;
                                const lcAliasDigit: string = lcAliasDigitsDupel[0];
                                const lcAliasDigitValue: string = lcAliasDigitsDupel[1];
                                lcAliasDigitsMap.set(lcAliasDigit, lcAliasDigitValue);
                                lcAliasDigitsArray[i] = lcAliasDigit;
                                lcAliasDigitsValues[i] = lcAliasDigitValue;
                            }
                            const lcAliasDigitsString = lcAliasDigitsArray.join("");
                            ComPriFacNotConcept.setAliasDigits(lcAliasDigitsString);
                            ComPriFacNotConcept.setAliasDigitsValues(lcAliasDigitsValues);
                            ComPriFacNotConcept.setAliasDigitsMap(lcAliasDigitsMap);
                            pvCallBack();
                        }, 
                        function() {
                            // Alias digits JSON could not be loaded successfully
                            pvCallBack();
                        });
                }, 
                function() {
                    // Basic digits JSON could not be loaded successfully
                    pvCallBack();
                }
            );
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
    private static loadJson(pvJsonUrl: string, pvOnSuccess: (pvJsonContent: string) => any, 
            pvOnError: () => any) {
        const lcRequest = new XMLHttpRequest();
        lcRequest.onreadystatechange = function() {
            try {
                const lcStatus = this.status;
                if (this.readyState == XMLHttpRequest.DONE) {
                    if (lcStatus == 200) {
                        const lcResponseText = this.responseText; // JSON with comments (.jsonc)
                        const lcFirstBracket = lcResponseText.indexOf("["); // Start of data
                        const lcJson = lcResponseText.substring(lcFirstBracket);
                        pvOnSuccess(lcJson);
                    } else {
                        const lcMessage = "Initialization error: Load of JSON " + pvJsonUrl +
                            " failed: HTTP-Status expected: 200; " +
                            "HTTP-Status actual: " + lcStatus;
                        const lcError = new Error(lcMessage);
                        ComPriFacNotConcept.setInitializationThrowable(lcError);
                        pvOnError();
                    }
                }
            } catch (lcError: any) {
                ComPriFacNotConcept.setInitializationThrowable(lcError);
                pvOnError();
            }
        }
        const lcCurrentScriptSrc = ComPriFacNotConcept.getCurrentScriptSrc();
        const lcUrl = lcCurrentScriptSrc + "/../" + pvJsonUrl;
        try {
            lcRequest.open("GET", lcUrl, true);
            lcRequest.send();
        } catch (lcError: any) {
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
     private static setAliasDigits(pvAliasDigits: string) {
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
     private static setAliasDigitsMap(pvAliasDigitsMap: Map<string, string>) {
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
     private static setAliasDigitsValues(pvAliasDigitsValues: Array<string>) {
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
     * :en: Setter for {@link cvCurrentScriptSrc}.
     * :de: Setter für {@link cvCurrentScriptSrc}.
     * 
     * @param {string} pvCurrentScriptSrc {@link cvCurrentScriptSrc}
     * @see cvCurrentScriptSrc
     * @see getCurrentScriptSrc
     * @since 1.3, 2021-12-13
     */
    private static setCurrentScriptSrc(pvCurrentScriptSrc: string) {
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
    private static setInitializationThrowable(pvInitializationThrowable: any) {
        ComPriFacNotConcept.cvInitializationThrowable = pvInitializationThrowable;
    }
    
    /**
     * en: Constructor.
     * de: Konstruktor.
     */
    constructor() {}    

}