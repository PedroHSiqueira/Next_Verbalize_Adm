import Link from "next/link";
import { HiCheckBadge } from "react-icons/hi2";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Subscriptions() {
    return (
        <section id='planos' className='scroll-m-40 m-2 mb-10'>
        <div className={`bg-[#693f94] p-10 rounded-3xl pb-20 ${poppins.className} lg:mx-20 xl:mx-25`}>
        <h1 className='text-center font-sans text-white text-3xl mb-10'>Conheça as assinaturas</h1>
        <div className='flex flex-col gap-5 justify-around items-center xl:flex-row' >
        <div className='text-start text-white max-w bg-zinc-900 rounded-3xl p-12 flex flex-col gap-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] '>
          <h2 className='text-xl font-bold'>Verbalize Start</h2>
          <h3 className='text-2xl font-bold  '>Gratuito</h3>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' />Acesso a chats de texto com parceiros linguísticos.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' />Suporte básico por e-mail.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' />Histórico de mensagens armazenado por 30 dias.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' />Acesso a chats de texto com parceiros linguísticos.</p>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <Link href={'/registro'} type="button" className="hover:scale-110 px-4 py-1 transition delay-150 duration-300 ease-in-out text-white font-bold bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none rounded-3xl text-xl text-center ">
              Compre Agora
            </Link>
          </div>
        </div>
        <div className='text-start text-white max-w bg-zinc-900 rounded-3xl p-12 flex flex-col gap-5 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] '>
          <h2 className='text-xl font-bold'>Verbalize Plus</h2>
          <h3 className='text-2xl font-bold  '>R$19.90 /mês</h3>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' /> Todos os benefícios do plano Start.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' /> Suporte prioritário por e-mail.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' /> Histórico de mensagens ilimitado.</p>
          <p className=' flex items-center gap-3 text-lg'><HiCheckBadge className='hidden xl:block' /> Recurso de tradução automática embutido no chat.</p>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            <Link href={'/registro'} type="button" className="hover:scale-110 px-4 py-1 transition delay-150 duration-300 ease-in-out text-white font-bold bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none rounded-3xl text-xl text-center ">
              Compre Agora
            </Link>
          </div>
        </div>
        </div>
        </div>
      </section>
    )
}