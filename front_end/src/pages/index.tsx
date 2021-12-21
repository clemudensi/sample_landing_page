import { VFC } from 'react';
import { Clients, Footer, Form, HeroSection, Works } from 'components';

const LandingPage: VFC = () => {
    return (
        <div data-testid="dept-landing-page">
            <HeroSection />
            <Works />
            <Clients />
            <Form />
            <Footer />
        </div>
    )
};

export { LandingPage }