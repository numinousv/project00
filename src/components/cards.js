export const cards = [
    {
        number: 1,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },

    {
        number: 2,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 3,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 4,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 5,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 6,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 7,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 8,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 9,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 10,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 11,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 12,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 13,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 14,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 15,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 16,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 17,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 18,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 19,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 20,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 21,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },

    {
        number: 22,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 23,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    },
    {
        number: 24,
        imageUrl: 'burning_cookies.webp',
        text: 'Ho-ho-ho'
    }
]

const openedCards = JSON.parse(localStorage.getItem('openedCards')) || []

if (openedCards.length) {
    cards.forEach((card) => {
        if (openedCards.includes(card.number)) {
            card.opened = true
        }
    })
}

export function saveOpenedCardNumber(num) {
    if (openedCards.includes(num)) return
    openedCards.push(num)
    localStorage.setItem('cardsOpened', JSON.stringify(openedCards))
}
