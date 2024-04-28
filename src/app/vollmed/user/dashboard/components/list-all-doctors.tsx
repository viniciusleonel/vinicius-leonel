
export default function ListAllDoctors() {
    return (
        <div className="container mx-auto my-8 px-4 md:px-6">
            <div className="">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Registered Patients</h2>
                <div className="flex items-center">
                    <input
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                    placeholder="Search patients"
                    type="text"
                    />
                    <button className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 ml-2 dark:border-gray-800">
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        />
                    </svg>
                    Search
                    </button>
                </div>
                </div>
                <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                        scope="col"
                        >
                        Name
                        </th>
                        <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                        scope="col"
                        >
                        Age
                        </th>
                        <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                        scope="col"
                        >
                        Gender
                        </th>
                        <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                        scope="col"
                        >
                        Contact
                        </th>
                        <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                        scope="col"
                        >
                        Address
                        </th>
                        <th
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                        scope="col"
                        >
                        Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-950 dark:divide-gray-700">
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                        John Doe
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">35</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Male</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        +1 (123) 456-7890
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        123 Main St, Anytown USA
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex gap-2">
                            <button
                            className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:border-gray-800"
                            type="button"
                            >
                            Edit
                            </button>
                            <button
                            className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600 dark:border-gray-800"
                            type="button"
                            >
                            Delete
                            </button>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                        Jane Smith
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">28</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Female</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        +1 (987) 654-3210
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        456 Oak Rd, Somewhere City
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex gap-2">
                            <button
                            className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:border-gray-800"
                            type="button"
                            >
                            Edit
                            </button>
                            <button
                            className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600 dark:border-gray-800"
                            type="button"
                            >
                            Delete
                            </button>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">
                        Michael Johnson
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">42</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">Male</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        +1 (555) 987-6543
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        789 Elm St, Somewhere Else
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex gap-2">
                            <button
                            className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 dark:border-gray-800"
                            type="button"
                            >
                            Edit
                            </button>
                            <button
                            className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-600 dark:border-gray-800"
                            type="button"
                            >
                            Delete
                            </button>
                        </div>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    )
}  