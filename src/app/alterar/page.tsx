'use client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { HiEnvelope } from 'react-icons/hi2';

type Inputs = {
  email: string;
  token: string;
  senha: string;
};

export default function login() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { toast } = useToast();
  const router = useRouter();

  async function alteracaoSenha(data: Inputs) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/usuarios/recuperacao/alterar`,
      {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          recuperacao: data.token,
          senha: data.senha,
        }),
      },
    );
    if (response.status === 200) {
      router.push('/login');
      toast({
        variant: 'default',
        title: 'Senha Alterada',
        description: 'Faça login com sua nova senha',
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
      <form className="md:w-2/6" onSubmit={handleSubmit(alteracaoSenha)}>
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
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-white"
        >
          Token:
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <HiEnvelope className="text-gray-400" />
          </div>
          <input
            type="text"
            className=" border text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
            {...register('token')}
          />
        </div>
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-white"
        >
          Nova Senha:
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <HiEnvelope className="text-gray-400" />
          </div>
          <input
            type="password"
            className=" border text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
            {...register('senha')}
          />
        </div>
        <button
          type="submit"
          className="text-white bg-[#B38000] font-bold hover:bg-[#947321] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Alterar
        </button>
      </form>
    </div>
  );
}
