<svg
    class="icon {size ? `icon-${size}` : ""}"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    style="--icon-color: {color}"
>
    <use
        href="#{id}"
    />
</svg>

<script>
    export let id = "";
    export let color = "--color-light";
    export let size = false;
</script>