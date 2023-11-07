import Markdown from "react-markdown";
import { db } from "~/server/db";
import { formatTime } from "~/utils/formatTime";

export default async function page({ params }: { params: { noteId: string } }) {
  const noteId = +params.noteId;

  const updates = await db.updates.findMany({
    where: {
      noteId: noteId,
    },
  });

  return (
    <main>
      {updates.map((update) => (
        <div key={update.id} className="p-2">
          <p>{formatTime(update.title)}</p>
          <Markdown>{update.content}</Markdown>
        </div>
      ))}
    </main>
  );
}
