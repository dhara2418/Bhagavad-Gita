function openChapter(chapterNo) {
    window.location.href = `chapter.html?no=${chapterNo}`;
}

if (document.getElementById("chapter")) {

    const params = new URLSearchParams(window.location.search);
    const chapterNo = params.get("no");


    fetch(`https://vedicscriptures.github.io/chapter/${chapterNo}`)
        .then(response => response.json())
        .then(async data => {

            document.getElementById("chapter").innerHTML = `
            <div class="col-12">
             <div class="img">
            <ol class="breadcrumb ">
                <li class="breadcrumb-item "><a href="./index.html" class="text-white">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page"><a href="./chapters.html" class="text-white">Chapter : ${chapterNo}</a></li>
            </ol>
        </div>
         </div>
            <div class="chapter-detail pt-3 mt-5" style="border-radius:20px; background-color:#F5F0EA;">
            <h3>Chapter ${data.chapter_number}: ${data.name}</h3>
            <p>Total Verses: ${data.verses_count}</p>
            </div>
            <p class="pt-5">${data.summary.hi}</p>
           
            `;

            const versesBox = document.getElementById("verses");
            versesBox.innerHTML = "";

            for (let i = 1; i <= data.verses_count; i++) {
                fetch(`https://vedicscriptures.github.io/slok/${chapterNo}/${i}`)
                const response = await fetch(
                    `https://vedicscriptures.github.io/slok/${chapterNo}/${i}`
                );
                const verse = await response.json();

                versesBox.innerHTML += `
                       
                            <div class="verses-detail" onclick="openShlok(${chapterNo}, ${i})" style="cursor:pointer">
                            <h3>Verse ${i}</h3>
                            <p class="card-text ">${verse.tej.ht.slice(0, 150)}..</p>
                             </div>  
            `

            }
        });
}