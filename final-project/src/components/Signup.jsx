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
                <div class="col">
                    <form class="mx-auto rounded p-4 mt-5" onSubmit={registerUser} style={{width: '90%'}}>
                        <h1 class="display-5 text-center mb-5 fw-bold text-primary">Register</h1>
                        <div class="form-group mb-4 mt-4">
                            <input type="text" class="form-control lead"   placeholder="Name" value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
                        </div>
                        <div class="form-group mb-4">
                            <input type="email" class="form-control lead" placeholder="Email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                        </div>
                        <div class="form-group mb-4">
                            <input type="text" class="form-control" placeholder="Address" value={data.address} onChange={(e) => setData({...data, address: e.target.value})}/>
                        </div>
                        <div class="form-group mb-4">
                            <input type="password" class="form-control" placeholder="Password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                        </div>
                        <button className="btn-block" type="submit" class="btn btn-outline-primary btn-lg w-100 mb-3">Sign up</button>
                        <div className="text-center">
                        <small id="emailHelp" class="form-text">Already have an account?  <Link to="/login">Login here.</Link> </small>
                        </div>
                </form>
                </div>
            </div>
        </div>
     );
}
 
export default Signup;