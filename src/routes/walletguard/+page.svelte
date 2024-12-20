<style lang="scss">
    .avatar {
        height: 10rem;
    }
</style>

<div class="display-flex flex-center align-content-center justify-content-center mt-4">
    <Hamburger
        bind:open
        --color="white" 
    />  
</div>

<Menu bind:open />

<div class="header display-flex justify-content-center p-1">
    <div class="content pb-5 w-100">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="background-black border p-2 border-radius">
                        <div class="flex-center">
                            <img src="/work/wallet-guard.png" class="border-round avatar" alt="">
                        </div>
                        <div>
                            <h2 class="m-0 my-2 text-center">Webflow Landing Page for Wallet Guard</h2>
                            <h3 class="m-0 my-2">My Role:</h3>
                            <p class="m-0">Frontend Developer</p>
                            <h3 class="m-0 my-2">Project Overview:</h3>
                            <p class="m-0">I took on the responsibility of crafting a compelling landing page using Webflow for a Web3 company dedicated to enhancing the safety of the crypto space. The primary objective was to communicate the company's mission to create a more secure environment by preventing common scams like wallet drainers and honey pots.</p>
                            <h3 class="m-0 my-2">Problem Statement:</h3>
                            <p class="m-0">The crypto space is fraught with security challenges, and users often fall victim to scams that exploit vulnerabilities in their wallets. There was a crucial need for a platform to address these concerns and educate users on recognizing and avoiding common scams. The challenge was to effectively convey the severity of the issue and instill trust in the Wallet Guard's solution.</p>
                            <h3 class="m-0 my-2">Solution:</h3>
                            <p class="m-0">My focus was on creating a visually engaging and informative landing page that effectively communicated the mission and solution provided by Wallet Guard's. Key aspects of the solution include:</p>
                            <ol>
                                <li>
                                    <h4>User-Centric Design:</h4>
                                    <ul>
                                        <li>Designed the landing page with a user-centric approach, ensuring easy navigation and clarity in conveying the company's value proposition.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Clear Messaging:</h4>
                                    <ul>
                                        <li>Highlighted the specific features and benefits of the solution, emphasizing its effectiveness in preventing wallet drainers and honey pots.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Educational Content:</h4>
                                    <ul>
                                        <li>Developed informative content sections that educated users about common crypto scams, providing insights on how to recognize and avoid them.</li>
                                        <li>Incorporated visual elements and interactive components to enhance user engagement and understanding.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Trust-Building Elements:</h4>
                                    <ul>
                                        <li>Integrated trust-building elements such as testimonials, case studies, or certifications to instill confidence in the Web3 company's expertise and reliability.</li>
                                        <li>Utilized a clean and professional design aesthetic to convey a sense of security and trustworthiness.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Responsive Design:</h4>
                                    <ul>
                                        <li>The Webflow landing page successfully addresses the security concerns within the crypto space by presenting Wallet Guard's mission and solution in a clear and compelling manner. Users visiting the page are not only informed about the risks associated with common scams but are also empowered with knowledge on how to protect themselves. The intuitive design and informative content contribute to building trust, encouraging users to explore and engage with the Wallet Guard's services in making the crypto space a safer environment.</li>
                                    </ul>
                                </li>
                            </ol>
                            <h3 class="m-0 my-2">Before:</h3>
                            
                            <div class="row">
                                <div class="col-12 col-md-4">
                                    {#each mediaBeforeCol1 as { video, coverImage }}
                                        <div class="mb-2">
                                            {#if video}
                                                <Video cover="{coverImage?.url}" video={video?.url} />
                                            {:else}
                                                <Lightbox enableClickToClose>
                                                    <img src="{coverImage?.url}" class="w-100 border-radius" alt="">
                                                </Lightbox>
                                            {/if}
                                        </div>
                                    {/each}
                                </div>
                                <div class="col-12 col-md-4">
                                    {#each mediaBeforeCol2 as { video, coverImage }}
                                        <div class="mb-2">
                                            {#if video}
                                                <Video cover="{coverImage?.url}" video={video?.url} />
                                            {:else}
                                                <Lightbox enableClickToClose>
                                                    <img src="{coverImage?.url}" class="w-100 border-radius" alt="">
                                                </Lightbox>
                                            {/if}
                                        </div>
                                    {/each}
                                </div>
                                <div class="col-12 col-md-4">
                                    {#each mediaBeforeCol3 as { video, coverImage }}
                                        <div class="mb-2">
                                            {#if video}
                                                <Video cover="{coverImage?.url}" video={video?.url} />
                                            {:else}
                                                <Lightbox enableClickToClose>
                                                    <img src="{coverImage?.url}" class="w-100 border-radius" alt="">
                                                </Lightbox>
                                            {/if}
                                        </div>
                                    {/each}
                                </div>
                            </div>


                            <h3 class="m-0 my-2">After:</h3>
                            <div class="row">
                                <div class="col-12 col-md-4">
                                    {#each mediaCol1 as { video, coverImage }}
                                        <div class="mb-2">
                                            {#if video}
                                                <Video cover="{coverImage?.url}" video={video?.url} />
                                            {:else}
                                                <Lightbox enableClickToClose>
                                                    <img src="{coverImage?.url}" class="w-100 border-radius" alt="">
                                                </Lightbox>
                                                
                                            {/if}
                                        </div>
                                    {/each}
                                </div>
                                <div class="col-12 col-md-4">
                                    {#each mediaCol2 as { video, coverImage }}
                                        <div class="mb-2">
                                            {#if video}
                                                <Video cover="{coverImage?.url}" video={video?.url} />
                                            {:else}
                                                <Lightbox enableClickToClose>
                                                    <img src="{coverImage?.url}" class="w-100 border-radius" alt="">    
                                                </Lightbox>
                                            {/if}
                                        </div>
                                    {/each}
                                </div>
                                <div class="col-12 col-md-4">
                                    {#each mediaCol3 as { video, coverImage }}
                                        <div class="mb-2">
                                            {#if video}
                                                <Video cover="{coverImage?.url}" video={video?.url} />
                                            {:else}
                                                <Lightbox enableClickToClose>
                                                    <img src="{coverImage?.url}" class="w-100 border-radius" alt="">
                                                </Lightbox>
                                               
                                            {/if}
                                        </div>
                                    {/each}
                                </div>
                            </div>
                            <!-- <PhotoSwipeGallery {images} styling="grid" gridColumns={3} /> -->
                            <h3 class="m-0 my-2">Outcome:</h3>
                            <p class="m-0">The Webflow landing page successfully addresses the security concerns within the crypto space by presenting Wallet Guard's mission and solution in a clear and compelling manner. Users visiting the page are not only informed about the risks associated with common scams but are also empowered with knowledge on how to protect themselves. The intuitive design and informative content contribute to building trust, encouraging users to explore and engage with Wallet Guard's services in making the crypto space a safer environment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<svelte:head>

	<!-- Import base css -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css" />
	
	<!-- Import spin css (spin is default type) -->
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css" />

</svelte:head>

<script>
    export const prerender = true;

    import { Hamburger } from 'svelte-hamburgers';
    import Menu from './Menu.svelte';

    let open;

    import { Lightbox } from 'svelte-lightbox';
    import Video from "src/components/video.svelte";
    import media from "src/data/media-wallet-guard-after.js";
    import mediaBefore from "src/data/media-wallet-guard-before.js";

    const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));

    const mediaBeforeCol1 = mediaBefore.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaBeforeCol2 = mediaBefore.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaBeforeCol3 = mediaBefore.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
</script>