function openShlok(chapterNo, slok) {
    window.location.href = `shlok.html?cno=${chapterNo}&sno=${slok}`;
}


if (document.getElementById("slok")) {

    const params = new URLSearchParams(window.location.search);
    const chapterNo = params.get("cno");
    const shlokNo = params.get("sno");

    fetch(`https://vedicscriptures.github.io/slok/${chapterNo}/${shlokNo}`)
        .then(response => response.json())
        .then(shlok => {

            document.getElementById("slok").innerHTML = `
             <div class="col-6 " style="margin:20px auto;">
                <ol class="d-flex shlok-font">
                <li class="px-2 fw-bold" ><a href="./index.html"> Chapter > </a></li>
                <li class="px-2 fw-bold" ><a href="./chapter.html?no=${chapterNo}"> Chapter ${chapterNo} > </a></li>
                <li class="px-2 fw-bold" ><a href="./shlok.html?sno=${shlokNo}"> Verse ${shlokNo}</a> </li>
                 </ol>
            <div class="shlok-detail pt-5">
                <p class="text-center mb-4" style="border-radius:20px;padding:20px; background-color:#F5F0EA;">Bhagavad
                    Gita :  Chapter ${chapterNo} , Verse ${shlokNo}</p>
                <h3 class="pt-5 text-center pb-5"> ${shlok.slok}</h3>
                <h4 class="pt-2 pb-2 ">Translation</h4>
                <span >${shlok.siva.et}</span><br>
                <h4 class="pt-5 ">Commentary</h4>
                <p class=" pb-5">${shlok.siva.ec}</p>
            </div>
        </div> `;
        });

}
