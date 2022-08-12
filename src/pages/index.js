import React from 'react';
import classnames from 'classnames';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { FiBox } from 'react-icons/fi';
import { FaPeopleCarry, FaCogs, FaUsersCog, FaRegFileCode } from 'react-icons/fa';
import { HiShieldCheck } from 'react-icons/hi';
import { BiSupport } from 'react-icons/bi';
import { RiShieldStarLine, RiInstallLine, RiBookLine } from 'react-icons/ri';
import { GiRadioTower } from 'react-icons/gi';
import { GrRaspberry, GrDebian, GrUbuntu } from 'react-icons/gr';
import { AiOutlineAndroid } from 'react-icons/ai';
import { TiMessages } from 'react-icons/ti';
import { IconContext } from "react-icons";
import { Install } from '@styled-icons/entypo';
import { LearningApp } from '@styled-icons/fluentui-system-regular';
import { BoxOpen } from '@styled-icons/fa-solid';
import { Heart } from '@styled-icons/fluentui-system-filled';
import { Support } from '@styled-icons/boxicons-regular';
import { Discount } from '@styled-icons/boxicons-solid';
import { LightningBolt } from '@styled-icons/heroicons-solid';
import { Google, Chrome } from '@styled-icons/boxicons-logos';
import { Samsung, Asus, Acer } from '@styled-icons/simple-icons';
import CardWButton2 from '@site/src/components/CardsWButton2';
import CardWTitle from '@site/src/components/CardsWTitle';
import ButtonSolid from '@site/src/components/ButtonSolid';
import Trademark from '@site/src/components/Trademark';
import indexData from '@site/src/pages/index-data.json';

// --------------------------- Data to be displayed on the website ---------------------------

// The JSON object given below contains the section-wise data for the website.
// Data: Text, Image Paths, Links

const ConstantsList = {

    section1Heading: 'BrainyPi',
    section1SubHeading: 'Equipped with RK3399 hexa-core 64-bit processor, Mali T80 GPU, 8GB RAM, right for your AI and IOT needs.',
    ctaButton: "Get Started",
    heroImg: 'img/BrainyPi.svg',

    section2Heading: 'What is different?',
    section2SubHeading: '',

    section3Heading: 'Specifications',
    section3SubHeading: 'Quad-core ARM Cortex-A55 up to 2.0GHz with Neon and FPU',
    CPUImg: 'img/CPU.png',

    section4Heading: 'GPU / NPU / VPU',
    section4SubHeading: 'Perfect for Computer Vision, AI and Multi-Media processing',
    GPUImg: 'img/gpu.png',

    section5Heading: 'Wide variety of interfaces',
    section5SubHeading: 'Supports wide variety of interfaces',
    interfaceImg: 'img/rockpi_4b_interfaces_description2.png',

    section6Heading: 'Many system options',
    section6SubHeading: 'Has support for Android, Debian, Ubuntu, Shunya OS and more..',
    systemImg: 'img/system-options.png',

    section7Heading: 'Enterprise Grade Hardware',
    section7SubHeading: '',

    section8Heading: 'AIoT Enabled',
    section8SubHeading: 'The board with brains built in.',
    AIoTImg: 'img/AIoT.png',

    section9Heading: 'Get Started',
    section9SubHeading: '',

    section10Heading: 'Need Help?',
    section10SubHeading: 'Anything missing in documentation? More support options here',
    ctaButton1: 'Quick Start / Setup',
    ctaButton2: 'Install OS',

    sectionInspirationHeading: 'Our Inspiration: Raspberry Pi',
    sectionInspirationSubHeading: 'This is a work in progress to create an enterprise substitute to Raspberry Pi which depends heavily on user feedback for its growth.',
    sectionInspirationButton: 'Give Feedback',
}

// --------------------------------------------------------------------------------



// ----------------------------- Card Content -----------------------------

/* List of components features */
const UserList = [
    {
        title: 'Enterprise',
        description: 'Professional projects with over 100 devices installed needing a stable supply.',
        icon: <RiShieldStarLine size={96} />,
    },
    {
        title: 'Community',
        description: 'For hobbyists, academics and single projects.',
        icon: <FaPeopleCarry size={96} />,
    },
    {
        title: 'Custom projects',
        description: 'Commercial products with above 1000 pcs and needs custom hardware and software design.',
        icon: <FiBox size={96} />,
    },
];


