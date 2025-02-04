const requests = [
  {
    id: "۱۲۳۴۵۶",
    name: "محمد محمدی",
    date: "۱۴۰۲/۷/۳",
    img: "/src/assets/images/avatar-1.jpg",
  },
  {
    id: "۱۲۳۵۶۴",
    name: "رضا صادقی",
    date: "۱۴۰۲/۷/۳",
    img: "/src/assets/images/avatar-2.jpg",
  },
  {
    id: "۱۳۴۵۶۲",
    name: "نازنین دانا",
    date: "۱۴۰۰/۷/۳",
    img: "/src/assets/images/avatar-3.jpg",
  },
  {
    id: "۱۲۴۵۳۶",
    name: "سپیده آرامش",
    date: "۱۴۰۱/۷/۳",
    img: "/src/assets/images/avatar-4.jpg",
  },
  {
    id: "۲۳۴۱۵۶",
    name: "حسام پیروز ",
    date: "۱۴۰۲/۷/۳",
    img: "/src/assets/images/avatar-5.jpg",
  },
  {
    id: "۳۴۱۴۵۶",
    name: "نسیم شاد",
    date: "۱۴۰۴/۷/۳",
    img: "/src/assets/images/avatar-6.jpg",
  },
];

const container = document.querySelector(".current-requests__items");

container.innerHTML = requests
  .map(
    (request) => `
    <div class="item">
        <div class="items__header">
            <div class="items__header__link">
                <span class="badge">۲</span>
                <p>آپلود مستندات</p>
            </div>
            <span class="items__header__date">${request.date}</span>
        </div>
        <div class="items__content">
            <div class="items__content__title">
                <h2>درخواست عضویت</h2>
                <p class="items__content__title__number">شناسه درخواست ${request.id}#</p>
            </div>
            <div class="avatar">
                <div class="avatar__img">
                    <img src="${request.img}" alt="avatar-img" />
                </div>
                <p class="avatar__text">${request.name}</p>
            </div>
            <button class="btn btn--items__content">مشاهده درخواست</button>
        </div>
    </div>
`
  )
  .join("");
