import Header from "@/components/header"
import { Skeleton } from "@/components/ui/skeleton"
import { FaRegClock } from "react-icons/fa"
import { GrTask } from "react-icons/gr"
import { MdOutlineMessage } from "react-icons/md"

export default function Loading() {
    return (
        <div>
            <header className="mt-32">
                <Header />
            </header>
            <main className="mx-20">
        <section className="flex mb-14 flex-col md:flex-row lg:gap-10 lg:mb-10">
        <Skeleton className="rounded-full px-10 w-1/12" />
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex justify-center items-center gap-10">
            </div>
            <div className="flex text-sm gap-10 md:text-base">
              <div>
                <h2 className="text-center">
                <Skeleton className="h-4 w-[250px]" />
                </h2>
                <h2>Idade</h2>
              </div>
              <div>
                <h2 className='text-center'><Skeleton className="h-4 w-[250px]" /></h2>
                <h2>Genero</h2>
              </div>
              <div>
                <h2 className='text-center'><Skeleton className="h-4 w-[250px]" /></h2>
                <h2>Nacionalidade</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen mb-10">
          <h2 className='text-xl font-bold'>Sobre mim</h2>
          <Skeleton className="h-[125px] w-3/5 rounded-xl" />
        </section>
        <section className='mb-14'>
          <h2 className='flex items-center mb-2 gap-2 text-xl font-bold'>
          <Skeleton className="h-4 w-[250px]" />
          </h2>
          <div className="flex flex-col gap-10 md:flex-row">
            <div>
              <h2 className='flex items-center gap-2 my-2'>Tempo de Uso <FaRegClock size={18} /></h2>
              <h2 className="text-center p-2 rounded-3xl border-2 border-[#b38000]"><Skeleton className="h-4 w-[250px]" /></h2>
            </div>
            <div>
              <h2 className='flex items-center gap-2 my-2' >Mensagens Trocadas <MdOutlineMessage size={18} /></h2>
              <h2 className='text-center p-2 rounded-3xl border-2 border-[#b38000]'><Skeleton className="h-4 w-[250px]" /></h2>
            </div>
            <div>
              <h2 className='flex items-center gap-2 my-2'>Sessões Concluidas <GrTask size={18} /></h2>
              <h2 className='text-centerp-2 p-2 rounded-3xl border-2 border-[#b38000]'><Skeleton className="h-4 w-[250px]" /></h2>
            </div>
          </div>
        </section>
      </main>
        </div>
    )
}