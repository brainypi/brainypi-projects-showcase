import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import PropTypes from 'prop-types';

const ButtonOutline = ({
    buttonText,
    buttonLink, 
    className
}) => {
    return (
        <Link to={buttonLink} className={clsx('!no-underline')}>
            <button className={clsx('p-1.5 pl-5 pr-5 \
                        bg-transparent border-2 border-rustyred \
                        text-rustyred text-lg font-bold rounded-lg \
                        hover:bg-rustyred hover:text-gray-100 \
                        focus:border-4 focus:border-rustyred', className)}>
                {buttonText}
            </button>
        </Link>
    );
};

ButtonOutline.propTypes = {
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    className: PropTypes.string,
};

export default ButtonOutline;