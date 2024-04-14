browser.menus.create({
  id: "copy-selection",
  title: "Copy Selection As Markdown",
  contexts: ["selection"],
});

browser.menus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "copy-selection") {
    const citation = await browser.tabs.executeScript(tab.id, {
      file: "content.js",
    });

    if (citation) {
      navigator.clipboard.writeText(citation[0]);
    }
  }
});
