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
        let template = document.getElementById("repo-template")
        repos.forEach(info => {
            if (info.name !== "portfolio" && info.description) {
                
                const card = template.content.cloneNode(true)

                card.querySelector(".repo-name").textContent = info.name
                card.querySelector(".repo-desc").textContent = info.description
                card.querySelector(".main-lang").textContent = info.language
                card.querySelector(".star-count").textContent = info.stargazers_count
                card.querySelector(".updated").textContent = formatCustomDate(info.updated_at)
// 
//                 card.appendChild(viewButton);
                console.log(info)
                reposContainer.appendChild(card)
            }

            else {
                console.log("not public or no description")
            }
            
        })
    })