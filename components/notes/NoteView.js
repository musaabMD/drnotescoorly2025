import React from 'react';
import { Search, BookOpen } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const NoteView = ({ notes = [] }) => {
  const [search, setSearch] = React.useState('');
  const [selectedNote, setSelectedNote] = React.useState(null);

  const filteredNotes = notes.filter(note =>
    note.title?.toLowerCase().includes(search.toLowerCase()) ||
    note.content?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4">
          <div className="sticky top-20">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search notes..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              {filteredNotes.map((note) => (
                <Card
                  key={note.id}
                  className={`cursor-pointer transition-colors ${
                    selectedNote?.id === note.id 
                      ? 'bg-blue-50 border-blue-200' 
                      : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedNote(note)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-blue-600 mt-1" />
                      <div>
                        <h3 className="font-medium text-gray-900">{note.title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2">
                          {note.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {selectedNote ? (
            <div className="bg-white rounded-lg border p-6">
              <h2 className="text-2xl font-bold mb-4">{selectedNote.title}</h2>
              <div className="prose max-w-none">
                {selectedNote.content}
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-[400px] bg-gray-50 rounded-lg border border-dashed">
              <div className="text-center">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">No Note Selected</h3>
                <p className="text-gray-500">Select a note from the sidebar to view its content</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteView;