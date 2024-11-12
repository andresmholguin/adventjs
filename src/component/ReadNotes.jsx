import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import BoxReadNote from './BoxReadNote';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const { data, error } = await supabase
        .from('notes')
        .select('*');
      if (error) console.error('Error fetching notes:', error);
      else 
        setNotes(data);
    };
    fetchNotes();
  }, []);

  return (
    <div className='text-center'>
      <h1>My Notes</h1>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>{note.nota}</li>
        ))}
      </ul>
      <BoxReadNote data={notes}/>
    </div>
  );
}

export default App;
