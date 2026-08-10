"use client"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const MeetingModal = ({ isOpen, onClose, title }: MeetingModalProps) => {
  const client = useStreamVideoClient()
  const router = useRouter()
  const { user } = useUser()

  const createMeeting = async () => {
    if (!client || !user) return
    
    const id = crypto.randomUUID()
    const call = client.call("default", id)
    await call.getOrCreate({ 
      data: { 
        starts_at: new Date().toISOString(),
        custom: { description: "Instant Meeting" }
      } 
    })
    
    router.push(`/meeting/${call.id}`)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border-0 text-black flex-col gap-6">
        <DialogTitle className="text-2xl font-bold">{title}</DialogTitle>
        <Button 
          onClick={createMeeting} 
          className="bg-blue-600 hover:bg-blue-700 w-full text-white"
        >
          Start Meeting
        </Button>
      </DialogContent>
    </Dialog>
  )
}
export default MeetingModal