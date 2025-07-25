import moment from 'moment';

export const generateLikesMessage = (liked: boolean, likes: number): string | undefined => {
  if (likes === 0 && !liked) return '';

  if (likes === 0 && liked) {
    return 'You liked this';
  }

  if (liked) {
    if (likes === 1) {
      return 'You liked this';
    }
    return `You and ${likes - 1} other${likes - 1 === 1 ? '' : 's'} liked this`;
  }

  return `Liked by ${likes} user${likes === 1 ? '' : 's'}`;
};

moment.locale('en');

export const formatDate = (isoDate: string): string => {
  const date = moment(isoDate);
  const currentYear = moment().year();

  if (date.year() === currentYear) {
    return date.format('MMMM D');
  } else {
    return date.format('MMMM D, YYYY');
  }
};