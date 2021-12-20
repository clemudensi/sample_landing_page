import { VFC } from 'react';
import * as Styled from 'components';
import { ImageWithTextContainer } from 'components';
import {
    FLORENSIS,
    INTEGRATION_COPY,
    TAPPING_COPY,
    WORK_SECTION_1
} from 'const';

const Works: VFC = () => {
    return (
        <Styled.DefaultSectionWrapper>
            <Styled.ShowWorksContainer>
                <Styled.ContainerResizable position='end'>
                    <Styled.DefaultTypography fontSize='1.5' color='#A3A3A3'>Show me </Styled.DefaultTypography>&nbsp;&nbsp;
                    <Styled.DefaultTypography fontSize='1.5' color='#0E0E0E'>all work in all industries </Styled.DefaultTypography>
                </Styled.ContainerResizable>
                <Styled.GridCol2>
                    {
                        WORK_SECTION_1.map((work, index) =>
                            <Styled.Container key={index}>
                                <Styled.ImageContainer src={work.image} />
                                <Styled.DefaultTypography fontSize='0.8' color='#939393' transform="uppercase" fontWeight={700}>{work.name}</Styled.DefaultTypography>
                                <Styled.DefaultTypography fontSize='1.2'>{work.title}</Styled.DefaultTypography>
                                <Styled.DefaultTypography fontSize='0.6' color='#1A18F7' transform="uppercase" fontWeight={700}>View more</Styled.DefaultTypography>
                            </Styled.Container>
                        )
                    }
                </Styled.GridCol2>
                <Styled.DefaultSectionWrapper>
                    <ImageWithTextContainer>
                        <Styled.ImageContainer src={FLORENSIS} />
                        <Styled.WorksTextBox>
                            <Styled.Container>
                                <Styled.DefaultTypography fontSize='0.8' color='#939393' transform="uppercase" fontWeight={700}>{TAPPING_COPY.name}</Styled.DefaultTypography>
                                <Styled.DefaultTypography fontSize='1.2'>{TAPPING_COPY.content}</Styled.DefaultTypography>
                                <Styled.DefaultTypography fontSize='0.6' color='#1A18F7' transform="uppercase" fontWeight={700}>View more</Styled.DefaultTypography>
                            </Styled.Container>
                            <Styled.Container>
                                <Styled.DefaultTypography fontSize='0.8' color='#939393' transform="uppercase" fontWeight={700}>{INTEGRATION_COPY.name}</Styled.DefaultTypography>
                                <Styled.DefaultTypography fontSize='1.2'>{INTEGRATION_COPY.content}</Styled.DefaultTypography>
                                <Styled.DefaultTypography fontSize='0.6' color='#1A18F7' transform="uppercase" fontWeight={700}>View more</Styled.DefaultTypography>
                            </Styled.Container>
                        </Styled.WorksTextBox>
                    </ImageWithTextContainer>
                </Styled.DefaultSectionWrapper>
            </Styled.ShowWorksContainer>
        </Styled.DefaultSectionWrapper>
    )
};

export { Works };