chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url) {
    const freediumUrl = "https://freedium.cfd/" + tab.url;
    await chrome.tabs.create({ url: freediumUrl });
  }
});