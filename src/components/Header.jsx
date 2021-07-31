export default function Header(props) {
  let { links, hero } = props
  return (
    <header class="h-16 border border-b w-full z-10 flex items-center">
      <div class="flex w-full mx-auto items-center justify-between flex-row container">
        <a href="/"><h1 class="font-bold text-3xl cursor-pointer">{hero}</h1></a>
        <div class="flex-row flex flex-nowrap space-x-4">
          <For each={links}>{(item) =>
            <a href={item.url}>{item.title}</a>
          }</For>
        </div>
      </div>
    </header>
  )
}