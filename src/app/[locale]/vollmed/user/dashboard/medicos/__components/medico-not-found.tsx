import MedicoHeader from "./medico-header";
import MedicoNav from "./medico-nav";

export default function MedicoNotFound () {
    return (
        <div className="container mx-auto my-8 px-4 md:px-6">
            <div className="">
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                    
                    <div className="overflow-x-auto">
                        <table className=" min-w-full divide-y divide-gray-200 dark:divide-gray-700 flex flex-col">
                            <tbody className="text-xl">Médico não encontrado</tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}