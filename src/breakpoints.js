// import { css } from "styled-components";

// // export default BREAKPOINTS = []

// // const Breakpoints = () => {

//     const device = {
//         xs: '400px',
//         sm: '600px',
//         md: '900px',
//         lg: '1280px',
//         xl: '1440px',
//         xxl: '1920px',
//     }

//    export const media = {
//         xs: (...args) => css`
//         @media screen and (max-width: ${device.xs}) {
//             ${css(...args)};
//         }
//         `
//         ,
//         sm: (...args) => css`
//         @media screen and (max-width: ${device.sm}) {
//             ${css(...args)};
//         }
//         `
//         ,
//         md: (...args) => css`
//         @media screen and (max-width: ${device.md}) {
//             ${css(...args)};
//         }
//         `
//         ,
//         lg: (...args) => css`
//         @media screen and (max-width: ${device.lg}) {
//             ${css(...args)};
//         }
//         `
//         ,
//         xl: (...args) => css`
//         @media screen and (max-width: ${device.xl}) {
//             ${css(...args)};
//         }
//         `
//         ,
//         xxl: (...args) => css`
//         @media screen and (max-width: ${device.xxl}) {
//             ${css(...args)};
//         }
//         `
//         ,

//     }

// // }



// // export default Breakpoints;

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '435px',
    tablet: '768px',
    laptop: '1030px',
    laptopL: '1440px',
    desktop: '2560px'

    
  }


export const device = {
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptop: `(max-width: ${size.laptop})`,
    laptopL: `(max-width: ${size.laptopL})`,
    desktop: `(max-width: ${size.desktop})`,
    desktopL: `(max-width: ${size.desktop})`
  };