import './styles/About.css';
import babel from '../../public/icons/babel.png';
import webpack from '../../public/icons/webpack.png';
import mongo from '../../public/icons/mongo.png';
import html from '../../public/icons/html.png';
import css from '../../public/icons/css.png';
import jest from '../../public/icons/jest.png';
import js from '../../public/icons/js.png';
import typescript from '../../public/icons/typescript.png';
import material from '../../public/icons/material.png';
import react from '../../public/icons/react.png';
import redux from '../../public/icons/redux.png';
import mongoose from '../../public/icons/mongoose.png';
import npm from '../../public/icons/npm.png';
import github from '../../public/icons/github.png';
import git from '../../public/icons/git.png';
import router from '../../public/icons/router.png';
import nodejs from '../../public/icons/nodejs.png';
import docker from '../../public/icons/docker.png';
import postman from '../../public/icons/postman.png';
import gcp from '../../public/icons/gcp.png';
import gke from '../../public/icons/gke.png';
import linux from '../../public/icons/linux.png';
import kubernetes from '../../public/icons/kubernetes.png';



export const About: React.FC = () => {
    // TODO: include some images representing the technologies I used.
    return (
        <div className="about">
            <div className="about-content">
                <div>The app is a demonstration of my love of reading... and listening to audiobooks, I suppose.</div>
                <div>It was and continues to be created with great care, and of course TypeScript, Node.js, MongoDB/Mongoose, React, Redux, MaterialUI, React Router, Webpack and Babel.</div>
                <div>I put a lot of love into it, and so, I Dockerized it and deployed it to Google Cloud Platform with Google Kubernetes Engine.</div>
            </div>
            <section>
                <div className='flexContainer'>
                    <div className='label'>Version control and remote repo:</div>
                    <div className="image-wrapper">
                        <img  src={git} alt='Git logo'/>
                        <img  src={github} alt='GitHub logo'/>
                    </div>
                </div>
                <div className='flexContainer'>
                    <div className='label'>Language and package manager:</div>
                    <div className="image-wrapper">
                        <img  src={js} alt='Javascript logo'/>
                        <img  src={npm} alt='npm logo'/>
                    </div>
                </div>
                <div className='flexContainer'>
                    <div className='label'>Front-end tech stack:</div>
                    <div className="image-wrapper">
                        <img  src={html} alt='Webpack logo'/>
                        <img  src={css} alt='babel logo'/>
                        <img  src={typescript} alt='Typescript logo'/>
                        <img  src={react} alt='Webpack logo'/>
                        <img  src={redux} alt='babel logo'/>
                        <img  src={material} alt='Material UI logo'/>
                        <img  src={router} alt='React Router logo'/>
                        <img  src={jest} alt='Jest logo'/>
                        <img  src={webpack} alt='Webpack logo'/>
                        <img  src={babel} alt='babel logo'/>
                    </div>
                </div>
                <div className='flexContainer'>
                    <div className='label'>Back-end tech stack:</div>
                    <div className="image-wrapper">
                        <img  src={typescript} alt='Typescript logo'/>
                        <img  src={nodejs} alt='NodeJS logo'/>
                        <img src={mongo} alt='MongoDB logo'/>
                        <img src={mongoose} alt='Mongoose logo'/>
                        <img  src={postman} alt='Postman logo'/>
                        <img  src={jest} alt='Jest logo'/>
                    </div>
                </div>
                <div className='flexContainer'>
                    <div className='label'>Containerize, deploy & orchestrate:</div>
                    <div className="image-wrapper">
                        <img  src={linux} alt='Linux logo'/>
                        <img  src={docker} alt='Docker logo'/>
                        <img src={kubernetes} alt='Kubernetes logo'/>
                        <img src={gcp} alt='Google Cloud Platform logo'/>
                        <img  src={gke} alt='Google Kubernetes Engine logo'/>
                    </div>
                </div>
            </section>
        </div>
    )
};