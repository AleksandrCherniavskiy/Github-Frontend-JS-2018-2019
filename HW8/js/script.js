document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.slider__item');
    let itemsArray = Array.from(items);
    let backgroundImageArr = [ "url('img/romeo.jpg')",
                               "url('img/main-img.png')",
                               "url('img/taras-bulba.jpg')",
                               "url('img/rain-seller.jpg')" ];

    for (let i = 0; i < itemsArray.length; i++) {
        let item = items[i];

        item.addEventListener("click", function() {
            for (let j = 0; j < itemsArray.length; j++) {
                let item = items[j];

                if (item.classList.contains('item-active')) {
                    item.classList.remove('item-active');
                    item.nextElementSibling.classList.add('hidden');
                }
            }

            let sliderBackground = document.querySelectorAll('.slider');
            let sliderBackgroundArr = Array.from(sliderBackground);
            sliderBackgroundArr[0].style.backgroundImage = backgroundImageArr[i];
            this.classList.add("item-active");
            this.nextElementSibling.classList.remove('hidden');
        });
    }

    let prevButton = document.querySelector('#prev');
    let nextButton = document.querySelector('#next');

    prevButton.addEventListener("click", function() {
        for (let i = 1; i <= itemsArray.length; i++) {
            if ( itemsArray[i].classList.contains('item-active') ) {
                itemsArray[i].classList.remove("item-active");
                itemsArray[i].nextElementSibling.classList.add("hidden");
                itemsArray[i - 1].classList.add("item-active");
                itemsArray[i - 1].nextElementSibling.classList.remove("hidden");
            }
        }
    });

    nextButton.addEventListener("click", function() {
        for (let i = itemsArray.length - 1; i >= 0; i--) {
            if ( itemsArray[i].classList.contains('item-active') ) {
                itemsArray[i].classList.remove("item-active");
                itemsArray[i].nextElementSibling.classList.add("hidden");
                itemsArray[i + 1].classList.add("item-active");
                itemsArray[i + 1].nextElementSibling.classList.remove("hidden");
            }
        }
    });
});
