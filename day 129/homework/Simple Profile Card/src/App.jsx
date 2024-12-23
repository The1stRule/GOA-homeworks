import ProfileList from './components/ProfileList';

const App = () => {
  const profiles = [
    {
      name: "Nika",
      age: 17,
      occupation: "Developer"
    },
    {
      name: "Luka",
      age: 18,
      occupation: "Developer"
    },
    {
      name: "Vano",
      age: 17,
      occupation: "Developer"
    }
  ]
  return (
    <>
      <ProfileList profiles={profiles} />
    </>
  )
}

export default App;