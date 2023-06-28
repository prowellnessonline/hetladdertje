function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }



  /// voor de sidebar

  var sideBar = document.getElementById("mobile-nav");
var toggler = document.getElementById("mobile-toggler");
sideBar.style.transform = "translateX(-260px)";
let moved = true;

function sidebarHandler() {
    if (moved) {
        sideBar.style.transform = "translateX(0px)";
        moved = false;
    } else {
        sideBar.style.transform = "translateX(-260px)";
        moved = true;
    }
}


/// contact pagina

const MenuHandler = (flag) => {
    if (flag) {
        document.getElementById("list").classList.add("top-100");
        document.getElementById("list").classList.remove("hidden");
        document.getElementById("close").classList.remove("hidden");
        document.getElementById("open").classList.add("hidden");
    } else {
        document.getElementById("list").classList.remove("top-100");
        document.getElementById("list").classList.add("hidden");
        document.getElementById("close").classList.add("hidden");
        document.getElementById("open").classList.remove("hidden");
    }
};



// sign in page

function showPassword() {
    var passwordType = document.getElementById("myInput");
    var show = document.getElementById("show");
    var hide = document.getElementById("hide");
    if (passwordType.type === "password") {
        passwordType.type = "text";
        hide.classList.remove("hidden");
        show.classList.add("hidden");
    } else {
        passwordType.type = "password";
        hide.classList.add("hidden");
        show.classList.remove("hidden");
    }
}