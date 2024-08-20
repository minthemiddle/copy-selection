function getCitation() {
  const selection = window.getSelection().toString().trim();
  if (!selection) return "";

  const title = document.title;
  let url = window.location.href;

  // Check if the current page is on miniflux.app
  if (url.includes("miniflux.app")) {
    const linkElement = document.querySelector("h1#page-header-title a");
    if (linkElement && linkElement.href) {
      url = linkElement.href;
    }
  }

  const quote = `> ${selection}`;
  const source = `Source: [${title}](${url})`;

  return `${quote}\n\n${source}`;
}

getCitation();
