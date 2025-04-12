import {Link} from 'react-router-dom'

const Login = () => {
    return ( 
        <div className="container">
        <form class=" mx-auto rounded">
        <h1 class="lead fs-1 text-center mb-4 fw-bold text-warning">Log in</h1>
        <hr />
        <div class="form-group mb-4 mt-4">
            <label for="exampleInputEmail1" class="lead fs-6">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
        </div>
        <div class="form-group mb-4">
            <label for="exampleInputPassword1" class="lead fs-6">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <button className="btn-block" type="submit" class="btn btn-outline-warning btn-lg w-100 mb-3">Sign up</button>
        <div className="text-center">
        <small id="emailHelp" class="form-text">Don't have an account?  <Link to="/">Register here.</Link> </small>
        </div>
        </form>
    </div>
     );
}
 
export default Login;