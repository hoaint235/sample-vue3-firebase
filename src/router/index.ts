import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { Home, SignIn } from "@pages";
import { AuthLayout } from '@layouts';
import { routing } from "@utils";
import { useAuth } from "@plugins";

const routes: Array<RouteRecordRaw> = [
  {
    path: routing.BASE,
    name: "auth-layout",
    component: AuthLayout,
    children: [
      {
        path: routing.HOME,
        name: 'home',
        component: Home,
      }
    ]
  },
  {
    path: routing.SIGN_IN,
    name: "sign-in",
    component: SignIn,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    if (to.fullPath !== routing.SIGN_IN) {
      return next(routing.SIGN_IN);
    }
  }

  return next();
});

export default router;
