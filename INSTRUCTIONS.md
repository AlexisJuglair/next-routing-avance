# Les Routes parallèles

### 💡 Comprendre les routes parallèles

## 📝 Tes notes

Detaille ce que tu as appris ici, sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Les routes parallèles permettent de rendre une ou plusieurs pages dans le même `Layout`. Ces pages ne sont pas des segments de routes et n’affectent pas les URLs. On les utilisent en créant un dossier commençant par `@`, que l’on appelle des `slots`, exemple `@team` `@analytics` ils sont très utile pour construire des `dashbord` ou pages complexes. Ces slots sont ensuite passés en `props` dans le `Layout` et s’utilisent de la manière suivante :

```tsx
export default function Layout({
  children,
  team,
  analytics,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  return (
    <>
      {children}
      {team}
      {analytics}
    </>
  )
}
```

📑 Le liens vers la doc [https://nextjs.org/docs/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)

## Exercice

Dans cet exercice tu vas devoir créer une route `'parallel'` dans le `backoffice` qui va permettre de gérer des pages pour des `admin` et des `editor`.

Pour simplifier l’exercice les routes suivantes sont déjà créée. Elle ne sont pas parallèles

- [http://localhost:3000/parallel/admin](http://localhost:3000/parallel/admin)
- [http://localhost:3000/parallel/editor](http://localhost:3000/parallel/editor)

- **🐶** Commence par indiquer que les pages `admin` et `editor` seront parallèles grâce à `@`
- **🐶** Edite le fichier `/app/parralel/layout` pour qu’il fasse le rendu des routes parallèles

Fichiers & dossier

- `/app/(backfoffice)/parralel/admin`
- `/app/(backfoffice)/parralel/editor`
- `/app/(backfoffice)/parralel/layout.tsx`

## Bonus

### 1. 🚀 Rendu conditionnel

Cette méthode permet également de faire du rendu conditionnel de pages.

**🐶** Dans cet exercice tu vas devoir faire un rendu de la page `admin` uniquement si le rôle est `admin`. Pour générer un rôle aléatoire pour l’exercice tu peux utiliser

```tsx
 //layout.tsx
 const role = Math.random() > 0.5 ? 'admin' : 'editor'
 ...
 {role === 'admin' ? admin : undefined}
```

Fichiers

- `/app/(backfoffice)/parralel/layout.tsx`

### 2. 🚀 Streaming / Loading

Il arrive que certaines pages (qui peuvent être des RSC) mettent un certains temps à s’afficher. Il peut être intéressant de pouvoir afficher un composant de chargement / Skeleton.

Dans cet exercice nous allons simuler un temps long avec :

```tsx
// app/parralel/@admin/page.tsx
await new Promise((resolve) => {
  setTimeout(resolve, 5000)
})
```

- **🐶** Gère le `loading` en wrappant le rendu de la page `admin` avec `<Suspense>`

```tsx
//Layout.tsx
<Suspense fallback={<div>Loading...</div>}>
  {role === 'admin' ? admin : undefined}
</Suspense>
```

### 3. 🚀 loading.tsx

`Next` simplifie la gestion des `loadings` avec l’utilisation d’un fichier `loading.tsx` . Il est possible d’en mettre un à chaque segment de route.

- 🐶 Ajoute un fichier `loading.tsx` retournant un composant loading

```tsx
<div className="flex h-screen items-center justify-center">
  <div className="h-32 w-32 animate-spin rounded-full border-8 border-t-8 border-white border-t-transparent shadow-lg"></div>
</div>
```

- Pense à supprimer le `<Suspense>` car il n’est plus utile

Fichiers

- Fichiers
- `/app/(backfoffice)/parralel/admin`
- `/app/(backfoffice)/parralel/editor`
- `/app/(backfoffice)/parralel/layout.tsx`

## Aller plus loin

📑 Le lien vers la doc [https://nextjs.org/docs/app/building-your-application/routing/parallel-routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes)

## Ils vont t’aider

- **🐶 Mowgli le Chien** : _Mowgli te guidera dans chaque exercice._
- **🤖 Ash le Robot** : _Ash le Robot te donnera du code utile._
- **🚀 Julia La roquette** : _Julia te donnera des défis supplémentaires._
- **⛏️ Hulk le Marteau** : _Quand du code à supprimer est présent_
- **👨‍✈️ Hugo le chef de projet** : _Va t'aider sur les spécifications du projet_

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-next-avis?entry.1912869708=Next%20PRO&entry.1430994900=2.Routing%20Avance&entry.533578441=02%20Les%20routes%20parrallèles).
