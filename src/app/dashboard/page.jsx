"use client";

import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import MyBookings from "@/componanets/MyBookings/MyBooking";
import MyProfile from "@/componanets/MyProfile/MyProfile";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const Dashboard = () => {
  const [tabIndex, setTabIndex] = useState(0);
  //  const { data: session } = authClient.useSession();
  //   const user = session?.user;
  //   if(!user){
  //     redirect('/login')
  //   }

  return (
    <div className="p-6">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        
        <TabList className="flex gap-3 bg-gray-200 p-2 rounded-lg w-fit">
          <Tab className="px-4 py-2 cursor-pointer rounded-md">
            My Bookings
          </Tab>

          <Tab className="px-4 py-2 cursor-pointer rounded-md">
            My Profile
          </Tab>
        </TabList>

        <TabPanel>
          <MyBookings />
        </TabPanel>

        <TabPanel>
          <MyProfile />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Dashboard;