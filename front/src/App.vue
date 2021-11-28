<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import SignUp from './components/authentication/SignUp.vue';
    export default {
        components: { SignUp },
        data() {
            return {
                users: []
            };
        },
        methods: {
            signUp(first_name, last_name, phone_number, email, password, confirm_password){
                let newUser = {
                    first_name: first_name,
                    last_name: last_name,
                    phone_number: phone_number,
                    email: email,
                    password: password,
                    confirm_password: confirm_password,
                }
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>