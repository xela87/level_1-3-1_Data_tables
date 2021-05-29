function DataTable(config, data) {
// содержимое этой функции вам и нужно написать :)
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

// <div id="usersTable">
//     <table>
//         <thead>
//         <tr>
//             <th>№</th>
//             <th>Имя</th>
//             <th>Фамилия</th>
//             <th>Возраст</th>
//         </tr>
//         </thead>
//         <tbody>
//         <tr>
//             <td>1</td>
//             <td>Вася</td>
//             <td>Петров</td>
//             <td>12</td>
//         </tr>
//         <tr>
//             <td>2</td>
//             <td>Вася</td>
//             <td>Васечкин</td>
//             <td>15</td>
//         </tr>
//         </tbody>
//     </table>
// </div>
