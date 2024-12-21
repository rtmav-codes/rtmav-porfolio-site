<div class="flex justify-center items-center pt-4 bg-black font-mono">
    <Hamburger
        bind:open
        --color="white" 
    />  
</div>

<Menu bind:open />

<div class="w-screen h-auto bg-black flex flex-col justify-center items-center font-mono">
    <!-- Header Image -->
    <div class="flex flex-col justify-center items-center">
        <img 
            src="/work/wallet-guard.png" 
            class="w-36 mt-10" 
            alt="s2mlogo"
        />
    </div>

    <!-- Title -->
    <h1 class="text-white text-5xl mt-10">WalletGuard</h1>
    <h2 class="text-white text-2xl mt-2 text-center"> Webflow Landing Page </h2>

    <!-- Content -->
    <div class="flex flex-col lg:w-3/4 w-full mt-10">
        <div class="flex flex-col justify-start items-start bg-black border rounded-xl px-10 lg:py-10 py-10">
            <div class="flex flex-col justify-start items-start">
                <h1 class="text-white text-xl mt-2 font-semibold">
                    My Role: Frontend Developer
                </h1>
                <h2 class="text-white text-lg mt-5 font-semibold">
                    Project Overview:
                </h2>
                <p class="text-white text-md">
                    I took on the responsibility of crafting a compelling landing page using Webflow for a Web3 
                    company dedicated to enhancing the safety of the crypto space. The primary objective was to 
                    communicate the company's mission to create a more secure environment by preventing common 
                    scams like wallet drainers and honey pots.
                </p>
                <h2 class="text-white text-lg mt-5 font-semibold">
                   Problem Statement:
                </h2>
                <p class="text-white text-md">
                    Speech therapists often struggle to track and analyze facial movements during speech 
                    therapy sessions, and traditional methods of tracking facial movements are often inaccurate 
                    and time-consuming.
                </p>
                <h2 class="text-white text-lg mt-5 font-semibold">
                    Solution:
                </h2>
                <p class="text-white text-md">
                    The solution focused on the development of an iOS app that uses facial movement tracking 
                    technology to capture and analyze the movements of the user's face, and provides feedback on the 
                    user's speech.
                </p>
                <ol class="list-decimal text-white text-md font-semibold pl-10 mx-24">
                    <li>
                        <h3 class="mt-5">
                            Facial Movement Tracking with ARKit:
                        </h3>
                        <ul class="font-normal">
                            <li>
                                Utilized ARKit to precisely track facial movements, providing therapists with a detailed 
                                and accurate analysis of patients' facial movements during exercises.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2">
                            Real-Time Feedback and Progress Tracking:
                        </h3>
                        <ul class="font-normal">
                            <li>Provided real-time feedback on the user's speech, helping therapists to identify areas for 
                                improvement and track progress over time.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2">
                            Personalized Exercise Creation:
                        </h3>
                        <ul class="font-normal">
                            <li>Designed an intuitive interface that allows therapists to create personalized exercise regimine tailored to individual patient needs.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2">
                            Objective Facial Asymmetry Tracking:
                        </h3>
                        <ul class="font-normal">
                            <li>Incorporated objective measurements for facial asymmetry tracking, reducing the reliance on subjective assessments.</li>
                            <li>Provided visual analytics and progress reports to therapists, enabling them to make data-driven decisions in the treatment process.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2">
                            Paperless Curriculum Management:
                        </h3>
                        <ul class="font-normal">
                            <li>Integrated trust-building elements such as testimonials, case studies, or certifications to instill confidence in the speech therapy company's expertise and reliability.</li>
                            <li>Utilized a clean and professional design aesthetic to convey a sense of security and trustworthiness.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2">
                            Billing Integration:
                        </h3>
                        <ul class="font-normal">
                            <li>Streamlined billing processes by integrating a billing module within the app, reducing the likelihood of errors.</li>
                        </ul>
                        <ul class="font-normal">
                            <li>Provided a seamless transition from therapy sessions to billing, saving time and improving the overall administrative experience for therapists.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2">
                            Gamification:
                        </h3>
                        <ul class="font-normal">
                            <li>To assist in adoption and retention of users we set out to gamify the exercises.</li>
                        </ul>
                        <ul class="font-normal">
                            <li>The goal was to make interactive excercises that were challenging but also fun with engaging graphics to make the patients excited to log in and complete their excercises.</li>
                        </ul>
                    </li>
                </ol>

                <h3 class="text-white text-xl mt-5 ml-5 font-semibold">Before:</h3>
                <div class="grid grid-cols-3">
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaBeforeCol1 as { video, coverImage }}
                            <div class="p-3">
                                {#if video}
                                    <Video src={video?.url} class="w-100 border border-white rounded-xl" controls />
                                {:else}
                                    <Lightbox enableClickToClose>
                                        <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">
                                    </Lightbox>
                                    
                                {/if}
                            </div>
                        {/each}
                    </div>
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaBeforeCol2 as { video, coverImage }}
                            <div class="p-3">
                                {#if video}
                                    <Video src={video?.url} class="w-100 border border-white rounded-xl" controls />
                                {:else}
                                    <Lightbox enableClickToClose>
                                        <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">    
                                    </Lightbox>
                                {/if}
                            </div>
                        {/each}
                    </div>
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaBeforeCol3 as { video, coverImage }}
                            <div class="p-3">
                                {#if video}
                                    <Video src={video?.url} class="w-100 border border-white rounded-xl" controls />
                                {:else}
                                    <Lightbox enableClickToClose>
                                        <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">
                                    </Lightbox>
                                   
                                {/if}
                            </div>
                        {/each}
                    </div>
                </div>

                <h3 class="text-white text-xl mt-5 ml-5 font-semibold">After:</h3>
                <div class="grid grid-cols-3">
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaCol1 as { video, coverImage }}
                            <div class="p-3">
                                {#if video}
                                    <Video src={video?.url} class="w-100 border border-white rounded-xl" controls />
                                {:else}
                                    <Lightbox enableClickToClose>
                                        <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">
                                    </Lightbox>
                                    
                                {/if}
                            </div>
                        {/each}
                    </div>
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaCol2 as { video, coverImage }}
                            <div class="p-3">
                                {#if video}
                                    <Video src={video?.url} class="w-100 border border-white rounded-xl" controls />
                                {:else}
                                    <Lightbox enableClickToClose>
                                        <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">    
                                    </Lightbox>
                                {/if}
                            </div>
                        {/each}
                    </div>
                    <div class="flex flex-col col-12 col-md-4">
                        {#each mediaCol3 as { video, coverImage }}
                            <div class="p-3">
                                {#if video}
                                    <Video src={video?.url} class="w-100 border border-white rounded-xl" controls />
                                {:else}
                                    <Lightbox enableClickToClose>
                                        <img src="{coverImage?.url}" class="w-100 border border-white rounded-xl" alt="">
                                    </Lightbox>
                                   
                                {/if}
                            </div>
                        {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<script lang="ts">
    export const prerender = true;

    import { Hamburger } from 'svelte-hamburgers';
    import Menu from './Menu.svelte';

    let open: boolean = false;

    import { Lightbox } from 'svelte-lightbox';
    import { Video } from 'flowbite-svelte';
    import media from "$lib/data/media-wallet-guard-after.js";
    import mediaBefore from "$lib/data/media-wallet-guard-before.js";

    const mediaBeforeCol1 = mediaBefore.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaBeforeCol2 = mediaBefore.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaBeforeCol3 = mediaBefore.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));

    const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
</script>