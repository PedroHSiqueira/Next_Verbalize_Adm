'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useUsuarioStore } from '@/context/usuario';
import { useToast } from '@/hooks/use-toast';
import { ToastAction } from '@radix-ui/react-toast';
import { Checkbox } from '@/components/ui/checkbox';
import { HiEnvelope } from 'react-icons/hi2';
import { HiLockClosed } from 'react-icons/hi2';

type Inputs = {
  email: string;
};

export default function login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { toast } = useToast();

  async function enviaRecuperacao(data: Inputs) {
    const token = Math.floor(100000 + Math.random() * 900000);
    console.log(token.toString())
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/usuarios/esqueceu/${data.email}`,
      {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recuperacao: token.toString(),
        }),
      },
    );
    if (response.status === 200) {
      toast({
        variant: 'default',
        title: 'Token Enviado',
        description: 'Verifique seu email',
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Algo deu errado',
        description: 'Verifique suas credenciais e tente novamente',
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
      <form className="md:w-2/6" onSubmit={handleSubmit(enviaRecuperacao)}>
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-white"
        >
          Email registrado:
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <HiEnvelope className="text-gray-400" />
          </div>
          <input
            type="email"
            className=" border text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
            {...register('email')}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[#B38000] font-bold hover:bg-[#947321] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Enviar Email
        </button>
      </form>
    </div>
  );
}
