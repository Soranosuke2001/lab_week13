const all_divs = document.querySelectorAll('.original-container div')
for (const each_div of all_divs) {
    each_div.addEventListener('click', () => {
        const paste_area = document.querySelector('.copy-container')
        paste_area.insertAdjacentHTML("afterbegin", each_div.outerHTML)
    });
}

const reset = document.querySelector('button');
reset.addEventListener('click', () => {
    document.location.reload();
});