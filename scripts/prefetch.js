import fs from "fs";
import path from "path";

import { request, gql } from "graphql-request";

const {
    API_ENDPOINT,
    GENERAL_ID
} = process.env;

const prefetch = async () => {
    try {
        const { general } = await request(API_ENDPOINT, gql`
            query General {
                general(where: {
                    id: "${GENERAL_ID}"
                }) {
                    email
                    id
                    introDescription
                    name
                    twitter
                    discord
                    gitHub
                    exchangeArt
                    resume {
                        url
                    }
                    avatar {
                        url
                    }
                    headerImage {
                        url
                    }
                }
            }
        `);
        
        const { works } = await request(API_ENDPOINT, gql`
            query Works {
                works(first: 500) {
                    title
                    company
                    image {
                        url
                    }
                }
            }
        `);

        const { featuredProjects } = await request(API_ENDPOINT, gql`
            query Featured {
                featuredProjects(first: 500) {
                    title
                    description
                    demoUrl
                    video {
                        url
                    }
                    image {
                        url
                    }
                }
            }
        `);

        const { medias } = await request(API_ENDPOINT, gql`
            query Medias {
                medias(first: 500) {
                    order
                    column
                    coverImage {
                        url
                    }
                    video {
                        url
                    }
                }
            }
        `);
        
        const dataDir = path.join(process.cwd(), "./src/data");

        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir);
        }

        const makeModule = (data) => `export default ${JSON.stringify(data, null, 4)}`;

        await Promise.all([
            fs.promises.writeFile(path.join(dataDir, "general.js"), makeModule(general)),
            fs.promises.writeFile(path.join(dataDir, "works.js"), makeModule(works)),
            fs.promises.writeFile(path.join(dataDir, "media.js"), makeModule(medias)),
            fs.promises.writeFile(path.join(dataDir, "featured-projects.js"), makeModule(featuredProjects)),
        ]);
    } catch (error) {
        console.log(error);
    }
}

prefetch();