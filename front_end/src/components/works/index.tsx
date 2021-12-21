import { VFC } from 'react';
import * as Styled from 'components';
import {
    RETHINK_COPY_1,
    RETHINK_COPY_2,
    WORK_SECTION_1
} from 'const';
import { Rethink } from './rethink-section-1';
import { RethinkCopy } from './rethink-section-2';
import { Testimonial } from './testimonial';

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
                                <Styled.DefaultTypography fontSize='0.8' color='#939393' transform="uppercase" fontWeight={700}>
                                    {work.name}
                                </Styled.DefaultTypography>
                                <Styled.ViewMore />
                                <Styled.DefaultTypography fontSize='1.2'>{work.title}</Styled.DefaultTypography>
                            </Styled.Container>
                        )
                    }
                </Styled.GridCol2>
                <Styled.DefaultSectionWrapper>
                    <Rethink imageDetails={RETHINK_COPY_1.imageDetails} textCopy={RETHINK_COPY_1.textCopy} />
                </Styled.DefaultSectionWrapper>
                <Styled.DefaultSectionWrapper>
                    <RethinkCopy imageDetails={RETHINK_COPY_2.imageDetails} textCopy={RETHINK_COPY_2.textCopy} />
                </Styled.DefaultSectionWrapper>
                <Styled.DefaultSectionWrapper>
                    <Testimonial />
                </Styled.DefaultSectionWrapper>
            </Styled.ShowWorksContainer>
        </Styled.DefaultSectionWrapper>
    )
};

export { Works };