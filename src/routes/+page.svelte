<div class="bg-black text-white font-mono p-5">
    <div class="bg-[(url('{general?.headerImage?.url})'))]"></div>
    <div class="flex flex-col justify-center items-center pb-5">
        <div class="flex flex-col lg:w-3/4 w-full">
                <!-- About -->
                <div class="flex flex-col col-12 mb-5">
                    <div class="bg-black border p-5 rounded-xl flex flex-col justify-center items-center">
                        <!-- Avatar -->
                        <div class="flex justify-center items-center">
                            <img src="{general?.avatar?.url}" class="border-2 border-white rounded-full w-36 mb-5" alt="">
                        </div>

                        <!-- Name + description -->
                        <div class="flex flex-col justify-center lg:items-start items-center lg:px-4 px-0 lg:text-left text-center">
                            <h1 class="text-center lg:text-left text-2xl font-semibold mb-3">{general?.name}</h1>
                            <p class="mb-5 text-sm">{general?.introDescription}</p>
                        </div>

                        <!-- Socials -->
                        <div class="flex flex-row lg:justify-start lg:items-start justify-center items-center w-full lg:px-4">
                            <div class="flex lg:flex-row flex-col justify-center items-center py-2 mb-2">
                                <!-- Twitter + Discord (Optional) -->
                                <!-- {#if general?.twitter}
                                    <button class="btn btn-outline flex flex-col justify-center rounded-md w-auto h-10">
                                        <a class="text-white text-md font-semibold flex flex-row justify-center items-center" href="{general?.twitter}" target="_blank" rel="noreferrer">
                                            <img src="/twitter.png" class="w-10" alt="twitter logo">
                                            <span class="ml-1">
                                                Twitter
                                            </span>
                                        </a>
                                    </button>
                                {/if}
                                {#if general?.discord}
                                    <button class="btn btn-outline flex flex-col justify-center rounded-md w-auto h-10">
                                        <a class="text-white text-md font-semibold flex flex-row justify-center items-center" href="{general?.discord}" target="_blank" rel="noreferrer">
                                            <img src="/discord.png" class="w-10" alt="discord logo">
                                            <span class="ml-1">
                                                Discord
                                            </span>
                                        </a>
                                    </button>
                                {/if} -->

                                <!-- GitHub -->
                                {#if general?.gitHub}
                                    <button class="btn btn-outline hover:bg-gray-700 hover:text-black flex flex-col justify-center rounded-md w-auto h-10 mb-3">
                                        <a class="text-white text-xs font-semibold flex flex-row justify-center items-center" href="{general?.gitHub}" target="_blank" rel="noreferrer">
                                            <img
                                                class="w-5 h-5 mb-1"
                                                src="/github.svg"
                                                alt="email icon"
                                            />
                                            <span class="ml-3">
                                                GitHub
                                            </span>
                                        </a>
                                    </button>
                                {/if}

                                <!-- Email -->
                                {#if general?.email}
                                    <button class="btn btn-outline hover:bg-gray-700 flex flex-row justify-center rounded-md w-auto h-10 ml-2 mb-3">
                                        <a class="text-white text-xs font-semibold flex flex-row justify-center items-center" href="mailto:{general?.email}">
                                            <img 
                                                class="w-5"
                                                src="/email-white.svg"
                                                alt="email icon"
                                            />
                                            <span class="ml-3 mr-1">
                                                {general?.email}
                                            </span>
                                        </a>
                                    </button>
                                {/if}

                                <!-- Resume -->
                                {#if general?.resume}
                                    <button class="btn btn-outline hover:bg-gray-700 flex flex-col justify-center rounded-md w-auto h-10 ml-2 mb-3">
                                        <a class="text-white text-xs font-semibold flex flex-row justify-center items-center" href="{general?.resume?.url}" target="_blank" rel="noreferrer">
                                            <img
                                                class="w-5 mb-1"
                                                src="/resume.svg"
                                                alt="resume icon"
                                            />
                                            <span class="ml-2 mr-1">
                                                Resume
                                            </span>
                                        </a>
                                    </button>
                                {/if}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Services -->
                <div class="flex flex-col">
                    <h1 class="text-2xl mb-3 font-bold">Services</h1>
                </div>

                <!-- Development Services -->
                <div class="flex flex-col col-12">
                    <div class="bg-black border rounded-xl px-10 lg:py-10 py-10">
                        <div class="flex flex-col">
                            <div class="flex flex-row justify-start items-center mb-2">
                                <img src="/code.png" class="w-8" alt="">
                                <h1 class="font-semibold text-lg ml-3">Development</h1>
                            </div>
                            <p class="text-sm">Need a website or app? I can do that! I also offer the option to include a Content Management System so that my clients can own their content and make website updates themselves whenever they want.</p>
                        </div>
                    </div>
                </div>

                <!-- Work Experience -->
                {#if general?.id === "clbucvbhetqmq0alraz7sbmtz"}
                    <div class="flex flex-col col-12 mt-5 lg:px-0 px-5">
                        <h1 class="text-2xl font-bold mb-3">Work Experience</h1>
                    </div>
                    <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
                        {#each works as { title, company, image }}
                            <div class="flex flex-row justify-start items-center border rounded-xl overflow-hidden h-100 w-full py-5 px-10">
                                <div class="flex flex-row flex-center justify-center items-center">
                                    <div class="flex flex-col justify-center items-center col-6 col-md-4 p-0">
                                        <img src="{image?.url}" class="w-36 border-radius lg:ml-5 ml-1" alt="">
                                    </div>
                                    <div class="flex flex-col justify-center items-center w-5/6">
                                        <div class="px-3 py-12">
                                            <strong class="lg:text-lg text-ld">{title}</strong>
                                            <p class="text-xs">at <strong>{company}</strong></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                {/if}
            


                <!-- Recent Projects -->
                <h2 class="text-2xl font-bold mt-5 mb-3">Recent Projects</h2>
                {#each featuredProjects as { title, description, video, image, demoUrl }}
                    <div class="flex flex-col lg:flex-row justify-start items-center border rounded-xl overflow-hidden h-100 p-10 lg:mb-0 mb-5">
                        <div class="flex lg:flex-row flex-col justify-start items-center">
                            <div class="flex flex-col justify-start items-center lg:w-1/4 w-full">
                                {#if video?.url}
                                    <Video
                                        cover={image?.url}
                                        video={video?.url}
                                    />
                                {:else}
                                    <div class="flex flex-col justify-start items-start lg:mt-0 mt-5">
                                            <img 
                                                src="{image?.url}" 
                                                class="w-72 h-auto rounded-lg border border-white" 
                                                alt=""
                                            />
                                    </div>
                                {/if}
                            </div>
                            <div class="lg:w-3/4 w-full lg:my-0 my-5 lg:pl-10">
                                <h1 class="lg:text-xl text-lg font-semibold mb-2">{title}</h1>
                                <p class="lg:text-sm text-xs mb-2">{description}</p>

                                {#if demoUrl}
                                    <a href="{demoUrl}" class="link font-bold" rel="noreferrer">View Project</a>
                                {/if}
                            </div>
                        </div>
                    </div>
                {/each}

            <!-- Contact -->
            <h1 class="text-2xl font-bold mt-5 mb-3">
                CONTACT
            </h1>
    
            <div class="py-8 mb-5 lg:mb-5 lg:py-16 px-4 lg:mx-auto border rounded-xl border-white">
                <div class="flex flex-col justify-center items-center p-10">
                    <p class="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Have a question for our team? Feel free to read out and we will get back to you as soon as possible!</p>
                    <form target="_blank" action="https://formsubmit.co/rotem.avisar@gmail.com" method="POST" class="w-full">
                        <div class="form-group">
                            <div class="form-row">
                                <label for="email" class="block text-sm font-bold">Your email</label>
                                <input type="email" name="email" class="form-control shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@email.com" required>
                            </div>
                            <div class="form-row">
                                <label for="subject" class="block text-sm font-medium pt-2">Subject</label>
                                <input type="text" name="subject" class="form-control block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required>
                            </div>
                            <div class="sm:col-span-2 form-row">
                                <label for="message" class="block text-sm font-medium pt-2">Your message</label>
                                <textarea name="message" rows="6" class="form-control block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                            </div>
                            <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-gray-900 rounded-lg bg-white sm:w-fit hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-primary-300 mt-5">Send message</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
</div>

<script lang="ts">
    export const prerender = true;

    import Video from "$lib/components/video.svelte";
    
    import general from "$lib/data/general.js";
    import media from "$lib/data/media.js";
    import works from "$lib/data/works.js";
    import featuredProjects from "$lib/data/featured-projects";

    const mediaCol1 = media.filter(({ column }) => column === 1).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol2 = media.filter(({ column }) => column === 2).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
    const mediaCol3 = media.filter(({ column }) => column === 3).sort(({ order : a = 0 }, { order : b = 0 }) => (a > b ? 1 : -1));
</script>