import colors from './gh-colors.json';

export default (lang) => colors[lang] ? colors[lang] : '#fff';
