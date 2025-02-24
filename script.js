function scrollToEelement(elementSelector, instance =0) {
  const elements = document.querySelectorAll(elementSelector);
    if (elements.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}
const link1 = document.getElementsByID('link1');
const link2 = document.getElementsByID('link2');
const link3 = document.getElementsByID('link3');
const link4 = document.getElementsByID('link4');

link1.addEventListener('click', () => {scrollToEelement('.serv-desc');})