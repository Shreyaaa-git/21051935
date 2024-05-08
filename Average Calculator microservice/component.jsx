import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="max-w-2xl w-full px-4 md:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Number Averaging Microservice</CardTitle>
            <CardDescription>Fetch and calculate the average of a window of unique numbers.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  pattern="[pire]"
                  placeholder="numberid"
                  title="Enter 'p' for prime, 'i' for Fibonacci, 'e' for even, or 'r' for random numbers"
                  type="text"
                />
                <Button type="submit">Fetch</Button>
              </div>
              <div className="grid gap-2">
                <div className="flex justify-between">
                  <span className="font-medium">Previous Numbers:</span>
                  <span className="text-gray-500 dark:text-gray-400">[10, 15, 20, 25, 30, 35, 40, 45, 50, 55]</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Current Numbers:</span>
                  <span className="text-gray-500 dark:text-gray-400">[60, 65, 70, 75, 80, 85, 90, 95, 100, 105]</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Average:</span>
                  <span className="text-gray-500 dark:text-gray-400">57.5</span>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}