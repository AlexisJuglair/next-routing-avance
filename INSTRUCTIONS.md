# Faire des routes dynamiques

### 💡 Comprendre les routes dynamiques

## 📝 Tes notes

Detaille ce que tu as appris ici, sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Les routes dynamiques sont très utiles quand on ne connait pas à l’avance le segment. Par exemple `/blog/how-to-learn-next` et `/blog/suspense-react`.

Il a une convention avec `next` qui permet de créer ce type de route et de récupérer les params. Pour cela il faut créer un répertoire entre crochets `[folder]` Dans notre exemple `/blog/[slug]` `slug` et récupéré du `props params`

```tsx
//app/blog/[slug]/page.tsx
export default async function Page({
  params,
}: {
  params: Promise<{slug: string}>
}) {
  const slug = (await params).slug
  return <div>My Post: {slug}</div>
}
```

📑 Le liens vers la doc [https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

## Exercice

Nous avons 3 routes statiques dans notre application.

- Une pour afficher une image d’avatar

[http://localhost:3000/dynamic/avatar/1](http://localhost:3000/dynamic/avatar/1)

- et deux autres pour afficher 2 catégories de produits

[http://localhost:3000/dynamic/shop/shoes](http://localhost:3000/dynamic/shop/shoes)

[http://localhost:3000/dynamic/shop/pants](http://localhost:3000/dynamic/shop/pants)

Dans cet exercice tu vas devoir rendre dynamiques les routes avatar et shop.

- 🐶 renomme `(app)/dynamic/avatar/1` en `(app)/dynamic/avatar/[id]`
- 🐶 adapte `(app)/dynamic/avatar/[id]/page.tsx` pour récuperer le bon user en fonction de l’id en bdd

Fait la même chose pour le segment `shop`

Fichiers

- `(app)/dynamic/avatar/1`
- `(app)/dynamic/avatar/1/page.tsx`
- `(app)/dynamic/shop/shoes/page.tsx`
- `(app)/dynamic/shop/pants/page.tsx`

## Bonus

### 1. 🚀 Gérer les 404

Si un segment n’existe pas (pas de répertoire) `next` génère automatiquement un page 404.

Mais comment faire pour les segments dynamique ?

Dans notre cas, les avatars viennent de notre base de données (`id 1 et id 2`) les autres `id` sont inexistants. Il faut gérer ce cas. Pour cela next a une `function notFound()` qui permet de gérer cela

```tsx
import {notFound} from 'next/navigation'
...
if (!currentUser) notFound()
```

- 🐶 Gère les 404 pour les avatars

Fichiers

- `(app)/dynamic/avatar/[id]/page.tsx`

### 2. 🚀 Catch All Segments

Il est également possible d’intercepter tout les segments, dans le cas ou le nombre de segment n’est pas fixe. exemple de segments

- `/shop/a/b`
- `/shop/a/b/c`
- etc …

Dans cet exercice tu vas devoir gérer tous les segments de sous catégories.

- 🐶 dans le dossier `[cayegory]` ajoute un sous dossier `[...subcategories]` contenant un `page.tsx`, fait en sorte de lister toutes les sous catégories tel que : `/dynamic/shop/shoes/a/b/c/d/e` affiche une liste a b c d e …

```tsx
// shop/[category]/[...subcategories]/page.tsx
<div>
  My SUB Categories :
  <ul>
    {params.subcategories.map((cat, idx) => (
      <li key={idx}>{cat}</li>
    ))}
  </ul>
  <Link href="/final/dynamic/shop/home">back</Link>
</div>
```

Fichiers

- `(app)/dynamic/shop/[category]`

## Aller plus loin

📑 Le lien vers la doc [https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)

## Ils vont t’aider

- **🐶 Mowgli le Chien** : _Mowgli te guidera dans chaque exercice._
- **🤖 Ash le Robot** : _Ash le Robot te donnera du code utile._
- **🚀 Julia La roquette** : _Julia te donnera des défis supplémentaires._
- **⛏️ Hulk le Marteau** : _Quand du code à supprimer est présent_
- **👨‍✈️ Hugo le chef de projet** : _Va t'aider sur les spécifications du projet_

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-next-avis?entry.1912869708=Next%20PRO&entry.1430994900=2.Routing%20Avance&entry.533578441=04%20Routes%20dynamiques).
