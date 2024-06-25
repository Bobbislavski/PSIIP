document.addEventListener('DOMContentLoaded', () => {

    const links = document.querySelectorAll('a');


    setTimeout(() => {
        let linksInfo = "Links on the page:\n";
        links.forEach(link => {
            linksInfo += `${link.href}\n`;
        });
        alert(linksInfo);
    }, 1000);

 
    const elementToRemove = document.querySelector('#element3');
    if (elementToRemove) {
        elementToRemove.addEventListener('click', () => {
            elementToRemove.remove();
        });
    }

 
    document.getElementById('changeStyleButton').addEventListener('click', () => {

        document.body.style.backgroundColor = 'yellow';
        
    
        document.body.style.fontFamily = 'Arial';
        document.body.style.fontSize = '12px';
        document.body.style.color = 'blue';


        const images = document.querySelectorAll('img');
        images.forEach(image => {
            image.style.border = '1px solid green';
        });
    });


    const removableImage = document.querySelector('#removableImage');
    if (removableImage) {
        removableImage.addEventListener('click', () => {
            removableImage.remove();
        });
    }
});
