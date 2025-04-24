import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast';
import {useHistory} from 'react-router-dom';



const Signup = () => {
    const history = useHistory();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const registerUser  = async (e) => {
        e.preventDefault();

        const {name, email, password} = data
        try {
            const {data} = await axios.post('/register', {
                name, email, password
            })
        if(data.error) {
            toast.error(data.error)
        } else {
            setData({})
            toast.success('Sign up successful')
            history.push('/login')
        }
        } catch (err) {
            console.log(err)
        }
    }

    return ( 
        <div className="container">
            <form class="mx-auto rounded" onSubmit={registerUser}>
            <h1 class="lead fs-1 text-center mb-4 fw-bold text-primary">Sign up</h1>
            <hr />
            <div class="form-group mb-4 mt-4">
                <label class="lead fs-6">Name</label>
                <input type="text" class="form-control"  placeholder="Enter Name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
            </div>
            <div class="form-group mb-4">
                <label class="lead fs-6">Email address</label>
                <input type="email" class="form-control" placeholder="Enter email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            </div>
            <div class="form-group mb-4">
                <label class="lead fs-6">Password</label>
                <input type="password" class="form-control" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            </div>
            <button className="btn-block" type="submit" class="btn btn-outline-primary btn-lg w-100 mb-3">Sign up</button>
            <div className="text-center">
            <small id="emailHelp" class="form-text">Already have an account?  <Link to="/login">Login here.</Link> </small>
            </div>
            </form>
        </div>
     );
}
 
export default Signup;