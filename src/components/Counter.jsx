import './Counter.css'

export default function Counter({students}) {
  return (
    <div className="counter">
       <span>{students.length}</span>
       <h3>Ironhackers</h3>
     </div>
  )
}