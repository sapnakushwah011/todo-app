// useUserStore.js
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

const initialState = {
  users: [],
  loading: false,
};

const useUserStore = create(
  devtools(
    persist(
      (set) => ({
        ...initialState,

        fetchUsers: async () => {
          set({ loading: true }, false, "fetchUsers/start");

          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await res.json();

          set({ users: data, loading: false }, false, "fetchUsers/success");
        },

        resetUsers: () => set(initialState, false, "users/reset"),
      }),
      {
        name: "user-storage",
        partialize: (state) => ({ users: state.users }),
      }
    ),
    { name: "UserStore" }
  )
);

export default useUserStore;
