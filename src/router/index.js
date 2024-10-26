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
      redirect: "recipes",
      children: [
        {
          path: "/recipes",
          name: "recipe",
          component: () => import("../views/recipes.vue"),
        },
        {
          path: "/messages",
          name: "messages",
          component: () => import("../views/message.vue"),
          redirect: "/messages/inbox",
          children: [
            {
              path: "/messages/chefs",
              components: {
                default: () => import("../views/allChefs.vue"), // Loads in the default view
              },
            },
            {
              path: "/messages/inbox",
              components: {
                default: () => import("../views/yourChats.vue"), // Loads in the default view
                messageBox: () => import("../views/messageBox.vue"), // Loads in the 'messageBox' view
              },
              children: [
                {
                  path: "/messages/inbox/messageBox/:id",
                  components: {
                    messageBox: () => import("../views/messageBox.vue"),
                  },
                  props: {
                    messageBox: true,
                  },
                },
              ],
            },
          ],
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
      console.log("You don’t have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
