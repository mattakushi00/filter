(function (name, price, speed, item) {
        var car1 = {
                name: 'opel',
                price: '21000',
                maxSpeed: '200'
            },
            car2 = {
                name: 'mazda',
                price: '29000',
                maxSpeed: '220'
            },
            car3 = {
                name: 'bmv',
                price: '35000',
                maxSpeed: '180'
            },
            car4 = {
                name: 'lada',
                price: '5000',
                maxSpeed: '160'
            },
            car5 = {
                name: 'mazda',
                price: '50000',
                maxSpeed: '260'
            },
            array = [car1, car2, car3, car4, car5];
        for (var i = 0; i < array.length; i++) {
            name[i].textContent = array[i].name;
            price[i].textContent = array[i].price;
            speed[i].textContent = array[i].maxSpeed;
        }
    }
)(
    document.querySelectorAll('.item-name'),
    document.querySelectorAll('.item-price'),
    document.querySelectorAll('.item-speed'),
    document.querySelectorAll('.table-item')
);