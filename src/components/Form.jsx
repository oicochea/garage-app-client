import React from "react"
import { Link } from "react-router-dom"
import {useAppState} from "../AppState.jsx"

const Form = (props) => {
  const { state, dispatch} = useAppState();
  const{token} = state
  const action  = props.match.params.action
  const[formData , setFormData] = React.useState(state[action])

  const actions  = {
    new: () => {
      return fetch(state.url + "/cars/",{
        method: "post",
        headers:{
          "Content-Type" : "application/json",
          Authorization: "bearer " + token
        },
        body:JSON.stringify(formData),
      }).then((response)=> response.json());
    },
    edit: () => {
      return fetch(state.url + "/cars/" + state.edit.id ,{
        method: "put",
        headers:{
          "Content-Type" : "application/json",
          Authorization: "bearer " + token
        },
        body: JSON.stringify(formData),
      }).then((response)=> response.json())
    }
  }

  const handleChange = (event) => {
    setFormData({...formData , [event.target.name] :event.target.value})
  }

  const handleSubmit =(event)=>{
    event.preventDefault()
    actions[action]().then((data)=>{
      props.getCarInfo()
      props.history.push("/dashboard/")
    })
  }

  return (
      <div className="form">
          <form onSubmit={handleSubmit}>
                <input type ="text" name="make" value={formData.make} onChange={handleChange}></input>
                <input type ="text" name="model" value={formData.model} onChange={handleChange}></input>
                <input type ="number" name="year" value={formData.year} onChange={handleChange}></input>
                <input type ="number" name="miles" value={formData.miles} onChange={handleChange}></input>
                <input type ="text" name="service" value={formData.service} onChange={handleChange}></input>
                <input type ="text" name="image" value={formData.image} onChange={handleChange}></input>
                <input type="submit" value={action}/>
          </form>
      </div>
  )
}


export default Form