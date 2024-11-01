const ArrA = ['профессиональная фотография', 'страстный автолюбитель', 'нравится организовывать праздничные мероприятия'];
const ArrB = ['новейшие разработки в ортопедии (мед.техника)', 'повышение профессиональной компетенции (дополнительное образование, семинары, конференции)', 'служебные командировки (имеется л/а)'];
const ArrC = ['адаптация первоклассников к школе', 'технология производства сухих строительных смесей', 'методы мотивирования персонала к надлежащему выполнению должностных инструкций'];
const ArrD = ['технология производства сухих строительных смесей', 'методы мотивирования персонала к надлежащему выполнению должностных инструкций', 'поиск производителей и поставщиков качественной алкогольной продукции'];

function GetInterests() {
    let ammount = 3;
    let arrIndex = 0;
    let anchName = 'anch1';
    if (arguments[2] != null) {
        if (typeof (arguments[2]) == 'string') {
            anchName = arguments[2];
        }
        else {
            arrIndex = arguments[2];
        }
    }
    if (arguments[1] != null) {
        if (typeof (arguments[2]) == 'string') {
            anchName = arguments[1];
        }
        else {
            arrIndex = arguments[1];
        }
    }
    if (arguments[0] != null) {
        if (typeof (arguments[0]) == 'string') {
            anchName = arguments[0];
        }
        else {
            ammount = arguments[0];
        }
    }
    let interestsArray;
    switch (arrIndex) {
        case 0:
            interestsArray = ArrA;
            break;
        case 1:
            interestsArray = ArrB;
            break;
        case 2:
            interestsArray = ArrC;
            break;
        case 3:
            interestsArray = ArrD;
            break;
        default:
            console.error("Некорректный индекс");
            return;
    }
    AddIn(ammount, Randomize(ammount, interestsArray), anchName);
}

function AddIn(ammount, ArrStr, anchName) {
    const container = document.getElementById('interests');

    for (let i = 0; i < ammount; i++) {
        const div = document.createElement('div');
        div.textContent = ArrStr[i];
        div.id = anchName; 
        container.appendChild(div);
        container.appendChild(document.createElement('br'));
    }
    var img = document.createElement('img');
    let rand = Math.floor(Math.random() * 14);
    let path = "./Images/";
    img.src = (path + "img" + rand + ".jpg")
    container.appendChild(img);
    container.appendChild(document.createElement('br'));
    container.appendChild(document.createElement('br'));

    const anchorElement = document.getElementById(`${anchName}-0`);
    if (anchorElement) {
        anchorElement.scrollIntoView({ behavior: 'smooth' });
    }
}

function Randomize(ammount, arr) {
    let result = [];
    let usedIndices = new Set();

    while (result.length < ammount) {
        let rand = Math.floor(Math.random() * arr.length);
        if (!usedIndices.has(rand)) {
            usedIndices.add(rand);
            result.push(arr[rand]);
        }
    }
    return result;
}
document.addEventListener("DOMContentLoaded", function () {
    GetInterests(3, 0, 'anch1');
    GetInterests();
    GetInterests('anch3',2);
    GetInterests(1, 3, 'anch4');
});