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
                            <Styled.FaceBook width={16} height={0} />
                            <Styled.Twitter width={16} height={0} />
                            <Styled.Instagram width={16} height={0} />
                        </Styled.IconSubGrid>
                    </Styled.IconGrid>
                    <Styled.Content2Grid>
                        <span>Chamber of Commerce: 63464101</span>
                        <span>VAT: NL 8552.47.502.B01</span>
                        <span>Terms and conditions</span>
                    </Styled.Content2Grid>
                    <Styled.HRGrid>
                        <Styled.HorizontalLine color='#808080' height='1px'/>
                    </Styled.HRGrid>
                    <Styled.CopyrightGrid>© 2018 Dept Agency</Styled.CopyrightGrid>
                </Styled.FooterGrid>
            </Styled.FooterContainer>
            <Styled.ArrowTopSection href="#hero-section" data-testid="top-anchor">
                <Styled.Container><Styled.ArrowTop height={0} color='blue'/></Styled.Container>
                Top
            </Styled.ArrowTopSection>
        </Styled.ContainerFlex>
    )
};

export { Footer };