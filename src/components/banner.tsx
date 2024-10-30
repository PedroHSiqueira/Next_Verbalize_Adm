import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Banner() {
  return (
    <div className={`bg-[#693f94] h-full p-28 pt-32 pb-20 ${poppins.className} flex justify-around flex-col shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] lg:flex-row items-center `}>
      <section className="p-10 flex flex-col items-center gap-3 ">
        <Image alt="dell" width={672} height={630} src="/logos/Logo_preta.png" className="hidden w-2/5 lg:block" />
        <h1 className="text-center font-bold text-3xl pb-5 text-white">Bem vindo a Zona administrativa da Verbalize</h1>
        <h1 className="text-center font-semibold text-1xl pb-5 text-white">área exclusiva para administradores do sistema</h1>
        <br />
        <div className="flex justify-evenly gap-2 lg:justify-center"></div>
        <Link href={"/"} type="button" className="ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full px-12 py-4 transition delay-150 duration-300 text-white font-bold bg-slate-800 hover:bg-[#B38000] focus:ring-4 focus:outline-none text-base text-center ">
          Começar
        </Link>
      </section>
    </div>
  );
}
