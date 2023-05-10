chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {

    const { inject, injectTo } = await chrome.storage.sync.get(["inject", "injectTo"]);
    console.log(inject)
    if (tab.url === inject)   {

        chrome.scripting.executeScript({
            world: "MAIN",
            target: { tabId },
            func : injectIframe,
        }).then(() => console.log("script injected in all frames"));
    } 
})


function injectIframe() {}