// global css
import "./style.css";
// övrig css
// import "./views/static/header/header.css";

// statiska sidor
// måste referera till den specifika .html-filen pga "?raw"-suffixet
import headerHTML from "./views/static/header/header.html?raw";
import home from "./views/home/home";
import contactHTML from "./views/static/contact/contact.html?raw";
import footerHTML from "./views/static/footer/footer.html?raw";

// dynamiska sidor
// behöver bara referera till mappen om filen heter index.js.
// filer med det namnet laddas automatiskt

// lägg tillbaka när vi har en funktion i /about
import about from "./views/about";

// en funktion för att rendera olika sidor baserat på webbläsarens "path"
// för att ändra pathen kan du t.ex. skapa en anchor tag med href="/home"
// "/home" kommer då att läggas till i url:en
const getCurrentPage = () => {
  const currentPage = window.location.pathname;

  switch (currentPage) {
    case "/home":
      return home();
    // lägg tillbaka när vi har en funktion i /about
    case "/about":
      return about();
    case "/contact":
      return contactHTML;
    default:
      return (window.location.pathname = "/home");
  }
};

const app = document.querySelector("#app");

// funktionen som renderar appen. kommer behöva köras om varje gång sidan ska omrenderas
// detta är grunden i hur man gör statiska html-sidor till interaktiva applikationer
const renderApp = () => {
  const currentPage = getCurrentPage();

  if (typeof currentPage === "string") {
    app.innerHTML = `
      ${headerHTML}
      ${currentPage}
      ${footerHTML}
    `;
  } else {
    app.innerHTML = `
        ${headerHTML}
        ${footerHTML}
        `;
    // footer är en js-fil som returnerar en template string med html-element.
    // ett mellanting mellan statisk och dynamisk

    // currentPage är i det här fallet ett objekt innehållande HTML-element
    // något i stil med document.createElement("div")
    app.insertBefore(currentPage, app.querySelector("footer"));
  }
};

// initial render
renderApp();

//rerender logic
// en eventListner som lyssnar på ändringar i URL:ens historik
window.addEventListener("popstate", renderApp);
