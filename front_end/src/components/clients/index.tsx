import { VFC } from 'react';
import * as Styled from 'components';
import { ALL_LOGOS, CLIENT_COPY } from 'const';

const Clients: VFC = () => {
    return (
        <Styled.DefaultSectionWrapper>
            <Styled.ClientContainer>
                <Styled.DefaultTypography fontSize='2.5' transform="uppercase">Clients</Styled.DefaultTypography>
                <Styled.ContainerResizable width='60%'>
                    <Styled.DefaultTypography fontSize='0.8'>
                        { CLIENT_COPY }
                    </Styled.DefaultTypography>
                </Styled.ContainerResizable>
                <Styled.ClientLogos>
                    {
                        ALL_LOGOS.map((Logo, index) => <Styled.IconWrapper key={index} Icon={Logo} height={68} width={100} color='black' />)
                    }
                </Styled.ClientLogos>
            </Styled.ClientContainer>
        </Styled.DefaultSectionWrapper>
    )
};

export { Clients };