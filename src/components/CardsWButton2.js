import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import classnames from 'classnames';
import PropTypes from 'prop-types';
// Icons
import { IconContext } from "react-icons";

const CardWButton2 = ({
    title,
    headerIcon,
    headerIconColor,
    buttonText,
    buttonLink
}) => {
    return (
        <div class="rounded-lg py-10 flex flex-col items-center justify-center shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-150 ease-out hover:ease-in">
            <IconContext.Provider
                value={{ color: headerIconColor, style: { verticalAlign: 'middle' } }}>
                {headerIcon}
            </IconContext.Provider>
            <h3 class="font-bold mt-4">{title}</h3>

            <Link to={buttonLink} className={classnames('!no-underline')}>
                <button class='button mx-auto items-center justify-center mt-2 font-bold text-lg text-center rounded-lg bg-rustyred text-white transition-colors duration-200 transform border rounded-lg hover:bg-rustyred-300'>
                    {buttonText}
                </button>
            </Link>
        </div>
    );
};

CardWButton2.propTypes = {
    title: PropTypes.string,
    headerIcon: PropTypes.element,
    headerIconColor: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
};

export default CardWButton2;

{/*
// Array of the Cards 
const cardListData = [
    {
        title: 'Lorem Ipsum',
        headerIcon: <GrDebian size={86} />,
        buttonIcon: <FiDownload class="text-white" size={28} />,
        buttonText: 'Integer vitae',
        headerIconColor: '#39603d',
        buttonLink: 'https://example.com',
    },
    {
        title: 'Lorem Ipsum',
        headerIcon: <GrDebian size={86} />,
        buttonIcon: <FiDownload class="text-white" size={28} />,
        buttonText: 'Integer vitae',
        headerIconColor: '#39603d',
        buttonLink: 'https://example.com',
    },
    {
        title: 'Lorem Ipsum',
        headerIcon: <GrDebian size={86} />,
        buttonIcon: <FiDownload class="text-white" size={28} />,
        buttonText: 'Integer vitae',
        headerIconColor: '#39603d',
        buttonLink: 'https://example.com',
    },
    {
        title: 'Lorem Ipsum',
        headerIcon: <GrDebian size={86} />,
        buttonIcon: <FiDownload class="text-white" size={28} />,
        buttonText: 'Integer vitae',
        headerIconColor: '#39603d',
        buttonLink: 'https://example.com',
    },
];


// Example usage of the Cards 
// Please the code inside the return () into your react page
// For 4 cards per row use the CSS 
// ```
// grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 
// ```
// For 3 cards per row use the CSS 
// ```
// grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 
// ```
const CardWButtonExample = ({
    list,
}) => {
    return (
        <section class="py-12 sm:py-16 bg-white">
            <div class="max-w-7xl px-10 mx-auto sm:text-center">
                <h2 class="font-bold text-3xl sm:text-4xl lg:text-5xl mt-3">Get Started</h2>
                <p class="mt-4 text-gray-500 text-base sm:text-xl lg:text-2xl">Brainy Pi comes with some of your favorite Systems.<br class="lg:hidden hidden sm:block" /></p>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-12 sm:my-16">
                    {cardListData && cardListData.length && (
                        <>
                            {cardListData.map((props, idx) => (
                                <CardWButton2 key={idx} {...props} />
                            ))}
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

CardsList.propTypes = {
    list: PropTypes.array,
};
*/}
