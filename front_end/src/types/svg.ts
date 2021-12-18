interface SVGProps {
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
    width?: number;
    height?: number;
    onClick?: () => void;
}

export type { SVGProps };