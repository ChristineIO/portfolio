const url = "https://api.github.com/users/ChristineIO/repos"

fetch(url)
    .then((response) => response.json())
    .then(repos => {
        repos.forEach(info => {
            if(info.visibilty !== "public" && info.name !== "portfolio" && info.description !== null || "") {
                document.getElementById("repo").textContent = info.name
                document.getElementById("desc").textContent = info.description;
                document.getElementById("main-lang").textContent = info.language;
                document.getElementById("star").textContent = info.stargazers_count;
                document.getElementById("time").textContent = info.updated_at;

                document.getElementById("button").addEventListener("click", function() {
                    window.open(info.html_url, "_blank");
                })
            }
            console.log(info)
        })
    })