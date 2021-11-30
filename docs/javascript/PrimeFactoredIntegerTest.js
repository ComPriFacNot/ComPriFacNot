/**
 * 🇩🇪 JavaScript für Seite PrimeFactoredIntegerTest.htm.
 * 🇪🇳 JavaScript for page PrimeFactoredIntegerTest.htm.
 * 
 * @author See git history
 * @version 1.0, 2021-11-30
 * @since 1.0, 2021-11-29
 */
const INPUT_UNPARSED_NAME = "Integer";
const DOCUMENT_LOCATION = document.location;
const QUERY_STRING = DOCUMENT_LOCATION.search;
const QUERY_PARAMS = (QUERY_STRING == null) ? null : new URLSearchParams(QUERY_STRING.substring(1)); // "?" abschneiden
const QUERY_PARAM_UNPARSED = (QUERY_PARAMS == null) ? null : QUERY_PARAMS.get(INPUT_UNPARSED_NAME);
const OUTPUT_ID = "divOutput";

try {
    if (QUERY_PARAM_UNPARSED != null) {
        const FORM = document.forms[0];
        const INPUT_UNPARSED_ELEMENT = FORM[INPUT_UNPARSED_NAME];
        INPUT_UNPARSED_ELEMENT.value = QUERY_PARAM_UNPARSED;
        const PARSED = PrimeFactoredIntegerParser.parseComPriFacNot(QUERY_PARAM_UNPARSED);
        const PARSED_ID = "divPrimeFactoredInteger";
        const PARSED_ELEMENT = document.getElementById(PARSED_ID);
        PARSED_ELEMENT.innerText = PARSED;
        const NUMBER = PARSED.toNumber();
        const NUMBER_ID = "divPrimeFactoredInteger_toNumber";
        const NUMBER_ELEMENT = document.getElementById(NUMBER_ID);
        NUMBER_ELEMENT.innerText = NUMBER;
    } else {
        const OUTPUT_ELEMENT = document.getElementById(OUTPUT_ID);
        OUTPUT_ELEMENT.style.display = "none";
    }
} catch (lcException) {
    const THROWABLE_ID = "divThrowable";
    const THROWABLE_ELEMENT = document.getElementById(THROWABLE_ID);
    THROWABLE_ELEMENT.innerText = lcException;
}
