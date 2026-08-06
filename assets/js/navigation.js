document.addEventListener("DOMContentLoaded", () => {

  const menuButton = document.querySelector(".menu-button");

  const navigation = document.querySelector(".site-navigation");


  if (!menuButton || !navigation) {
    return;
  }


  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("is-open");


    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });

});
