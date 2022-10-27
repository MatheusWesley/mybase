function incluir() {
  console.log("Inluded");

}

export function NewPost() {
  return (
    <div>
      <form action="#">
        <div className="shadow sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 bg-gray-700 px-4 py-5 sm:p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-full">
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="block w-full flex-1 rounded-md placeholder:text-gray-900 bg-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Digite aqui um titulo..."
                />
              </div>
            </div>

            <div>
              <div className="mt-1">
                <textarea
                  id="description"
                  name="description"
                  rows={10}
                  className="mt-1 block w-full rounded-md shadow-sm  placeholder:text-gray-900 bg-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Descreva aqui a solução..."
                  defaultValue={''}
                />
              </div>
              <p className="mt-2 text-sm text-gray-500">
                Dica: Use a Linguegem Markdown 
              </p>
            </div>
            <button
              type="button"
              className="inline-flex justify-center rounded-md bg-indigo-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 outline-none"
              onClick={incluir}
            >
              Incluir
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}