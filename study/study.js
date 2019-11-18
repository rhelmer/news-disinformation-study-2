import { studyDomains } from "/study/domains.js"
import * as WebScience from "/WebScience/WebScience.js"

// This is a study that won't involve identifiable data or any intervention,
// so we're disabling the study-specific consent feature.
WebScience.disableStudySpecificConsent();

// Configure navigation collection
WebScience.Navigation.runStudy({
  domains: studyDomains,
  trackUserAttention: true,
  savePageContent: false
});

// Temporary support for dumping the navigation study data to a downloaded file
browser.browserAction.onClicked.addListener(async (tab) => {
  var navigationStudyData = await WebScience.Navigation.getStudyDataAsObject();
  var linkExposureStudyData = await WebScience.LinkExposure.getStudyDataAsObject();
  var combinedStudyData = {
    navigation: navigationStudyData,
    linkExposure: linkExposureStudyData
  };
  browser.downloads.download( { url: URL.createObjectURL(new Blob([ JSON.stringify(combinedStudyData) ], { type: "application/json" })) } );
});

// Configure link exposure collection

WebScience.LinkExposure.runStudy({
  domains: studyDomains
});

// TODO configure social media account exposure collection
// Something like...

/*
WebScience.SocialMediaAccountExposure.runStudy({
  facebookAccounts: [ ],
  twitterAccounts: [ ],
  youtubeAccounts: [ ]
});
*/

// TODO configure social media news exposure collection (i.e., content
// recognized by platforms as news regardless of whether we recognize the domain
// Something like...

/*
WebScience.SocialMediaNewsExposure.runStudy({
  facebook: true,
  twitter: true,
  youtube: true
});
*/

// TODO configure social media news sharing collection
// Something like...

/*
WebScience.SocialMediaSharing.runStudy({
  domains: [ ],
  facebook: true,
  twitter: true,
  reddit: true
});
*/

// Configure surveys
// TODO something like...

/*
WebScience.UserSurvey.runStudy({
  surveyPromptText: "foo",
  surveyUrl: "bar",
  surveyTimeAfterInitialRun: 12345
});
*/