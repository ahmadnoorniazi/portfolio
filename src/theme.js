/* eslint-disable max-len */
// const themes = {
//   fontSizes: [
//     12, 14, 16, 24, 32, 48, 64,
//   ],
//   colors: {
//     primary: '#000',
//     secondary: '#08d665',
//     hover: '#09c75f',
//     textColor: '#c8c6c6',
//     white: '#FFFFFF',
//     background: 'rgb(25, 26, 27)',
//     grayBack: '#131617',
//     light: '#2E3D44',
//     borderLight: 'rgba(0, 0, 0, .15)'
//   },
//   buttons: {
//     primary: {
//       color: 'white',
//       bg: 'secondary',
//     },
//     outline: {
//       color: 'secondary',
//       bg: 'primary',
//       border: '1px solid secondary'
//     },
//     disabled: {
//       bg: '#E5E5E5',
//       color: 'black',
//     },
//   },
// };

const theme = {
  fontSizes: [
    12, 14, 16, 24, 32, 48, 64,
  ],
  colors: {
    headerBack: '#000',
    primary: '#fff',
    secondary: '#1e88e5',
    hover: '#09c75f',
    textColor: '#777',
    headingColor: '#000',
    background: 'rgb(25, 26, 27)',
    grayBack: '#131617',
    light: '#2E3D44',
    borderLight: 'rgba(0, 0, 0, .15)',
    footerBack: '#000',
    headerText: '#fff',
    footerText: '#fff',
    backgroundImage: 'radial-gradient(circle, #231c42, #32285e, #43347b, #54409a, #674db9, #7147ae, #7941a2, #7e3b97, #692865, #4c1c3d, #2b121e, #000000);',
    backgroundColor: 'linear-gradient(87deg,#5e72e4,#825ee4)!important',
    hoverBackground: 'Green linear-gradient(87deg,#2dce89,#2dcecc)!important',
    buttonHover: 'linear-gradient(87deg,#11cdef,#1171ef)'

  },
  buttons: {
    primary: {
      color: '#fff',
      background: 'Green linear-gradient(87deg,#2dce89,#2dcecc)!important',
      ':hover': {
        background: 'linear-gradient(87deg,#11cdef,#1171ef) !important',
        border: '1px solid #2dcecc'
      }
    },
    outline: {
      color: '#08d665',
      bg: '#000',
      border: '1px solid #08d665'
    },
    disabled: {
      bg: '#E5E5E5',
      color: 'black',
    },
  },
};

export default theme;
