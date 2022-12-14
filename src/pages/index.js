import React from 'react';
import classnames from 'classnames';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { AngleDoubleRight } from '@styled-icons/fa-solid';
import projectListData from './index-data.json';


/* List of components features */

var projectList = projectListData.projectList;

// Cards function used at 'What can you build?' section
function ProjectsListFn({ title, thumbnail, description, link }) {
    const thumbUrl = useBaseUrl(thumbnail);
    return (
        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
            <div class="flex-shrink-0">
                <img class="object-cover w-full h-48" src={thumbUrl} alt="Oops, Image not found!" />
            </div>
            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                <div class="flex-1">
                    <div class="block">
                        <p class="text-2xl sm:text-center font-semibold text-neutral-600">{title}</p>
                        <p class="text-sm text-gray-500">{description}</p>
                    </div>
                    <Link
                        to={link}
                        class="flex items-center justify-center px-4 py-2 mt-2 space-x-3 text-sm text-center bg-rustyred text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-rustyred-300 hover:no-underline hover:bg-rustyred-300 dark:hover:bg-rustyred-400">
                        <span class="text-sm text-white dark:text-white-200 font-bold">Read More</span>
                        <AngleDoubleRight color='#ffffff' size={28} />
                    </Link>
                </div>
            </div>
        </div>
    );
}



/* -------------------------------------------------------------- */
/*                    Main Function                               */
/* -------------------------------------------------------------- */

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    const sectionStyle = {
        backgroundImage: `url(${useBaseUrl('img/7083.png')})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat'
    };
    return (
        <Layout
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <header>
            </header>
            <main>
                <section>

                </section>
                <>
                    {projectList && projectList.length && (
                        <section class="py-12 sm:py-16 bg-stone-50">
                            <div class="max-w-7xl px-10 mx-auto">
                                <h2 class="font-bold text-2xl sm:text-center sm:text-4xl lg:text-5xl">Brainy Pi simple Projects showcase</h2>
                                <p class="text-stone-500 sm:text-center text-base sm:text-xl lg:text-2xl">Brainy Pi comes with ready to deploy projects.<br class="lg:hidden hidden sm:block" /></p>
                                <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                                    <div class="relative mx-auto max-w-7xl">
                                        <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                                            {projectList.map((props, idx) => (
                                                <ProjectsListFn key={idx} {...props} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </>
                <div class="bg-white">
                    <div class="px-5 py-12 mx-auto bg-gray-100 max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
                        <div class="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
                        </div>
                        <div class="mt-8 md:mt-0 md:order-1">
                            <span class="mt-2 text-base font-light text-gray-600">
                                All Trademarks referred to are the property of their respective owners. We don't claim any official association with them. Use is covered under 'Fair Use' policy for general public information.
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </Layout >
    );
}

export default Home;


