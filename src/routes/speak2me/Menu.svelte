<script lang="ts">
        import { fly, scale } from 'svelte/transition';
        import { quadOut } from 'svelte/easing';
    
        let links = ["/","surgicaltheater","walletguard","speak2me"];
    
        export let open;
</script>
    
{#if open}

    <div class="font-mono">
        {#each ['Home', 'Surgical Theater', 'Wallet Guard', 'Speak2Me'] as link, i}
            <!-- svelte-ignore a11y-missing-attribute -->
            <a href="{links[i]}" style="text-decoration:none">
                <p transition:fly={{ y: -15, delay: 50 * i }}>
                    {link}
                </p>
             </a>
                
        {/each}
    </div>

    <hr transition:scale={{ duration: 750, easing: quadOut, opacity: 1 }} />

{/if}
    
<style>
    a{
            
    }
    :global(html) {
        background: #1d1d2f;
    }
    div {
        text-align: center;
        letter-spacing: 0.15em;
        padding: 1em;
        padding-top: 0;
        color: #eef;
    }
    p {
        font-weight: semi-bold;
        font-size: 1.5em;
        cursor: pointer;
        width: max-content;
        margin: 1rem auto;
    }
    p:hover {
        text-decoration: underline;
    }
</style>
    