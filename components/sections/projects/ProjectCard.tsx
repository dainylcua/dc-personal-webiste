import Image from "next/image"
import mountain from "../../../public/mountains.png"

type Props = {
  reverse?: boolean
}

export default function ProjectCard(props: Props) {
  // const { reverse } = props
  return(
    <div className="flex flex-col rounded-md w-96 mx-4 h-full bg-stone-100 text-stone-800 shadow-lg hover:shadow-xl transition ease-in-out hover:-translate-y-2 hover:shadow-orange-700/25">
      <div className="h-[13rem] border-b">
        <Image src={mountain} alt="project title" width={384} height={208} objectFit="cover" className="rounded-t-md" />
      </div>
      <div className="grid grid-rows-4 flex-1">
        <div className="row-span-3 grid grid-rows-6 p-2">
          <h3 className="row-span-1">
            name
          </h3>
          <p className="row-span-5">
            description
          </p>
        </div>
        <p className="row-span-1 auto-rows-max bg-gradient-to-br text-stone-900 from-orange-500 to-rose-500 rounded-b-md p-2">
          skills
        </p>
      </div>
    </div>
  )
}