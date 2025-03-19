export interface IRoute {
  route: string;
  title: string;
  path: string;
}


export class AuthRoutes {
  base: IRoute = {
    route: '',
    path: '',
    title: 'auth',
  };
  login: IRoute = {
    route: `${this.base.route}/login`,
    path: `login`,
    title: 'login',
  };
}
export class DashRoutes {
  base: IRoute = {
    route: '',
    path: '',
    title: 'Dashboard',
  };
  courses: IRoute = {
    route: `${this.base.route}/courses`,
    path: `courses`,
    title: 'Courses',
  };
}

export const AllRoutes = {
  auth: { ...new AuthRoutes() },
  dash: { ...new DashRoutes() },
};
