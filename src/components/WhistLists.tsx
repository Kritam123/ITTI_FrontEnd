import WhistListItem from "./WhistListItem"

const WhistLists = ({whistlists}:{whistlists:WhistListProduct[]}) => {
  return (
    <>
    <div className="py-3 grid grid-cols-2 gap-y-5  min-[1100px]:grid-cols-3 ">
    {
      whistlists?.map((item:WhistListProduct) => (
        <WhistListItem product={item} />
      ))
}
  </div>
  </>
  )
}

export default WhistLists