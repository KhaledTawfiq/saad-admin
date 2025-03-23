export interface IRoute {
  route: string;
  title: string;
  path: string;
}


export class AuthRoutes {
  base: IRoute = {
    route: 'auth',
    path: 'auth',
    title: 'Auth',
  };
  login: IRoute = {
    route: `${this.base.route}/login`,
    path: `login`,
    title: 'Login',
  };
}
export class UserInfoRoutes {
  base: IRoute = {
    route: 'user-info',
    path: 'user-info',
    title: 'User info',
  };
}
export class CoursesRoutes {
  base: IRoute = {
    route: `courses`,
    path: `courses`,
    title: 'Courses',
  };
}
export class CalenderRoutes {
  base: IRoute = {
    route: `calender`,
    path: `calender`,
    title: 'Calender',
  };
}
export class AcademicProgramsRoutes {
  base: IRoute = {
    route: `academic-programs`,
    path: `academic-programs`,
    title: 'Academic Programs',
  };
}

export const AllRoutes = {
  auth: { ...new AuthRoutes() },
  userInfo: { ...new UserInfoRoutes() },
  courses: { ...new CoursesRoutes() },
  calender: { ...new CalenderRoutes() },
  academicPrograms: { ...new AcademicProgramsRoutes() },
};
