import { VFC } from 'react';
import * as Styled from 'components';
import { TESTIMONIAL } from 'const';

const Testimonial: VFC = () => {
    return (
        <Styled.DefaultSectionWrapper>
            <Styled.DefaultTypography fontSize='1.4'>{TESTIMONIAL.content}</Styled.DefaultTypography>
            <Styled.DefaultTypography fontSize='0.6' transform='uppercase'>{TESTIMONIAL.name}</Styled.DefaultTypography>
        </Styled.DefaultSectionWrapper>
    )
};

export { Testimonial };