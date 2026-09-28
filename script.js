// ========================================
// 作品データ
// ========================================

const works = [
    {
        image: "img/01.jpg",
        title: "01 「アニメ 不滅のあなたへ」フシ（ファンアート）"
    },
    {
        image: "img/02.jpg",
        title: "02「モブサイコ100」影山茂夫（ファンアート）"
    },
    {
        image: "img/03.jpg",
        title: "03「鬼滅の刃」冨岡義勇（ファンアート）"
    },
    {
        image: "img/04.jpg",
        title: "04 「テッド」知人にプレゼントした誕生日イラスト"
    },
    {
        image: "img/05.jpg",
        title: "05「ヒプノシスマイク」四十物十四（ファンアート）"
    },
    {
        image: "img/06.jpg",
        title: "06「モブサイコ100」（ファンアート）"
    },
    {
        image: "img/07.jpg",
        title: "07 ペットのイラスト（愛犬）"
    },
    {
        image: "img/08.jpg",
        title: "08 ペットのイラスト2（愛犬）"
    },
    {
        image: "img/09.jpg",
        title: "09 「ヒプノシスマイク」白膠木簓（ファンアート）"
    },
    {
        image: "img/10.jpg",
        title: "10 ペットのイラスト3（愛犬）"
    },
    {
        image: "img/11.jpg",
        title: "11 シマエナガのイラスト"
    },
    {
        image: "img/12.jpg",
        title: "12 オリジナルキャラクター（オムライス擬人化）"
    },
    {
        image: "img/13.jpg",
        title: "13 モブサイコ100 （ファンアート）"
    },
    {
        image: "img/14.jpg",
        title: "14 オリジナルキャラクター（猫と少年）"
    },
    {
        image: "img/15.jpg",
        title: "15 ペットのイラスト4（愛犬）"
    },
    {
        image: "img/16.jpg",
        title: "16 ペットのイラスト5（愛犬）"
    },
    {
        image: "img/17.jpg",
        title: "17 「ちいかわ」栗まんじゅう（ファンアート）"
    },
    {
        image: "img/18.jpg",
        title: "18 オリジナルイラスト（パンケーキ）※Adobe illustratorを使用"
    },
    {
        image: "img/19.jpg",
        title: "19 オリジナルキャラクター（Mito）"
    },
    {
        image: "img/20.jpg",
        title: "20 「僕のヒーローアカデミア」トガヒミコ（ファンアート）"
    },
    {
        image: "img/21.jpg",
        title: "21 オリジナルキャラクター 少女"
    }
];


// ========================================
// Gallery生成
// ========================================

const gallery = document.getElementById("gallery");

works.forEach((work, index) => {

    const number = String(index + 1).padStart(2, "0");

    const article = document.createElement("article");

    article.className = "work";

    article.innerHTML = `
        <button
            class="work-button"
            data-image="${work.image}"
            aria-label="${work.title}"
        >
            <img
                src="${work.image}"
                alt="${work.title}"
                loading="lazy"
            >
        </button>

        <div class="work-info">
            <span>${number}</span>
            <h2>${work.title}</h2>
        </div>
    `;

    gallery.appendChild(article);

});


// ========================================
// Lightbox
// ========================================

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");


// 作品クリック
gallery.addEventListener("click", (event) => {

    const button = event.target.closest(".work-button");

    if (!button) return;

    const image = button.dataset.image;

    lightboxImage.src = image;

    lightbox.classList.add("active");

    document.body.classList.add("no-scroll");

});


// ========================================
// Lightboxを閉じる
// ========================================

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.classList.remove("no-scroll");

    // 閉じたあと画像を消す
    setTimeout(() => {
        lightboxImage.src = "";
    }, 300);

}


lightboxClose.addEventListener("click", closeLightbox);


// 背景クリック
lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {
        closeLightbox();
    }

});


// ESCキー
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {
        closeLightbox();
    }

});