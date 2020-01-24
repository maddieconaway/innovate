document.addEventListener('DOMContentLoaded', function () {
    let btnItemList = [];
    let colorArray = ['palevioletred', 'peru', 'yellowgreen', 'rosybrown', 'brown', 'red', 'blue', 'black'];

    let headerContainer = document.createElement('div');
    headerContainer.classList = "header-container";

    let h1 = document.createElement('h1');
    let h1TextNode = document.createTextNode('this is an h1.');
    h1.className = 'h1';
    h1.append(h1TextNode);
    headerContainer.appendChild(h1);

    let h2 = document.createElement('h2');
    let h2TextNode = document.createTextNode('this is an h2.');
    h2.className = 'h2';
    h2.append(h2TextNode);
    headerContainer.appendChild(h2);

    let h3 = document.createElement('h3');
    let h3TextNode = document.createTextNode('this is an h3.');
    h3.className = 'h3';
    h3.append(h3TextNode);
    headerContainer.appendChild(h3);

    let h4 = document.createElement('h4');
    let h4TextNode = document.createTextNode('this is an h4.');
    h4.className = 'h4';
    h4.append(h4TextNode);
    headerContainer.appendChild(h4);

    let h5 = document.createElement('h5');
    let h5TextNode = document.createTextNode('this is an h5.');
    h5.className = 'h5';
    h5.append(h5TextNode);
    headerContainer.appendChild(h5);

    let h6 = document.createElement('h6');
    let h6TextNode = document.createTextNode('this is an h6.');
    h6.className = 'h6';
    h6.append(h6TextNode);
    headerContainer.appendChild(h6);

    let btnAddItem = document.createElement('button');
    let btnCaption = document.createTextNode('Click to add new list item');
    btnAddItem.append(btnCaption);
    btnAddItem.classname = 'btn';
    btnAddItem.id = 'btn';
    headerContainer.appendChild(btnAddItem);

    let br = document.createElement('br');
    headerContainer.appendChild(br);
    headerContainer.appendChild(br);

    let btnList = document.createElement('ul');
    btnList.id = 'lList';
    headerContainer.appendChild(btnList);

    document.body.appendChild(headerContainer);

    headerContainer.addEventListener('dblclick', (e) => {
        e.target.style.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    });

    btnAddItem.addEventListener('click', (e) => {
        let ul = document.getElementById('lList');
        let li = document.createElement('li');
        let liCaption = document.createTextNode = 'This is list item ' + (ul.childNodes.length + 1);
        li.append(liCaption);
        ul.appendChild(li);
    });

    btnList.addEventListener('click', (e) => {
        e.target.style.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    });

    btnList.addEventListener('dblclick', (e) => {
        let ul = document.getElementById('lList');
        ul.removeChild(event.target);
    });
});



