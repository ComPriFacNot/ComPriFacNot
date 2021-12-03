/**
 * en: Redirector to GitHub.
 * de: Umleitung zu GitHub.
 * 
 * @author see git history
 * @version 1.1, 2021-12-03
 * @since 1.0, 2021-11-30
 */

/** Print margin: 100 chars                                                                       */

"use strict";

 const DOCUMENT_LOCATION = document.location;
 const QUERY_STRING = DOCUMENT_LOCATION.search;
 const QUERY_PARAMS 
    = (QUERY_STRING == null) ? null : new URLSearchParams(QUERY_STRING.substring(1)); // cut "?"
 const QUERY_KEY_NAME = "to";
 const QUERY_PARAM_UNPARSED = (QUERY_PARAMS == null) ? null : QUERY_PARAMS.get(QUERY_KEY_NAME);
 const GITHUB_BASE = "https://github.com/ComPriFacNot/ComPriFacNot"; // @since 2021-12-03
 const TARGET_URL = GITHUB_BASE + ((QUERY_PARAM_UNPARSED == null) ? "" : QUERY_PARAM_UNPARSED);
 DOCUMENT_LOCATION.href = TARGET_URL;
