/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {

      spacing:{
        '7.5' : '42px',
        '97' : '60rem',
        '73': '19.3rem',
        '4.5' : '14.5px',
        '1.6' : '8px',
        '540' : '400px',
        '730' : '730px'
      },

      colors:{
        'grey' : '#6B7A99',
        'Hpurpler' : '#8833FF',
        'greyBg' : '#F7F8FA',
        'notificationPurple' : '#8833FF',
        'pagesPurple' : '#9D5CFA',
        'pagesBg' : '#8833FF',
        'postsOrange' : '#FF6633',
        'cardGreen' : '#29CC39',
        'purpleDark' : '#7919FF',
        'orangeDark' : '#E64B17',
        'blueOne' : ' #33BFFF',
        'darkBlue' : '#17A5E6',
        'secondaryBlack' : '#26334D',
        'firstBlack' : '#1A2233',
        'greyBlue' : '#F7F8FA', 
      },

      fontFamily:
      {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

