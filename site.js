function navbar() {
    var divNavbar = document.getElementById("navbar");

    var nav = document.createElement("nav");

    var navwrapper = document.createElement("div");
    navwrapper.className = "nav-wrapper blue darken-4"

    var logo = document.createElement("a");
    logo.className = "brand-logo right";
    logo.href = "match-en-cours.html";
    logo.innerHTML = "CS:TV"

    var links = document.createElement("ul");
    links.id = "nav-mobile";
    links.className = "left hide-on-med-and-down";

    var matchLink = document.createElement("li");
    var matchRef = document.createElement("a");
    matchRef.href = "matchs-en-cours.html";
    matchRef.innerHTML = "Matchs";

    var resultatLink = document.createElement("li");
    var resultatRef = document.createElement("a");
    resultatRef.href = "resultat.html";
    resultatRef.innerHTML = "Résultats"

    var tournoisLink = document.createElement("li");
    var tournoisRef = document.createElement("a");
    tournoisRef.href = "tournois.html";
    tournoisRef.innerHTML = "Tournois"


 //A MODIF PLUS TARD
    var mobileLinks = document.createElement("ul");
    mobileLinks.id = "nav-mobile";
    mobileLinks.className = "left hide-on-large-only";

    var mobileLink = document.createElement("li");
    mobileDropdownIcon = document.createElement("a");
    mobileDropdownIcon.href = "#";
    mobileDropdownIcon.innerHTML = "...";
//////////////////

    divNavbar.appendChild(nav);
    nav.appendChild(navwrapper);

    navwrapper.appendChild(logo);
    navwrapper.appendChild(links);
    
    links.appendChild(matchLink);
    matchLink.appendChild(matchRef);

    links.appendChild(resultatLink);
    resultatLink.appendChild(resultatRef);

    links.appendChild(tournoisLink);
    tournoisLink.appendChild(tournoisRef);

    navwrapper.appendChild(mobileLinks);
    mobileLinks.appendChild(mobileLink);
    mobileLink.appendChild(mobileDropdownIcon);
}

function matchCardHeader() {
    var matchActions = document.getElementById("match-actions");

    var matchsEnCours = document.createElement("a");
    var matchsAVenir = document.createElement("a");

    matchsEnCours.href = "matchs-en-cours.html";
    matchsEnCours.innerHTML = "Matchs en cours";

    matchsAVenir.href = "matchs-a-venir.html";
    matchsAVenir.innerHTML = "Matchs à venir";

    matchActions.appendChild(matchsEnCours);
    matchActions.appendChild(matchsAVenir);
}