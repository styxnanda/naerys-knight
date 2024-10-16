/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PeyrieImport } from './routes/peyrie'
import { Route as CharactersImport } from './routes/characters'
import { Route as IndexImport } from './routes/index'
import { Route as PairBeginCharIdImport } from './routes/pair/begin/$charId'

// Create/Update Routes

const PeyrieRoute = PeyrieImport.update({
  path: '/peyrie',
  getParentRoute: () => rootRoute,
} as any)

const CharactersRoute = CharactersImport.update({
  path: '/characters',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PairBeginCharIdRoute = PairBeginCharIdImport.update({
  path: '/pair/begin/$charId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/characters': {
      id: '/characters'
      path: '/characters'
      fullPath: '/characters'
      preLoaderRoute: typeof CharactersImport
      parentRoute: typeof rootRoute
    }
    '/peyrie': {
      id: '/peyrie'
      path: '/peyrie'
      fullPath: '/peyrie'
      preLoaderRoute: typeof PeyrieImport
      parentRoute: typeof rootRoute
    }
    '/pair/begin/$charId': {
      id: '/pair/begin/$charId'
      path: '/pair/begin/$charId'
      fullPath: '/pair/begin/$charId'
      preLoaderRoute: typeof PairBeginCharIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/characters': typeof CharactersRoute
  '/peyrie': typeof PeyrieRoute
  '/pair/begin/$charId': typeof PairBeginCharIdRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/characters': typeof CharactersRoute
  '/peyrie': typeof PeyrieRoute
  '/pair/begin/$charId': typeof PairBeginCharIdRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/characters': typeof CharactersRoute
  '/peyrie': typeof PeyrieRoute
  '/pair/begin/$charId': typeof PairBeginCharIdRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/characters' | '/peyrie' | '/pair/begin/$charId'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/characters' | '/peyrie' | '/pair/begin/$charId'
  id: '__root__' | '/' | '/characters' | '/peyrie' | '/pair/begin/$charId'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  CharactersRoute: typeof CharactersRoute
  PeyrieRoute: typeof PeyrieRoute
  PairBeginCharIdRoute: typeof PairBeginCharIdRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  CharactersRoute: CharactersRoute,
  PeyrieRoute: PeyrieRoute,
  PairBeginCharIdRoute: PairBeginCharIdRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/characters",
        "/peyrie",
        "/pair/begin/$charId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/characters": {
      "filePath": "characters.tsx"
    },
    "/peyrie": {
      "filePath": "peyrie.tsx"
    },
    "/pair/begin/$charId": {
      "filePath": "pair/begin/$charId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
