/**
 * :en: Redirector to GitHub.
 * :de: Umleitung zu GitHub.
 * 
 * @author see git history
 * @version 1.2, 2021-12-18
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
      const lcReferer = document.referrer;
      let lvFirstSlash = lcReferer.indexOf("/docs/");
      if (lvFirstSlash == -1) { // Windows and File-URL
         lvFirstSlash = lcReferer.indexOf("\\docs\\");
      }
      lvGitHubSource = "/blob/main" + lcReferer.substring(lvFirstSlash);
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
