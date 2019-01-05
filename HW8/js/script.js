document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.slider__item');
    let itemsArray = Array.from(items);
    let backgroundImageArr = [ "url('img/romeo.jpg')",
                               "url('img/main-img.png')",
                               "url('img/taras-bulba.jpg')",
                               "url('img/rain-seller.jpg')" ];
    let itemActive;
    //console.log(itemsArray);
    //console.log(items);


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
           /* switch (i) {
                case 0:
                    sliderBackgroundArr[0].style.backgroundImage = "url('img/romeo.jpg')";
                   // sliderBackgroundArr[0].style.backgroundSize = "cover";
                    break;
                case 1:
                    sliderBackgroundArr[0].style.backgroundImage = "url('img/main-img.png')";
                    break;
                case 2:
                    sliderBackgroundArr[0].style.backgroundImage = "url('img/taras-bulba.jpg')";
                    break;
                case 3:
                    sliderBackgroundArr[0].style.backgroundImage = "url('img/rain-seller.jpg')";
                    break;
            }*/

            //body.style.backgroundImage = 'url(http://localhost/background.png)';
            this.classList.add("item-active");
            this.nextElementSibling.classList.remove('hidden');
        });
        itemActive = i;
    }

    let prevButtonNode = document.querySelectorAll('#prev') ;
    let prevButtonArr = Array.from(prevButtonNode);
    let prevButton = prevButtonArr[0];
    prevButton.addEventListener("click", function() {
        for (let i = itemActive; i >= 0; i++) {
            itemsArray[itemActive].classList.remove("item-active");
            itemsArray[itemActive].nextElementSibling.classList.add("hidden");
        }
    })
});