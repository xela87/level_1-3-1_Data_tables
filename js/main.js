function DataTable(config, data) {
    let tableArea = document.querySelector(config.parent)
    let table = document.createElement('table')

    // Create head of table
    let tableHeadBlock = document.createElement('thead')
    let headRow = document.createElement('tr')
    for (let i = 0; i <= config.columns.length; i++) {
        let th = document.createElement('th');
        i === 0 ? th.innerText = '№' : th.innerText = config.columns[i - 1].title;
        headRow.appendChild(th);
    }
    tableHeadBlock.appendChild(headRow)
    table.appendChild(tableHeadBlock)

    // Create body of table
    let tableBodyBlock = document.createElement('tbody')
    for (let i = 0; i < data.length; i++) {
        let tableRow = document.createElement('tr')
        tableRow.insertCell().innerText = `${i + 1}`
        for (let j = 0; j < config.columns.length; j++) {
            tableRow.insertCell().innerText = `${data[i][config1.columns[j].field]}`
        }
        if (i % 2 !== 0) {
            tableRow.classList.add('dark-row');
        }
        tableBodyBlock.appendChild(tableRow)
    }
    table.appendChild(tableBodyBlock)
    tableArea.appendChild(table)
}

    // Configuration of table
const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Ім`я', field: 'name'},
        {title: 'Прізвище', field: 'surname'},
        {title: 'Вік', field: 'age'},
    ]
};

    // Data
const users = [
    {id: 30050, name: 'Василь', surname: 'Петров', age: 12},
    {id: 30051, name: 'Петро', surname: 'Васильєв', age: 15},
    {id: 30052, name: 'Микола', surname: 'Іванов', age: 25},
    {id: 30053, name: 'Іван', surname: 'Миколаєв', age: 27},
    {id: 30054, name: 'Ольга', surname: 'Пасічна', age: 5},
    {id: 30055, name: 'Катерина', surname: 'Сковорода', age: 29},
];

    // Create table with Tabulator library
let table = new Tabulator("#usersTable1", {
    data: users,
    columns: config1.columns,
    layout: "fitColumns",
});
table.addColumn({title: '№', field: 'number', formatter: 'rownum'}, true)

    // Create my table
DataTable(config1, users);