import React from 'react';
import classnames from 'classnames';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { GrDebian, GrUbuntu } from 'react-icons/gr';
import { FiDownload } from 'react-icons/fi';
import { FcAndroidOs, FcLinux } from 'react-icons/fc';
import { IconContext } from "react-icons";
import { AngleDoubleRight } from '@styled-icons/fa-solid';

function Home() {
    return (
        <Layout
            title="Get Started"
            description="Get started with ready to use OS images for Brainy Pi">
            <header>
            </header>
            <main>
                <section>

                </section>
                <section class="py-12 sm:py-16 bg-stone-50">
                    <div class="max-w-7xl px-10 mx-auto">
                        <h2 class="font-bold text-3xl sm:text-center sm:text-4xl lg:text-5xl mt-3">Get Started with Enterprise projects</h2>
                        <p class="mt-4 text-stone-500 sm:text-center text-base sm:text-xl lg:text-2xl">Brainy Pi comes with ready to deploy Enterprise projects.<br class="lg:hidden hidden sm:block" /></p>
                        <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                            <div class="relative mx-auto max-w-7xl">
                                <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div class="flex-shrink-0">
                                            <img class="object-cover w-full h-48" src={useBaseUrl('img/digital-signage-500x500.jpg')} alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div class="flex-1">
                                                <div class="block mt-2">
                                                    <p class="text-3xl sm:text-center font-semibold text-neutral-600">Digital Signage & Kiosk</p>
                                                    <p class="mt-3 text-base text-gray-500">Build Smart Display solution, with features like Unlimited Screens, Remote Maintainence, Remote updates, Enterprise Security and fully Open source components.</p>
                                                    <a href={useBaseUrl('docs/projects/digital-signage')}><p class="mt-3 text-left underline text-base text-blue-500">Read More <AngleDoubleRight size='22' /></p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div class="flex-shrink-0">
                                            <img class="object-cover w-full h-48" src={useBaseUrl('img/thin-client.png')} alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div class="flex-1">
                                                <div class="block mt-2">
                                                    <p class="text-3xl sm:text-center font-semibold text-neutral-600">Thin Client</p>
                                                    <p class="mt-3 text-base text-gray-500">Low power consumption and support for Remote Display protocols like RDP, NX, VNC etc.. make Brainy Pi ideal for building Thin client solutions.</p>
                                                    <a href={useBaseUrl('docs/projects/thin-client')}><p class="mt-3 text-left underline text-base text-blue-500">Read More <AngleDoubleRight size='22' /></p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                                        <div class="flex-shrink-0">
                                            <img class="object-cover w-full h-48" src={useBaseUrl('img/industrial-gateway.png')} alt="" />
                                        </div>
                                        <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                            <div class="flex-1">
                                                <div class="block mt-2">
                                                    <p class="text-3xl sm:text-center font-semibold text-neutral-600">Industrial IoT Gateway</p>
                                                    <p class="mt-3 text-base text-gray-500">Brainy Pi has 40 pin GPIO header along with ready to use library support for Industrial protocols like Modbus, OPCUA, IEC 104. Makes it easy for building Industrial IoT Gateways.</p>
                                                    <a href={useBaseUrl('docs/projects/iiot-gateway')}><p class="mt-3 text-left underline text-base text-blue-500">Read More <AngleDoubleRight size='22' /></p></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-12 sm:py-16 bg-white">
                    <div class="max-w-7xl px-10 mx-auto sm:text-center">
                        <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">Get Started by Installing OS</h2>
                        <p class="mt-4 text-stone-500 text-base sm:text-xl lg:text-2xl">Brainy Pi comes with some of your favorite Systems.<br class="lg:hidden hidden sm:block" /></p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
                            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                                <IconContext.Provider value={{ color: "#39603d", style: { verticalAlign: 'middle' } }}>
                                    <GrDebian size={84} />
                                </IconContext.Provider>
                                <h3 class="font-bold mt-4">Debian 10</h3>
                                <br />
                                <Link
                                    to={useBaseUrl('docs/linux/01-install-os')}
                                    class="flex items-center justify-center w-half px-4 py-2 mt-2 space-x-3 text-sm text-center bg-rustyred text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-rustyred-300 hover:bg-rustyred-300 dark:hover:bg-rustyred-400">
                                    <FiDownload class="text-white" size={28} />
                                    <span class="text-sm text-white dark:text-white-200 font-bold">Install</span>
                                </Link>
                            </div>
                            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                                <IconContext.Provider value={{ color: "#39603d", style: { verticalAlign: 'middle' } }}>
                                    <GrUbuntu size={84} />
                                </IconContext.Provider>
                                <h3 class="font-bold mt-4">Ubuntu 20.04</h3>
                                <br />
                                <Link
                                    to={useBaseUrl('docs/linux/01-install-os')}
                                    class="flex items-center justify-center w-half px-4 py-2 mt-2 space-x-3 text-sm text-center bg-rustyred text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-rustyred-300 hover:bg-rustyred-300 dark:hover:bg-rustyred-400">
                                    <FiDownload class="text-white" size={28} />
                                    <span class="text-sm text-white dark:text-white-200 font-bold">Install</span>
                                </Link>
                            </div>
                            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                                <FcLinux size={84} />
                                <h3 class="font-bold mt-4">Shunya OS<br />(Enterprise Linux)</h3>
                                <Link
                                    to={useBaseUrl('docs/linux/01-install-os')}
                                    class="flex items-center justify-center w-half px-4 py-2 mt-2 space-x-3 text-sm text-center bg-rustyred text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-rustyred-300 hover:bg-rustyred-300 dark:hover:bg-rustyred-400">
                                    <FiDownload class="text-white" size={28} />
                                    <span class="text-sm text-white dark:text-white-200 font-bold">Install</span>
                                </Link>
                            </div>
                            <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
                                <FcAndroidOs size={84} />
                                <h3 class="font-bold mt-4">Android 11</h3>
                                <br />
                                <Link
                                    to={useBaseUrl('docs/android/01-install-os')}
                                    class="flex items-center justify-center w-half px-4 py-2 mt-2 space-x-3 text-sm text-center bg-rustyred text-white transition-colors duration-200 transform border rounded-lg dark:text-gray-300 dark:border-rustyred-300 hover:bg-rustyred-300 dark:hover:bg-rustyred-400">
                                    <FiDownload class="text-white" size={28} />
                                    <span class="text-sm text-white dark:text-white-200 font-bold">Install</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-8 leading-7 text-stone-900 bg-stone-50 sm:py-12 md:py-16 lg:py-24">
                    <div class="max-w-6xl px-10 mx-auto lg:px-12">
                        <div class="flex flex-col items-start leading-7 text-stone-900 border-0 border-stone-200 lg:items-center lg:flex-row">
                            <div class="box-border flex-1 text-center sm:text-left">
                                <h2 class="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-stone-200 sm:text-5xl">
                                    Get Started with User Guide
                                </h2>
                                <p class="mt-2 text-xl text-left text-stone-900 border-0 border-stone-200 sm:text-2xl">
                                </p>
                            </div>
                            <a href={useBaseUrl('docs/linux/01-install-os')} class="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-white no-underline bg-rustyred border border-rustyred-500 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-rustyred-600 hover:border-rustred-600 hover:text-white focus-within:bg-rustyred-600 focus-within:border-rustyred-600 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
                                Get Started
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
                <div class="bg-white">
                    <div class="px-5 py-12 mx-auto bg-gray-100 max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
                        <div class="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
                        </div>
                        <div class="mt-8 md:mt-0 md:order-1">
                            <span class="mt-2 text-base font-light text-gray-600">
                                All Trademarks referred to are the property of their respective owners. We don't claim any official association with them. Use is covered under 'Fair Use' policy for general public information.
                                <FcLinux size={28} color='gray' />&nbsp;
                                <FcAndroidOs size={28} color='gray' />&nbsp;  
                                <GrDebian size={28} color='gray' />&nbsp;  
                                <GrUbuntu size={28} color='gray' />&nbsp;
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}

export default Home;