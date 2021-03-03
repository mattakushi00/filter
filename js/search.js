(function searching(inputName, inputMinPr, inputMaxPr, btn, tableItemName, tableItemPrice, item) {
    document.addEventListener('keyup', search, false);

    function search() {
        if (event.keyCode === 13) {
            for (let el of item) {
                if (!correctName()) {
                    el.classList.add('d-none');
                    console.log('none');
                }
                else {
                    el.classList.remove('d-none');
                    console.log(correctName());
                }
            }
        }
    }

    function correctName() {
        for (let el of tableItemName) {
            if (inputName.value === el.textContent || inputName.value.length === 0) return true;
        }
    }

    function correctMinVal(html, input) {
        var arr = [];
        for (let el of html) {
            if (parseInt(input.value) <= parseInt(el.textContent) || input.value.length === 0) arr.push(arr);
        }
        if (arr.length !== 0) return arr
    }


})(
    document.querySelector('.name'),
    document.querySelector('.minPrice'),
    document.querySelector('.maxPrice'),
    document.querySelector('.btn-search'),
    document.querySelectorAll('.item-name'),
    document.querySelectorAll('.item-price'),
    document.querySelectorAll('.table-item')
);
