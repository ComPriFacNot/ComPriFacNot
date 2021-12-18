/**
 * :en: JavaScript for page PrimeFactoredIntegerTest.htm.
 * :de: JavaScript für Seite PrimeFactoredIntegerTest.htm.
 * 
 * @author See git history
 * @version 2.0, 2021-12-18
 * @since 1.0, 2021-11-29
 */

"use strict";

const FORM_TEST_CASES_ID = "formTestCases";
const FORMS = document.forms;
const FORM_TEST_CASES_ELEMENT = FORMS.namedItem(FORM_TEST_CASES_ID);
const INPUT_ID = "inputComPriFacNotInteger";
const INPUT_ELEMENT: HTMLInputElement = getInputElementById(INPUT_ID);
const INPUT_UNPARSED_NAME = "Integer";
const DOCUMENT_LOCATION = document.location;
const QUERY_STRING = DOCUMENT_LOCATION.search;
const QUERY_PARAMS = (QUERY_STRING == null)
    ? null : new URLSearchParams(QUERY_STRING.substring(1)); // "?" abschneiden
const QUERY_PARAM_UNPARSED = (QUERY_PARAMS == null) ? null : QUERY_PARAMS.get(INPUT_UNPARSED_NAME);
const OUTPUT_ID = "divOutput";
const STATUS_BAR_ID = "divStatusBar";
const STATUS_BAR_ELEMENT = document.getElementById(STATUS_BAR_ID);
const MAKRON_ID = "spanMakron";
const MAKRON_ELEMENT = document.getElementById(MAKRON_ID);
MAKRON_ELEMENT.onclick = onTemplateClick;
const INVERSE_ID = "thInverse";
const INVERSE_ELEMENT = document.getElementById(INVERSE_ID);
INVERSE_ELEMENT.onclick = onInverseClick;
const TEST_CASE_ID_NAME = "TEST_CASE_ID";

for (let i = 0; i < 10; i++) {
    const lcSuperId = "spanSuper" + i;
    const lcSuperElement = document.getElementById(lcSuperId);
    lcSuperElement.onclick = onTemplateClick;
}

/**
 * :en: Formats a throwable (error or exception) to HTML output.
 * :de: Formatiert einen Fehler oder Ausnahme zur HTML-Ausgabe.
 * 
 * @param {any} pvThrowable Error or exception
 * @returns {string} HTML output
 * @since 1.5, 2021-12-11
 * @param pvError Error
 */
function formatThrowable(pvThrowable: any): string {
    let lvResult: string;
    if (pvThrowable instanceof Error) {
        const lcMessage = pvThrowable.message;
        const lcStack = pvThrowable.stack;
        lvResult = "<ul><li>message: " + lcMessage + "</li><li>stack: <pre>" +
            lcStack + "</pre></li></ul>";
    } else { // plain text
        lvResult = pvThrowable;
    }

    return lvResult;
}

/**
 * :en: Returns a HTMLInputElement by ID.
 * :de: Liefert ein HTMLInputElement anhand der ID.
 * 
 * @param {string} pvId
 * @returns {HTMLInputElement}
 * @since 1.4, 2021-12-10
 */
function getInputElementById(pvId: string): HTMLInputElement {
    const lcElement = document.getElementById(pvId);
    const lcResult = (lcElement instanceof HTMLInputElement) ? lcElement : null;

    return lcResult;
}

/**
 * Liefert den Text in die Statusleiste.
 * 
 * @returns {string} Text in die Statusleiste
 */
function getStatus(): string {
    const lcStatus = STATUS_BAR_ELEMENT.innerText;

    return lcStatus;
}

/**
 * Ereignisbehandler, wenn die Kopie in die Zwischenablage fehlgeschlagen war.
 */
function onCopyFailed() {
    setStatus("Copy to clipboard failed.");
}

/**
 * Ereignisbehandler, wenn die Kopie in die Zwischenablage erfolgreich war.
 */
function onCopySucceeded() {
    const lcStatus = getStatus();
    const lcSuperChar = lcStatus[11];
    setStatus("Char \"" + lcSuperChar + "\" copied to clipboard.");
}

/**
 * Ereignisbehandler, wenn auf die Invers-Zelle geklickt wird.
 */
function onInverseClick() {
    const lcElements = FORM_TEST_CASES_ELEMENT.elements;
    for (const lcChild of lcElements) {
        if (lcChild instanceof HTMLInputElement) {
            const lcChecked = lcChild.checked;
            lcChild.checked = !lcChecked;
        }
    }
}

