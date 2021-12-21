import { VFC } from 'react';
import * as Styled from 'components';

const ViewMore: VFC = () => {
    return (
        <Styled.ContainerFlex>
            <Styled.ArrowRight height={0} color='#1A18F7'/>
            <Styled.DefaultTypography fontSize='0.5' color='#1A18F7' transform="uppercase" fontWeight={700}>
                View more
            </Styled.DefaultTypography>
        </Styled.ContainerFlex>
    )
};

export { ViewMore };