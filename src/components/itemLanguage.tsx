import { IdiomaUsuarioI } from '@/utils/types/idiomaUsuario';
import '/node_modules/flag-icons/css/flag-icons.min.css';

export default function ItemLanguage({ data }: { data: IdiomaUsuarioI }) {
  let lingua;
  if (data.idiomaId == 1) {
    lingua = (
      <div className='flex items-center justify-center gap-3'>
        <h3>Português</h3>
        <span className="fi fi-br"></span>
      </div>
    );
  } else if (data.idiomaId == 2) {
    lingua = (
      <div className='flex items-center justify-center gap-3'>
        <h3>Inglês</h3>
        <span className="fi fi-us"></span>
      </div>
    );
  } else {
    lingua = 'Aguardando dados';
  }

  return (
    <div className="flex flex-col gap-10 md:flex-row">
      <div>
        <h2 className="bg-white text-center p-4 rounded-3xl shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          {lingua}
        </h2>
      </div>
    </div>
  );
}