/**
 * Ereignisbehandler, wenn auf eine Kopiervorlage geklickt wurde.
 */
function onTemplateClick() {
    const lcInnerText = this.innerText;
    const lcTemplateChar = lcInnerText[0];
    const lcInputOldValue = INPUT_ELEMENT.value;
    const lcInputNewValue = lcInputOldValue + lcTemplateChar;
    INPUT_ELEMENT.value = lcInputNewValue;
    const lcClipboard = navigator.clipboard;
    const lcPromise = lcClipboard.writeText(lcTemplateChar);
    setStatus("Copy char \"" + lcTemplateChar + "\" to clipboard ...");
    lcPromise.then(onCopySucceeded, onCopyFailed);
}

/**
 * :en: Event handler for click on cell in column input.
 * :de: Ereignisbehandler für Klick auf Zelle in Spalte Input.
 * 
 * @param {MouseEvent} pvMouseEvent Mausereignis
 * @listens MouseEvent
 */
function onTestCaseInputClick(pvMouseEvent: MouseEvent) {
    const lcEventTarget = pvMouseEvent.target;
    const lcTestCaseInputElement: HTMLTableCellElement
        = (lcEventTarget instanceof HTMLTableCellElement) ? lcEventTarget : null; // = this
    if (lcTestCaseInputElement != null) {
        const lcPreTarget = lcTestCaseInputElement.previousSibling;
        if (lcPreTarget instanceof HTMLTableCellElement) {
            const lcTestCaseIdElement = lcPreTarget;
            const lcTestCaseId = lcTestCaseIdElement.innerText;
            const lcTestCaseIdUriEncoded = encodeURIComponent(lcTestCaseId);
            const lcPathname = DOCUMENT_LOCATION.pathname;
            const lcNewUrl = lcPathname + "?" + TEST_CASE_ID_NAME + "=" + lcTestCaseIdUriEncoded;
            DOCUMENT_LOCATION.href = lcNewUrl;
        }
    }
}

/**
 * Schreibt einen Text in die Statusleiste.
 * 
 * @param {string} pvText Text für die Statusleiste
 */
function setStatus(pvText: string) {
    STATUS_BAR_ELEMENT.innerText = pvText;
}

const TEST_CASES_ID = "tableTestCases";
const TEST_CASES_ELEMENT = document.getElementById(TEST_CASES_ID);
const QUERY_PARAM_TEST_CASE_ID =
    (QUERY_PARAMS == null) ? null : QUERY_PARAMS.getAll(TEST_CASE_ID_NAME);
const TEST_ALL = (QUERY_PARAM_TEST_CASE_ID == null)
    ? false : QUERY_PARAM_TEST_CASE_ID.includes("ALL");
const FORM = document.forms[0];
const INPUT_UNPARSED_ELEMENT = FORM[INPUT_UNPARSED_NAME];
const SERIALIZED_ID = "divPrimeFactoredInteger_toSerialized";
const SERIALIZED_ELEMENT = document.getElementById(SERIALIZED_ID);
const STRINGED_ID = "divPrimeFactoredInteger_toString";
const STRINGED_ELEMENT = document.getElementById(STRINGED_ID);
const NUMBER_ID = "divPrimeFactoredInteger_toNumber";
const NUMBER_ELEMENT = document.getElementById(NUMBER_ID);
const OUTPUT_ELEMENT = document.getElementById(OUTPUT_ID);
const THROWABLE_ID = "divThrowable";
const THROWABLE_ELEMENT = document.getElementById(THROWABLE_ID);
const CSS_CLASS_MATCH = "lightgreen";
const CSS_CLASS_NOMATCH = "pink";
const COMPRIFACNOT_ID = "divPrimeFactoredIntegerFormatter_toComPriFacNot";
const COMPRIFACNOT_ELEMENT = document.getElementById(COMPRIFACNOT_ID);
const COMPRIFACNOT_OCT_BASIC_DIGITS_ID =
    "divPrimeFactoredIntegerFormatter_toComPriFacNot_OctBasicDigitsOnly";
const COMPRIFACNOT_OCT_BASIC_DIGITS_ELEMENT = document.getElementById(
    COMPRIFACNOT_OCT_BASIC_DIGITS_ID);
const COMPRIFACNOT_DEC_BASIC_DIGITS_ID =
    "divPrimeFactoredIntegerFormatter_toComPriFacNot_DecBasicDigitsOnly";
