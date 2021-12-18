import { VFC } from 'react';
import { IconWrapper } from '.';
import { ReactComponent as Logo }  from 'assets/svg/dept_logo_black.svg';

const DeptLogo: VFC = () => {
    return (
        <IconWrapper Icon={Logo} width={72} />
    )
};

export { DeptLogo };