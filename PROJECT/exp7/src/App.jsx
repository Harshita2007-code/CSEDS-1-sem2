import "./App.css";
// Student Component
function Student(props)
{
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p><b>Course:</b> {props.course}</p>
      <p><b>Marks:</b> {props.marks}</p>
    </div>
  );
}
// App Component
function App()
{
  return (
    <div className="container">
      <h1>Student Information</h1>
      <Student
        name="Tanu Sharma"
        course="BCA"
        marks="85"
      />
      <Student
        name="Jayditya"
        course="B.Tech"
        marks="92"
      />
      <Student
        name="Manya Sharma"
        course="B.Sc"
        marks="78"
      />
    </div>
  );
}
export default App;