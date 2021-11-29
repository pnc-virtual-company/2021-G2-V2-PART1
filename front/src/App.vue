<template>
    <div>
        <router-view @sign-up="createUser"></router-view>
    </div>
</template>

<script>
    export default {
        emits: ['sign-up'],
        data() {
            return {
                userLists: []
            }
        }, 
        methods: {
            createUser(username, email, password, confirm_password){
                let newUser = {
                    name: username,
                    password: password,
                    email: email,
                    confirm_password: confirm_password
                }
                console.log(newUser)
            }
        },       
    }
</script>

<style lang="scss" scoped>

</style>