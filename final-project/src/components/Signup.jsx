import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';
import {toast} from 'react-hot-toast';
import registerImg from '../images/register.jpg'
import {useHistory} from 'react-router-dom';




const Signup = () => {
    const history = useHistory();
    const [data, setData] = useState({
        name: '',
        email: '',
        address: '',
        password: ''
    })

    const registerUser  = async (e) => {
        e.preventDefault();

        const {name, email, address, password} = data
        try {
            const {data} = await axios.post('/register', {
                name, email, address, password
            })
        if(data.error) {
            toast.error(data.error)
        } else {
            setData({})
            toast.success('Sign up successful 👌')
            history.push('/login')
        }
        } catch (err) {
            console.log(err)
        }
    }

    return ( 
        <div className="container" style={{width: '75%'}}>
            <div class="row">
                <div className="col">
                    <img src={registerImg} class="mx-auto img-fluid mt-5" alt="Responsive image" />
                </div>
                <div class="col mt-2">
                    <form class="mx-auto rounded p-4 mt-5" onSubmit={registerUser} style={{width: '80%'}}>
                        <h1 class="display-5 text-center mb-4 fw-bold text-primary">Register</h1>
                        <div class="form-group mb-4 mt-4">
                            <input type="text" class="form-control lead fs-6"   placeholder="Name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
                        </div>
                        <div class="form-group mb-4">
                            <input type="email" class="form-control lead fs-6" placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                        </div>
                        <div class="form-group mb-4">
                            <input type="text" class="form-control fs-6" placeholder="Address" value={data.address} onChange={(e) => setData({...data, address: e.target.value})}/>
                        </div>
                        <div class="form-group mb-4">
                            <input type="password" class="form-control fs-6" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                        </div>
                        <button className="btn-block" type="submit" class="btn btn-outline-primary btn-lg w-100 mb-3 fw-bold">Sign up</button>
                        <hr />
                        <div class="text-center mt-2">
                        <small id="emailHelp" class="form-text fw-bold">Already have an account?  <Link class="text-primary" to="/login">Login here.</Link> </small>
                        </div>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;