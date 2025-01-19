export function Scrolltobottom() {
    const element = document.getElementById("footer");
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}