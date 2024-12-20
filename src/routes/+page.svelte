<style lang="scss">
    .content {
        position: relative;
        z-index: 1;
        margin-top: 25vh;
    }

    .image {
        background-position: center;
        background-size: cover;
        width: 100vw;
        height: 50vh;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 0;
    }

    .featured-image {
        background-size: cover;
        background-position: center;
        min-height: 10rem;
    }

    .work-image {
        height: 10rem;
        object-fit: contain;
        border-radius: var(--border-radius) 0 0 var(--border-radius);
        transform: scale(1.075);

        @media only screen and (min-width: 768px) {
            height: 6rem;
        }
    }

    :global(.controls .button svg) {
        transform: translateX(-50%);
    }

    .avatar {
        height: 10rem;
    }

    :global(.__grid--masonry) {
        padding: 0;
    }
</style>

<div class="header display-flex justify-content-center p-1">
    <div class="image" style="background-image: url({general?.headerImage?.url});"></div>
    <div class="content pb-5">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="background-black border p-2 border-radius">
                        <div class="flex-center">
                            <img src="{general?.avatar?.url}" class="border-round avatar" alt="">
                        </div>
                        <h2 class="m-0">{general?.name}</h2>
                        <p class="m-0">{general?.introDescription}</p>
                        <div class="mt-2 w-100 display-flex flex-wrap">
                            {#if general?.twitter}
                                <a class="button mr-1 mb-1 w-100 w-lg-auto" href="{general?.twitter}" target="_blank" rel="noreferrer">
                                    <img src="/twitter.png" class="icon" alt="">
                                    <span class="ml-1">
                                        Twitter
                                    </span>
                                </a>
                            {/if}
                            {#if general?.discord}
                                <a class="button mr-1 mb-1  w-100 w-lg-auto" href="{general?.discord}" target="_blank" rel="noreferrer">
                                    <img src="/discord.png" class="icon" alt="">
                                    <span class="ml-1">
                                        Discord
                                    </span>
                                </a>
                            {/if}
                            {#if general?.gitHub}
                                <a class="button mr-1 mb-1  w-100 w-lg-auto" href="{general?.gitHub}" target="_blank" rel="noreferrer">
                                    <img src="/github-logo.png" class="icon" alt="">
                                    <span class="ml-1">
                                        GitHub
                                    </span>
                                </a>
                            {/if}
                            {#if general?.exchangeArt}
                                <a class="button mr-1 mb-1  w-100 w-lg-auto" href="{general?.exchangeArt}" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><path d="M8.997 13.985c.01 1.104-.88 2.008-1.986 2.015-1.105.009-2.005-.88-2.011-1.984-.01-1.105.879-2.005 1.982-2.016 1.106-.007 2.009.883 2.015 1.985zm-.978-3.986c-1.104.008-2.008-.88-2.015-1.987-.009-1.103.877-2.004 1.984-2.011 1.102-.01 2.008.877 2.012 1.982.012 1.107-.88 2.006-1.981 2.016zm7.981-4.014c.004 1.102-.881 2.008-1.985 2.015-1.106.01-2.008-.879-2.015-1.983-.011-1.106.878-2.006 1.985-2.015 1.101-.006 2.005.881 2.015 1.983zm-12 15.847c4.587.38 2.944-4.492 7.188-4.537l1.838 1.534c.458 5.537-6.315 6.772-9.026 3.003zm14.065-7.115c1.427-2.239 5.846-9.748 5.846-9.748.353-.623-.429-1.273-.975-.813 0 0-6.572 5.714-8.511 7.525-1.532 1.432-1.539 2.086-2.035 4.447l1.68 1.4c2.227-.915 2.868-1.04 3.995-2.811zm-12.622 4.806c-2.084-1.82-3.42-4.479-3.443-7.447-.044-5.51 4.406-10.03 9.92-10.075 3.838-.021 6.479 1.905 6.496 3.447l1.663-1.456c-1.01-2.223-4.182-4.045-8.176-3.992-6.623.055-11.955 5.466-11.903 12.092.023 2.912 1.083 5.57 2.823 7.635.958.492 2.123.329 2.62-.204zm12.797-1.906c1.059 1.97-1.351 3.37-3.545 3.992-.304.912-.803 1.721-1.374 2.311 5.255-.591 9.061-4.304 6.266-7.889-.459.685-.897 1.197-1.347 1.586z"/></svg>
                                    <span class="ml-1">
                                        Exchange Art
                                    </span>
                                </a>
                            {/if}
                            {#if general?.email}
                                <a class="button mr-1 mb-1  w-100 w-lg-auto" href="mailto:{general?.email}">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                                    <span class="ml-1">
                                        {general?.email}
                                    </span>
                                </a>
                            {/if}
                            {#if general?.resume}
                                <a class="button mr-1 mb-1  w-100 w-lg-auto" href="{general?.resume?.url}" target="_blank" rel="noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24"><path d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-10v-1h10v1zm0 2h-10v1h10v-1zm0 3h-10v1h10v-1z"/></svg>                                    <span class="ml-1">
                                        Resume
                                    </span>
                                </a>
                            {/if}
                        </div>
                    </div>
                </div>
                <!-- <div class="col-12 mt-5">
                    <h2 class="m-0">Services</h2>
                </div>
                <div class="col-12">
                    <div class="container background-black border border-radius p-1 py-2">
                        <div class="row">
                            <div class="col-12 col-md-2 flex-center">
                                <img src="/code.png" class="icon icon-large" alt="">
                            </div>
                            <div class="col-12 col-md-10">
                                <h3>Development</h3>
                                <p>Need a website or app? I can do that! I also offer the option to include a Content Management System so that my clients can own their content and make website updates themselves whenever they want.</p>
                            </div>
                        </div>
                    </div>
                </div> -->
                {#if general?.id === "clbucvbhetqmq0alraz7sbmtz"}
                    <div class="col-12 mt-5">
                        <h2 class="m-0">Work Experience</h2>
                    </div>
                    {#each works as { title, company, image }}
                        <div class="col-12 col-md-4">
                            <div class="containter border border-radius overflow-hidden h-100 flex flex-center align-items-center justify-content-center">
                                <div class="row flex flex-center align-items-center justify-content-center">
                                    <div class="col-6 col-md-4 p-0 flex flex-center align-items-center justify-content-center">
                                        <img src="{image?.url}" class="work-image w-100 h-100 border-radius ml-lg-3" alt="">
                                    </div>
                                    <div class="col-12 col-md-8">
                                        <div class="px-1">
                                            <strong class="m-0">{title}</strong>
                                            <p class="m-0 text-micro">at <strong>{company}</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    {/each}
                {/if}
            </div>
            


            <h2 class="mt-5">Recent Projects</h2>
            {#each featuredProjects as { title, description, video, image, demoUrl }}
                <div class="container background-black border border-radius mb-2">
                    <div class="row">
                        <div class="col-12 col-md-5">
                            {#if video?.url}
                                <Video
                                    cover={image?.url}
                                    video={video?.url}
                                />
                            {:else}
                                <div class="w-100 h-100 border-radius featured-image" style="background-image: url({image?.url})"></div>
                            {/if}
                        </div>
                        <div class="col-12 col-md-7">
                            <h2 class="m-0">{title}</h2>
                            <p>{description}</p>

                            {#if demoUrl}
                                <a href="{demoUrl}" class="link" rel="noreferrer">View Project</a>
                            {/if}
                        </div>
                    </div>
                </div>
            {/each}

            <div class="row">
                <div class="col-12 col-md-2"></div>
                <div class="col-12 col-md-8 mt-5">
                    <h2>Contact</h2>
                    <form action="https://formsubmit.co/rtmav@rtmav.site" method="POST" class="w-100">
                        <input type="text" name="name" required placeholder="Name"  class="w-100">
                        <input type="text" name="email" required placeholder="Email"  class="w-100">
                        <textarea type="text" name="message" rows="10" required placeholder="Message"></textarea>
                        <button class="button my-2" type="submit">Send</button>
                   </form>
                </div>
            </div>
            
        </div>
    </div>
</div>

<script lang="ts">
    export const prerender = true;

    import Video from "src/components/video.svelte";
    
    import general from "src/data/general.js";
    import media from "src/data/media.js";
    import works from "src/data/works.js";
    import featuredProjects from "src/data/featured-projects";

    const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
</script>
