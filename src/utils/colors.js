
const getRandomColor = () => {
  let base = '#';
  const z = '0123456789ABCDEF';
  for (let i = 0; i < 6; i++) {
    base += z[Math.floor(Math.random() * 16)];
  }
  return base;
};

// eslint-disable-next-line import/prefer-default-export
export const StringToColour = (str) => getRandomColor();
