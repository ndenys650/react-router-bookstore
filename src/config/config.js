// import { lazy } from 'react'
// import locales from './locales'
import routes from './routes'
// import themes from './themes'
// import parseLanguages from 'base-shell/lib/utils/locale'
// import Loading from 'material-ui-shell/lib/components/Loading/Loading'
import getDefaultRoutes from './getDefaultRoutes'

const config = {
  
  getDefaultRoutes,
  routes,
//   locale: {
//     locales,
//     persistKey: 'base-shell:locale',
//     defaultLocale: parseLanguages(['en', 'de', 'ru'], 'en'),
//     onError: (e) => {
//       //console.warn(e)

//       return
//     },
//   },
//   menu: {
//     MenuContent: lazy(() => import('../components/Menu/MenuContent')),
//     MenuHeader: lazy(() =>
//       import('material-ui-shell/lib/components/MenuHeader/MenuHeader')
//     ),
//   },
//   theme: {
//     themes,
//     defaultThemeID: 'default',
//     defaultType: 'light',
//   },
//   pages: {
//     LandingPage: lazy(() => import('../pages/LandingPage')),
//     PageNotFound: lazy(() => import('../pages/PageNotFound')),
//   },
//   components: {
//     Menu: lazy(() =>
//       import('rmw-shell/lib/containers/FirebaseMenu/FirebaseMenu')
//     ),
//     Loading,
//   },

//   containers: {
//     AppContainer: lazy(() =>
//       import('material-ui-shell/lib/containers/AppContainer/AppContainer')
//     ),
//     LayoutContainer: lazy(() =>
//       import('rmw-shell/lib/containers/LayoutContainer/LayoutContainer')
//     ),
//   },
}

export default config
