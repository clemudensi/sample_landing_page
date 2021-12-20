const size = {
    desktop: '2560px',
    laptop: '1024px',
    laptopL: '1440px',
    mobileL: '425px',
    mobileM: '375px',
    mobileS: '320px',
    tablet: '768px'
};

const device = {
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    mobileL: `(max-width: ${size.mobileL})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileS: `(max-width: ${size.mobileS})`,
    tablet: `(max-width: ${size.tablet})`
};

export { device, size };