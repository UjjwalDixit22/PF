import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, GitBranch, GitMerge } from "lucide-react"
import Image from "next/image"

export default function LeetcodeStats() {
  return (
    <section id="leetcode" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">LeetCode Stats</h2>
          <div className="mt-2 h-1 w-20 bg-gray-900 mx-auto"></div>
          <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
            My problem-solving journey on LeetCode, where I regularly practice data structures and algorithms.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="border border-gray-200 hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl font-bold text-gray-900">UjjwalDixit22</CardTitle>
                  <CardDescription className="text-gray-600 mt-1">Rank: 854,386</CardDescription>
                </div>
                <div className="bg-gray-100 p-2 rounded-full">
                  <Code className="h-5 w-5 text-gray-700" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Problems Solved</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-gray-100 rounded-lg p-3 flex-1">
                    <p className="text-sm text-gray-600">Total Submissions</p>
                    <p className="text-2xl font-bold text-gray-900">217</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 flex-1">
                    <p className="text-sm text-gray-600">Active Days</p>
                    <p className="text-2xl font-bold text-gray-900">97</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 flex-1">
                    <p className="text-sm text-gray-600">Max Streak</p>
                    <p className="text-2xl font-bold text-gray-900">93</p>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <span className="font-medium text-gray-900">Java</span>
                    <Badge variant="secondary" className="bg-gray-200">
                      139
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <span className="font-medium text-gray-900">C++</span>
                    <Badge variant="secondary" className="bg-gray-200">
                      3
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
                    <span className="font-medium text-gray-900">Python3</span>
                    <Badge variant="secondary" className="bg-gray-200">
                      2
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <GitMerge className="mr-2 h-5 w-5" /> Advanced Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gray-100 text-gray-800">Dynamic Programming</Badge>
                    <Badge className="bg-gray-100 text-gray-800">Divide and Conquer</Badge>
                    <Badge className="bg-gray-100 text-gray-800">Backtracking</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <GitBranch className="mr-2 h-5 w-5" /> Intermediate Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gray-100 text-gray-800">Math</Badge>
                    <Badge className="bg-gray-100 text-gray-800">Hash Table</Badge>
                    <Badge className="bg-gray-100 text-gray-800">Binary Search</Badge>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="relative h-48 w-full overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src="https://sjc.microlink.io/J-NX4tVP1BaAD2EtMmTi45UsPv6re4ezo_CpwslBGHp6GPOq4do7kEF5fAl5y92ZfyvAKLjo3AERpyIqNwX7lw.jpeg"
                    alt="LeetCode Activity Calendar"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