const COMPRIFACNOT_DEC_BASIC_DIGITS_ELEMENT = document.getElementById(
    COMPRIFACNOT_DEC_BASIC_DIGITS_ID);
const COMPRIFACNOT_HEX_BASIC_DIGITS_ID =
    "divPrimeFactoredIntegerFormatter_toComPriFacNot_HexBasicDigitsOnly";
const COMPRIFACNOT_HEX_BASIC_DIGITS_ELEMENT = document.getElementById(
    COMPRIFACNOT_HEX_BASIC_DIGITS_ID);

ComPriFacNotConcept.initialize(onAfterConceptInitialized); // asynch

function onAfterConceptInitialized() {
    const lcConceptInitThrowable = ComPriFacNotConcept.initializationThrowable;
    let lvThrowable = lcConceptInitThrowable;
    if (lvThrowable == null) {
        try {
            PrimeFactoredIntegerParser.initialize(); // requires initialized ComPriFacNotConcept
            if (QUERY_PARAM_UNPARSED != null) {
                INPUT_UNPARSED_ELEMENT.value = QUERY_PARAM_UNPARSED;
                const lcParsed = PrimeFactoredIntegerParser.parseComPriFacNot(QUERY_PARAM_UNPARSED);
                const lcSerialized = lcParsed.toSerialized();
                SERIALIZED_ELEMENT.innerText = lcSerialized;
                const lcStringed = lcParsed.toString();
                STRINGED_ELEMENT.innerText = lcStringed;
                const lcNumber = lcParsed.toNumber();
                const lcNumberString = "" + lcNumber;
                NUMBER_ELEMENT.innerText = lcNumberString;
                const lcComPriFacNot = PrimeFactoredIntegerFormatter.formatComPriFacNot(lcParsed);
                COMPRIFACNOT_ELEMENT.innerText = lcComPriFacNot;
                const lcComPriFacNotHexBasicDigits =
                    PrimeFactoredIntegerFormatter.formatComPriFacNot(lcParsed,
                        PrimeFactoredIntegerFormatter.FORMAT_BASIC_DIGITS_3_HEXADECIMALS_ONLY);
                COMPRIFACNOT_HEX_BASIC_DIGITS_ELEMENT.innerText = lcComPriFacNotHexBasicDigits;
                const lcComPriFacNotDecBasicDigits =
                    PrimeFactoredIntegerFormatter.formatComPriFacNot(lcParsed,
                        PrimeFactoredIntegerFormatter.FORMAT_BASIC_DIGITS_2_DECIMALS_ONLY);
                COMPRIFACNOT_DEC_BASIC_DIGITS_ELEMENT.innerText = lcComPriFacNotDecBasicDigits;
                const lcComPriFacNotOctBasicDigits =
                    PrimeFactoredIntegerFormatter.formatComPriFacNot(lcParsed,
                        PrimeFactoredIntegerFormatter.FORMAT_BASIC_DIGITS_1_OCTALS_ONLY);
                COMPRIFACNOT_OCT_BASIC_DIGITS_ELEMENT.innerText = lcComPriFacNotOctBasicDigits;
            } else {
                OUTPUT_ELEMENT.style.display = "none";
            }
        } catch (lcThrowable2) {
            lvThrowable = lcThrowable2;
        }
    }
    if (lvThrowable != null) { // Error/exception on concept-init or input parsing
        const lcThrowableText = formatThrowable(lvThrowable);
        THROWABLE_ELEMENT.innerHTML = lcThrowableText;
    }

    if (lcConceptInitThrowable == null) {
        PrimeFactoredIntegerTestSuite.initialize(); // requires initialized ComPriFacNotConcept
        const lcTestCaseMap = PrimeFactoredIntegerTestSuite.testCasesMap;
        const lcTestCasesEntries = lcTestCaseMap.entries();
        for (const lcEntry of lcTestCasesEntries) {
            const lcTestCaseId = lcEntry[0];
            const lcTestCase = lcEntry[1];
            const lcChecked = (QUERY_PARAM_TEST_CASE_ID == null)
                ? false : (TEST_ALL || QUERY_PARAM_TEST_CASE_ID.includes(lcTestCaseId));
            const lcTbodyElement = document.createElement("tbody");
            const lcTrElement = document.createElement("tr");
            const lcTdSelectionElement = document.createElement("td");
            const lcInputElement = document.createElement("input");
            lcInputElement.type = "checkbox";
            const lcInputElementId = "input" + TEST_CASE_ID_NAME + lcTestCaseId;
            lcInputElement.id = lcInputElementId;
            lcInputElement.name = TEST_CASE_ID_NAME;
            lcInputElement.value = lcTestCaseId;
            if (lcChecked) {
                lcInputElement.checked = true;
            }
            lcTdSelectionElement.appendChild(lcInputElement);
            lcTrElement.appendChild(lcTdSelectionElement);
            const lcTdIdElement = document.createElement("td");
            const lcLabelElement = document.createElement("label");
            lcLabelElement.htmlFor = lcInputElementId;
            lcLabelElement.innerText = lcTestCaseId;
            lcTdIdElement.appendChild(lcLabelElement);
            lcTdIdElement.className = "monospace";
            lcTrElement.appendChild(lcTdIdElement);
            const lcInput = lcTestCase.input;
            const lcTdInputElement = document.createElement("td");
            lcTdInputElement.onclick = onTestCaseInputClick;
            lcTdInputElement.innerText = lcInput;
            lcTdInputElement.className = "cursor-pointer monospace";
            lcTrElement.appendChild(lcTdInputElement);
            const lcOutputExpected = lcTestCase.outputExpected;
            const lcOutputExpectedSerialized
                = (lcOutputExpected == null) ? null : lcOutputExpected.toSerialized();
            const lcTdOutputExpectedElement = document.createElement("td");
            lcTdOutputExpectedElement.innerText = lcOutputExpectedSerialized;
            lcTdOutputExpectedElement.className = "monospace";
            lcTrElement.appendChild(lcTdOutputExpectedElement);
            let lvOutputActual = null;
            let lvOutputActualSerialized = null;
            let lvThrowableActual = null;
            let lvMatch = null;
            let lvOutputMatch = null;
            let lvThrowableMatch = null;
            const lcThrowableExpected = lcTestCase.throwableExpected;
            if (lcChecked) {
                try {
                    lvOutputActual = PrimeFactoredIntegerParser.parseComPriFacNot(lcInput);
                } catch (lcThrowable) {
                    lvThrowableActual = lcThrowable;
                }
                if (lvThrowableActual == null) {
                    lvOutputActualSerialized = lvOutputActual.toSerialized();
                }
                lvOutputMatch = lcOutputExpectedSerialized == lvOutputActualSerialized;
                lvThrowableMatch = lcThrowableExpected == lvThrowableActual;
                //const lcTestRun = new TestRun(lcTestCase, lvOutputActual, lvThrowableActual);
                //lvMatch = lcTestRun.matches();
                lvMatch = lvOutputMatch && lvThrowableMatch;
            }
            const lcTdOutputActualElement = document.createElement("td");
            lcTdOutputActualElement.innerText = lvOutputActualSerialized;
            lcTdOutputActualElement.className = "monospace" +
                (lcChecked ? (" background-color-" +
                    (lvOutputMatch ? CSS_CLASS_MATCH : CSS_CLASS_NOMATCH)) : "");
            lcTrElement.appendChild(lcTdOutputActualElement);
            const lcTdThrowableExpectedElement = document.createElement("td");
            lcTdThrowableExpectedElement.innerText = lcThrowableExpected;
            lcTdThrowableExpectedElement.className = "monospace";
            lcTrElement.appendChild(lcTdThrowableExpectedElement);
            const lcTdThrowableActualElement = document.createElement("td");
            let lvThrowableActualText: string;
            if (lvThrowableActual instanceof Error) {
                lvThrowableActualText = formatThrowable(lvThrowableActual);
            } else {
                lvThrowableActualText = lvThrowableActual;
            }
            lcTdThrowableActualElement.innerHTML = lvThrowableActualText;
            lcTdThrowableActualElement.className = "monospace" +
                (lcChecked ? (" background-color-" +
                    (lvThrowableMatch ? CSS_CLASS_MATCH : CSS_CLASS_NOMATCH)) : "");
            lcTrElement.appendChild(lcTdThrowableActualElement);
            const lcTdMatchElement = document.createElement("td");
            lcTdMatchElement.innerText = lvMatch;
            lcTdMatchElement.className = "monospace" +
                (lcChecked ? (" background-color-" +
                    (lvMatch ? CSS_CLASS_MATCH : CSS_CLASS_NOMATCH)) : "");
            lcTrElement.appendChild(lcTdMatchElement);
            lcTbodyElement.appendChild(lcTrElement);
            TEST_CASES_ELEMENT.appendChild(lcTbodyElement);
        }
    }
}
