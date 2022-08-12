import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { GrDebian, GrUbuntu } from 'react-icons/gr';
import { FiDownload } from 'react-icons/fi';
import { FcAndroidOs, FcLinux } from 'react-icons/fc';
import { IconContext } from "react-icons";

function Milestones({ title, timeText, description }) {
    return (
        <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
                <div class="flex z-10 justify-center items-center w-6 h-6 bg-alabaster rounded-full ring-0 ring-white shrink-0">
                <div class="flex z-10 justify-center items-center w-3 h-3 bg-huntergreen rounded-full ring-0 ring-white shrink-0">
                
                </div>
                </div>
                <div class="hidden sm:flex w-full bg-gray-300 h-0.5"></div>
            </div>
            <div class="mt-3 sm:pr-8">
                <h3 class="text-lg font-semibold text-huntergreen">{title}</h3>
                <time class="block mb-2 text-sm font-normal leading-none text-huntergreen-200 font-bold">{timeText}</time>
                <p class="text-base font-normal text-huntergreen-400">{description}</p>
            </div>
        </li>
    );
}

const milestones = [
    {
        title: 'Brainy Pi 1 v0.1.0.beta',
        timeText: 'Planned release Jun 2022',
        description: (
            <>
            Initial release with focus on Enterprise support.<br/> 
            Enterprise in beta. 
            Community in alpha. 
            </>
        ),
    },
    {
        title: 'Brainy Pi 1 v0.2.0.beta',
        timeText: 'Planned release Aug 2022',
        description: (
            <>
            Stable Enterprise.<br/> 
            Community beta.
            </>
        ),
    },
    {
        title: 'Brainy Pi 1 v1.0.0',
        timeText: 'Planned release Oct 2022',
        description: (
            <>
            Stable Enterprise.<br/> 
            Stable Community.
            </>
        ),
    },
];


function Home() {
    return (
        <Layout
            title="BrainyPi Roadmap"
            description="Roadmap for Brainypi">
            <header>
            </header>
            <main>
                <section class="py-12 sm:py-16 bg-white">
                    <div class="max-w-7xl px-10 mx-auto sm:text-center">
                        <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3 text-huntergreen-300">Roadmap</h2>
                        <p class="mt-4 text-huntergreen-300 text-base sm:text-xl lg:text-2xl"><br class="lg:hidden hidden sm:block" /></p>
                        <ol class="items-center sm:flex list-none">
                            <>
                                {milestones.map((props, idx) => (
                                    <Milestones key={idx} {...props} />
                                ))}
                            </>
                        </ol>
                    </div>
                </section>
            </main>
        </Layout >
    );
}

export default Home;