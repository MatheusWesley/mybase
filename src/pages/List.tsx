import { Disclosure, Dialog, Transition } from "@headlessui/react"
import { Plus, X } from "phosphor-react"
import { ContentBox } from "../components/ContentBox"
import { Fragment, useState } from 'react'
import '.././styles/global.css'
import { NewPost } from "./NewPost"

const navigation = [
  { name: 'Pagina Inicial', href: '#', current: true },
  { name: 'Ramais', href: '#', current: false },
]
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ')
}

export function List() {

  let [isOpen, setIsOpen] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="bg-gray-800">
      {/*Menu*/}
      <Disclosure as="nav" className="w-full h-full bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://icons.iconarchive.com/icons/acidrums4/betelgeuse/128/Places-folder-saved-search-icon.png"
                  alt="Base de Conhecimento"
                />
              </div>
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'px-3 py-2 rounded-md text-sm font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <a onClick={openModal} className='h-8 w-8 text-zinc-300 bg-green-700 rounded-lg flex items-center justify-center shadow-md shadow-black hover:bg-green-800 transition-colors'>
              <Plus className=' h-6 w-6' weight="bold" />
            </a>
            {/* ------------------------------------- */}

            <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-60" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-lg lg:max-w-2xl transform overflow-hidden rounded-2xl bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="div"
                          className="text-lg font-medium leading-6 text-gray-200"
                        >
                          <div className="flex justify-between py-0 mb-6">
                          <span>Nova Solução</span>
                          <button
                            type="button"
                            className="text-sm text-zinc-400 hover:text-zinc-200 ml-[10%]"
                            onClick={closeModal}
                          >
                            <X weight="bold" className="w-5 h-5" />
                          </button>
                          </div>
          
                          
                          
                        </Dialog.Title>
                        
                        
                        <div className="mt-2">
                          <NewPost />
                        </div> 
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>


            {/* ------------------------------------- */}

          </div>
        </div>
      </Disclosure>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-3 sm:px-0">
            <form className='mb-3'>
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Pesquisa</label>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-48 rounded-lg border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-800 dark:focus:ring-1 dark:focus:border-blue-500 outline-none " autoComplete='OFF' placeholder="Faça sua pesquisa aqui..." required />
                <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-900">Pesquisar</button>
              </div>
            </form>
            <div className="h-full rounded-lg border-4 border-t border-gray-900 text-gray-100 bg-gray-700">
              { /*Conteudo dentro da caixa */}
              <ContentBox />
            </div>
          </div>
          {/* /End replace */}
        </div>
      </main>
    </div>

  )
}