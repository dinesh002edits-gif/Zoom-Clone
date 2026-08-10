"use client"
import { useState } from "react"
import HomeCard from "@/components/HomeCard"
import { Calendar, Plus, Users, Video } from "lucide-react"
import MeetingModal from "@/components/MeetingModal"

const Home = () => {
  const [meetingState, setMeetingState] = useState<'isInstantMeeting' | undefined>()
  const now = new Date();

  return (
    <section className="flex flex-col gap-8 bg-gray-50 text-[#1C1F2E] p-8 rounded-2xl">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Good Evening</h1>
        <p className="text-gray-500">
          {now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <HomeCard
          icon={<Plus className="w-6 h-6" />}
          title="New Meeting"
          description="Start an instant meeting"
          className="bg-blue-600 hover:bg-blue-700 text-white"
          handleClick={() => setMeetingState('isInstantMeeting')} // <-- CHANGE THIS
        />
        <HomeCard
          icon={<Users className="w-6 h-6" />}
          title="Join Meeting"
          description="via invitation link"
          className="bg-green-600 hover:bg-green-700 text-white"
          handleClick={() => {}}
        />
        <HomeCard
          icon={<Calendar className="w-6 h-6" />}
          title="Schedule Meeting"
          description="Plan your meeting"
          className="bg-orange-600 hover:bg-orange-700 text-white"
          handleClick={() => {}}
        />
        <HomeCard
          icon={<Video className="w-6 h-6" />}
          title="View Recordings"
          description="Meeting recordings"
          className="bg-purple-600 hover:bg-purple-700 text-white"
          handleClick={() => {}}
        />
      </div>

      {/* Modal */}
      <MeetingModal 
        isOpen={meetingState === 'isInstantMeeting'}
        onClose={() => setMeetingState(undefined)}
        title="Start an Instant Meeting"
      />
    </section>
  )
}
export default Home