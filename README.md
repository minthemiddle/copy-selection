# Copy Selection As Markdown

Firefox extension to copy selection as Markdown.  
Includes source with title and url.  
If URL is hosted RSS reader *Miniflux*, include URL of article.  
Uses [Lucide](https://lucide.dev) for the icon.  
Find builds on `releases`.  
Install via Firefox Extension.  

## Fork

You can adjust this extension easily for your needs

- Clone repo
- Make changes to `content.js` (e.g. add rules for certain websites)
- Compile locally via `find . -maxdepth 1 -not -name '.*' -print0 | xargs -0 zip -r copy.zip`
- Use local extension via installing in Firefox via `about:debugging` 

## Format

```markdown
> This is the copied selection

Source: [Title of website](url)
```
