import { VFC } from 'react';
import * as Styled from 'components';
import { MENU_LINKS } from 'const';

const Footer: VFC = () => {
    return (
        <Styled.ContainerFlex>
            <Styled.FooterContainer>
                <Styled.FooterGrid>
                    <Styled.FooterLogoGrid>
                        <Styled.DeptLogoWhite width={72} />
                    </Styled.FooterLogoGrid>
                    <Styled.Content1Grid>
                        {
                            MENU_LINKS.map(links => <Styled.ContentItem key={links}>{links}</Styled.ContentItem>)
                        }
                    </Styled.Content1Grid>
                    <Styled.IconGrid>
                        <Styled.IconSubGrid>
                            <Styled.FaceBook width={16} height={0} color='#FFF'/>
                            <Styled.Twitter width={16} height={0} color='#FFF' />
                            <Styled.Instagram width={16} height={0} color='#FFF' />
                        </Styled.IconSubGrid>
                    </Styled.IconGrid>
                    <Styled.Content2Grid>
                        <span>Chamber of Commerce: 63464101</span>
                        <span>VAT: NL 8552.47.502.B01</span>
                        <span>Terms and conditions</span>
                    </Styled.Content2Grid>
                    <Styled.CopyrightGrid>© 2018 Dept Agency</Styled.CopyrightGrid>
                </Styled.FooterGrid>
            </Styled.FooterContainer>
            <Styled.ArrowTopSection>
                <Styled.Container><Styled.ArrowTop height={72} color='blue'/></Styled.Container>
                Top
            </Styled.ArrowTopSection>
        </Styled.ContainerFlex>
    )
};

export { Footer };