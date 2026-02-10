// Route configuration for the personal portfolio
// Multi-page routing with React Router

export const routes = {
  home: '/',
  projectDetail: (projectId: string) => `/project/${projectId}`,
};

export default routes;
