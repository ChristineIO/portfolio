const url = "https://api.github.com/users/ChristineIO/repos";

fetch(url)
    .then((response) => response.json())
    .then(repos => {
        console.log(repos);
     })