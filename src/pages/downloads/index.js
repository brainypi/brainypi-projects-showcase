import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

//import Card from 'react-bootstrap/Card'
//import ReactPlayer from "react-player"

import { FaAngleRight } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import styles from './styles.module.css';

/*
function VidoLink({ url }) {
    if (url === 'null') {
        return (
            <>
                &nbsp;&nbsp;
            </>
        );
    } return (
        <>
            <Link
                className={classnames(styles.ctaButtonWithIcon)}
                to={url}>
                <FiDownload size={18} />&nbsp;Download
            </Link>
        </>
    );
}

function CardHeader({ type, url }) {
    if (type === 'img') {
        return <Card.Img variant="top" src={url} />;
    } return <ReactPlayer url={url}
        width='100%'
        controls='true'
        playbackRate='2'
        config={{
            youtube: {
                playerVars: { showinfo: 0 }
            }
        }} />;
}

function Cards({ title, type, description, path, imgurl, videoUrl }) {
    const pathUrl = useBaseUrl(path);
    const imgUrl = useBaseUrl(imgurl);
    return (
        <div className={classnames('col col--4', styles.cardCols)}>
            {pathUrl && (
                <Card className={classnames('mb-2 item shadow--md', styles.cardStyle)} >
                    <CardHeader type={type} url={imgUrl}></CardHeader>
                    <Card.Body className={classnames(styles.cardBody)}>
                        <Card.Title className={classnames(styles.cardTitle)}>{title}</Card.Title>
                        <Card.Text ><p className={classnames(styles.cardText)}>{description}</p></Card.Text>
                        <div className="container">
                            <div className="row">
                                <div className={classnames('col col--6', styles.features)}>
                                    <VidoLink url={videoUrl} />
                                </div>
                                <div className={classnames('col col--6', styles.features)}>
                                    <Link
                                        className={classnames(styles.ctaButtonWithIcon)}
                                        to={useBaseUrl(path)}>
                                        Install <FaAngleRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            )}
        </div>
    );
}
*/

function Home() {
    return (
        <Layout
            title="Brainy Pi Downloads"
            description="Get started with ready to use OS images for Brainy Pi">
            <header className={classnames('hero hero--dark', styles.heroBannerDark)}>
                <div className="container">
                    <h1 className="hero__title">Downloads</h1>
                    <p className="hero__subtitle"> Get started with ready to use OS images for Brainy Pi
                    </p>
                </div>
            </header>
            <main>
                {/*examples && examples.length && (
                    <section className={styles.heroBanner}>
                        <div className="container">
                            <div className="row">
                                {examples.map((props, idx) => (
                                    <Cards key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )*/}
            </main>
        </Layout>
    );
}

export default Home;

const examples = [
    {
        title: <> Android 11 </>,
        type: 'img',
        imgurl: 'img/android.png',
        videoUrl: 'http://releases.shunyaos.org/brainypi/brainypi-android-11.zip',
        description: (
            <>
                
            </>
        ),
        status: <> beta </>,
        path: 'docs/quickstart/03-install-os',
    },
    {
        title: <> Armbian 20.04 </>,
        type: 'img',
        imgurl: 'img/linux.png',
        videoUrl: 'http://releases.shunyaos.org/brainypi/brainypi-armbian-20.04.zip',
        description: (
            <>
                
            </>
        ),
        status: <> beta </>,
        path: 'docs/quickstart/03-install-os',
    },
];
