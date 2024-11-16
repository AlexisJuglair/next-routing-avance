import React, {Suspense} from 'react'
{
  /* 
  🐶 Ajoute les 2 props supplémentaires necessaires pour 
  faire fonctionner nos routes parrallèles  
  */
}
export default async function Layout({
  children,
  admin,
  editor,
}: {
  children: React.ReactNode
  admin: React.ReactNode
  editor: React.ReactNode
}) {
  //const role = Math.random() > 0.5 ? 'admin' : 'editor'
  return (
    <>
      <h2>Gestion Admin / Editor Layout</h2>
      <div className="m-6 flex flex-col">
        {children}
        {editor}
        {admin}
        {/* <Suspense fallback={<div>Loading...</div>}>{admin}</Suspense> */}
        {/* {role === 'admin' ? admin : undefined} */}

        {/* 🐶 pense à bonus-2. 🚀 Loading  */}
      </div>
    </>
  )
}
