// gitprofile.config.js


const config = {
  github: {
    username: 'adhiraj69', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 0, // How many projects to display.
    exclude: {
      forks: True, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/adhiraj-banerjee-0051b01/',
    phone: '9123087150',
    email: 'adhirajbanerjee35@gmail.com',
  },
  resume: {
    fileUrl: 'https://drive.google.com/file/d/1TAcs5rJGFkmULK_KRKSxBpVZElKyb13i/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: ['LaTeX','python', 'pytorch', 'transformers', 'librosa', 'Montreal-Forced-Aligner', 'tslearn', 'fuzzysearch', 'hmmlearn'],
  //experiences: [
   // {
    //  company: 'Company Name',
     // position: 'Position',
      //from: 'September 2021',
      //to: 'Present',
      //companyLink: 'https://example.com',
    //},
    //{
     // company: 'Company Name',
      //position: 'Position',
      //from: 'July 2019',
      //to: 'August 2021',
      //companyLink: 'https://example.com',
   // },
  //],
  //certifications: [
   // {
    //  body: 'Certification Body Name',
     // name: 'Sample Certification',
      //year: 'March 2022',
      //link: 'https://example.com',
    //},
  //],
  education: [
    {
      institution: 'Indian Institute of Technology Kanpur',
      degree: 'Ph.D.',
      from: '2019',
      to: '2024',
    },
    {
      institution: 'University of Engineering and Management Kolkata',
      degree: 'B.Tech.',
      from: '2015',
      to: '2019',
    },
  ],
  // To hide the `My Projects` section, keep it empty.
  publications: [
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
    {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  //blog: {
   // source: 'dev', // medium | dev
   // username: 'arifszn', // to hide blog section, keep it empty
   // limit: 5, // How many posts to display. Max is 10.
  //},
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'light',

    // Hides the theme change switch
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Copyright © 2023 John Doe`,
};
export default config;
