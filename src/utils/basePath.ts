export const getBasePath = () => {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

export const getImagePath = (path: string) => {
  const basePath = getBasePath();
  if (path.startsWith('http') || path.startsWith('data:')) {
    return path;
  }
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return `${basePath}/${path}`;
};
