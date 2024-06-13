const experience = +new Date().getFullYear() - 2021;

export const INTRODUCTION = `Hi there! 
My name is Urias Huang. Graduate from Huzhou University with a bachelor's degree in 2021.6, And now I'm a Frontend Developer with ${experience} years of experience, based in Hangzhou. And my main technology stack is Vue.
I'm passionate about building beautiful and user-friendly websites.
In my spare time, I enjoy playing basketball, reading, and playing computer games. Btw, I have a certain level of skill in LOL. 😄
I'm always looking for new opportunities to learn and grow, so if you're interested in working with me, please don't hesitate to contact me!
Have a good life!`;

const getIcons = (name: string) => new URL(`../assets/svg/icons/${name}.svg`, import.meta.url).href;

export const TECHNOLOGY_STACKS = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', icon: getIcons('javascript'), color: '#f7df1e', rate: 7 },
      { name: 'TypeScript', icon: getIcons('typescript'), color: '#3178c6', rate: 7 },
      { name: 'HTML5', icon: getIcons('html'), color: '#e34f26', rate: 8 },
      { name: 'CSS3', icon: getIcons('css'), color: '#1572b6', rate: 8 },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Vue', icon: getIcons('vue'), color: '#42b883', rate: 8 },
      { name: 'React', icon: getIcons('react'), color: '#61dafb', rate: 1 },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: getIcons('git'), color: '#f05032', rate: 5 },
      { name: 'Webpack', icon: getIcons('webpack'), color: '#8dd6f9', rate: 5 },
      { name: 'Vite', icon: getIcons('vite'), color: '#646cff', rate: 6 },
    ],
  },
  {
    title: 'UI Frameworks',
    items: [
      { name: 'Element UI', icon: getIcons('element-ui'), color: '#409eff', rate: 7 },
      { name: 'Vant', icon: getIcons('vant'), color: '#07c160', rate: 7 },
      { name: 'View Design', icon: getIcons('view-design'), color: '#1989fa', rate: 6 },
    ],
  },
  {
    title: 'Preprocessors',
    items: [{ name: 'Sass', icon: getIcons('sass'), color: '#cc6699', rate: 6 }],
  },
  {
    title: 'Others',
    items: [
      { name: 'Node', icon: getIcons('node'), color: '#339933', rate: 4 },
      { name: 'Echarts', icon: getIcons('echarts'), color: '#aa344d', rate: 7 },
      { name: 'AntV', icon: getIcons('ant-v'), color: '#7b2cfe', rate: 4 },
    ],
  },
];
