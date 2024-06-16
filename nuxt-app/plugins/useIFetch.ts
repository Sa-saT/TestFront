// import type { UseFetchOptions } from "#app";
// import { defu } from "defu";

// export async function useIFetch<T>(
//   url: string,
//   options: UseFetchOptions<T> = {}
// ) {
//   const accessToken = useCookie("accessToken");

//   const defaults: UseFetchOptions<T> = {
//     baseURL: "http://127.0.0.1:8000/",
//     key: url,
//     headers: accessToken.value
//       ? { Authorization: `Bearer ${accessToken.value}` }
//       : {},
//     onResponse: async ({ response, options }) => {
//       if (response.status === 401) {
//         try {
//           const newToken = await refreshToken();
//           accessToken.value = newToken;

//           options.headers = { Authorization: `Bearer ${newToken}` };
//           useFetch(url, options as UseFetchOptions<T>);
//         } catch (error) {
//           console.error("Token refresh failed:", error);
//         }
//       }
//     },
//   };

//   const params = defu(options, defaults);

//   return useFetch(url, params);
// }

// async function refreshToken() {
//   const refreshToken = useCookie("refreshToken");

//   const { data, status } = await useFetch<{ access: string }>(
//     "http://127.0.0.1:8000/api-auth/jwt/refresh/",
//     {
//       method: "POST",
//       body: { refresh: refreshToken.value },
//     }
//   );

//   if (status.value === "success") {
//     return data.value?.access;
//   } else {
//     throw new Error("Token refresh failed");
//   }
// }
import type { UseFetchOptions } from "#app";
import { defu } from "defu";

export default defineNuxtPlugin(() => {
  const useIFetch = async <T>(
    url: string,
    options: UseFetchOptions<T> = {}
  ) => {
    const accessToken = useCookie("accessToken");

    const defaults: UseFetchOptions<T> = {
      baseURL: "http://127.0.0.1:8000/",
      key: url,
      headers: accessToken.value
        ? { Authorization: `Bearer ${accessToken.value}` }
        : {},
      onResponse: async ({ response, options }) => {
        if (response.status === 401) {
          try {
            const newToken = await refreshToken();
            accessToken.value = newToken;

            options.headers = { Authorization: `Bearer ${newToken}` };
            return await useFetch(url, options as UseFetchOptions<T>);
          } catch (error) {
            console.error("Token refresh failed:", error);
          }
        }
      },
    };

    const params = defu(defaults, options);

    return await useFetch(url, params);
  };

  const refreshToken = async () => {
    const refreshToken = useCookie("refreshToken");

    const { data, error } = await useFetch<{ access: string }>(
      "http://127.0.0.1:8000/api-auth/jwt/refresh/",
      {
        method: "POST",
        body: { refresh: refreshToken.value },
      }
    );

    if (error.value) {
      throw new Error("Token refresh failed");
    }

    return data.value?.access;
  };

  return {
    provide: {
      useIFetch,
    },
  };
});
