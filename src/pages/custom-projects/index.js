import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

function Home() {
    return (
        <Layout
            title="BrainyPi Demos"
            description="">
            <header className={classnames('hero hero--dark', styles.heroBannerDark)}>
                <div className="container">
                    <h1 className="hero__title">Custom Projects</h1>
                    <marquee width="30%" className="hero__subtitle"> Coming Soon...
                    </marquee>
                </div>
            </header>
            <main>
            </main>
        </Layout>
    );
}

export default Home;

const examples = [
    {
        title: <> Demo </>,
        type: 'img',
        imgurl: 'img/dummyblurimage.jpeg',
        videoUrl: '#',
        description: (
            <>
                
            </>
        ),
        status: <> beta </>,
        path: 'demos',
    },
    {
        title: <> Demo </>,
        type: 'img',
        imgurl: 'img/dummyblurimage.jpeg',
        videoUrl: '#',
        description: (
            <>
                
            </>
        ),
        status: <> beta </>,
        path: 'demos',
    },
    {
        title: <> Demo </>,
        type: 'img',
        imgurl: 'img/dummyblurimage.jpeg',
        videoUrl: '#',
        description: (
            <>
            
            </>
        ),
        path: 'demos',
    },
];
