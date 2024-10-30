'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useUsuarioStore } from '@/context/usuario';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@radix-ui/react-toast';
import { HiEnvelope } from 'react-icons/hi2';

type Inputs = {
  nome: string;
};

export default function login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { toast } = useToast();

  async function adicionarIdioma(data: Inputs) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/idiomas`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome: data.nome }),
      },
    );
    console.log(response);
    if (response.status === 201) {
      toast({
        variant: 'success',
        title: 'Idioma adicionado com sucesso',
        description: `O idioma ${data.nome} foi adicionado com sucesso`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Algo deu errado',
        description: 'Tente novamente mais tarde'
      });
    }
  }

  return (
    <div className="flex justify-center items-center flex-col gap-5 bg-[#0B0F18] w-screen h-screen">
      <Link href={'/'} className="flex flex-col items-center justify-center">
      <img src="./logos/logo_branca.png" alt="Logo" />
        <span className="p-0 pr-2 text-[#B38000]  elf-center text-2xl font-semibold whitespace-nowrap">
          Verbalize
        </span>
      </Link>
      <form className='md:w-2/6' onSubmit={handleSubmit(adicionarIdioma)}>
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-white"
        >
          Nome Do Idioma:
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <HiEnvelope className="text-gray-400" />
          </div>
          <input
            type="text"
            className=" border text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
            {...register('nome')}
          />
        </div>
        <div className="flex items-start mb-5">
        </div>
        <button
          type="submit"
          className="text-white bg-[#B38000] font-bold hover:bg-[#947321] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Adicionar
        </button>
      </form>
    </div>
  );
}