/* List of components features */
const diffList = [
    {
        title: 'Full software support',
        description: '',
        icon: <FaRegFileCode size={84} />,
    },
    {
        title: 'Enterprise grade systems (built-in CIS security)',
        description: '',
        icon: <RiShieldStarLine size={84} />,
    },
    {
        title: 'Carrier Grade Linux support',
        description: '',
        icon: <GiRadioTower size={84} />,
    },
    {
        title: 'Hardware customisation options for large projects',
        description: '',
        icon: <FaCogs size={84} />,
    },
    {
        title: 'Fully Raspbian compatible',
        description: '',
        icon: <GrRaspberry size={84} />,
    },
    {
        title: 'Wide variety of system choices',
        description: '',
        icon: <><AiOutlineAndroid size={64} />  <GrDebian size={64} />  <GrUbuntu size={64} /></>,
    },
];

/* List of components features */
const NeedHelpList = [
    {
        title: 'Community support',
        headerIcon: <TiMessages size={96} />,
        buttonText: 'Forum',
        headerIconColor: '#39603d',
        buttonLink: 'https://forum.brainypi.com',
    },
    {
        title: 'Professional support',
        headerIcon: <BiSupport size={96} />,
        buttonText: 'Raise a Ticket',
        headerIconColor: '#39603d',
        buttonLink: 'https://support.brainypi.com',
    },
    {
        title: 'Custom project support',
        headerIcon: <FaUsersCog size={96} />,
        buttonText: 'Click Here',
        headerIconColor: '#39603d',
        buttonLink: 'custom-projects',
    },
];




/* List of components features */
const GetStartedList = [
    {
        title: 'Enterprise Projects',
        headerIcon: <BoxOpen size={72} color='#39603d' />,
        headerIconColor: '#39603d',
    },
    {
        title: 'Installation',
        headerIcon: <Install size={72} color='#39603d' />,
        headerIconColor: '#39603d',
    },
    {
        title: 'User Guide',
        headerIcon: <LearningApp size={72} color='#39603d' />,
        headerIconColor: '#39603d',
    },
];

// --------------------------------------------------------------------



// Function returning a colored line
const ColoredLine = ({ color }) => (

    <hr centered component
        style={{
            color: color,
            backgroundColor: color,
            height: 0.5,
            width: '100%',
            alignItems: 'center',
            justify: 'centered'
        }}
    />

);

// Cards function used at 'What can you build?' section
function CardListFn({ title, icon, description }) {
    {/*const imgUrl = useBaseUrl(img);*/ }
    return (
        <div className={classnames('col col--4')}>
            {/*<div class="card-demo">*/}
            <div className={classnames('card item drop-shadow-lg', styles.diffCardStyle)}>
                <div class="card__image">
                    <div className='image-wrapper'>
                        {/*<img
                            src={imgUrl}
                            alt="Oops!, no image to display"
                            className={classnames(styles.cardimagestyle)} width="35%" />*/}

                    </div>
                </div>
                <div class="card__body">
                    <IconContext.Provider value={{ color: "#39603d", style: { verticalAlign: 'middle' } }}>
                        {icon}
                    </IconContext.Provider>
                    <br />
                    <br />
                    <h4 className={classnames(styles.cardtitle)}>{title}</h4>
                    {/* <small>{description}</small> */}
                </div>
            </div>
            {/*</div>*/}
        </div>
    );
}

