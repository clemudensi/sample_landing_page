import { VFC } from 'react';
import * as Styled from 'components';

interface RethinkProps {
    imageDetails: {
        image: string | undefined;
        name: string;
        title: string;
    };
    textCopy?: {
        copy1?: {
            name: string;
            content: string;
        };
        copy2?: {
            name: string;
            content: string;
        }
    };
}

const Rethink: VFC<RethinkProps> = ({ imageDetails, textCopy }) => {
    return (
        <Styled.ImageWithTextContainer>
            <Styled.WorksGridImage>
                <Styled.ImageContainer src={imageDetails.image} />
            </Styled.WorksGridImage>
            <Styled.WorksGridDetails>
                <Styled.DefaultTypography fontSize='0.8' color='#939393' transform="uppercase" fontWeight={700}>
                    {imageDetails.name}
                </Styled.DefaultTypography>
                <Styled.DefaultTypography fontSize='1.2'>{imageDetails.title}</Styled.DefaultTypography>
                <Styled.ViewMore />
            </Styled.WorksGridDetails>
            <Styled.WorksGridContent>
            <Styled.WorksTextBox>
                <Styled.DefaultTypography fontSize='0.8' color='#939393' transform="uppercase" fontWeight={700}>
                    {textCopy?.copy1?.name}
                </Styled.DefaultTypography>
                <Styled.DefaultTypography fontSize='1.2'>{textCopy?.copy1?.content}</Styled.DefaultTypography>
                <Styled.ViewMore />
                <Styled.HorizontalLine color='#A3A3A3' height='0.5px'/>
                <Styled.DefaultTypography fontSize='0.8' color='#939393' transform="uppercase" fontWeight={700}>
                    {textCopy?.copy2?.name}
                </Styled.DefaultTypography>
                <Styled.DefaultTypography fontSize='1.2'>
                    {textCopy?.copy2?.content}
                </Styled.DefaultTypography>
            <Styled.ViewMore />
            </Styled.WorksTextBox>
            </Styled.WorksGridContent>
        </Styled.ImageWithTextContainer>
    )
};

export { Rethink }