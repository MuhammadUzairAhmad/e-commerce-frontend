import { User, Package, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function CustomerWelcome() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden mb-8">
          <div className="bg-indigo-600 px-8 py-12 text-white">
            <h1 className="text-3xl font-bold mb-2">Welcome back, John!</h1>
            <p className="text-indigo-100">Here's what's happening with your account today.</p>
          </div>
          <div className="px-8 py-6 flex items-center justify-between border-b border-gray-100 bg-gray-50">
             <div className="flex gap-4">
                <Button variant="outline" size="sm">Edit Profile</Button>
                <Button variant="ghost" size="sm" className="text-rose-600 hover:text-rose-700 hover:bg-rose-50">Log out</Button>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Package className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
            </div>
            <div className="text-center py-8 text-gray-500">
              <p>You haven't placed any orders yet.</p>
              <Link href="/">
                 <Button variant="primary" className="mt-4">Start Shopping</Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Account Settings</h2>
            </div>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="flex items-center justify-between group">
                  <span className="text-gray-600 group-hover:text-indigo-600 transition-colors">Personal Information</span>
                  <span className="text-gray-400 group-hover:text-indigo-600">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center justify-between group">
                  <span className="text-gray-600 group-hover:text-indigo-600 transition-colors">Saved Addresses</span>
                  <span className="text-gray-400 group-hover:text-indigo-600">&rarr;</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="flex items-center justify-between group">
                  <span className="text-gray-600 group-hover:text-indigo-600 transition-colors">Payment Methods</span>
                  <span className="text-gray-400 group-hover:text-indigo-600">&rarr;</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
