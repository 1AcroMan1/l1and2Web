var imagePath = "./Images/";
arrayImage1 = [];
desc = [];
const randomDesc = ['Описание', 'Plingi', 'хг','10x10','Квазар'];
for (var i = 0; i < 15; i++)
{
    arrayImage1.push(imagePath + "img" + i + ".jpg");
    let rand = Math.floor(Math.random() * randomDesc.length);
    desc.push(randomDesc[rand]);
}
var container = document.querySelector('.flexflex');

for (var i = 0; i < arrayImage1.length; i++) {
    var item = document.createElement('div');
    item.className = 'flexflexItem';

    var img = document.createElement('img');
    img.src = arrayImage1[i];

    var tip = document.createElement('div');
    tip.className = 'tip';
    tip.textContent = desc[i];

    item.appendChild(img);
    item.appendChild(tip);
    container.appendChild(item);
}