function CardsWithDescriptionFn({ title, icon, description }) {
    {/*const imgUrl = useBaseUrl(img);*/ }
    return (
        <div className={classnames('col col--4')}>
            <div className={classnames('card item drop-shadow-xl', styles.UserCardStyle)}>
                <div class="card__body">
                    <IconContext.Provider value={{ color: "#39603d", style: { verticalAlign: 'middle' } }}>
                        {icon}
                    </IconContext.Provider>
                    <br />
                    <br />
                    <h2 className={classnames(styles.userCardTitle)}>{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

// Function for the section having CPU, GPU, Interface, Multi-OS images
function ImgSection({ title, subtitle, img, style }) {
    const imgUrl = useBaseUrl(img);
    return (
        <div className="container">
            <div className="container">
                <h1 className="hero__title">{title}</h1>
                <ColoredLine color="grey" />
                <p className="hero__subtitle">{subtitle}</p>
                <div className="container">
                    <img
                        className={style}
                        src={imgUrl}
                        alt="Oops! no image to display." />
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
            // Hero
            title={`${siteConfig.title}`}
            description={`${siteConfig.tagline}`}>
            <header className={classnames('hero hero--dark shadow--lw', styles.heroBanner)}>
                <div className="container">
                    <div class="container">
                        <div class="row">
                            <div class="col col--6">
                                <div class="container">
                                    <div class="row">
                                        {/* <div class="col col--12">12</div> */}
                                        <div class="col col--12">
                                            <h1 className={classnames("hero__title", styles.section1title)}>
                                                {ConstantsList.section1Heading}
                                            </h1>
                                        </div>
                                        <div class="col col--12">
                                            <p className="hero__subtitle">
                                                {ConstantsList.section1SubHeading}
                                            </p>
                                        </div>
                                        <div class="col col--9 mx-auto">
                                            <div class="container mx-auto">
                                                <ButtonSolid buttonLink='#' buttonText='Buy'
                                                    className={clsx('!p-2 !text-2xl w-1/2')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col col--6">
                                <div className={classnames(styles.imgSection1)}>
                                    <div className="text--center">
                                        <img className={styles.imgSection1} src={useBaseUrl(ConstantsList.heroImg)} alt="building lego blocks" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <div className={classnames('hero hero--light shadow--md', styles.tagLine)}>
                    <div className="container">
                        <div className="container">
                            <h1 className={classnames("hero__title", styles.heading)}>
                                {ConstantsList.section2Heading}
                            </h1>
                            <ColoredLine color="black" />
                            <p className="hero__subtitle">
                                {ConstantsList.section2SubHeading}
                            </p>
                            {diffList && diffList.length && (
                                <section className={styles.diffSection}>
                                    <div className="container">
                                        <div className="row">
                                            {diffList.map((props, idx) => (
                                                <CardListFn key={idx} {...props} />
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
                <section>
                    <div class="px-4 py-12 mx-auto 2xl:max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12">
                        <h1 class="mb-8 text-4xl text-center font-bold leading-none tracking-tighter text-neutral-900 md:text-7xl lg:text-5xl">Stability</h1>
                        <ColoredLine color="black" />
                        <div class="flex flex-wrap items-center mx-auto 2xl:max-w-7xl">
                            <div class="w-full mt-12 lg:w-1/4 lg:max-w-lg xl:mt-10">
                                <img class="object-cover object-center mx-auto shadow-xl ease-in-out duration-300 hover:scale-105 hover:shadow-2xl" height="250px" alt="hero" src={useBaseUrl('img/CPU.png')} />
                            </div>
                            <div class="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/3 lg:pl-12 md:mb-0">
                                <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-900 md:text-7xl lg:text-5xl">Stable SoC</h1>
                                <p class="mb-8 text-xl leading-relaxed text-left text-gray-500">
                                    <ul class="list-disc">
                                        <li>RK3399 Variant with NPU support for AI available for same SOC (needs custom order)</li>
                                        <li>RK3399 Variant with Industrial grade temperature support available (needs custom order)</li>
                                        <li>Preferred SoC for Google Chromebooks <Chrome size={32} color='#39603d' /> by companies like
                                            <br /><Google size={32} color='#39603d' /> | <Samsung size={64} color='#39603d' /> | <Asus size={64} color='#39603d' /> | <Acer size={64} color='#39603d' />
                                        </li>
                                    </ul>
                                    <br />
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center mx-auto mt-1 2xl:max-w-7xl">
                            <div class="w-full mt-12 lg:w-1/4 lg:max-w-lg xl:mt-10">
                                <div>
                                    <div class="relative w-full max-w-lg">
                                        <div class="relative">
                                            <img class="object-cover object-center mx-auto shadow-xl ease-in-out duration-300 hover:scale-105 hover:shadow-2xl" alt="hero" height="250px" src={useBaseUrl('img/long-term-support.svg')} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col items-start mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-12 md:mb-0">
                                <h1 class="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-900 md:text-7xl lg:text-5xl">Long Term Support (LTS)</h1>
                                <p class="mb-8 text-xl leading-relaxed text-left text-gray-600">BrainyPi Enterprise will always ship with LTS Kernel, Firmware and Yocto layers.</p>
                            </div>
                        </div>
                        <h1 class="mt-10 mb-4 text-4xl text-center font-bold leading-none tracking-tighter text-neutral-900 md:text-7xl lg:text-5xl ">Long Term guaranteed supply**</h1>
                        <p class="text-base leading-relaxed text-center text-gray-500">** - For RK3399 Soc long term supply is guaranteed by Rockchip</p>
                    </div>
                </section>
                {/* Image Section */}
                <div className={classnames('hero hero--secondary shadow--md', styles.userIdentity)}>
                    <div className="container">
                        <div className="container">
                            <h1 className="hero__title">{ConstantsList.section3Heading}</h1>
                            <ColoredLine color="grey" />
                            <div className="container">
                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            Processor:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            64-bit Hexa Core Processor<br />
                                            2x ARM Cortex-A72 upto 1.8GHz with 4x ARM Coretex-A53 upto 1.4 GHz
                                        </p>
                                    </div>
                                </div>
                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            GPU:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            Mali T860MP4 GPU, supports OpenGL ES 1.1 /2.0 /3.0 /3.1 /3.2, Vulkan 1.0, Open CL 1.1 1.2, DX11.
                                        </p>
                                    </div>
                                </div>
                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            Memory:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            LPDDR4 - 64bit dual channel LPDDR4@3200Mb/s, 1GB/2GB/4GB optional
                                        </p>
                                    </div>
                                </div>
                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            Storage:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            <b>eMMC module</b> - Optional industrial compatible high performance eMMC module, 8G/16G/32G/64G/128G available<br />
                                            <b>uSD card</b> - uSD slot supports up to 128G uSD card
                                        </p>
                                    </div>
                                </div>
                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            Display:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            <b>HDMI</b> - Full size HDMI 2.0 up to 4k@60(Type A)<br />
                                            <b>MIPI DSI</b> - MIPI DSI 2 lanes via FPC connector<br />
                                            HDMI and MIPI DSI can work at the same time, support mirror mode or extend mode.
                                        </p>
                                    </div>
                                </div>
                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            Camera:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            MIPI CSI 2 lanes via FPC connector, support up to 800MP camera
                                        </p>
                                    </div>
                                </div>
                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            Wireless:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            802.11 ac wifi, Bluetooth 4.1
                                        </p>
                                    </div>
                                </div>
                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            USB:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            1x USB 3.0 OTG,
                                            1x USB 3.0 HOST, and
                                            2x USB 2.0 HOST
                                        </p>
                                    </div>
                                </div>

                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            Ethernet:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            GbE LAN with PoE support
                                        </p>
                                    </div>
                                </div>
                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            IO:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            40-pin expansion header, compatible with Raspberry Pi
                                        </p>
                                    </div>
                                </div>
                                <div className={classnames('row', styles.specsTable)}>
                                    <div className={classnames('col col--3')}>
                                        <h3>
                                            Power:
                                        </h3>
                                    </div>
                                    <div class="col col--9">
                                        <p className={classnames(styles.specsInfo)}>
                                            Supports USB Type C PD 2.0, 9V/2A, 12V/2A, 15V/2A, 20V/2A
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classnames('hero hero--secondary', styles.components)}>
                    <ImgSection
                        title={ConstantsList.section5Heading}
                        subtitle={ConstantsList.section5SubHeading}
                        img={ConstantsList.interfaceImg} style={styles.imgInterfaces} />
                </div>
                <div className={classnames('hero hero--secondary', styles.components)}>
                    <ImgSection
                        title={ConstantsList.section6Heading}
                        subtitle={ConstantsList.section6SubHeading}
                        img={ConstantsList.systemImg} style={styles.imgSystemOptions} />
                </div>
                <div className={classnames('hero hero--secondary', styles.components)}>
                    <ImgSection
                        title={ConstantsList.section8Heading}
                        img={ConstantsList.AIoTImg}
                        style={styles.imgAIoT} />
                </div>
                {/* Certified */}
                <div className={classnames('hero hero--secondary shadow--md', styles.gradebg)}>
                    <div class="grid gap-6 md:grid-cols-1 xl:grid-cols-1 mx-auto">
                        <div class="flex items-center bg-white rounded-lg shadow-xs">
                            <div class="p-2 mr-2 items-center">
                                <HiShieldCheck size={48} color="black" />
                            </div>
                            <div>
                                <h1 class="grow font-bold py-2 px-2 mt-2 items-center">
                                    {ConstantsList.section7Heading}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Who is this for ?*/}
                <div className={classnames('hero hero--light', styles.tagLine)}>
                    <div className="container">
                        <div className="container">
                            <h1 className={classnames("hero__title", styles.heading)}>
                                Who is this for?
                            </h1>
                            <ColoredLine color="black" />
                            {UserList && UserList.length && (
                                <section className={styles.indexHeroDiagrambanner}>
                                    <div className="container">
                                        <div className="row">
                                            {UserList.map((props, idx) => (
                                                <CardsWithDescriptionFn key={idx} {...props} />
                                            ))}
                                        </div>
                                    </div>
                                </section>
                            )}
                        </div>
                    </div>
                </div>
                <section class="py-20 bg-white">
                    <div class="container max-w-6xl mx-auto">
                        <h1 class="text-5xl font-bold tracking-tight text-center">{indexData.sectionImpact.Heading1} <Heart size={64} color="#DE3C4B" /> {indexData.sectionImpact.Heading2} </h1>
                        <p class="mt-2 text-2xl text-center text-gray-600">{indexData.sectionImpact.SubHeading1}</p>
                        <div class="grid grid-cols-4 gap-16 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:p-8">
                            <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl">
                                <div class="p-3 text-white bg-huntergreen rounded-full">
                                    <Support size={64} color="#FFFFF" />
                                </div>
                                <h4 class="text-xl font-medium text-gray-700">{indexData.sectionImpact.CardData.Card1.Heading}</h4>
                            </div>
                            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                                <div class="p-4 text-white bg-huntergreen rounded-full">
                                    <LightningBolt size={64} color="#FFFFF" />
                                </div>
                                <h4 class="text-xl font-medium text-gray-700">{indexData.sectionImpact.CardData.Card2.Heading}</h4>
                            </div>
                            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl">
                                <div class="p-3 text-white bg-huntergreen rounded-full">
                                    <Discount size={64} color="#FFFFF" />
                                </div>
                                <h4 class="text-xl font-medium text-gray-700">{indexData.sectionImpact.CardData.Card3.Heading}</h4>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Get Started */}
                <section class="py-12 sm:py-16 bg-bdark">
                    <div class="max-w-7xl px-10 mx-auto sm:text-center">
                        <h2 class="font-bold text-white text-3xl sm:text-4xl lg:text-5xl mt-3">{ConstantsList.section9Heading}</h2>
                        <ColoredLine color="white" />
                        <p class="mt-4 text-white text-base sm:text-xl lg:text-2xl">{ConstantsList.section9SubHeading}<br class="lg:hidden hidden sm:block" /></p>
                        <div class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-20 my-20">
                            {GetStartedList && GetStartedList.length && (
                                <>
                                    {GetStartedList.map((props, idx) => (
                                        <CardWTitle key={idx} {...props} />
                                    ))}
                                </>
                            )}
                        </div>
                        <div class="max-w-7xl px-10 mx-auto sm:text-center">
                            <ButtonSolid buttonLink={useBaseUrl('get-started')} buttonText='GET STARTED'
                                className={clsx('!p-2 !w-1/4')} />
                        </div>
                    </div>
                </section>
                {/* Need Help? */}
                <section class="py-12 sm:py-16 bg-white">
                    <div class="max-w-7xl px-10 mx-auto sm:text-center">
                        <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">{ConstantsList.section10Heading}</h2>
                        <ColoredLine color="black" />
                        <p class="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">{ConstantsList.section10SubHeading}<br class="lg:hidden hidden sm:block" /></p>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 my-20 sm:my-16">
                            {NeedHelpList && NeedHelpList.length && (
                                <>
                                    {NeedHelpList.map((props, idx) => (
                                        <CardWButton2 key={idx} {...props} />
                                    ))}
                                </>
                            )}
                        </div>
                    </div>
                </section>
                {/* Inspiration */}
                <div className={classnames('hero hero--secondary', styles.tagLine)}>
                    <div className="container">
                        <h1 className={classnames("hero__title", styles.heading2)}>
                            {indexData.sectionInspiration.Heading}
                        </h1>
                        <p className="hero__subtitle mx-auto w-8/12">
                            {indexData.sectionInspiration.SubHeading}
                        </p>
                        <ButtonSolid buttonLink='https://forms.gle/Z1vuvMXx6n3G2uK78' buttonText={indexData.sectionInspiration.ButtonText}
                            className={clsx('!p-2 !w-1/5 !text-xl !uppercase !font-bold')} />
                    </div>
                </div>
                <div class="bg-white">
                    <div class="px-5 py-12 mx-auto bg-gray-100 max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
                        <div class="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
                        </div>
                        <div class="mt-8 md:mt-0 md:order-1">
                            <span class="mt-2 text-base font-light text-gray-600">
                                All Trademarks referred to are the property of their respective owners. We don't claim any official association with them. Use is covered under 'Fair Use' policy for general public information.
                                <Google size={28} color='gray' />&nbsp;
                                <Chrome size={28} color='gray' />&nbsp;
                                <Samsung size={48} color='gray' />&nbsp;
                                <Asus size={48} color='gray' />&nbsp;
                                <Acer size={48} color='gray' />&nbsp;
                                <GrRaspberry size={28} color='gray' />&nbsp;
                                <AiOutlineAndroid size={28} color='gray' />&nbsp;
                                <GrDebian size={28} color='gray' />&nbsp;
                                <GrUbuntu size={28} color='gray' />&nbsp;
                            </span>
                        </div>
                    </div>
                </div>
            </main>
        </Layout >
    );
}

export default Home;


