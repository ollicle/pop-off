# Pop-off

## Bookmarklet to remove fixed position elements with a tap

This JavaScript snippet will remove elements you tap that use the most common CSS technique to cover web pages.

## Usage

### Install bookmarklet

Drag this link to your browser bookmark bar: <a href="javascript:(function%20wrapper()%20%7B%0A%20%20%20%20var%20s%20%3D%20document.createElement('script')%0A%20%20%20%20s.innerText%20%3D%20'!'%20%2B%20bookmark.toString()%20%2B%20'()'%0A%20%20%20%20document.head.appendChild(s)%0A%20%20%20%20function%20bookmark()%20%7B%0A%20%20%20%20%20%20const%20isFixed%3Dfunction(e)%7Breturn%22fixed%22%3D%3D%3Dwindow.getComputedStyle(e).getPropertyValue(%22position%22).toLowerCase()%7D%2Ccatcher%3Ddocument.createElement(%22div%22)%3Bcatcher.style.position%3D%22fixed%22%2Ccatcher.style.top%3D%220%22%2Ccatcher.style.left%3D%220%22%2Ccatcher.style.bottom%3D%220%22%2Ccatcher.style.right%3D%220%22%2Ccatcher.style.zIndex%3D%222147483647%22%2Ccatcher.style.cursor%3D%22crosshair%22%2Ccatcher.style.background%3D%22linear-gradient(135deg%2C%20rgba(255%2C255%2C255%2C0.2)%2025%25%2C%20rgba(0%2C0%2C0%2C0)%2025%25%2C%20rgba(0%2C0%2C0%2C0)%2050%25%2C%20rgba(255%2C255%2C255%2C0.2)%2050%25%2C%20rgba(255%2C255%2C255%2C0.2)%2075%25%2C%20rgba(0%2C0%2C0%2C0)%2075%25%2C%20rgba(0%2C0%2C0%2C0)%200)%2C%20linear-gradient(135deg%2C%20rgba(0%2C0%2C0%2C0.1)%200%2C%20rgba(0%2C0%2C0%2C0.1)%2024%25%2C%20rgba(0%2C0%2C0%2C0)%2026%25%2C%20rgba(0%2C0%2C0%2C0)%2050%25%2C%20rgba(0%2C0%2C0%2C0.1)%2050%25%2C%20rgba(0%2C0%2C0%2C0.1)%2075%25%2C%20rgba(255%2C255%2C255%2C0)%2075%25%2C%20rgba(0%2C0%2C0%2C0)%20100%25)%22%2Ccatcher.style.backgroundSize%3D%222rem%202rem%22%2Ccatcher.addEventListener(%22click%22%2Cfunction(e)%7Be.stopPropagation()%3Bconst%20t%3De.pageY-document.documentElement.scrollTop%2Cr%3Ddocument.elementsFromPoint(e.pageX%2Ct).slice(1%2C-1).find(isFixed)%3Br%3Fr.parentNode.removeChild(r)%3Acatcher.parentNode.removeChild(catcher)%7D)%2Cdocument.body.appendChild(catcher)%3B%0A%20%20%20%20%7D%0A%20%20%7D)()">pop-off</a>

(If you don’t see a link above try visiting [the project site](https://ollicle.github.io/pop-off/))

1. Click the bookmarklet

2. Tap or click the offending element. If it uses position fixed it will be removed.

### Distribution build

Presuming dependencies are installed. The `dist` script builds and embeds the bookmarklet code `./build/bookmark.js` into this README

	npm run dist

## Editing this document

This README is generated from [template.md](src/template.md)
