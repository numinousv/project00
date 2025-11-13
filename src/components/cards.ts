export interface Card {
    number: number
    imageUrl: string
    text: string
    opened?: boolean
}

export const cards: Card[] = [
    {
        number: 1,
        imageUrl: '01_checking_bank_balance.webp',
        text: 'Checking your bank balance after buying 3 presents'
    },
    {
        number: 2,
        imageUrl: '02_hearing_christmas_song.webp',
        text: `Hearing “All I Want for Christmas Is You” for the 50th time`
    },
    {
        number: 3,
        imageUrl: '03_burning_the_cookies.webp',
        text: 'Burning the cookies'
    },
    {
        number: 4,
        imageUrl: '04_batteries_for_gifts.webp',
        text: 'Realizing you need batteries for half the gifts'
    },
    {
        number: 5,
        imageUrl: '05_office_small_talk.webp',
        text: 'Office Christmas party small talk'
    },
    {
        number: 6,
        imageUrl: '06_post_christmas_cleanup.webp',
        text: 'The post-Christmas clean-up mountain'
    },
    {
        number: 7,
        imageUrl: `07_double_booked_parties.webp`,
        text: `Double-booking two Christmas parties you don't want to attend`
    },
    {
        number: 8,
        imageUrl: '08_out_of_wrapping_paper.webp',
        text: 'Running out of wrapping paper at midnight'
    },
    {
        number: 9,
        imageUrl: '09_pinterest_christmas.webp',
        text: `Comparing your Christmas to other people's perfect Pinterest lives`
    },
    {
        number: 10,
        imageUrl: '10_volunteered_to_cook.webp',
        text: `Realizing you've been volunteered to cook`
    },
    {
        number: 11,
        imageUrl: '11_explaining_your_job.webp',
        text: 'Explaining your job to relatives for the fifth time'
    },
    {
        number: 12,
        imageUrl: '12_saying_no_to_drink.webp',
        text: `Trying to politely decline “just one more drink”`
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

export const openedCardsNumbers: number[] =
    JSON.parse(localStorage.getItem('openedCardsNumbers')!) || []

if (openedCardsNumbers.length) {
    cards.forEach((card) => {
        if (openedCardsNumbers.includes(card.number)) {
            card.opened = true
        }
    })
}

export function saveOpenedCardNumber(num: number): void {
    if (openedCardsNumbers.includes(num)) return
    openedCardsNumbers.push(num)
    localStorage.setItem(
        'openedCardsNumbers',
        JSON.stringify(openedCardsNumbers)
    )
}
