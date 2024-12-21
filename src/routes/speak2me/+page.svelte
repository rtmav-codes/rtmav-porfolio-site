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
            src="/work/speak2me-logo.png" 
            class="w-36 mt-10" 
            alt="speak2me logo"
        />
    </div>

    <!-- Title -->
    <div class="flex flex-col justify-center items-center">
        <h1 class="text-white text-5xl mt-10">Speak2Me</h1>
        <h2 class="text-white text-2xl mt-2 text-center">   iOS App for Facial Movement <br> Tracking in Speech Therapy</h2>
    </div>

    <!-- Content -->
    <div class="flex flex-col lg:w-3/4 w-full mt-10">
        <div class="flex flex-col lg:justify-start justify-center lg:items-start items-center bg-black border rounded-xl lg:px-10 px-6 lg:py-10 py-10">
            <div class="flex flex-col justify-start items-start w-5/6">
                <h1 class="text-white text-xl mt-2 font-semibold">
                    My Role: UX Researcher and UX/UI Designer
                </h1>
                <h2 class="text-white text-lg mt-5 font-semibold">
                    Project Overview:
                </h2>
                <p class="text-white text-md">
                    Speak2Me is an iOS app designed to help speech therapists track and analyze facial 
                    movements during speech therapy sessions. The app uses facial movement tracking 
                    technology to capture and analyze the movements of the user's face, and provides 
                    feedback on the user's speech.
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
                <ol class="list-decimal text-white text-md font-semibold lg:pl-10 pl-6 lg:mx-24 mx-1">
                    <li>
                        <h3 class="mt-5 text-sm">
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
                        <h3 class="mt-2 text-sm">
                            Real-Time Feedback and Progress Tracking:
                        </h3>
                        <ul class="font-normal">
                            <li>Provided real-time feedback on the user's speech, helping therapists to identify areas for 
                                improvement and track progress over time.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2 text-sm">
                            Personalized Exercise Creation:
                        </h3>
                        <ul class="font-normal">
                            <li>Designed an intuitive interface that allows therapists to create personalized exercise regimine tailored to individual patient needs.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2 text-sm">
                            Objective Facial Asymmetry Tracking:
                        </h3>
                        <ul class="font-normal">
                            <li>Incorporated objective measurements for facial asymmetry tracking, reducing the reliance on subjective assessments.</li>
                            <li>Provided visual analytics and progress reports to therapists, enabling them to make data-driven decisions in the treatment process.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2 text-sm">
                            Paperless Curriculum Management:
                        </h3>
                        <ul class="font-normal">
                            <li>Integrated trust-building elements such as testimonials, case studies, or certifications to instill confidence in the speech therapy company's expertise and reliability.</li>
                            <li>Utilized a clean and professional design aesthetic to convey a sense of security and trustworthiness.</li>
                        </ul>
                    </li>
                    <li>
                        <h3 class="mt-2 text-sm">
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
                        <h3 class="mt-2 text-sm">
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
                <div class="grid lg:grid-cols-3 grid-cols-1 lg:mx-24 mx-1">
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
    export const prerender = true;

    import { Hamburger } from 'svelte-hamburgers';
    import Menu from './Menu.svelte';

    let open: boolean = false;

    import { Lightbox } from 'svelte-lightbox';
    import media from "$lib/data/media-speak2me.js";

    const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
</script>