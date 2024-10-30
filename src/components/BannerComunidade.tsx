import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Comunidades() {
  return (
    <div
      className={`bg-[#693f94] p-5 pt-16 mb-10 ${poppins.className} flex justify-around flex-col shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] lg:flex-row items-center `}
    >
      <section className="p-10 flex flex-col items-center ">
        <h1 className="text-center font-bold mb-10 text-xl pb-5 text-white md:text-2xl lg:text-3xl">
          Principais Linguas Selecionadas Para Aprendizado
        </h1>
        <div className="flex justify-center gap-2 lg:mx-20 lg:gap-16">
          <div className="flex flex-col w-10 items-center justify-center lg:gap-2 lg:w-1/12 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full"
              src="./Bandeiras/china.png"
            />
            <div className=" hidden text-center text-xs text-white font-semibold lg:text-base lg:block">
              Mandarim
            </div>
          </div>

          <div className="flex flex-col w-10 items-center justify-center lg:gap-2 lg:w-1/12 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full"
              src="./Bandeiras/japan.png"
            />
            <div className=" hidden text-center text-xs text-white font-semibold lg:text-base lg:block">
              Japonesa
            </div>
          </div>

          <div className="flex flex-col w-10 items-center justify-center lg:gap-2 lg:w-1/12 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full"
              src="./Bandeiras/france.png"
            />
            <div className=" hidden text-center text-xs text-white font-semibold lg:text-base lg:block">
              Francesa
            </div>
          </div>

          <div className="flex flex-col w-10 items-center justify-center lg:gap-2 lg:w-1/12 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full"
              src="./Bandeiras/arabic.png"
            />
            <div className=" hidden text-center text-xs text-white font-semibold lg:text-base lg:block">
              Árabe
            </div>
          </div>
          <div className="flex flex-col w-10 items-center justify-center lg:gap-2 lg:w-1/12 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full"
              src="./Bandeiras/indonesia.png"
            />
            <div className=" hidden text-center text-xs text-white font-semibold lg:text-base lg:block">
              Indonésio
            </div>
          </div>

          <div className="flex flex-col w-10 items-center justify-center lg:gap-2 lg:w-1/12 ">
            <img
              className="hover:scale-110 transition delay-150 duration-300 ease-in-out shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] rounded-full"
              src="./Bandeiras/germany.png"
            />
            <div className=" hidden text-center text-xs text-white font-semibold lg:text-base lg:block">
              Alemã
            </div>
          </div>
        </div>
        <section className="p-10 flex flex-col items-center ">
          <h3 className=" text-base pb-5 text-white md:text-xl lg:text-2xl">
            Conecte-se com falantes nativos para praticar idiomas
          </h3>
        </section>
      </section>
    </div>
  );
}
