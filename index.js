const url = "https://api.github.com/users/ChristineIO/repos"

fetch(url)
    .then((response) => response.json())
    .then(repos => {

        repos.forEach(info => {
            let formatCustomDate = (isoString) => {
                const date = new Date(isoString);

                const formatted = new Intl.DateTimeFormat('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                    timeZone: 'UTC'
                }).format(date)


                return formatted.replace(',', '');
            }


            const card = document.createElement("div")
            card.className = "card repo"

            if (info.visibilty !== "public" && info.name !== "portfolio" && info.description) {

                document.getElementById("repo").textContent = info.name
                document.getElementById("desc").textContent = info.description
                document.getElementById("main-lang").textContent = info.language
                document.getElementById("star").textContent = info.stargazers_count
                document.getElementById("time").textContent = formatCustomDate(info.updated_at)

                document.getElementById("button").addEventListener("click", function () {
                    window.open(info.html_url, "_blank")
                })
            }
            console.log(info)
        })
    })