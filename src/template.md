# Pop-off

## Bookmarklet to remove fixed position elements with a tap

This JavaScript snippet will remove elements you tap that use the most common CSS technique to cover web pages.

## Usage

### Install bookmarklet

Drag this link to your browser bookmark bar: <a href="INCLUDEJS">pop-off</a>

(If you don’t see a link above try visiting [the project site](https://ollicle.github.io/pop-off/))

1. Click the bookmarklet

2. Tap or click the offending element

3. If the element uses `position:fixed` it will be removed

4. Modal blocked pages often have page scroll disabled, this is remedied by overriding `overflow:hidden` wherever you click

5. Click an un-fixed element to remove the overlay

### Distribution build

Presuming dependencies are installed. The `dist` script builds and embeds the bookmarklet code `./build/bookmark.js` into this README

	npm run dist

## Editing this document

This README is generated from [template.md](src/template.md)
