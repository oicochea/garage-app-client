import React from "react"
import {useAppState} from "../AppState.jsx"
import{Route, Link} from "react-router-dom"
import Form from "../components/Form.jsx"



const Dashboard = (props) => {

  const {state, dispatch } = useAppState()
  const {token , url ,cars , username} = state

  const getCarInfo = async () => {
  const response = await fetch(url + "/cars/", {
    method: "get",
    headers:{
      Authorization: "bearer " + token
    }
  })
  const cars = await response.json()
 dispatch({type: "getCarInfo", payload:cars})
 console.log(cars)
  }

  React.useEffect(() => {getCarInfo()}, [])

  const loaded = () => {
    return <div>
    <h1>{username}'s Garage</h1>
        <Link to="/dashboard/new"><button>Add a car</button></Link>
        <Route path="/dashboard/:action" render={(rp) => <Form {...rp} getCarInfo={getCarInfo}/>}/>
     <ul>
    {cars.map(car => (
            <div className="car" key={car.id}>
                <h2>{car.image}</h2>
                <h2>{car.model}</h2> 
                    <button onClick={() => {
                        dispatch({type: "select", payload: car})
                        props.history.push("/dashboard/edit")
                    }}>Edit</button>
                    <button onClick={() => {
                        fetch(url + "/cars/" + car.id, {
                            method: "delete",
                            headers: {
                                Authorization: "bearer " + token
                            }
                        }).then(() => getCarInfo());
                    }}>Delete</button> 
             </div>
        ))}
    </ul> 
    </div>
}
 
 return cars ? loaded() : <h1>Loading...</h1>
}

export default Dashboard