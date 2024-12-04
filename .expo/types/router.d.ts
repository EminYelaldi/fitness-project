/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/app`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/Login`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/Login.style`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/forgot-password`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/forgot-password.style`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/form`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/form.style`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/frontpage`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/frontpage.style`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/program`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/program.style`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/sign-up`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/sign-up.style`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/app`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/Login`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/Login.style`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/forgot-password`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/forgot-password.style`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/form`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/form.style`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/frontpage`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/frontpage.style`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/program`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/program.style`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/sign-up`; params?: Router.UnknownOutputParams; } | { pathname: `/src/screens/sign-up.style`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/app${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/src/screens/Login${`?${string}` | `#${string}` | ''}` | `/src/screens/Login.style${`?${string}` | `#${string}` | ''}` | `/src/screens/forgot-password${`?${string}` | `#${string}` | ''}` | `/src/screens/forgot-password.style${`?${string}` | `#${string}` | ''}` | `/src/screens/form${`?${string}` | `#${string}` | ''}` | `/src/screens/form.style${`?${string}` | `#${string}` | ''}` | `/src/screens/frontpage${`?${string}` | `#${string}` | ''}` | `/src/screens/frontpage.style${`?${string}` | `#${string}` | ''}` | `/src/screens/program${`?${string}` | `#${string}` | ''}` | `/src/screens/program.style${`?${string}` | `#${string}` | ''}` | `/src/screens/sign-up${`?${string}` | `#${string}` | ''}` | `/src/screens/sign-up.style${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/app`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/Login`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/Login.style`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/forgot-password`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/forgot-password.style`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/form`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/form.style`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/frontpage`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/frontpage.style`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/program`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/program.style`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/sign-up`; params?: Router.UnknownInputParams; } | { pathname: `/src/screens/sign-up.style`; params?: Router.UnknownInputParams; };
    }
  }
}
