export default function popup (imageLink, altText, text) {

    const popup = document.createElement('div')
    popup.classList.add('popup')
    popup.innerHTML = `

            <div class="popup__image-container">
            <div class="popup__inner-container">
            <img class="popup__image" src="${imageLink}" alt="${altText}" />
            <p class="popup__undertext">${text}</p>
        </div>
        <button class="popup__close-button" type="button" aria-label="Close"></button>
      </div>
    `
return popup
}
