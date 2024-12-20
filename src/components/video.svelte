<style lang="scss">
    .player {
        position: relative;
        background-position: center;
        background-size: cover;
        cursor: pointer;
        padding-bottom: 50%;

        .video {
            position: absolute;
            height: 100%;
            width: 100%;
        }

        .play {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
</style>

<div
    class="player h-100 border-radius"
    style="background-image: url({showCover ? cover : ""});"
    on:click={handleClick}
    on:keydown={handleClick}
>
    <video
        class="video border-radius"
        class:opacity-0={showCover}
        bind:this={videoEl}
        playsInline
        controls
    >
        <track kind="captions">
        <source src="{video}" type="video/mp4">
    </video>

    {#if showCover}
        <div class="play background-dark p-1 border-round">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><path d="M3 22v-20l18 10-18 10z"/></svg>
        </div>
    {/if}
</div>

<script lang="ts">
    export let cover = "";
    export let video = "";
    export let playing = false;

    let videoEl:HTMLVideoElement;

    const handleClick = () => (playing = true);

    $: if(videoEl) {
        if(playing) {
            videoEl.play();
        } else {
            videoEl.pause();
        }
    }

    $: showCover = cover && !playing;
</script>