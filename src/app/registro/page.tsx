'use client';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { HiEnvelope } from 'react-icons/hi2';
import { HiLockClosed } from 'react-icons/hi2';
import { HiMiniUserCircle } from 'react-icons/hi2';

type Inputs = {
  nome: string;
  email: string;
  senha: string;
};

export default function Registro() {
  const { register, handleSubmit } = useForm<Inputs>();
  const { toast } = useToast();
  const router = useRouter();

  async function verificaCadastro(data: Inputs) {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/usuarios`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: data.nome,
          email: data.email,
          senha: data.senha,
        }),
      },
    );
    console.log(response);
    if (response.status === 201) {
      const dados = await response.json();
      console.log(dados);
      router.push('/login');
      toast({
        variant: 'success',
        title: 'Cadastro efetuado com sucesso',
        description: `Bem-vindo a Verbalize!`,
      });
    } else {
      toast({
        variant: 'destructive',
        title: 'Algo deu errado',
        description: 'Verifique as credenciais e tente novamente',
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
      <form className='md:w-2/6' onSubmit={handleSubmit(verificaCadastro)}>
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-white"
        >
          Seu Nome:
        </label>
        <div className="relative mb-3">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <HiMiniUserCircle className="text-gray-400" />
          </div>
          <input
            type="text"
            className=" border text-sm rounded-lg block w-full ps-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
            required
            {...register('nome')}
          />
        </div>
        <label
          htmlFor="input-group-1"
          className="block mb-2 text-sm font-medium text-white"
        >
          Seu Email:
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
          Sua Senha:
        </label>
        <div className="relative mb-6">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <HiLockClosed className="text-gray-400" />
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
          className="text-black bg-[#B38000] font-bold  hover:bg-[#947321] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  w-full px-5 py-2.5 text-center"
        >
          Registrar-se
        </button>
        <div className="flex justify-between pt-5">
          <a
            href="/login"
            className="text-white font-italic hover:text-[#B38000]"
          >
            ja possuo login
          </a>
        </div>
      </form>
    </div>
  );
}
