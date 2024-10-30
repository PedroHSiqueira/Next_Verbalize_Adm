import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 ">
            <a href="#" className="items-center flex flex-col">
              <img
                src="./logos/logo_branca.png"
                className="h-16 "
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Verbalize
              </span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400">
            © 2024{' '}
            <a href="#" className="hover:underline">
              Verbalize™
            </a>
            . Todos os termos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
