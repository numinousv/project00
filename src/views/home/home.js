import './home.css'

export default function home() {
    const grid = document.createElement('div')
    grid.classList.add('grid')

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
        grid.appendChild(box)
    })

    return `<section class="home">
         ${grid.outerHTML}
    </section>
 `
}
