import MedicoListHeader from "./medico-list-header";
import MedicoListNav from "./medico-nav";

export default function MedicoEmptyTableList () {
    return (
        <div className="container mx-auto my-8 px-4 md:px-6">
            <div className="">
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                    <MedicoListNav />
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <MedicoListHeader />
                            </thead>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}