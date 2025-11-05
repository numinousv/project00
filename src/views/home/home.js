// import './home.css'
import { cards } from '../../components/cards'
import popup from '../../components/popup/popup'

export default function home() {
    //skapar ett element med class 'home'
    const home = document.createElement('section')
    home.classList.add('home')

    //skapar ett nytt element med class 'grid'
    const gridEl = document.createElement('div')
    gridEl.classList.add('grid')

    //skapar en ny array och puchar 24 nummer i den (från 1 till 24)
    let numbers = []

    for (let i = 1; i < 25; i++) {
        numbers.push(i)
    }

    //loopar genom numbers
    numbers.forEach((num) => {
        //nytt element <button> med 2 class
        const box = document.createElement('button')
        box.classList.add('grid__item', `grid__item_${num}`)

        //fyller elementet med innerHTML
        box.innerHTML = `
         <span class="grid__item-number">
            ${num}
        </span>
        `
        //event listener för varje knapp; hämtar rätt objekt
        // i cards och använder dessa värden som argument
        // till popup-component för att skapa ett popup-element
        box.addEventListener('click', () => {
            const card = cards.find((item) => {
                return item.number === num
            })
            const popupEl = popup(card.imageUrl, card.text, card.text)
            popupEl.classList.add('popup_opened')
            document.addEventListener('keydown', closePopupEscape)
            home.append(popupEl)

            //funktion för att stänga ner popup
            //genom att trycka på 'Escape'
            function closePopupEscape(evt) {
                if (evt.key === 'Escape') {
                    const popup = document.querySelector('.popup_opened')
                    if (popup) {
                        popup.classList.remove('popup_opened')
                    }
                }
            }

            // close button inuti popup-elementet
            const closeBtn = popupEl.querySelector('.popup__close-button')

            // close button event listener; stänger ner popup och tar bort
            // popup-elementet från DOM efter transition är slutfört
            closeBtn.addEventListener('click', () => {
                popupEl.classList.remove('popup_opened')
                document.removeEventListener('keydown', closePopupEscape)
                popupEl.addEventListener('transitionend', () => {
                    popupEl.remove()
                })
            })
        })

        //lägger in ett färdigt element i grid-elementet
        gridEl.appendChild(box)
    })

    //lägger in tt grid element med 24 stycken children i home-elementet
    home.append(gridEl)

    return home
}
