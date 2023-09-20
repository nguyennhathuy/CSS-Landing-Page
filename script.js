const bookList = [
    {
        name: "Refactoring",
        author: "Martin Fowler",
        topic: "Programming"
    },
    {
        name: "Designing Data-Intensive Applications",
        author: "Martin Kleppmann",
        topic: "Database"
    },
    {
        name: "The Phoenix Project",
        author: "Gene Kim",
        topic: "DevOps"
    }
];
const table = document.querySelector(".data-table table").getElementsByTagName('tbody')[0];
const addBookButton = document.querySelector(".search-book .search-book__button");
function handleDetele() {
    console.log("ondelete");
}
function handleCreateBook() {
    console.log("oncreate");
}
const renderDataTable = (arr) => {
    arr.forEach(item => {
        table.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.author}</td>
                <td>${item.topic}</td>
                <td>
                    <button onclick="handleDetele()">Delete</button>
                </td>
            </tr>
        `
    });
}


addBookButton.onclick = handleCreateBook;


renderDataTable(bookList);

