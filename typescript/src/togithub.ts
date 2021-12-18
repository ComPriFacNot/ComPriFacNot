/**
 * :en: Redirector to GitHub.
 * :de: Umleitung zu GitHub.
 * 
 * @author see git history
 * @version 1.3, 2021-12-18
 * @since 1.0, 2021-11-30
 */

/** Print margin: 100 chars                                                                       */

"use strict";

/**
 * :en: Redirects to GitHub.
 * :de: Leitet zu GitHub um.
 * 
 * @since 1.2, 2021-12-18
 */
function gotoGitHub() {
   const lcDocumentLocation = document.location;
   const lcQueryString = lcDocumentLocation.search;
   let lvGitHubSource: string;
   if ((lcQueryString == null) || (lcQueryString == "")) { // Derive target from referer
      const lcCurrentScript = document.currentScript;
      if (!(lcCurrentScript instanceof HTMLScriptElement)) {
          const lcMessage =
              "Initialization error: currentScript not instanceof HTMLScriptElement!";
          const lcError = new Error(lcMessage);
          throw lcError;
      }
      const lcCurrentScriptSrc = lcCurrentScript.src;
      const lcCurrentRootIndex = lcCurrentScriptSrc.lastIndexOf("javascript");
      const lcReferer = document.referrer;
      lvGitHubSource = "/blob/main/docs/" + lcReferer.substring(lcCurrentRootIndex);
   } else {
      const lcQueryParams = new URLSearchParams(lcQueryString.substring(1)); // cut "?"
      const lcQueryKeyName = "to";
      lvGitHubSource = (lcQueryParams == null) ? "" : lcQueryParams.get(lcQueryKeyName);
   }
   const lcGitHubBase = "https://github.com/ComPriFacNot/ComPriFacNot"; // @since 2021-12-03
   const lcTargetUrl = lcGitHubBase + lvGitHubSource;

   lcDocumentLocation.href = lcTargetUrl;
}

gotoGitHub();
