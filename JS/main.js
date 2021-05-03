
let infoBtn = document.querySelector('.infoBtn');
let infoEl = document.querySelector('.info');
let form = document.forms.inputClassroom;


let fullClassroom = [
    {name:'Иванна', surname:'Зимина', id: 1},
    {name:'Артем', surname:'Шевчук', id: 2},
    {name:'Андрей', surname:'Тимошенко', id: 3},
    {name:'Денис', surname:'Рудик', id: 4},
    {name:'Наталья', surname:'Горошко', id: 5},
    {name:'Андрей', surname:'Стегний', id: 6},
    {name:'Александр', surname:'Гетьманский', id: 7},
    {name:'Владимир', surname:'Антоненко', id: 8},
];


infoBtn.addEventListener('click', () => {

    let formData = new FormData(form);
    let inputId = formData.get('inputId');
    
    
    let item = fullClassroom.find(item => item.id == inputId);

    const html = `
    <div class="person">
    ${item.id}. ${item.name} ${item.surname}
    </div>
    `;
        
    infoEl.innerHTML = html;
   
});
