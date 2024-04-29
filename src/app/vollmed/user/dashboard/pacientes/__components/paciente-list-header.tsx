export default function PacienteListHeader () {
    return (
        <tr>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                scope="col">Name
            </th>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                scope="col">Email
            </th>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                scope="col">CPF
            </th>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                scope="col">Contact
            </th>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                scope="col">Address
            </th>
            <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400"
                scope="col">Actions
            </th>
        </tr>
    )
}