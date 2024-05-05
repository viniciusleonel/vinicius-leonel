import capitalizarFrase from "@/lib/utils/capitalize";
import { Medico, MedicoDetails } from "@/app/model/Medico";

interface MedicoListBodyProps extends MedicoDetails {
    excluirMedico: () => void
}

export default function MedicoListBody ({
    id, nome, email, crm, especialidade, excluirMedico
}: MedicoListBodyProps) {

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                {id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                {capitalizarFrase(nome)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {email.toLowerCase()}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {crm}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                {especialidade}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                    <button
                        className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:border-gray-800"
                        type="button"
                    >Edit
                    </button>
                    <button
                        onClick={excluirMedico}
                        className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600 dark:border-gray-800"
                        type="button"
                    >Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}