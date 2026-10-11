const url = "https://api.github.com/users/ChristineIO/repos"

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

fetch(url)
    .then((response) => response.json())
    .then(repos => {
        let reposContainer = document.querySelector(".repos-container")
        repos.forEach(info => {
            if (info.name !== "portfolio" && info.description) {
                const card = document.createElement("div")
                card.className = "card repo"

                reposContainer.appendChild(card)

                const repoName = document.createElement("h1");
                repoName.textContent = info.name;
                repoName.className = "repo-name";
                card.appendChild(repoName);

                const repoDescription = document.createElement("p");
                repoDescription.textContent = info.description;
                card.appendChild(repoDescription);

                const mainLang = document.createElement("span");
                mainLang.className = "main-lang";
                mainLang.textContent = info.language;
                card.appendChild(mainLang);

                const starCount = document.createElement("span");
                starCount.className = "star";
                starCount.textContent = info.stargazers_count;
                card.appendChild(starCount);

                const updateTime = document.createElement("span");
                updateTime.className = "time";
                updateTime.textContent = formatCustomDate(info.updated_at);
                card.appendChild(updateTime);

                const viewButton = document.createElement("button");
                viewButton.className = "card-button";
                viewButton.textContent = "View Repository";
                viewButton.addEventListener("click", function () {
                    window.open(info.html_url, "_blank")
                });
                card.appendChild(viewButton);
                console.log(info)
            }

            else {
                console.log("not public or no description")
            }
            
        })
    })