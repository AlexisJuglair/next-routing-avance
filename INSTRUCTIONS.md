# Les groupes de routes (Route Groups)

### 💡 Comprendre les groupes de routes

## 📝 Tes notes

Detaille ce que tu as appris ici, sur une page [Notion](https://go.mikecodeur.com/course-notes-template)

## Comprendre

Avec Next, les répertoires dans `/app` sont considérés comme routable (si un segment contient un fichier `page.tsx`)

```
app
├── login
│   └── page.tsx
├── dahsboard
│   └── page.tsx
└── register
    └── page.tsx
```

Si nous souhaitons regrouper `login` et `register` ensemble avec le même `layout` et `dashboard` avec un autre `layout` faudrait faire

```
app
├── auth
│   ├── login
│   │   └── page.tsx
│   ├── register
│   │   └── page.tsx
│   └── layout.tsx
└── dahsboard
    ├── page.tsx
    └── layout.tsx
```

Le problème de faire cela est que cela va rajouter un segment (`auth`) dans nos routes

```
/auth/login
/auth/register
/dashboard
```

Pour éviter que `auth` soit routé et groupé nos 2 sous segment avec le même `layout`, next a introduit le concept de route groups. Cela s’utilise avec la syntaxe `(folder)`

```
app
├── (auth)
│   ├── login
│   │   └── page.tsx
│   ├── register
│   │   └── page.tsx
│   └── layout.tsx
└── dahsboard
    ├── page.tsx
    └── layout.tsx
```

- routes accessibles

```
/login
/register
/dashboard
```

📑 Le liens vers la doc [https://nextjs.org/docs/app/building-your-application/routing/route-groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

## Exercice

👨‍✈️ Hugo le chef de projet te demande de concevoir un SaaS, une application permettant de fonctionner pour des utilisateurs normaux (rôle `user`) et des `admin.`

- Les admin se connecteront sur un `backoffice` de gestion.
- Nous appellerons le `frontoffice` le reste du site

Ces 2 modes ont 2 structures (layout) séparées et des routes séparées

- Routes
  - `/bo` le backoffice
  - `/dashboard` `/cgv` etc … le frontoffice

Pour simplifier l’exercice de notre SaaS, la `HomePage ,`des composants basiques et des routes seront déjà fournis. Nous avons 3 routes sans `Layout`

- `/dashboard`
- `/cgv`
- `/bo`

### Instructions

🐶 Dans un premier temps crée des `layouts` pour chaque routes. Tu peux renommer les fichiers

```
src/app/dashboard/layout.exercice.tsx -> src/app/bo/layout.tsx
src/app/bo/layout.exercice.tsx -> src/app/bo/layout.tsx
```

🐶 Dans un second temps crée 2 routes groupées

- Une pour le backoffice `🤖 (backoffice)`
- Une pour l’application frontoffice `🤖 (app)`
  - fait en sorte que `cgv` utilise le même `layout` que `app`

Constate que seulement les segments qui changent sont re-rendus, ce le principe de partial rendering

📑 Doc partial rendering [https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#4-partial-rendering](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#4-partial-rendering)

Fichiers & dossiers

- `/app/bo`
- `/app/cgv`
- `/app/dashboard`

## Bonus

### 1. 🚀 Répertoire non routable

Parfois il peut être utile d’avoir des répertoires non routable. Par exemple si l’on a un répertoire `/components/`

Pour rendre un répertoire non routable il faut le renommer avec un `_`

```
_components
```

📑 Aller plus loin : [https://nextjs.org/docs/getting-started/project-structure#route-groups-and-private-folders](https://nextjs.org/docs/getting-started/project-structure#route-groups-and-private-folders)

🐶 Dans cette exercice rend le répertoire `/reports` non routable

Fichiers

- `bo/reports`

### 2. 🚀 Template vs Layout

Les `Templates` sont similaires aux `Layout` mais il sont systématiquement re-rendu lors de la navigation (contrairement au `Layout`).

- Les `Layout` gardent les `states`
- Les `Template` ne gardent pas les `states` et les effets de bord sont réexécuter (`useEffect`)

**👨‍✈️** Hugo te demande d’ajouter dans le backoffice un champs input pour contacter le support, ce champs doit garder son état durant la navigation

🐶 Dans cet exercice ajoute un fichier `template.tsx` dans le répertoire `app/bo`

```tsx
'use client'
import React, {useEffect, useState} from 'react'

export default function Template({children}: {children: React.ReactNode}) {
  const [support, setSupport] = useState('')
  useEffect(() => {
    console.log('Template/Layout mounted')
  }, [])
  return (
    <>
      <div className="flex  flex-col gap-2">
        <label htmlFor="support">Contacter le support</label>
        <input
          className="w-60 text-black"
          id="support"
          value={support}
          onChange={(e) => setSupport(e.target.value)}
        />
      </div>
      <div>{children}</div>
    </>
  )
}
```

Constate que l’état est perdu lors de la navigation et que nous souhaitons pas ce comportement. constate également les dates de génération de pages `bo` et `report` .

- 🐶 Renomme `/app/bo/template.tsx` en `/app/bo/layout.tsx` et constate que l’état et préservé et que le composent n’est pas remonté systématiquement (ainsi que les page.tsx)

Fichiers & dossiers

- `/app/bo/template.tsx`
- `/app/bo/layout.tsx`

## Aller plus loin

📑 Le lien vers la doc [https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts)

## Ils vont t’aider

- **🐶 Mowgli le Chien** : _Mowgli te guidera dans chaque exercice._
- **🤖 Ash le Robot** : _Ash le Robot te donnera du code utile._
- **🚀 Julia La roquette** : _Julia te donnera des défis supplémentaires._
- **⛏️ Hulk le Marteau** : _Quand du code à supprimer est présent_
- **👨‍✈️ Hugo le chef de projet** : _Va t'aider sur les spécifications du projet_

## 🐜 Feedback

Remplir le formulaire le [formulaire de FeedBack](https://go.mikecodeur.com/cours-next-avis?entry.1912869708=Next%20PRO&entry.1430994900=2.Routing%20Avance&entry.533578441=01%20Les%20Route%20Groups).
