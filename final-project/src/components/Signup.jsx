const Signup = () => {
    return ( 
        <div className="container">
            <form class="w-50 mx-auto">
            <h1 class="lead fs-1 text-center mb-4">Sign up</h1>
            <div class="form-group mb-4">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Enter Name"/>
            </div>
            <div class="form-group mb-4">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
            </div>
            <div class="form-group mb-4">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <button className="btn-block" type="submit" class="btn btn-outline-primary btn-lg w-100 mb-3">Sign up</button>
            <small id="emailHelp" class="form-text">Already have an account? <a path="/login">Login here</a>.</small>
            </form>
        </div>
     );
}
 
export default Signup;