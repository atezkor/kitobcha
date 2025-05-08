addEventListener("DOMContentLoaded", async function () {
    try {
        const res = await fetch(API_URL.concat("/projects.json"));
        const projects = await res.json()

        const ads = document.getElementById("ads");
        const advertisings = document.getElementById("advertisings");
        ads.classList = "ads"

        advertisings.innerHTML = projects.map(({ title, name, icon, link }) => (
            `
            <div class="">
                <a href="${link}" target="_blank" class="">
                    <div class="">
                        <img src="${icon}"
                            srcset="${icon} 2x"
                            class="ads-img" alt="${title}" itemprop="image" loading="lazy">
                    </div>
                    <div class="">
                        <div title="${name}">
                            <div class="">${name}</div>
                        </div>
                        <div class="score">
                            <div class="" aria-label="O&#8216;rtacha baho: 4,6 / 5">
                                
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            `
        ));
    } catch (e) {

    }
})