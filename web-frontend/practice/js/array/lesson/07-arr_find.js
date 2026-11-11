let users = [
    {
        id: 1,
        nameUser: "Sok"
    },
    {
        id: 2,
        nameUser: "Sao"
    },
    {
        id: 3,
        nameUser: "Ahtet"
    }
]

let currentUser = users.find(user => user.id === 1)
console.log(currentUser)