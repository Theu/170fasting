const menu = ['comunicato','partecipanti', 'partecipa'];

const appendElementToBody = (parent, element, className) =>{
    const parentElement = Array.from(document.getElementsByTagName(parent));
    parentElement.forEach(container => (
            console.log('container :', container),
            container.appendChild(element).setAttribute('class', className)
        )
    );
}

const appendElementToClassed = (parentClass, element, className) =>{
    const parentElement = Array.from(document.getElementsByClassName(parentClass));
    parentElement.forEach(container => (
            console.log('container :', container),
            container.appendChild(element).setAttribute('class', className)
        )
    );
}

const createElement = (element, className) => {
    const elementCreated = document.createElement(element);
    const arrayFromCreatedElement = Array.from(elementCreated);
    
    console.log('arrayFromCreatedElement ---:', arrayFromCreatedElement);

    return elementCreated
}

const createMenu = (array) => {
    array.forEach(element => {
        console.log(element);
        
    });
};

const wrapper = createElement('div','wrapper');
const menuListContainer
console.log('wrapper :', wrapper);

const modifyElement = (element) => {
    const arrayFromCreatedElement = Array.from(document.getElementsByTagName(element));
    
    console.log('arrayFromCreatedElement :', arrayFromCreatedElement);
}


appendElementToBody('body', wrapper, 'wrapper')
// appendElement('body', wrapper, 'wrapper')
// modifyElement(menuContainer)

createMenu(menu)
