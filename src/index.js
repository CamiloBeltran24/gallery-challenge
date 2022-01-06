function goDark() {
  console.log("click");
  const btn = document.getElementById("btn_dark");
  const boxes = document.querySelectorAll(".statsContainer__stat");
  const name = document.querySelector("p.profile__name");
  const picture = document.querySelector(".profile__picture>img");
  const gallery = document.querySelector(".galleryGrid");
  console.log(boxes);

  if (btn.classList.contains("dark")) {
    btn.classList.remove("dark");
    document.body.classList.remove("dark");
    name.classList.remove("dark");
    picture.classList.remove("dark");
    gallery.classList.remove("dark");
    boxes.forEach((box) => {
      box.classList.remove("dark");
    });
  } else {
    btn.classList.add("dark");
    document.body.classList.add("dark");
    name.classList.add("dark");
    picture.classList.add("dark");
    gallery.classList.add("dark");
    boxes.forEach((box) => {
      box.classList.add("dark");
    });
  }
}
