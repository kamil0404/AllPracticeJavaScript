const getGoods = () => {
    const links = document.querySelectorAll('.navigation-link')

    const renderGoods = (goods) => {
        const goodsContainer = document.querySelector('.long-goods-list')

        goods.forEach(good => {
            console.log(good);
        })
    }
    
    const getData = (value, category) => {

        fetch('/db/db.json')
        .then((res) => res.json())
        .then( (data) => {
            const array = category ? data.filter( (item) => item[category] === value) : data

            localStorage.setItem('goods', JSON.stringify(array))

            if(window.location.pastname !== "/goods.html") {
                window.location.href = '/goods.html'
            } else {
                renderGoods(array)
            }

            console.log(window.location);
        })
    }

    links.forEach(function (link) {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const linkValue = link.textContent
            const category = link.dataset.field
            
            getData(linkValue, category)
        })
    })

    if(localStorage.getItem('goods') && window.location.pastname === "/goods.html") {
        renderGoods(JSON.parse(localStorage.getItem('goods')))
    }
}

getGoods()