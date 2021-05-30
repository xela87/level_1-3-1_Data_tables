function DataTable(config, data) {
    let tableArea = document.querySelector(config.parent)
    let table = document.createElement('table')
    let headRow = document.createElement('tr')
    let tableHeadBlock = document.createElement('thead')

    for (let i = 0; i <= config.columns.length; i++) {
        let th = document.createElement('th');
        i === 0 ? th.innerText = '№' : th.innerText = config.columns[i - 1].title;
        headRow.appendChild(th);
    }
    tableHeadBlock.appendChild(headRow)
    table.appendChild(tableHeadBlock)

    let tableBodyBlock = document.createElement('tbody')
    for (let i = 0; i < data.length; i++) {
        let tableRow = document.createElement('tr')
        let numberOfRow = document.createElement('td')
        numberOfRow.innerText = `${i + 1}`
        let nameData = document.createElement('td')
        nameData.innerText = `${data[i].name}`
        let surnameData = document.createElement('td')
        surnameData.innerText = `${data[i].surname}`
        let ageData = document.createElement('td')
        ageData.innerText = `${data[i].age}`
        tableRow.append(numberOfRow, nameData, surnameData, ageData)
        if (i % 2 !== 0) {
            tableRow.classList.add('dark-row');
        }
        tableBodyBlock.append(tableRow)
    }
    table.appendChild(tableBodyBlock)
    tableArea.appendChild(table)
}

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Ім`я', value: 'name'},
        {title: 'Прізвище', value: 'surname'},
        {title: 'Вік', value: 'age'},
    ]
};

const users = [
    {id: 30050, name: 'Василь', surname: 'Петров', age: 12},
    {id: 30051, name: 'Петро', surname: 'Васильєв', age: 15},
    {id: 30052, name: 'Микола', surname: 'Іванов', age: 25},
    {id: 30053, name: 'Іван', surname: 'Миколаєв', age: 27},
    {id: 30054, name: 'Ольга', surname: 'Пасічна', age: 5},
    {id: 30055, name: 'Катерина', surname: 'Сковорода', age: 29},
];

DataTable(config1, users);


new Tabulator("#usersTable1", {
    data: users,
    columns: config1.columns,
    autoColumns: true,
    layout: "fitColumns",
});