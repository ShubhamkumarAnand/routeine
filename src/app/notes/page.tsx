import Link from "next/link";
import { db } from "~/server/db";
import { formatPrismaDate } from "~/utils/formatTime";

export default async function page() {
  const notes = await db.note.findMany();

  return (
    <main>
      {notes.map((note) => (
        <div key={note.id} className="p-3">
          <Link href={`notes/${note.id}`}>{formatPrismaDate(note.name)}</Link>
        </div>
      ))}
    </main>
  );
}
