<script>
    import { fly, fade } from "svelte/transition";

    import modals, { close } from "src/stores/modals.js";

    import Icon from "src/components/icon.svelte";

    $: currentModal = $modals.length > 0 ? $modals[$modals.length - 1] : false;
</script>

<style>
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.568);
    }

    .content {
        width: 90%;
        max-width: 40rem;
        position: relative;
    }
</style>

{#if currentModal}
    {#key currentModal}
        <div
            class="modal flex-center"
            transition:fade={{ duration : 250 }}
            on:click|self={() => close(currentModal.id)}
        >
            <div
                class="content background-dark border border-radius container"
                transition:fly={{
                    duration : 250,
                    y        : 100,
                }}
            >
                <div class="flex-between align-items-end mb-2">
                    <h3 class="m-0">{currentModal.title}</h3>
                    <button
                        class="button button-outline flex-center close-button"
                        on:click={() => close(currentModal.id)}
                    >   
                        <Icon id="close" />
                    </button>
                </div>
                <svelte:component
                    this={currentModal.component}
                    {...currentModal}
                ></svelte:component>
            </div>
        </div>
    {/key}
{/if}