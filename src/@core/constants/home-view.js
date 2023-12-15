import { siteName } from "@/@core/constants/site-info";

export const heroSectionContent = {
    heading: 'Input! Track! Manage!',
    subHeading: 'Understand the changes, track the progress, and manage the baby blues',
    text: 'Cherub Chart is a one stop app for parents of infants, who need help tracking the growth and development of their young one. The platform offers a visual log, guidance, and ways to record the journey of your bundle of joy as they grow.',
    image: '/images/hero-image.webp',
    alt: 'Hero Section Image'
}


export const brandFeaturesContent = {
    heading: 'DISCOVER FEATURES',
    features: [
        {
            title: 'Parent Resources',
            description: 'Find information on insurance, finance, government assistance and mental health postpartum.',
            icon: ['parent-resource', 21],
            iconBg: '#16CABD'
        },
        {
            title: 'Expense Monitor',
            description: 'Stop overspending by logging and budgeting the cost of baby items.',
            icon: ['expense-divided', 25],
            iconBg: '#783AD6'
        },
        {
            title: 'Alerts ',
            description: 'App reminds parents when the baby has to sleep or need medication.',
            icon: ['baby-accessories', 14],
            iconBg: '#FF9D00'
        },
        {
            title: 'Sound Features',
            description: 'White noise calms the baby and puts them to sleep.',
            icon: ['health-checkup', 9],
            iconBg: '#DE9090'
        },
    ]
}

export const brandSelectionContent = {
    heading: `Why Choose ${siteName}?`,
    descriptions: [
        'Cherub Chart is the first app of its kind to offer equal assistance to both parents and babies. Where it keeps tabs on the healthy growth of a child, it also offers resources to effectively stabilize parents mental health, and balance their life while raising a baby.',
        'Parents benefit from the information the platform keeps a log of which is helpful in understanding the changes your baby is going through with full fledged charts and reports. By taking care of the small but valuable details parents are able to focus on juggling other tasks and looking inward towards their own health as well. Cherub Chart is designed to make the introduction of a new baby in the family less hectic, so parent are on the top of their game.',
    ],
}

export const benefitsContent = {
    heading: 'The App that Keeps You in the Know',
    text: 'The Cherub Chart platform creates a comprehensive view for parents to be able to be in the know of their child’s health and physical progress. In a world where parents are bombarded with more responsibilities than just looking after their bundle of joy Cherub Chart creates easy visual cues to show parents any change in healthy patterns they may have missed and reminds them of milestones they should celebrate.',
    benefits: [
        {
            title: 'Analyze Health ',
            description: 'App uses the data input by users to create visual graphs that concisely show them the pattern of their baby’s growth. ',
            icon: ['baby-health-checkup', 15]
        },
        {
            title: 'Artificial Intelligence',
            description: 'The app learns baby habits to chep parents learn developmental milestones and record progress. ',
            icon: ['brain-functions', 16]
        },
        {
            title: 'Reports ',
            description: 'With a log of the baby’s sleep, eating and activiity pattern, a report is created that can be shown to pediatricians.',
            icon: ['baby-toys', 14]
        }
    ],
    image: '/images/benefits.webp',
    alt: 'Benefits Illustration'
}

export const faqsContent = {
    heading: 'Frequently Asked Questions',
    text: 'Want to know more about our services?',
    faqs: [
        {
            question: 'Is Cherub Chart compatible…',
            answer: 'The answer will be here......',

        },
        {
            question: 'How do I get in touch with someone if there is something wrong with my profile?',
            answer: 'The answer will be here.........',

        },
        {
            question: 'How do I sign up?',
            answer: 'The answer will be here.........',
        }
    ]
}

export const CTOSectionContent = {
    heading: 'Cherub Chart is the Modern Baby Book You Need!',
    text: 'Sign up and be the first to download the app as soon as it launches.'
}

const date = new Date()
export const footerContent = {
    supportCard: {
        heading: 'Help and Support',
        subHeading: 'User questions and feedback',
        text: 'Feel free to email us for any questions or feedback you would like to provide.'
    },
    socialIcons: [
        {
            icon: 'instagram',
            link: '',
        },
        {
            icon: 'facebook',
            link: '',
        },
        {
            icon: 'twitter',
            link: '',
        }
    ],
    copyRightNotice: `© ${date.getFullYear()} ${siteName}. All Rights  Reserved`,
}

export const buttonsLabel = {
    CTOBtn: 'Pre Sign-up',
    accent: `Why ${siteName}?`
}

export const menuNavLinks = [
    { label: 'Home', sectionId: 'home' },
    { label: 'Features', sectionId: 'features' },
    { label: `Why ${siteName}?`, sectionId: 'whyUs' }
]
