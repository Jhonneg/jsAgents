import CreateRoomForm from '@/components/CreateRoomForm';
import RoomList from '@/components/RoomList';

export default function CreateRoom() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <div>
            <CreateRoomForm />
            <RoomList />
          </div>
        </div>
      </div>
    </div>
  );
}
