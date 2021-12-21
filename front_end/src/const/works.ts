import Bol from 'assets/img/Bol.png';
import Philips from 'assets/img/Philips.png';
import FLORENSIS from 'assets/img/dept_hero_image.jpg';

const WORK_SECTION_1 = [
    {
        image: Bol,
        name: 'Bol.com',
        title: 'A summer island in the Netherlands'
    },
    {
        image: Philips,
        name: 'Phillips',
        title: 'Beautiful design meets innovative technology'
    }
];

const TAPPING_COPY = {
    content: '"Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels"',
    name: 'microsoft'
};

const INTEGRATION_COPY = {
    content: "Integrating existing content into O’Neill’s new e-commerce platform",
    name: "O'Neil"
};

const TESTIMONIAL = {
    content: "“Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.”",
    name: 'MATTIJS TEN BRINK – CEO, TRANSAVIA'
};

const BUTLINS_COPY = {
    content: "Enhanced customer experience for personalized holiday planning using real time data",
    name: 'Butlins'
};

const VACANSESELECT_COPY = {
    content: "Predicting booking holiday behavior for holidays with smart data, voice search and machine learning",
    name: 'Vacanseselect'
}

const RETHINK_COPY_1 = {
    imageDetails: {
        image: FLORENSIS,
        name: 'FLORENSIS',
        title: 'Rethink the entire ecosystem',
    },
    textCopy: {
        copy1: INTEGRATION_COPY,
        copy2: TAPPING_COPY
    }
};

const RETHINK_COPY_2 = {
    imageDetails: {
        image: FLORENSIS,
        name: 'FLORENSIS',
        title: 'Rethink the entire ecosystem',
    },
    textCopy: {
        copy1: BUTLINS_COPY,
        copy2: VACANSESELECT_COPY
    }
};

export {
    FLORENSIS,
    INTEGRATION_COPY,
    RETHINK_COPY_1,
    RETHINK_COPY_2,
    TAPPING_COPY,
    TESTIMONIAL,
    WORK_SECTION_1,
};