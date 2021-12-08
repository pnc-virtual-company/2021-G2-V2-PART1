<template>
    <section>
        <br>
        <h3>Find event...</h3>
        <div class="find-event-container">
            <form class="search-form">
                <input type="text" placeholder="Search..." class="search-event">
                <button type="submit" class="fa fa-search" id="btnSearch" style="font-size:25px; color:#fff;"></button>
            </form>
            <input type="text" placeholder="City..." class="search-city">
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

    h3{
        margin-left: 20%;
    }

    .find-event-container{
        width: 60%;
        border-radius: 10px;
        display: flex;
        padding: 0px;
        box-sizing: border-box;
        margin-left: 20%;
    }

    .search-form{
        display: flex;
    }

    .search-city{
        margin-right: 0%;
    }

    .search-form > .search-event{
        margin-left: 0%;
        width: 40%;
        background: #888;
    }
</style>