// import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

// type GetRoomsAPIResponse = Array<{
//   id: string;
//   name: string;
// }>;

export default function CreateRoom() {
  // const { data, isLoading } = useQuery({
  //   queryKey: ['get-rooms'],
  //   queryFn: async () => {
  //     const response = await fetch('http://localhost:3333/rooms');
  //     const result: GetRoomsAPIResponse = await response.json();

  //     return result;
  //   },
  // });

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <div></div>
        </div>
      </div>
    </div>
  );
}
