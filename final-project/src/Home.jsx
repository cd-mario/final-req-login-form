const Home = () => {
    return ( 
        <>
            <nav class="navbar navbar-dark bg-dark justify-content-between p-4">
                <a class="navbar-brand fs-4 rounded">Final Project</a>
                <button type="button" class="btn btn-outline-light btn-lg">Logout</button>
            </nav>
            <div class="px-4 py-5 my-5 container">
                <div className="card">
                    <div className="card-body">
                            <h1 class="display-5 fw-bold text-body-emphasis text-dark">Welcome User!</h1>
                            <p class="lead fs-5 mb-4">This is a register and login form made with MERN stack. For the final requirement</p>
                            <hr />
                            <p class="lead fs-6 mb-2"><span className="text-success fw-bold">M </span>- MongoDB: NoSQL database where data is stored in flexible, JSON-like documents.</p>
                            <p class="lead fs-6 mb-2"><span className="text-danger fw-bold">E </span>- ExpressJS: A lightweight web application framework for Node.js used to build backend APIs.</p>
                            <p class="lead fs-6 mb-2"><span className="text-primary fw-bold">R </span>- ReactJS: A front-end JavaScript library developed by Facebook for building user interfaces.</p>
                            <p class="lead fs-6 mb-5"><span className="text-info fw-bold">N </span>- NodeJS: A runtime environment that allows you to run JavaScript on the server side.</p>
                    </div>
                </div>
                <hr />
                
            </div>
        </>
     ); 
}
 
export default Home;