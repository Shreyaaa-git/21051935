import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl w-full p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Average Number Microservice</h1>
        <form className="flex items-center mb-6">
          <Input
            className="flex-1 mr-4 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Enter number ID (p, i, e, r)"
            type="text"
          />
          <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md" type="submit">
            Fetch
          </Button>
        </form>
        <div className="bg-gray-100 dark:bg-gray-700 rounded-md p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Numbers in Window</h2>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span className="text-gray-900 dark:text-gray-100">123</span>
              <span className="text-gray-500 dark:text-gray-400">Prime</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-900 dark:text-gray-100">8</span>
              <span className="text-gray-500 dark:text-gray-400">Even</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-900 dark:text-gray-100">21</span>
              <span className="text-gray-500 dark:text-gray-400">Fibonacci</span>
            </li>
            <li className="flex justify-between items-center">
              <span className="text-gray-900 dark:text-gray-100">456</span>
              <span className="text-gray-500 dark:text-gray-400">Random</span>
            </li>
          </ul>
        </div>
        <div className="mt-6 bg-gray-100 dark:bg-gray-700 rounded-md p-4">
          <h2 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">Average</h2>
          <p className="text-4xl font-bold text-blue-500">210.25</p>
        </div>
      </div>
    </main>
  )
}