import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import PropTypes from 'prop-types';

const ButtonSolid = ({
    buttonText,
    buttonLink,
    className
}) => {
    return (
        <Link to={buttonLink} className={clsx('!no-underline')}>
            <button className={clsx('button mx-auto flex items-center justify-center \
                                    pl-5 pr-5 mt-2 \
                                    font-bold text-3xl text-center \
                                    bg-rustyred text-white \
                                    border-1.5 border-rustyred-400  \
                                    transition-all \
                                    ease-in-out duration-200 transform border rounded-lg \
                                    hover:scale-110 hover:border-rustyred-300 hover:bg-rustyred-300 hover:text-white \
                                    focus:border-4 focus:border-rustyred', className)}>
                {buttonText}
            </button>
        </Link>
    );
};

ButtonSolid.propTypes = {
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    className: PropTypes.string,
};

export default ButtonSolid;