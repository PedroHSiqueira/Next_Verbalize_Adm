"use client";
import Image from "next/image";
import Header from "../components/header";
import Banner from "@/components/banner";
import { useEffect } from "react";
import { useUsuarioStore } from "@/context/usuario";

export default function Home() {
  const { logar } = useUsuarioStore();
  useEffect(() => {
    async function buscaUsuarios(idUsuario: string) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_URL_API}/usuarios/conta/${idUsuario}`);
      if (response.status === 200) {
        const dados = await response.json();
        logar(dados);
      }
    }
    if (localStorage.getItem("client_key")) {
      const usuarioSalvo = localStorage.getItem("client_key") as string;
      const usuarioValor = usuarioSalvo.replace(/"/g, "");
      buscaUsuarios(usuarioValor);
    }
  }, []);
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <Banner />
        </section>
        <section className="p-10">
          <h1 className="text-center font-bold text-xl pb-5 md:text-2xl xl:3xl ">
            Será aqui que poderás adicionar novas línguas ao site Principal da Verbalize
          </h1>
          <br />
          <div className="flex justify-around py-7">
            <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 ">
              <div className="bg-[#f1dfdf] flex flex-col items-center justify-center max-w-36 rounded-3xl py-2 px-4 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out">
                <Image alt="bandeiras" width={95} height={55} className="w-28 px-6 pb-2" src="/Bandeiras/china.png" />
                <p className="text-center font-black text-xl">Mandarim</p>
              </div>
              <div className="bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out">
                <Image alt="bandeiras" width={95} height={55} className="w-28 px-6 pb-2" src="/Bandeiras/tagalog.png" />
                <p className="text-center font-black text-xl">Tagalog</p>
              </div>
              <div className="bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out">
                <Image alt="bandeiras" width={95} height={55} className="w-28 px-6 pb-2" src="/Bandeiras/arabic.png" />
                <p className="text-center font-black text-xl">Árabe</p>
              </div>
              <div className="bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out">
                <Image alt="bandeiras" width={95} height={55} className="w-28 px-6 pb-2" src="/Bandeiras/germany.png" />
                <p className="text-center font-black text-xl">Alemão</p>
              </div>
              <div className="bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-2 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out">
                <Image alt="bandeiras" width={95} height={55} className="w-28 px-6 pb-2" src="/Bandeiras/thailand.png" />
                <p className="text-center font-black text-xl">Tailandês</p>
              </div>
              <div className="bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-3 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out">
                <Image alt="bandeiras" width={95} height={55} className="w-28 px-6 pb-2" src="/Bandeiras/japan.png" />
                <p className="text-center font-black text-xl">Japonês</p>
              </div>
              <div className="bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-3 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out">
                <Image alt="bandeiras" width={95} height={55} className="w-28 px-6 pb-2" src="/Bandeiras/greece.png" />
                <p className="text-center font-black text-xl">Grego</p>
              </div>
              <div className="bg-[#f1dfdf] flex flex-col items-center  justify-center max-w-36 rounded-3xl py-3 px-3 hover:scale-105 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] transition delay-150 duration-150 ease-in-out">
                <Image alt="bandeiras" width={95} height={55} className="w-28 px-6 pb-2" src="/Bandeiras/indonesia.png" />
                <p className="text-center font-black text-xl">Bahasa Indonesia</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
