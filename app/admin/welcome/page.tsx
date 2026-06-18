import { Users, DollarSign, ShoppingCart, Activity } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function AdminWelcome() {
  const stats = [
    { label: "Total Revenue", value: "$45,231.89", icon: DollarSign, trend: "+20.1%" },
    { label: "Active Customers", value: "2,350", icon: Users, trend: "+15.5%" },
    { label: "Total Orders", value: "12,234", icon: ShoppingCart, trend: "+12.2%" },
    { label: "Conversion Rate", value: "3.24%", icon: Activity, trend: "+2.4%" },
  ];

  return (
    <div className="flex-1 bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600">Here's an overview of your store's performance.</p>
          </div>
          <Button variant="primary">Download Report</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                    {stat.trend}
                  </span>
                </div>
                <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Recent Transactions</h2>
          </div>
          <div className="p-6 text-center text-gray-500 py-12">
            No recent transactions found.
          </div>
        </div>
      </div>
    </div>
  );
}
