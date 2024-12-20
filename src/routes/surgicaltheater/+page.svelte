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
                            <img src="/work/st-logo.png" class="avatar" alt="">
                        </div>
                        <div>
                            <h2 class="m-0 my-2 text-center">Surgical Theater System Redesign</h2>
                            <h3 class="m-0 my-2">My Role:</h3>
                            <p class="m-0">UX Researcher and UX/UI Designer</p>
                            <h3 class="m-0 my-2">Project Overview:</h3>
                            <p class="m-0">I collaborated with the team to design and develop cutting-edge Med Tech Dashboards and AR/VR Surgery Simulators for HOAG Hospital in Newport Beach, CA. The project aimed to create a seamless user experience for neurosurgeons, incorporating advanced technologies to enhance surgical training and planning.</p>
                            <h3 class="m-0 my-2">Problem Statement:</h3>
                            <p class="m-0">Neurosurgeons at HOAG Hospital faced challenges in accessing and interpreting complex medical data, and traditional surgical training methods often fell short in providing immersive and realistic scenarios for skill development. There was a need for a user-friendly interface that could consolidate diverse medical information and deliver an enhanced training environment through AR/VR simulations. The old Ui felt like it was built by engineers for engineers. The redesign was meant to be built by the neurosurgeons for neurosurgeons</p>
                            <h3 class="m-0 my-2">Solution:</h3>
                            <p class="m-0">The solution focused on the development of intuitive Med Tech Dashboards and AR/VR Surgery Simulators tailored to the specific needs outlined by neurosurgeons. Key components of the solution include:</p>
                            <ol>
                                <li>
                                    <h4>User-Centric Design:</h4>
                                    <ul>
                                        <li>Conducted user research and collaborated closely with neurosurgeons to understand their workflow and preferences.</li>
                                        <li>Designed an intuitive and user-friendly interface for the Med Tech Dashboards, ensuring easy navigation, quick access to critical medical and as an intuitive way to plan for surgery in the simulator.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Med Tech Dashboards:</h4>
                                    <ul>
                                        <li>Aggregated diverse medical data sources into a unified dashboard, providing neurosurgeons with a comprehensive view of patient information, diagnostics, and surgical plans.</li>
                                        <li>Implemented personalized dashboards to cater to individual surgeon preferences.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>AR/VR Surgery Simulators:</h4>
                                    <ul>
                                        <li>Developed an interface for an immersive AR/VR simulations that replicate real surgical scenarios, allowing neurosurgeons to practice and refine their skills in a risk-free environment.</li>
                                        <li>Integrated realistic visuals to enhance the simulation experience and bridge the gap between theoretical knowledge and practical application.</li>
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
                            <p class="m-0">The Med Tech Dashboards and AR/VR Surgery Simulators have successfully addressed the challenges faced by neurosurgeons at HOAG Hospital and other Nuerosurgery deparment clients around the world. The solution provides a comprehensive platform that seamlessly integrates medical information and advanced simulations, empowering neurosurgeons to enhance their skills and improve patient outcomes. The user-centric design ensures widespread adoption, making it a valuable asset in the field of neurosurgical training and planning.</p>
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
    import media from "src/data/media-st-after.js";
    import mediaBefore from "src/data/media-st-before.js";

    const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));

    const mediaBeforeCol1 = mediaBefore.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaBeforeCol2 = mediaBefore.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaBeforeCol3 = mediaBefore.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
</script>
