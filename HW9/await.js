(() => {
    let limitNumber, pageNumber;
    getFinalResult();

     async function getFinalResult() {
        await getRandomNumber1(`Function getRandomNumber1 is done.`);
        await getRandomNumber2(`Function getRandomNumber2 is done.`);
        await getPosts(`Function getPosts is done.`);
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

    function getRandomNumber1(string) {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    limitNumber = Math.floor(Math.random() * 10) + 1;
                    console.log(string);
                    resolve();
                },
                1000);
        })

    }

    function getRandomNumber2(string) {
        return new Promise(resolve => {
            setTimeout(
                () => {
                    pageNumber = Math.floor(Math.random() * 10) + 1;
                    console.log(string);
                    resolve();
                },
                2000);
        })

    }

})();