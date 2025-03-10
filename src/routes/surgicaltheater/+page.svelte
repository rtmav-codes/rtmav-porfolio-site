<div class="flex justify-center items-center pt-4 bg-black font-mono">
    <Hamburger
        bind:open
        --color="white" 
    />  
</div>

<Menu bind:open />

<div class="w-screen h-auto bg-black flex flex-col justify-center items-center font-mono lg:px-0 px-5">
    <!-- Header Image -->
    <div class="flex flex-col justify-center items-center">
        <img 
            src="/work/st-logo.png" 
            class="w-36 mt-10" 
            alt="st logo"
        />
    </div>

    <!-- Title -->
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-white text-5xl mt-10 text-center">Surgical Theater</h1>
        <h2 class="text-white text-2xl mt-2 text-center">Legacy System Redesign</h2>
    </div>

    <!-- Content -->
    <div class="flex flex-col lg:w-3/4 w-full mt-10">
        <div class="flex flex-col justify-center items-center bg-black border rounded-xl lg:px-10 px-6 lg:py-0 py-10">
            <div class="flex flex-col justify-start items-start w-5/6">
                <h1 class="text-white lg:text-xl text-md mt-10 font-semibold">
                    My Role: UX Researcher and UX/UI Designer
                </h1>
                <h2 class="text-white lg:text-lg text-md mt-5 font-semibold">
                    Project Overview:
                </h2>
                <p class="text-white text-md">
                    I collaborated with the team to design and 
                    develop cutting-edge Med Tech Dashboards and AR/VR Surgery Simulators for HOAG Hospital 
                    in Newport Beach, CA. The project aimed to create a seamless user experience for neurosurgeons, 
                    incorporating advanced technologies to enhance surgical training and planning.
                </p>
                <h2 class="text-white text-lg mt-5 font-semibold">
                   Problem Statement:
                </h2>
                <p class="text-white text-md">
                    Neurosurgeons at HOAG Hospital faced challenges in accessing and interpreting complex medical data, 
                    and traditional surgical training methods often fell short in providing immersive and realistic scenarios 
                    for skill development. There was a need for a user-friendly interface that could consolidate diverse medical 
                    information and deliver an enhanced training environment through AR/VR simulations. The old Ui felt like it was 
                    built by engineers for engineers. The redesign aimed to create a more intuitive and user-friendly interface 
                    that would allow neurosurgeons to access and analyze medical data more effectively, and to provide a more 
                    immersive and realistic surgical training experience through AR/VR simulations.
                </p>
                <h2 class="text-white text-lg mt-5 font-semibold">
                    Solution:
                </h2>
                <p class="text-white text-md">
                    The solution focused on the development of intuitive Med Tech Dashboards and AR/VR Surgery Simulators 
                    tailored to the specific needs outlined by neurosurgeons. Key components of the solution include:
                </p>
                <ol class="list-decimal text-white text-md font-semibold lg:pl-10 pl-6 lg:mx-24 mx-1">
                    <li>
                        <h3 class="mt-5 text-sm">
                            User-Centric Design:
                        </h3>
                        <ul class="font-normal text-xs">
                            <li>Conducted user research and collaborated closely with neurosurgeons to understand their workflow and preferences.</li>
                            <li>Designed an intuitive and user-friendly interface for the Med Tech Dashboards, ensuring easy navigation, quick access to critical medical and as an intuitive way to plan for surgery in the simulator.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2 text-sm">
                            Med Tech Dashboards:
                        </h3>
                        <ul class="font-normal text-xs">
                            <li>Aggregated diverse medical data sources into a unified dashboard, providing neurosurgeons with a comprehensive view of patient information, diagnostics, and surgical plans.</li>
                            <li>Implemented personalized dashboards to cater to individual surgeon preferences.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2 text-sm">
                            AR/VR Surgery Simulators:
                        </h3>
                        <ul class="font-normal text-xs">
                            <li>Developed an interface for an immersive AR/VR simulations that replicate real surgical scenarios, allowing neurosurgeons to practice and refine their skills in a risk-free environment.</li>
                            <li>Integrated realistic visuals to enhance the simulation experience and bridge the gap between theoretical knowledge and practical application.</li>
                        </ul>
                    </li>
                </ol>

                <h3 class="text-white text-xl mt-5 ml-5 font-semibold">Before:</h3>
                <div class="grid lg:grid-cols-3 grid-cols-1">
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaBeforeCol1 as { coverImage }}
                            <div class="p-3">
                                <Lightbox enableClickToClose>
                                    <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">
                                </Lightbox>
                            </div>
                        {/each}
                    </div>
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaBeforeCol2 as { coverImage }}
                            <div class="p-3">
                                <Lightbox enableClickToClose>
                                    <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">    
                                </Lightbox>
                            </div>
                        {/each}
                    </div>
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaBeforeCol3 as { coverImage }}
                            <div class="p-3">
                                <Lightbox enableClickToClose>
                                    <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">
                                </Lightbox>
                            </div>
                        {/each}
                    </div>
                </div>

                <h3 class="text-white text-xl mt-5 ml-5 font-semibold">After:</h3>
                <div class="grid lg:grid-cols-3 grid-cols-1">
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaCol1 as { coverImage }}
                            <div class="p-3">
                                <Lightbox enableClickToClose>
                                    <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">
                                </Lightbox>
                            </div>
                        {/each}
                    </div>
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaCol2 as { coverImage }}
                            <div class="p-3">
                                <Lightbox enableClickToClose>
                                    <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">    
                                </Lightbox>
                            </div>
                        {/each}
                    </div>
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaCol3 as { coverImage }}
                            <div class="p-3">
                                <Lightbox enableClickToClose>
                                    <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">
                                </Lightbox>
                            </div>
                        {/each}
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


<script lang="ts">

    import { Hamburger } from 'svelte-hamburgers';
    import Menu from './Menu.svelte';

    let open: boolean = false;

    import { Lightbox } from 'svelte-lightbox';
    import media from "$lib/data/media-st-after.js";
    import mediaBefore from "$lib/data/media-st-before.js";

    const mediaBeforeCol1 = mediaBefore.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaBeforeCol2 = mediaBefore.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaBeforeCol3 = mediaBefore.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));

    const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
</script>
