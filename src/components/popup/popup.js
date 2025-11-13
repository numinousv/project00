export default function createPopup(imageLink, altText) {
    const popup = document.createElement('div')
    popup.classList.add('popup')
    popup.innerHTML = `

         <div class="popup__image-container">
            <div class="popup__inner-container">
            <img class="popup__image" src="${imageLink}" alt="${altText}" />
        </div>
        <button class="popup__close-button" type="button" aria-label="Close"></button>
      </div>
    `

    function openPopup() {
        requestAnimationFrame(() => {
            popup.classList.add('popup_opened')
        })
        document.addEventListener('keydown', closePopupOnEscape)
    }

    function closePopupOnEscape(evt) {
        if (evt.key === 'Escape') {
            const p = document.querySelector('.popup_opened')
            p && closePopup()
        }
    }

    function closePopup() {
        requestAnimationFrame(() => {
            popup.classList.remove('popup_opened')
        })
        popup.addEventListener('transitionend', () => {
            popup.remove()
        })

        document.removeEventListener('keydown', closePopupOnEscape)
    }

    const closeBtn = popup.querySelector('.popup__close-button')

    closeBtn.addEventListener('click', closePopup)

    return { popup, openPopup }
}
