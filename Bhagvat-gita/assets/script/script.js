if (document.getElementById("chapters")) {
    fetch('https://vedicscriptures.github.io/chapters')
        .then(response => response.json())
        .then(data => {
            let cards = "";

            data.forEach(chap => {
                cards += `       
                
            <div class="col-md-6 mb-4">
            <div class="card chapter-card" onclick="openChapter(${chap.chapter_number})">
            <div class="card-body">
            <h6 class="card-subtitle mb-2 ">Chapter  ${chap.chapter_number}</h6>
            <h5 class="card-title mt-3 ">${chap.name}</h5>
            <p class="card-text mt-4">${chap.summary.hi.slice(0, 150)}...</p>
            
            <p class="card-text mt-4"> <i class="bi bi-list-ul me-2"></i>${chap.verses_count} Verses</p>
            </div>
            </div>
            </div>  
            `
            });
            document.getElementById("chapters").innerHTML = cards;
        })
}


function subscribeUser() {
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userMail").value.trim();

    if (name == "" || email == "") {
        alert("Please Fill All Fields");
        return;
    }

    let subscriber = JSON.parse(localStorage.getItem("subscribers")) || [];

    const userData = {
        name: name,
        email: email
    };
    subscriber.push(userData);

    localStorage.setItem("subscribers", JSON.stringify(subscriber));

    document.getElementById("userName").value = "";
    document.getElementById("userMail").value = "";

    alert("Subscription Successful ! ");

}
