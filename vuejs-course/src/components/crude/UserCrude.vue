<template>
    <div class="container">
        <h1>CRUD Operation</h1>

        <div class="buttons">
            <button @click="createUser">Create</button>
            <button @click="getUser">Read</button>
            <button @click="updateUser">Update</button>
            <button @click="deleteUser">Delete</button>
        </div>

        <p v-if="loading">Loading...</p>
        <p v-if="message" class="message">{{ message }}</p>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
        <section v-if="users.length > 0">
            <h2>User List</h2>
            <div v-for="user in users" :key="user.id" class="user-card">
                <h3>{{ user.name }}</h3>
                <p>Emai: {{ user.name || "No email" }}</p>
                <p>ID: {{ user.id }}</p>
            </div>
        </section>

    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import axios from 'axios'

    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    const users = ref([])
    const loading = ref(false)
    const message = ref("")
    const errorMessage = ref("")

    function clearMessages(){
        message.value = " "
        errorMessage.value = " "
    }

    // Create User
    async function createUser(){
        clearMessages()
        loading.value = true

        try {
            const response = await axios.post(apiUrl, {
                name: "Thorn",
                email: "thorn@gmail.com"
            })
            users.value.push(response.data) // return users
            message.value = `User Created: ${response.data.name}`
            console.log("Create user: ", response.data)
        } catch (error) {
            errorMessage.value = "Failed to create user, Please check again!!"
            console.log(error)
        }finally{
            loading.value = false
        }
    }

    // Read Data
    async function getUser(){
        clearMessages()
        loading.value = true
        try{
            const response = await axios.get(apiUrl)
            users.value = response.data
            message.value = "Users loaded successfully"
            console.log("Users: ", response.data)
        }catch(error){
            errorMessage.value = "Failed to load users."
            console.error(error)
        }finally{
            loading.value = false
        }
    }

    // Update user
    async function updateUser() {
        clearMessages()
        loading.value = true

        try{
            const response = await axios.put(`${apiUrl}/1`,{
                id: 1,
                name: "Update Thorn",
                email: "updatethorn@gmail.com"
            })
            const userIndex = users.value.findIndex(
                user => user.id === 1
            )
            if(userIndex !== -1){
                users.value[userIndex] = response.data
            }else{
                users.value.push(response.data)
            }
            message.value = `User updated: ${response.data.name}`
            console.log("Updated user: ", response.data)
        }catch(error){
            errorMessage.value = "Failed to update user."
            console.error(error)
        }finally{
            loading.value = false
        }

        // Delete User
        async function deleteUser(){
            clearMessages()
            loading.value = true

            try{
                await axios.delete(`${apiUrl}/1`)
                users.value = users.value.filter(
                    user => user.id !== 1
                )
                message.value = "User with ID 1 deleted successfully."
                console.error("User deleted")
            }catch(error){
                errorMessage.value = "Failed to delete user."
                console.error(error)
            }finally{
                loading.value = false
            }
        }

    }
    
</script>

<style scoped>

    .container{
        max-width: 700px;
        margin: 40px auto;
        padding: 20px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .buttons{
        display: flex;
        gap: 10px;
        margin-bottom: 20px;
    }

    button{
        padding: 10px 18px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        background: #333;
        color: white;
    }

    button:hover{
        opacity: 0.8;
    }

    .message{
        padding: 10px;
        background: #e8f5e9;
        border-radius: 6px;
    }

    .error{
        padding: 10px;
        background: #ffebee;
        color: #c62828;
        border-radius: 6px;
    }

    .user-card{
        margin-bottom: 12px;
        padding: 15px;
        border: 1px solid #ddd;
        border-radius: 8px;
    }

    .user-card h3{
        margin: 0 0 8px;
    }

</style>