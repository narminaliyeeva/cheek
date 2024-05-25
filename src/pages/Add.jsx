import { Navbar } from "react-bootstrap"
import { useForm } from "react-hook-form"
import {decode as base64_decode, encode as base64_encode} from 'base-64';


export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()


  const onSubmit = (data) => console.log(data)

  const convertToBase64 =(file)=>{
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result)
    }
   }


  return (
    <>
    <Navbar/>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>ADD</h2>
    <input type="file" onInput ={(e)=>convertTo(e.target.files[0])} className="file-inp"/>
      <input  {...register("name")} />
      {errors.name && <span>This field is required</span>}
      <input {...register("content", { required: true })} />
      {errors.content && <span>This field is required</span>}
    
      
      <input type="submit" className="btn1" value="submit" />
    </form>
    </>
  )
}