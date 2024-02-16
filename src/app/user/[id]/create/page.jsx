import NoteForm from "@/components/NoteForm";

export default function Page({ params }) {
  return <NoteForm id={params.id} />;
}
