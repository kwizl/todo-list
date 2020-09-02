const Style = () => {
  const blur = () => {
    document.querySelector('.content').style.opacity = '0';
  };

  const unblur = () => {
    document.querySelector('.content').style.opacity = '1';
  };

  return { blur, unblur };
};

// eslint-disable-next-line import/prefer-default-export
export { Style };