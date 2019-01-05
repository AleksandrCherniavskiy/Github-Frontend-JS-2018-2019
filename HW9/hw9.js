(() => {
    let limitNumber = getRandomNumber1();
    let pageNumber = getRandomNumber2();

    function getPosts(callback) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                callback(this.responseText);
                //console.warn(JSON.parse(this.responseText));
            }
        };
        xhr.open("get", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
        xhr.send();
    }

    getPosts( function () {
        console.warn(JSON.parse(this.responseText));
    });


    function getRandomNumber1() {
        setTimeout(
            () => {
                return Math.floor(Math.random() * 10 + 1);
            },
            1000);

    }

    function getRandomNumber2() {
        setTimeout(
            () => {
                return Math.floor(Math.random() * 10 + 1);
            },
            2000);

    }

})();

