export default () => {
  const useAuthUser = () => useState('auth_user')
  const useAuthToken = () => useState('auth_token')
  const useAuthLoading = () => useState('auth_loading', () => true)
  const isLogin = useState('login', () => false)

  interface EmailPasswordType {
    email: string,
    password: string
  }

  const setUser = (newUser: any) => {
    const authUser = useAuthUser()
    authUser.value = newUser
  }
  const setToken = (newUser: any) => {
    const authUser = useAuthToken()
    authUser.value = newUser
  }

  const setIsAuthLoading = (value: boolean) => {
    const authLoading = useAuthLoading()
    authLoading.value = value
  }

  const loginService = async (item: EmailPasswordType) => {
    try {
      setIsAuthLoading(true)
      const response = await $fetch('api/auth/login', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = response as any
      setUser(data.result.user)
      setToken(data.result._tokenResponse.idToken)
      return data;
    } catch (error) {
      console.log(error);
    } finally {
      setIsAuthLoading(false)
    }
  };

  const registerService = async (item: EmailPasswordType) => {
    try {
      setIsAuthLoading(true)
      const response: Object = await $fetch('api/auth/register', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.hasOwnProperty('result')) {
        await $fetch('api/user/add', {
          method: 'POST',
          body: JSON.stringify(item),
          headers: {
            'Content-Type': 'application/json',
          },
        })
      }
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      setIsAuthLoading(false)
    }
  };

  onMounted(() => {
    setIsAuthLoading(true)
    const token = sessionStorage.getItem('access_token')
    if (token) {
      setIsAuthLoading(false)
      isLogin.value = true
    } else {
      setIsAuthLoading(false)
    }
  })

  return {
    loginService,
    registerService,
    useAuthUser,
    useAuthToken,
    useAuthLoading,
    isLogin
  }
}