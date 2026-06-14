import './App.css'
import Card from './components/Card.tsx'
import { ChaiCard } from './components/ChaiCard.tsx'
import ChaiList from './components/ChaiList.tsx'
import Counter from './components/Counter.tsx'
import OrderForm from './components/OrderForm.tsx'
import type { Chai } from './types.ts'

const menu:Chai[] = [
  {id:1,name:"Masala",price:30},
  {id:2,name:"Ginger",price:31},
  {id:3,name:"Black",price:33},
]

function App() {


  return (
    <>
      <div>
        <ChaiCard 
        name="Headphone"
        price={5000}
      />
      <ChaiCard 
        name="Iphone"
        price={8000}
      />
      </div>

      <div>
        <Counter />
      </div>


      <div>
        <ChaiList items={menu} />
      </div>


      <div>
        <OrderForm 
        onSubmit={(order) => {
          console.log("PLACE ORDER",order.name,order.cups)
        }}
        />
      </div>

      <div>
        <Card  title='RAJ KUMAR' footer={<button>CLOCK</button>} />
      </div>
    </>
  )
}

export default App
