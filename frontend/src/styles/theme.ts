export const size = {
    largest: '75em', // 1200px
    large: '56.25em', // 900px
    medium: '37.5em', // 600px
    small: '31.25em', // 500px
    smallest: '25em', // 400px
}
  
const theme = {
    color: {
        main: '#0276F9',
        default: '#d9d9d9',
        active: '#486FF2',
        error: '#d95959',
        success: '#1AB987',
    },
    size: {
        sm: '1.4rem',
        base: '1.6rem',
        md: '1.8rem',
        lg: '2.0rem',
        xlg: '2.2rem',
    },
    shadow: {
        // https://getcssscan.com/css-box-shadow-examples
        0: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
        7: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
    },
    mq: {
        laptop: `@media only screen and (min-width: ${size.largest})`,
        tablet: `@media only screen and (min-width: ${size.large})`,
        mobile: `@media only screen and (min-width: ${size.small})`,
      },
}
export default theme;