async function translateText() {

    const inputText =
        document.getElementById("inputText").value;

    const sourceLang =
        document.getElementById("sourceLang").value;

    const targetLang =
        document.getElementById("targetLang").value;

    const url =
`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${sourceLang}|${targetLang}`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("outputText").value =
            data.responseData.translatedText;

    }

    catch(error) {

        alert("Translation Failed");

    }

}