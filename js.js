// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

window.onload = function () {
    let links = document.querySelectorAll('aside .p-4 ol li a')

    links.forEach(function (link) {
        if (link.textContent === 'Twitter') {
            link.parentElement.remove()
        }
    })
}


// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

document.addEventListener("DOMContentLoaded", () => {
    const autori = document.querySelectorAll(".blog-post-meta a");

    autori.forEach((autori) => {
        autori.addEventListener("mouseover", () => {
            alert(`L'autore è ${autori.textContent}`)
        })
    })
})