import Link from 'next/link'

export default function Page({params}: {params: {subcategories: string[]}}) {
  return (
    <div>
      My SUB Categories :
      <ul>
        {params.subcategories.map((cat, idx) => (
          <li key={idx}>{cat}</li>
        ))}
      </ul>
      <Link href="/final/dynamic/shop/home">back</Link>
    </div>
  )
}
