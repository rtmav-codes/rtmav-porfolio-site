<style lang="scss" global>
    @import "../styles/main.scss";
</style>

<!-- <Nav /> -->
<slot></slot>

<footer class="flex-center my-4">
    <p class="text-micro">© {new Date().getFullYear()} {general.name} | Made by <a href="https://portfolio.rtmav.site" class="link" target="_blank" rel="noreferrer">rtmav</a></p>
</footer>

<script>
    export const prerender = true;

    import general from "src/data/general.js";
</script>