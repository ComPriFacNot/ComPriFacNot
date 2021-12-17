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
     * :en: Alias digits.
     * :de: Aliasziffern.
     * 
     * @see aliasDigits
     * @since 1.3, 2021-12-13
     */
    private static cvAliasDigits: string; // = "4689AĀȀCEFGghKkMmPpQTtWXxYyZz@ØⅬÐↁↂↇↈ";

    /**
     * :en: URL to JSON file for alis digits.
     * :de: URL zur JSON-Datei mit den Aliasziffern.
     * 
     * @see aliasDigitsJsonUrl
     * @since 1.3, 2021-12-13
     */
     private static cvAliasDigitsJsonUrl = "../../alias-digits.jsonc"; 

    /**
     * :en: Content from alias-digits.jsonc; keys: chars; values: underlying basic integers.
     * :de: Inhalt von alias-digits.jsonc; Schlüssel: Zeichen; Werte: Zugrundeliegende
     *      Basisganzzahl.
     * 
     * @type Map<string, string>
     * @see aliasDigitsMap
     * @since 1.3, 2021-12-13
     */
     private static cvAliasDigitsMap: Map<string, string>;

    /**
     * :en: Array of underlying basic integer of alias digits.
     * :de: Reihe der zugrundeliegenden Basisganzzahlen von Aliasziffern.
     * 
     * @see aliasDigitsValues
     * @since 1.3, 2021-12-13
     */
     private static cvAliasDigitsValues: Array<string>; /*
     = ["2²", "32", "2³", "3²", "52", "2⁸", "2⁹", "32²", "72", "53", "2³⁰", "5⁹2⁹", "5²2²", ...]

     /**
     * :en: Basic digits.
     * :de: Basisziffern.
     * 
     * @see basicDigits
     */
    private static cvBasicDigits: string; /* = "012357BDHJNdVbfrlS..."; */

    /**
     * :en: URL to JSON file for basic digits.
     * :de: URL zur JSON-Datei mit den Grundziffern.
     * 
     * @see basicDigitsJsonUrl
     */
    private static cvBasicDigitsJsonUrl = "../../basic-digits.jsonc"; 

    /**
     * :en: Content from basic-digits.jsonc; keys: chars; values: numbers; reverse map of
     *      {@link cvBasicDigitsValuesMap}.
     * :de: Inhalt von basic-digits.jsonc; Schlüssel: Zeichen; Werte: Zahlen. Umkehrmappe zu
     *      {@link cvBasicDigitsValuesMap}.
     * 
     * @type Map<string, number>
     * @see basicDigitsMap
     */
     private static cvBasicDigitsMap: Map<string, number>;

    /**
     * :en: Array of numbers of basic digits.
     * :de: Reihe der Werte der Basisziffern.
     * 
     * @see basicDigitsValues
     */
    private static cvBasicDigitsValues: Array<number>; /*
        = [0, 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, ...]; */

    /**
     * :en: Map from primary number to basic digit; reverse map of {@link cvBasicDigitsMap}.
     * :de: Mappe von Primfaktor zu Grundziffer. Umkehrmappe zu {@link cvBasicDigitsMap}.
     * 
     * @see basicDigitsValuesMap
     * @since 1.5, 2021-12-16
     */
    private static cvBasicDigitsValuesMap: Map<number, string>;

    /**
     * :en: Source (URL) of the current script.
     * :de: Quelle (URL) dieses Skripts.
     * 
     * @see currentScriptSrc
     * @since 1.3, 2021-12-13
     */
    private static cvCurrentScriptSrc: string;

    /**
     * :en: Super scripted chars for exponents.
     * :de: Hochgestellte Zeichen für Exponenten.
     * 
     * @see exponentSupers
     * @since 1.5, 2021-12-16
     */
    private static cvExponentSupers = "⁰¹²³⁴⁵⁶⁷⁸⁹";

    /**
     * :en: Error/exception in initialization. The call-back-function must evaluate this field
     *      first.
     * :de: Fehler/Ausnahme bei der Initialisierung. Die Rückruffunktion muss dieses Feld zuerst
     *      auswerten.
     * 
     * @see initializationThrowable
     * @since 1.1, 2021-12-12
     */
    private static cvInitializationThrowable: any = null;

    /**
     * :en: Getter for {@link cvAliasDigits}.
     * :de: Getter für {@link cvAliasDigits}.
     * 
     * @returns {string} {@link cvAliasDigits}
     * @see cvAliasDigits
     * @see aliasDigits
     * @since 1.3, 2021-12-13
     */
    public static get aliasDigits(): string {
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
    private static get aliasDigitsJsonUrl(): string {
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
    public static get aliasDigitsMap(): Map<string, string> {
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
    public static get aliasDigitsValues(): Array<string> {
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
    public static get basicDigits(): string {
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
    private static get basicDigitsJsonUrl(): string {
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
    public static get basicDigitsMap(): Map<string, number> {
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
    public static get basicDigitsValues(): Array<number> {
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
    public static get basicDigitsValuesMap(): Map<number, string> {
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
    public static get exponentSupers(): string {
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
    public static get initializationThrowable(): any {
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
    private static get currentScriptSrc(): string {
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
            ComPriFacNotConcept.initializationThrowable = lcError;
            pvCallBack();
        } else {
            const lcSrc = lcCurrentScript.src;
            ComPriFacNotConcept.currentScriptSrc = lcSrc; // must be saved before asynch call
            const lcBasicDigitsJsonUrl = ComPriFacNotConcept.basicDigitsJsonUrl;
            ComPriFacNotConcept.loadJson(lcBasicDigitsJsonUrl, 
                function(pvBasicJsonContent: string) {
                    // Basic digits JSON could be loaded successfully
                    const lcBasicDigitsDupels: Array<Array<any>> = JSON.parse(pvBasicJsonContent);
                    const lcBasicDigitsMap: Map<string, number> = new Map<string, number>();
                    const lcBasicDigitsArray = new Array<string>();
                    const lcBasicDigitsValues = new Array<number>();
                    const lcBasicDigitsValuesMap: Map<number, string> = new Map<number, string>();
                    let i = -1;
                    for (const lcBasicDigitsDupel of lcBasicDigitsDupels) {
                        i++;
                        const lcBasicDigit: string = lcBasicDigitsDupel[0];
                        const lcBasicDigitValue: number = lcBasicDigitsDupel[1];
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
                    ComPriFacNotConcept.loadJson(lcAliasDigitsJsonUrl,
                        function(pvAliasJsonContent: string) {
                            // Alias digits JSON could be loaded successfully
                            const lcAliasDigitsDupels: Array<Array<any>> = JSON.parse(
                                pvAliasJsonContent);
                            const lcAliasDigitsMap: Map<string, string> = new Map<string, string>();
                            const lcAliasDigitsArray = new Array<string>();
                            const lcAliasDigitsValues = new Array<string>();
                            const lcAliasDigitsValuesMap: Map<string, string> = new Map<string, string>();
                            let i = -1;
                            for (const lcAliasDigitsDupel of lcAliasDigitsDupels) {
                                i++;
                                const lcAliasDigit: string = lcAliasDigitsDupel[0];
                                const lcAliasDigitValue: string = lcAliasDigitsDupel[1];
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
                } else {
                    const lcStatus = pvResponse.status;
                    const lcMessage = "Initialization error: Load of JSON " + pvJsonUrl +
                        " failed: HTTP-Status expected: 200; " +
                        "HTTP-Status actual: " + lcStatus;
                    const lcError = new Error(lcMessage);
                    ComPriFacNotConcept.initializationThrowable = lcError;
                    pvOnError();
                }
            } catch (lcError: any) {
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
     private static set aliasDigits(pvAliasDigits: string) {
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
     private static set aliasDigitsMap(pvAliasDigitsMap: Map<string, string>) {
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
     private static set aliasDigitsValues(pvAliasDigitsValues: Array<string>) {
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
    private static set basicDigits(pvBasicDigits: string) {
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
    private static set basicDigitsMap(pvBasicDigitsMap: Map<string, number>) {
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
    private static set basicDigitsValues(pvBasicDigitsValues: Array<number>) {
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
    public static set basicDigitsValuesMap(pvBasicDigitsValuesMap: Map<number, string>) {
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
    private static set currentScriptSrc(pvCurrentScriptSrc: string) {
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
    private static set initializationThrowable(pvInitializationThrowable: any) {
        ComPriFacNotConcept.cvInitializationThrowable = pvInitializationThrowable;
    }
    
    /**
     * en: Constructor.
     * de: Konstruktor.
     */
    constructor() {}    

}