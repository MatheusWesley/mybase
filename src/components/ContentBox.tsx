import { TagIcon } from '@heroicons/react/24/outline'
import ReactMarkdown from 'react-markdown'


const markdown = `
### Primeiro
- Rodei um Atualiza como administrador
- Abrir o SysPDV Server como administrador
### Segundo
- Configurei o F10 do ne tela de login SysPDV Server para o IP correto
- Configurei a rotina de:
  - **Sistema-Servidor de Carga**
- Depois Abri o Terminal e rodei o comando:
  - lsusb

`

const resolution = {
  title: "Comandos basicos PDV Linux 18.04",
  tag: ['MFe', 'SITEF', 'PDV Linux'],
  solution: markdown
}



export function ContentBox() {
  return (
    <div className="flex flex-col p-3 ">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold leading-7 text-gray-50 sm:truncate sm:text-3xl sm:tracking-tight">
          {resolution.title}
        </h2>
        <div className="m-2 w-max rounded p-1.5 bg-amber-600 hover:bg-amber-700 transition-colors">
          <div className="flex text-sm text-gray-10000">
            <TagIcon className="mr-1.5 h-5 w-5 text-gray-100" />
            {resolution.tag[2]}
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between m-2 p-5 bg-slate-800 shadow-lg shadow-bg-slate-900'>
        <ReactMarkdown className='prose prose-slate text-gray-100' >
        {resolution.solution}
        </ReactMarkdown>
      </div>
    </div>
        
  )
}