(() => {
    let limitNumber, pageNumber;
    getFinalResult();

    function getFinalResult() {
        getRandomNumber1(`Function getRandomNumber1 is done.`, () => {
            getRandomNumber2(`Function getRandomNumber2 is done.`, () => {
                getPosts(`Function getPosts is done.`);
            })
        })
    }

    function getPosts(string) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(string);
                console.warn(JSON.parse(this.responseText));
            }
        };
        xhr.open("get", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
        xhr.send();
    }

    function getRandomNumber1(string, callback) {
        setTimeout(
            () => {
                limitNumber = Math.floor(Math.random() * 10) + 1;
                callback();
                console.log(string);
            },
            1000);
    }

    function getRandomNumber2(string, callback) {
        setTimeout(
            () => {
                pageNumber = Math.floor(Math.random() * 10) + 1;
                callback();
                console.log(string);
            },
            2000);
    }

})();
