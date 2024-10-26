import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: () => import("../views/home.vue"),
      props: true,
      meta: {
        requiresAuth: true,
      },
      children: [
        {
          path: "/chefs",
          name: "chefs",
          component: () => import("../views/allChefs.vue"),
        },
        {
          path: "/yourChats",
          name: "yourChats",
          component: () => import("../views/yourChats.vue"),
        },
      ],
    },
    {
      path: "/",
      name: "login",
      component: () => import("../views/login.vue"),
    },
   
    {
      path: "/crud",
      name: "crud",
      component: () => import("../views/crud.vue"),
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      console.log("You dont have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
