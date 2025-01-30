<template>
    <footer>
        <img id="btnHome" src="@/components/icons/home.svg" alt="button home"><img class="imgFooter"
            src="@/components/icons/hearts.svg" alt="button like"><img src="@/components/icons/profil.svg" alt="">
    </footer>
</template>

<script>
</script>

<style>
footer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #2F2F2F;
    border-radius: 57px;
    height: 64px;
    position: fixed;
    bottom: 5px;
    width: 100vw;
}


#btnHome {
    width: 49.06px;
    height: 35.16px;
}

#imgFooter {
    width: 35.16px;
    height: 35.16px;
}

#dp_fr {
    width: 30px;
    height: 20px;
}
</style>