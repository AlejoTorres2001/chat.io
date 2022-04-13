module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        'gray-light':'#202C33',
        'gray-dark':'#182229',
        'gray-darker':'#111B21',
        'gray-selected':'#2A3942',
        'gray-icons':'#AEBAC1',
        'green-mssg':'#00A884',
        'pink-chat':'#E26AB6',
        'light-blue-chat':'#4C8F93',
        'white-mssg':'#E9EDEF',
        'gray-placeholder':'#8696A0',
        'gray-date':'#8696A0',
        'gray-scrollbar':'#374045',
      },
    }
  },
   
  plugins: [ require('tailwind-scrollbar')],
}
