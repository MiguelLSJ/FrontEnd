function link (num) {
    switch (num) {
        case 1 : {
            //window.location.href = "https://brasil.un.org/pt-br/sdgs/1";
            window.open("https://brasil.un.org/pt-br/sdgs/1");
            break;
        }
        case 2 : {
            window.open("https://brasil.un.org/pt-br/sdgs/2");
            break;
        }
        case 3 : {
            window.open("https://brasil.un.org/pt-br/sdgs/3");
            break;
        }
        case 4 : {
            window.open("https://brasil.un.org/pt-br/sdgs/4");
            break;
        }
        case 5 : {
            window.open("https://brasil.un.org/pt-br/sdgs/5");
            break;
        }
        case 6 : {
            window.open("https://brasil.un.org/pt-br/sdgs/6");
            break;
        }
        case 7 : {
            window.open("https://brasil.un.org/pt-br/sdgs/7");
            break;
        }
        case 8 : {
            window.open("https://brasil.un.org/pt-br/sdgs/8");
            break;
        }
        case 9 : {
            window.open("https://brasil.un.org/pt-br/sdgs/9");
            break;
        }
        case 10 : {
            window.open("https://brasil.un.org/pt-br/sdgs/10");
            break;
        }
        case 11 : {
            window.open("https://brasil.un.org/pt-br/sdgs/11");
            break;
        }
        case 12 : {
            window.open("https://brasil.un.org/pt-br/sdgs/12");
            break;
        }
        case 13 : {
            window.open("https://brasil.un.org/pt-br/sdgs/13");
            break;
        }
        case 14 : {
            window.open("https://brasil.un.org/pt-br/sdgs/14");
            break;
        }
        case 15 : {
            window.open("https://brasil.un.org/pt-br/sdgs/15");
            break;
        }
        case 16 : {
            window.open("https://brasil.un.org/pt-br/sdgs/16");
            break;
        }
        case 17 : {
            window.open("https://brasil.un.org/pt-br/sdgs/17");
            break;
        }
    }
    num = 0;
}

const body = document.querySelector('body');
const toggleButt = document.getElementById('lightdark');

toggleButt.addEventListener("click", () => {
    body.classList.toggle("darkmode");
});