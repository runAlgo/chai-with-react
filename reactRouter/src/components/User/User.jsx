import { useParams } from "react-router-dom"

const User = () => {
    const {userid} = useParams()
  return (
    <div className="bg-slate-700 rounded py-2 text-white text-3xl items-center text-center">User: {userid}</div>
  )
}

export default User