// import './home.css'
import { cards } from '../../components/cards'
import popup from '../../components/popup/popup'

export default function home() {
    const home = document.createElement('section')
    home.classList.add('home')

    const gridEl = document.createElement('div')
    gridEl.classList.add('grid')

    let numbers = []

    for (let i = 1; i < 25; i++) {
        numbers.push(i)
    }

    numbers.forEach((num) => {
        const box = document.createElement('button')
        box.classList.add('grid__item', `grid__item_${num}`)
        box.innerHTML = `
         <span class="grid__item-number">
            ${num}
        </span>
        `
        box.addEventListener('click', () => {
            const card = cards.find((item) => {
                return item.number === num
            })
            const popupEl = popup(card.imageUrl, card.text, card.text)
            popupEl.classList.add('popup_opened')
            document.addEventListener('keydown', closePopupEscape)
            home.append(popupEl)

            function closePopupEscape(evt) {
                if (evt.key === 'Escape') {
                    const popup = document.querySelector('.popup_opened')
                    if (popup) {
                        popup.classList.remove('popup_opened')
                    }
                }
            }

            const closeBtn = popupEl.querySelector('.popup__close-button')

            closeBtn.addEventListener('click', () => {
                popupEl.classList.remove('popup_opened')
                document.removeEventListener('keydown', closePopupEscape)
                popupEl.addEventListener('transitionend', () => {
                    popupEl.remove()
                })
            })
        })

        gridEl.appendChild(box)
    })

    home.append(gridEl)

    return home
}
