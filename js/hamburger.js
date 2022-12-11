export default function hamburgerMenu(btnhamburger,header,menulink){
    document.addEventListener("click", (e)=>{
        if(e.target.matches(btnhamburger) || e.target.matches(`${btnhamburger} *`)){
            document.querySelector(header).classList.toggle("is-active");
            document.querySelector(btnhamburger).classList.toggle("is-active");
        }
        if(e.target.matches(menulink)){
            document.querySelector(header).classList.remove("is-active");
            document.querySelector(btnhamburger).classList.remove("is-active");
        }
    });
}