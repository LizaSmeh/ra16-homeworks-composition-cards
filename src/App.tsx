import './App.css'
import Card from './components/Card'


function App() {
  return (
    <>
    <Card 
        title='Card title' 
        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
        link='.' 
        refName='Click!'
      />
      <Card 
        img="https://delo-korm.ru/upload/medialibrary/e2e/%D0%BA%D0%BE%D1%80%D0%B6%D0%B8%D0%BA.jpg"
        title='Card title' 
        text="Some quick example text to build on the card title and make up the bulk of the card's content." 
        link='.' 
        refName='Click!'
      />
     </>
  )
}

export default App
