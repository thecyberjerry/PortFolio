export function Scrolltobottom() {
    console.log("scrolling to bottom");
    const element = document.getElementById("footer");
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}