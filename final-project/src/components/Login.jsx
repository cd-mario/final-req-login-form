import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useHistory} from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const loginUser = async (e) => {
        e.preventDefault()
        const {email, password} = data;
        try {
            const {data} = await axios.post('/login', {
                email,
                password
            });
            if(data.error) {
                toast.error(data.error)
            } else {
                setData({});
                history.push('/home')
            }
        } catch (err) {
            
        }

    }

    return ( 
        <div className="container">
        <form class=" mx-auto rounded" onSubmit={loginUser}>
        <h1 class="lead fs-1 text-center mb-4 fw-bold text-warning">Log in</h1>
        <hr />
        <div class="form-group mb-4 mt-4">
            <label class="lead fs-6">Email address</label>
            <input type="email" class="form-control" placeholder="Enter email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
        </div>
        <div class="form-group mb-4">
            <label class="lead fs-6">Password</label>
            <input type="password" class="form-control" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
        </div>
        <button className="btn-block" type="submit" class="btn btn-outline-warning btn-lg w-100 mb-3">Login</button>
        <div className="text-center">
        <small id="emailHelp" class="form-text">Don't have an account?  <Link to="/">Register here.</Link> </small>
        </div>
        </form>
    </div>
     );
}
 
export default Login;