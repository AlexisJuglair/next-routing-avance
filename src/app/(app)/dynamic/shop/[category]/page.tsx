export default function Page({params}: {params: {category: string}}) {
  return (
    <div>
      <h1>My category: {params.category}</h1>
    </div>
  )
}
