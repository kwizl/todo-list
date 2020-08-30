const Project = (ptitle) => {
  const title = ptitle;
  const todos = [];
  return {
    title, todos,
  };
};

// eslint-disable-next-line import/prefer-default-export
export { Project };