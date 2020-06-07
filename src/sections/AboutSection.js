import React from 'react';
import { MDBContainer } from 'mdbreact';
import Title from '../components/Title';
import Caption from '../components/Caption'; 
import Works from '../components/Works';
import Educations from '../components/Educations';
import Skills from '../components/Skills';
import data from '../data.json';

const { aboutCaption, works, educations, skills } = data;

const AboutSection = () =>
    <section id="about" className="p-5 w-100 p-0 d-flex flex-row justify-content-center align-items-center elegant-color">
        <MDBContainer className="p-0 m-0 min-w-100">
            <Title>About</Title>
            <Caption>
                {aboutCaption}
            </Caption>
            <MDBContainer className="mt-5">
                <Works data={works}/>
                <Educations data={educations}/> 
                <Skills data={skills}/>
            </MDBContainer>
        </MDBContainer>
    </section>
export default AboutSection;