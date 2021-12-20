import { VFC } from 'react';
import * as Styled from 'components';

import { ReactComponent as Zigogo }  from 'assets/svg/Ziggo_logo_zwart.svg';
import { ReactComponent as Zalando }  from 'assets/svg/Zalando_logo_zwart.svg';
import { ReactComponent as Walibi }  from 'assets/svg/Walibi_logo_zwart.svg';
import { ReactComponent as Unilever }  from 'assets/svg/Unilever_logo_zwart.svg';
import { ReactComponent as Triumph }  from 'assets/svg/Triumph_logo_zwart.svg';
import { ReactComponent as Transavia }  from 'assets/svg/Transavia_logo_zwart.svg';
import { ReactComponent as TomTom }  from 'assets/svg/Tomtom_logo_zwart.svg';
import { ReactComponent as Pathe }  from 'assets/svg/Pathe_logo_zwart.svg';
import { ReactComponent as Oxxio }  from 'assets/svg/Oxxio_logo_zwart.svg';
import { ReactComponent as NN }  from 'assets/svg/NN_logo_zwart.svg';
import { ReactComponent as Nivea }  from 'assets/svg/Nivea_logo_zwart.svg';
import { ReactComponent as Mona }  from 'assets/svg/Mona_logo_zwart.svg';
import { ReactComponent as Microsoft }  from 'assets/svg/Microsoft_logo_zwart.svg';
import { ReactComponent as KLM }  from 'assets/svg/KLM_logo_zwart.svg';
import { ReactComponent as ABN }  from 'assets/svg/ABN_logo_zwart.svg';
import { ReactComponent as Adidas }  from 'assets/svg/Adidas_logo_zwart.svg';

import { CLIENT_COPY } from 'const';

const allLogos = [
    Adidas, NN, Nivea, Mona,
    Microsoft, KLM, ABN, Zigogo,
    Zalando, Walibi, Unilever, Triumph,
    Transavia, TomTom, Pathe, Oxxio,
];

const Clients: VFC = () => {
    return (
        <Styled.DefaultSectionWrapper>
            <Styled.ClientContainer>
                <Styled.DefaultTypography fontSize='2.5' transform={true}>Clients</Styled.DefaultTypography>
                <Styled.DefaultTypography fontSize='0.6' transform={false}>
                    { CLIENT_COPY }
                </Styled.DefaultTypography>
                <Styled.ClientLogos>
                    {
                        allLogos.map((Logo, index) => <Styled.IconWrapper key={index} Icon={Logo} height={68} color='black' />)
                    }
                </Styled.ClientLogos>
            </Styled.ClientContainer>
        </Styled.DefaultSectionWrapper>
    )
};

export { Clients };