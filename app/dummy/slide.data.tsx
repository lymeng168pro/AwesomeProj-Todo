import { IStory } from '../interfaces/story.interface';
import modules from '../modules';

export const STORY_DATA: IStory[] = [
  {
    key: 1,
    created_by: {
      key: 'pk.nosloy',
      name: 'Pk Blanko ',
      photoURL: modules.pkPROfile,
    },
    storyURL:
      'https://www.arsenal.com/sites/default/files/styles/large_16x9/public/images/mbappe-celeb-real-madrid_qhksqkhg.png?h=d797ae95&auto=webp&itok=y73JTcvA',
    created_at: 12,
    expired_at: 11,
    total_view: 0,
  },
  {
    key: 2,
    created_by: {
      key: 'meng.meng.578474',
      name: 'Meng Meng',
      photoURL: modules.mengPROfile,
    },
    storyURL:
      'https://managingbarca.com/wp-content/uploads/2025/08/gettyimages-2229432275-612x612-1.jpg',
  },
  {
    key: 3,
    created_by: {
      key: 'samnang.pichkarona',
      name: 'Samnang Pichkarona',
      photoURL: modules.kanaPROfile,
    },
    storyURL:
      'https://s.yimg.com/ny/api/res/1.2/yAcYdx35VlUXKTwCeGQjzw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTYwODtjZj13ZWJw/https://media.zenfs.com/en/the_football_faithful_articles_458/24d54e39f1d05899e562ad5b1cca7393',
    created_at: 12,
    expired_at: 11,
    total_view: 0,
  },
  {
    key: 4,
    created_by: {
      key: 'chungkhai.ung.9',
      name: 'Chungkhai',
      photoURL: modules.khaiPROfile,
    },
    storyURL:
      'https://media.gettyimages.com/id/962792890/photo/real-madrid-v-liverpool-uefa-champions-league-final.jpg?s=2048x2048&w=gi&k=20&c=Hg4-4J6rg1Q0H1nPPrxpLDASfIpt1XSVe4uzYyz5nV4=',
  },
];
