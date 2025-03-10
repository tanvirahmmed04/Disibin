const cross= document.querySelector("#cross");
const account= document.querySelector("#account");
const regiboxcross= document.querySelector("#regiboxcross");
const login= document.querySelector(".login");
const regibox= document.querySelector(".regibox");
const regi= document.querySelector(".regi");
const detailsbox= document.querySelector(".detailsbox")



cross.onclick= function(){
    login.style.display= "none";
    detailsbox.style.display="flex";
}

account.onclick= function(act){
    login.style.display= "flex";
    detailsbox.style.display="none";
    act.preventDefault();
    
}
regi.onclick= function(act){
    login.style.display= "none";
    regibox.style.display="flex";
    act.preventDefault();
    
}
regiboxcross.onclick= function(act){
    detailsbox.style.display="flex";
    regibox.style.display="none";
    act.preventDefault();
    
}
