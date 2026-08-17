import StudentDirectory from './components/StudentDirectory';

const students = [
  { id: 1, name: 'Karl Mark Borboran', course: 'BS Computer Science', yearLevel: '3rd Year', status: 'Regular', gwa: 1.5 },
  { id: 2, name: 'Juan Dela Cruz', course: 'BS Information Technology', yearLevel: '2nd Year', status: 'On Probation', gwa: 2.3 },
  { id: 3, name: 'Coco Martin', course: 'BS Mathematics', yearLevel: '4th Year', status: 'Regular', gwa: 1.2 },
  { id: 4, name: 'Ralph Esgana', course: 'BS Physics', yearLevel: '1st Year', status: 'Irregular', gwa: 2.8 },
  { id: 5, name: 'Enrique Malboa', course: 'BS Biology', yearLevel: '3rd Year', status: 'Regular', gwa: 1.8 },
  { id: 6, name: 'Reiy Briones', course: 'BS Chemistry', yearLevel: '2nd Year', status: 'On Probation', gwa: 2.5 },
  { id: 7, name: 'Joseph Tatlonghari', course: 'BS Psychology', yearLevel: '4th Year', status: 'Regular', gwa: 1.3 },
];

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', margin: '20px 0' }}>
        Student Directory
      </h1>
      <StudentDirectory students={students} />
    </div>
  );
}

export default App;