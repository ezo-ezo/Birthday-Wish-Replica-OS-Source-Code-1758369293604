import React, { useState } from 'react';
import { FileText, Save, Heart } from 'lucide-react';

const Notepad = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Things I Love About You",
      content: "• Your beautiful smile that lights up my day\n• The way you laugh at my silly jokes\n• Your kind and caring heart\n• How you make everything better just by being there\n• Your amazing sense of humor\n• The way you believe in me\n• How you make me want to be a better person",
      date: new Date().toLocaleDateString()
    },
    {
      id: 2,
      title: "Date Ideas",
      content: "• Picnic in the park with your favorite foods\n• Movie marathon with all your favorite films\n• Cooking dinner together\n• Stargazing on a clear night\n• Visit that art museum you mentioned\n• Weekend getaway to the mountains\n• Dancing in the living room to our favorite songs",
      date: new Date().toLocaleDateString()
    }
  ]);

  const [selectedNote, setSelectedNote] = useState(notes[0]);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setNotes(notes.map(note => 
      note.id === selectedNote.id ? selectedNote : note
    ));
    setIsEditing(false);
  };

  const createNewNote = () => {
    const newNote = {
      id: Date.now(),
      title: "New Love Note",
      content: "",
      date: new Date().toLocaleDateString()
    };
    setNotes([...notes, newNote]);
    setSelectedNote(newNote);
    setIsEditing(true);
  };

  return (
    <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 flex">
      {/* Sidebar */}
      <div className="w-1/3 bg-white border-r border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <FileText className="w-5 h-5 mr-2 text-blue-600" />
            Love Notes
          </h2>
          <button
            onClick={createNewNote}
            className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors"
          >
            New Note
          </button>
        </div>
        
        <div className="space-y-2">
          {notes.map(note => (
            <div
              key={note.id}
              className={`p-3 rounded-lg cursor-pointer transition-colors ${
                selectedNote.id === note.id 
                  ? 'bg-blue-100 border-blue-300 border' 
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
              onClick={() => {
                setSelectedNote(note);
                setIsEditing(false);
              }}
            >
              <h3 className="font-medium text-gray-800 truncate">{note.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{note.date}</p>
              <p className="text-xs text-gray-500 mt-1 truncate">
                {note.content.substring(0, 50)}...
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="bg-white rounded-lg shadow-lg h-full flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Heart className="w-5 h-5 text-red-500" />
              {isEditing ? (
                <input
                  type="text"
                  value={selectedNote.title}
                  onChange={(e) => setSelectedNote({...selectedNote, title: e.target.value})}
                  className="font-semibold text-gray-800 bg-transparent border-b border-gray-300 focus:outline-none focus:border-blue-500"
                />
              ) : (
                <h1 className="font-semibold text-gray-800">{selectedNote.title}</h1>
              )}
            </div>
            <div className="flex items-center space-x-2">
              {isEditing ? (
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition-colors flex items-center"
                >
                  <Save className="w-4 h-4 mr-1" />
                  Save
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-blue-600 transition-colors"
                >
                  Edit
                </button>
              )}
              <span className="text-sm text-gray-500">{selectedNote.date}</span>
            </div>
          </div>
          
          <div className="flex-1 p-4">
            {isEditing ? (
              <textarea
                value={selectedNote.content}
                onChange={(e) => setSelectedNote({...selectedNote, content: e.target.value})}
                className="w-full h-full resize-none border-none focus:outline-none text-gray-700 font-mono"
                placeholder="Write your love note here..."
              />
            ) : (
              <div className="h-full overflow-auto">
                <pre className="whitespace-pre-wrap text-gray-700 font-mono leading-relaxed">
                  {selectedNote.content}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notepad;