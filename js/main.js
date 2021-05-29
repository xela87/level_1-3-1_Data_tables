function DataTable(config, data) {
    let tableArea = document.querySelector(config.parent)
    let table = document.createElement('table')

    let tableRowHead = document.createElement('tr')
    let tableHeadBlock = document.createElement('thead')
    let tableHead = document.createElement('th')
    tableHead.innerText = '№'
    tableRowHead.appendChild(tableHead)
    tableHeadBlock.appendChild(tableRowHead)
    table.appendChild(tableHeadBlock)
    for (let i = 0; i < config.columns.length; i++) {
        let th = document.createElement('th');
        th.innerText = config.columns[i].title;
        tableRowHead.appendChild(th);
    }

    let tableBodyBlock = document.createElement('tbody')
    for (let i = 1; i <= data.length; i++) {
        let tableRow = document.createElement('tr')
        let tableData = document.createElement('td')
        tableData.innerText = `${i}`
        let nameData = document.createElement('td')
        nameData.innerText = `${data[i-1].name}`
        let surnameData = document.createElement('td')
        surnameData.innerText = `${data[i-1].surname}`
        let ageData = document.createElement('td')
        ageData.innerText = `${data[i-1].age}`
        tableRow.appendChild(tableData);
        tableRow.appendChild(nameData);
        tableRow.appendChild(surnameData);
        tableRow.appendChild(ageData);
        tableBodyBlock.appendChild(tableRow)
    }
    
    table.appendChild(tableBodyBlock)
    tableArea.appendChild(table)
}

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Имя', value: 'name'},
        {title: 'Фамилия', value: 'surname'},
        {title: 'Возраст', value: 'age'},
    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
    {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
];

DataTable(config1, users);