import { defineStore } from 'pinia';
import { useSnackStore } from './snack';

export const useUserStore = defineStore('user', () => {
  const user = ref();

  onMounted(() => {
    fetchUser();
  });

  async function fetchUser() {
    const snack = useSnackStore();
    let token = localStorage.getItem('token');
    if (!token) {
      navigateTo('/login');
    }

    let res = await fetch(`http://localhost:5000/api/users/profile`, {
      headers: {
        'Content-Type': 'application/json',
				'authorization':`Bearer ${token}`
      },
    });
    if (!res.ok) {
      navigateTo('/login');
      return;
    }
    let json = await res.json();
    console.log(json);
    user.value = json.user;

    navigateTo('/');
  }

  return { user };
});
