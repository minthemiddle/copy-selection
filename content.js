function getCitation() {
  const selection = window.getSelection().toString().trim();
  if (!selection) return "";

  const title = document.title;
  const url = window.location.href;

  const quote = `> ${selection}`;
  const source = `Source: [${title}](${url})`;

  return `${quote}\n\n${source}`;
}

getCitation();
