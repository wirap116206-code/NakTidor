"use client";

import { User } from "lucide-react";
import { useState } from "react";

import { useUserSession } from "../../../custom-hooks/useSession";
import Header from "./Header";
import AddSleepRecord from "./AddSleepRecord";
import Image from "next/image";
import SleepHistory from "./SleepHistory";
import DashboardLoadingScreen from "./DashboardLoadingScreen";

export default function DashboardComponent() {
  const { loading, session } = useUserSession();
  const userId = session?.user.id;
  const userDetails = session?.user.user_metadata;
  const [showAddForm, setShowAddForm] = useState(false);

  if (false) {
    return <DashboardLoadingScreen/>
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header setShowAddForm={setShowAddForm} />

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= LEFT SIDE ================= */}
          <div className="space-y-8 lg:col-span-1">
            {/* User Profile */}
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-fuchsia-600 rounded-full grid place-items-center relative">
                  {userDetails?.avatar_url ? (
                    <Image
                      src={userDetails.avatar_url}
                      alt="profile-picture"
                      className="rounded-full"
                    />
                  ) : (
                    <User size={24} />
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {userDetails?.full_name}
                  </h2>

                  <p className="text-gray-400 text-sm">{userDetails?.email}</p>
                </div>
              </div>
            </div>

            {/* Add Sleep Record */}
            {showAddForm && (
              <AddSleepRecord
                userId={userId}
                onCancel={() => setShowAddForm(false)}
              />
            )}
          </div>

          <div className="space-y-8 lg:col-span-2">
          

            {/* Sleep History */}
            <SleepHistory userId={userId}/>
          </div>
        </div>
      </div>
    </div>
  );
}
