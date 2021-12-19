import { VFC } from 'react';
import deptHeroImage from 'assets/img/dept_hero_image.jpg';
import workImage from 'assets/img/work.png';
import * as Styled from 'components';

const HeroSection: VFC = () => {
    return (
        <>
            <Styled.HeroContainer>
                <Styled.HeroImage src={deptHeroImage} alt="dept-hero" />
                <Styled.WorkImage src={workImage} alt="work" />
                <Styled.HeroButton>view case</Styled.HeroButton>
            </Styled.HeroContainer>
        </>
    )
};

export { HeroSection };