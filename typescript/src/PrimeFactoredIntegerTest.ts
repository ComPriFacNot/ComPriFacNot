/**
 * :en: JavaScript for page PrimeFactoredIntegerTest.htm.
 * :de: JavaScript für Seite PrimeFactoredIntegerTest.htm.
 * 
 * @author See git history
 * @version 1.4, 2021-12-10
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
const TEST_CASES_MAP = PrimeFactoredIntegerTestSuite.TEST_CASES_MAP;
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
 * Ereignisbehandler, wenn auf eine Testfall-ID geklickt wird.
 * 
 * @param {MouseEvent} pvMouseEvent Mausereignis
 * @listens MouseEvent
 */
function onTestCaseIdClick(pvMouseEvent: MouseEvent) {
    const lcEventTarget = pvMouseEvent.target;
    const lcTarget: HTMLTableCellElement = (lcEventTarget instanceof HTMLTableCellElement)
        ? lcEventTarget : null; // = this
    if (lcTarget != null) {
        const lcTestCaseId = lcTarget.innerText;
        const lcTestCaseIdUriEncoded = encodeURIComponent(lcTestCaseId);
        const lcPathname = DOCUMENT_LOCATION.pathname;
        const lcNewUrl = lcPathname + "?" + TEST_CASE_ID_NAME + "=" + lcTestCaseIdUriEncoded;
        DOCUMENT_LOCATION.href = lcNewUrl;
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

try {
    if (QUERY_PARAM_UNPARSED != null) {
        const FORM = document.forms[0];
        const INPUT_UNPARSED_ELEMENT = FORM[INPUT_UNPARSED_NAME];
        INPUT_UNPARSED_ELEMENT.value = QUERY_PARAM_UNPARSED;
        const PARSED = PrimeFactoredIntegerParser.parseComPriFacNot(QUERY_PARAM_UNPARSED);
        const SERIALIZED = PARSED.toSerialized();
        const SERIALIZED_ID = "divPrimeFactoredInteger_toSerialized";
        const SERIALIZED_ELEMENT = document.getElementById(SERIALIZED_ID);
        SERIALIZED_ELEMENT.innerText = SERIALIZED;
        const STRINGED = PARSED.toString();
        const STRINGED_ID = "divPrimeFactoredInteger_toString";
        const STRINGED_ELEMENT = document.getElementById(STRINGED_ID);
        STRINGED_ELEMENT.innerText = STRINGED;
        const NUMBER = PARSED.toNumber();
        const NUMBER_ID = "divPrimeFactoredInteger_toNumber";
        const NUMBER_ELEMENT = document.getElementById(NUMBER_ID);
        const NUMBER_TEXT = "" + NUMBER;
        NUMBER_ELEMENT.innerText = NUMBER_TEXT;
    } else {
        const OUTPUT_ELEMENT = document.getElementById(OUTPUT_ID);
        OUTPUT_ELEMENT.style.display = "none";
    }
} catch (lcThrowable) {
    const THROWABLE_ID = "divThrowable";
    const THROWABLE_ELEMENT = document.getElementById(THROWABLE_ID);
    THROWABLE_ELEMENT.innerText = lcThrowable;
}

const TEST_CASES_ENTRIES = TEST_CASES_MAP.entries();
const TEST_CASES_ID = "tbodyTestCases";
const TEST_CASES_ELEMENT = document.getElementById(TEST_CASES_ID);
const QUERY_PARAM_TEST_CASE_ID = 
    (QUERY_PARAMS == null) ? null : QUERY_PARAMS.getAll(TEST_CASE_ID_NAME);
const TEST_ALL = (QUERY_PARAM_TEST_CASE_ID == null) 
    ? false : QUERY_PARAM_TEST_CASE_ID.includes("ALL");
for (const lcEntry of TEST_CASES_ENTRIES) {
    const lcTestCaseId = lcEntry[0];
    const lcTestCase = lcEntry[1];
    const lcChecked = (QUERY_PARAM_TEST_CASE_ID == null) 
        ? false : (TEST_ALL || QUERY_PARAM_TEST_CASE_ID.includes(lcTestCaseId));
    const lcTrElement = document.createElement("tr");
    const lcTdSelectionElement = document.createElement("td");
    const lcInputElement = document.createElement("input");
    lcInputElement.type = "checkbox";
    lcInputElement.name = TEST_CASE_ID_NAME;
    lcInputElement.value = lcTestCaseId;
    if (lcChecked) {
        lcInputElement.checked = true;
    }
    lcTdSelectionElement.appendChild(lcInputElement);
    lcTrElement.appendChild(lcTdSelectionElement);
    const lcTdIdElement = document.createElement("td");
    lcTdIdElement.innerText = lcTestCaseId;
    lcTdIdElement.onclick = onTestCaseIdClick;
    lcTdIdElement.className = "cursor-pointer monospace";
    lcTrElement.appendChild(lcTdIdElement);
    const lcInput = lcTestCase.getInput();
    const lcTdInputElement = document.createElement("td");
    lcTdInputElement.innerText = lcInput;
    lcTdInputElement.className = "monospace";
    lcTrElement.appendChild(lcTdInputElement);
    const lcOutputExpected = lcTestCase.getOutputExpected();
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
    const lcThrowableExpected = lcTestCase.getThrowableExpected();
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
        (lcChecked ? (" background-color-" + (lvOutputMatch ? "lime" : "red")) : "");
    lcTrElement.appendChild(lcTdOutputActualElement);
    const lcTdThrowableExpectedElement = document.createElement("td");
    lcTdThrowableExpectedElement.innerText = lcThrowableExpected;
    lcTdThrowableExpectedElement.className = "monospace";
    lcTrElement.appendChild(lcTdThrowableExpectedElement);
    const lcTdThrowableActualElement = document.createElement("td");
    let lvThrowableActualText: string;
    if (lvThrowableActual instanceof Error) {
        const lcMessage = lvThrowableActual.message;
        const lcStack = lvThrowableActual.stack;
        lvThrowableActualText = "<ul><li>message: " + lcMessage + "</li><li>stack: <pre>" +
            lcStack + "</pre></li></ul>";
    } else {
        lvThrowableActualText = lvThrowableActual;
    }
    lcTdThrowableActualElement.innerHTML = lvThrowableActualText;
    lcTdThrowableActualElement.className = "monospace" +
        (lcChecked ? (" background-color-" + (lvThrowableMatch ? "lime" : "red")) : "");
    lcTrElement.appendChild(lcTdThrowableActualElement);
    const lcTdMatchElement = document.createElement("td");
    lcTdMatchElement.innerText = lvMatch;
    lcTdMatchElement.className = "monospace" +
        (lcChecked ? (" background-color-" + (lvMatch ? "lime" : "red")) : "");
    lcTrElement.appendChild(lcTdMatchElement);
    TEST_CASES_ELEMENT.appendChild(lcTrElement);
}