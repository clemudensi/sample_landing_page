import { VFC } from 'react';
import dept_hero_image from 'assets/img/dept_hero_image.jpg';
import * as Styled from 'components';

const HeroSection: VFC = () => {
    return (
        <Styled.HeroContainer>
            <Styled.HeroImage src={dept_hero_image} alt="dept-hero" />
            <Styled.HeroButton>view case</Styled.HeroButton>
        </Styled.HeroContainer>
    )
};

export { HeroSection };