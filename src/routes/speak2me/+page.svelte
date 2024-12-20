<style lang="scss">
    .avatar {
        height: 10rem;
    }
</style>

<div class="display-flex flex-center align-content-center justify-content-cente mt-4">
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
                            <img src="/work/speak2me-logo.png" class="avatar" alt="">
                        </div>
                        <div>
                            <h2 class="m-0 my-2 text-center">iOS App for Facial Movement Tracking in Speech Therapy</h2>
                            <h3 class="m-0 my-2">My Role:</h3>
                            <p class="m-0">Software Lead, UX Researcher & UX/UI Designer</p>
                            <h3 class="m-0 my-2">Project Overview:</h3>
                            <p class="m-0">I spearheaded the development of an iOS app using SvelteNative and NativeScript, harnessing the power of ARKit to track facial movements. This innovative application serves the field of speech therapy, offering therapists an advanced tool to create personalized exercises for patients. The overarching goal is to streamline therapy processes, mitigate the challenges associated with traditional paper-based curriculums, subjective tracking of facial asymmetry in stroke patients, and simplify billing procedures. Along with the speech therapists we discovered what their needs were during user interviews and designed excercises according to their requirements and specifications.</p>
                            <h3 class="m-0 my-2">Problem Statement:</h3>
                            <p class="m-0">Speech therapists encounter several pain points in their practice, including cumbersome paper curriculums, subjective tracking of facial asymmetry in stroke patients, and billing inefficiencies. Traditional methods often lack precision and real-time feedback, making it challenging for therapists to tailor exercises and monitor progress effectively. There is a critical need for a solution that not only addresses these pain points but also leverages technology to enhance the overall efficiency of speech therapy sessions.</p>
                            <h3 class="m-0 my-2">Solution:</h3>
                            <p class="m-0">The iOS app I developed with my team and our speech therapist key opinion leader offers a comprehensive solution to the identified challenges in speech therapy. Key components of the solution include:</p>
                            <ol>
                                <li>
                                    <h4>Facial Movement Tracking with ARKit:</h4>
                                    <ul>
                                        <li>Utilized ARKit to precisely track facial movements, providing therapists with a detailed and accurate analysis of patients' facial movements during exercises.</li>
                                    </ul>
                                    <ul>
                                        <li>Integrated real-time feedback and post session playback to enhance the interactive nature of therapy sessions, allowing therapists to adjust exercises based on immediate patient responses.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Personalized Exercise Creation:</h4>
                                    <ul>
                                        <li>Designed an intuitive interface that allows therapists to create personalized exercise regimine tailored to individual patient needs.</li>
                                    </ul>
                                    <ul>
                                        <li>Implemented a library of exercises with adjustable parameters, ensuring flexibility in addressing a wide range of speech therapy goals.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Objective Facial Asymmetry Tracking:</h4>
                                    <ul>
                                        <li>Incorporated objective measurements for facial asymmetry tracking, reducing the reliance on subjective assessments.</li>
                                        <li>Provided visual analytics and progress reports to therapists, enabling them to make data-driven decisions in the treatment process.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Paperless Curriculum Management:</h4>
                                    <ul>
                                        <li>Integrated trust-building elements such as testimonials, case studies, or certifications to instill confidence in the speech therapy company's expertise and reliability.</li>
                                        <li>Utilized a clean and professional design aesthetic to convey a sense of security and trustworthiness.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Billing Integration:</h4>
                                    <ul>
                                        <li>Streamlined billing processes by integrating a billing module within the app, reducing the likelihood of errors.</li>
                                    </ul>
                                    <ul>
                                        <li>Provided a seamless transition from therapy sessions to billing, saving time and improving the overall administrative experience for therapists.</li>
                                    </ul>
                                </li>
                                <li>
                                    <h4>Gamification:</h4>
                                    <ul>
                                        <li>To assist in adoption and retention of users we set out to gamify the exercises.</li>
                                    </ul>
                                    <ul>
                                        <li>The goal was to make interactive excercises that were challenging but also fun with engaging graphics to make the patients excited to log in and complete their excercises.</li>
                                    </ul>
                                </li>
                            </ol>
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
                            <p class="m-0">The iOS app has successfully addressed the pain points experienced by speech therapists, providing an advanced platform for facial movement tracking and personalized exercise plans. By leveraging ARKit and integrating streamlined features for curriculum management and billing, the app enhances the overall efficiency of speech therapy sessions in and outside of the office. Therapists can now focus more on patient care, armed with accurate data and tools to make informed decisions, ultimately improving the quality of speech therapy services.</p>
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
    import media from "src/data/media-speak2me.js";

    const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
</script>