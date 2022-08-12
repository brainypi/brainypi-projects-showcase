import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import PropTypes from 'prop-types';

const Trademark = ({
    text,
}) => {
    return (
        <div class="bg-white">
            <div class="px-5 py-12 mx-auto bg-gray-100 max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-20">
                <div class="flex justify-center mb-8 space-x-6 md:order-last md:mb-0">
                </div>
                <div class="mt-8 md:mt-0 md:order-1">
                    <span class="mt-2 text-base font-light text-gray-600">
                        {text}
                    </span>
                </div>
            </div>
        </div>
    );
};

Trademark.propTypes = {
    text: PropTypes.string,
};

export default Trademark;