interface SVGProps {
    width?: number;
    height?: number;
    color?: string;
    onClick?: () => void;
}
interface IconWrapperProps extends SVGProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export type {IconWrapperProps, SVGProps };