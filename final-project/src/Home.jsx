const Home = () => {
    return ( 
        <>
            <nav class="navbar navbar-dark bg-dark justify-content-between p-4">
                <a class="navbar-brand fs-6 rounded">Final Project</a>
                <button type="button" class="btn btn-outline-light">Logout</button>
            </nav>
            <div class="px-4 py-5 my-5 container">
                <div className="card">
                    <div className="card-body">
                            <h1 class="display-6">Welcome, User!</h1>
                            <p class="lead fs-5 mb-4">This is a register and login form made with MERN stack. For the final requirement</p>
                            <hr />
                            <p class="lead fs-6 mb-2"><span className="text-success fw-bold fs-5">M </span>- MongoDB: NoSQL database where data is stored in flexible, JSON-like documents.</p>
                            <p class="lead fs-6 mb-2"><span className="text-danger fw-bold fs-5">E </span>- ExpressJS: A lightweight web application framework for Node.js used to build backend APIs.</p>
                            <p class="lead fs-6 mb-2"><span className="text-primary fw-bold fs-5">R </span>- ReactJS: A front-end JavaScript library developed by Facebook for building user interfaces.</p>
                            <p class="lead fs-6 mb-5"><span className="text-info fw-bold fs-5">N </span>- NodeJS: A runtime environment that allows you to run JavaScript on the server side.</p>
                    </div>
                </div>
                <hr />
                
            </div>
        </>
     ); 
}
 
export default Home;