/**
 * Redirector zu GitHub.
 * 
 * @author see git history
 * @version 1.0, 2021-11-30
 * @since 1.0, 2021-11-30
 */

 const DOCUMENT_LOCATION = document.location;
 const QUERY_STRING = DOCUMENT_LOCATION.search;
 const QUERY_PARAMS = (QUERY_STRING == null) ? null : new URLSearchParams(QUERY_STRING.substring(1)); // "?" abschneiden
 const QUERY_KEY_NAME = "to";
 const QUERY_PARAM_UNPARSED = (QUERY_PARAMS == null) ? null : QUERY_PARAMS.get(QUERY_KEY_NAME);
 const GITHUB_BASE = "https://github.com/Stefan-Leder-net/ComPriFacNot";
 const TARGET_URL = GITHUB_BASE + ((QUERY_PARAM_UNPARSED == null) ? "" : QUERY_PARAM_UNPARSED);
 DOCUMENT_LOCATION.href = TARGET_URL;
