import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import {useHistory} from 'react-router-dom';
import registerImg from '../images/login.jpg'

const Login = () => {
    const history = useHistory();
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const [showPassword, setShowPassword] = useState(false);

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
                toast.success('Log in successful 👌')
                history.push('/home')
            }
        } catch (err) {
            
        }

    }

    return ( 
    <div className="container" style={{width: '75%'}}>
        <div class="row">
            <div class="col">
                <img src={registerImg} class="mx-auto img-fluid mt-5" alt="Responsive image" />
            </div>
            <div class="col mt-5">
                <form class=" mx-auto p-4 mt-5" onSubmit={loginUser} style={{width: '80%'}}>
                    <h1 class="display-5 text-center fw-bold text-success">Log in</h1>
                    <div class="form-group mb-4 mt-5 lead ">
                        <input type="email" class="form-control fs-6" placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                    </div>
                    <div class="form-group mb-2">
                        <input type={showPassword ? 'text' : 'password'} class="form-control fs-6" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                    </div>
                    <div class="form-check mb-4">
                            <input type="checkbox" class="form-check-input" id="showPasswordCheck" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                            <label class="fs-6"  htmlFor="showPasswordCheck">Show Password</label>
                        </div>
                    <button className="btn-block" type="submit" class="btn btn-outline-success  btn-lg w-100 mb-3 fw-bold">Login</button>
                    <hr />
                    <div className="text-center mt-3">
                    <small id="emailHelp" class="form-text fw-bold">Don't have an account?  <Link class="text-success fw-bold" to="/">Register here.</Link> </small>
                    </div>
                </form>
            </div>
        </div>
    </div>
     );
}
 
export default Login;