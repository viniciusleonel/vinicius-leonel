
export default function RegisterDoctor() {
    return (
        <div className="container mx-auto my-8 px-4 md:px-6">
            <div className="">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Registrar Médico</h2>
                <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                        Name
                    </label>
                    <input
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                        id="name"
                        placeholder="Enter patient's name"
                        type="text"
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="age">
                        Age
                    </label>
                    <input
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                        id="age"
                        placeholder="Enter patient's age"
                        type="number"
                    />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="gender">
                        Gender
                    </label>
                    <select
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                        id="gender"
                    >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="contact">
                        Contact
                    </label>
                    <input
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                        id="contact"
                        placeholder="Enter patient's contact number"
                        type="tel"
                    />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="address">
                    Address
                    </label>
                    <textarea
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                    id="address"
                    placeholder="Enter patient's address"
                    rows={3}
                    />
                </div>
                <div className="flex justify-end">
                    <button
                    className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:border-gray-800"
                    type="submit"
                    >
                    Register Patient
                    </button>
                </div>
                </form>
            </div>
            
            </div>
        </div>
    )
}      