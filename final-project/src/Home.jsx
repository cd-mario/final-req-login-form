import { useContext } from "react";
import { UserContext } from "../context/userContext";
import {Link} from 'react-router-dom'



const Home = () => {
    const {user} = useContext(UserContext)
    return ( 
        <>
            <nav class="navbar navbar-dark bg-dark justify-content-between p-4">
                <a class="navbar-brand fs-6 rounded">Final Project</a>
                <Link to="/"><button type="button" class="btn btn-outline-light">Logout</button></Link>
            </nav>
            <div class="px-4 py-5 my-5 container" style={{width: '70%'}}>
                <div className="card mb-4">
                    <div className="card-body">
                            <h1 class="display-6 text-primary fw-bold text-uppercase">Welcome, {!!user && user.name} 👋</h1>
                            <p class="fw-bold text-secondary">@{!!user && user.email}</p>
                            <hr />
                            <p class=" fs-6 mb-3">This is a register and login form made with <b>MERN</b> stack:</p>
                            <div class="text-secondary">
                                <p class=" fs-6 mb-2"><button type="button" class="btn btn-success">M</button> <b>MongoDB</b>: NoSQL database where data is stored in flexible, JSON-like documents.</p>
                                <p class=" fs-6 mb-2"><button type="button" class="btn btn-danger">E</button> <b>ExpressJS</b>: A lightweight web application framework for Node.js used to build backend APIs.</p>
                                <p class=" fs-6 mb-2"><button type="button" class="btn btn-primary">R</button> <b>ReactJS</b>: A front-end JavaScript library developed by Facebook for building user interfaces.</p>
                                <p class=" fs-6 mb-5"><button type="button" class="btn btn-info text-light">N</button> <b>NodeJS</b>: A runtime environment that allows you to run JavaScript on the server side.</p>
                            </div>

                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h2 class="fw-bold display-6 text-uppercase">Packages 📦</h2>
                        <p class=" fs-6">Packages used in the <b>frontend</b> and the <b>backend</b>.</p>
                        <hr />
                        <h3 class="my-4 text-info fw-bold">Frontend 💻</h3>
                        <hr />
                        <a className="package-links" href="https://axios-http.com/docs/intro" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️Axios HTTP</h4></a>
                        <p class="mt-3"><span className="code">Axios</span> is a promise-based HTTP client for Node.js and the browser, used to send asynchronous HTTP requests (like GET, POST) to REST endpoints.</p>
                        <hr />
                        <a className="package-links" href="https://react-hot-toast.com/" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️react-hot-toast</h4></a>
                        <p class="mt-3"><span className="code">react-hot-toast</span> is a lightweight <span className="code">React</span> library for showing customizable toast notifications.</p>
                        <hr />
                        <a className="package-links" href="https://getbootstrap.com/" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️Bootstrap</h4></a>
                        <p class="mt-3"><span className="code">Bootstrap</span> is a popular open-source front-end framework used for developing responsive and mobile-first websites. It provides a collection of <span className="code">HTML</span>, <span className="code">CSS</span>, and <span className="code">JavaScript</span> components that help developers quickly build user interfaces without having to start from scratch.</p>
                        <hr />
                        <a className="package-links" href="https://reactrouter.com/" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️react-router-dom</h4></a>
                        <p class="mt-3"><span className="code">react-router-dom</span> is a library used in React applications to handle routing — that is, to control what content gets displayed when users navigate to different URLs within a single-page app (SPA).</p>
                        <hr />

                        <h3 class="my-4 text-danger fw-bold">Backend 💾</h3>
                        <hr />
                        <a className="package-links" href="https://expressjs.com/" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️Express JS</h4></a>
                        <p class="mt-3"><span className="code">Express JS</span>  is a web application framework for <span className="code">Node.js</span> that helps you build server-side applications and RESTful APIs quickly and easily.</p>
                        <hr />
                        <a className="package-links" href="https://www.npmjs.com/package/bcrypt" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️Bcrypt</h4></a>
                        <p class="mt-3"><span className="code">Bcrypt</span>  is a library used to hash passwords securely in <span className="code">Node.js</span> applications. It helps protect user passwords by converting them into unreadable strings before storing them in a database — so even if your database gets compromised, the actual passwords remain hidden.</p>
                        <hr />
                        <a className="package-links" href="https://www.npmjs.com/package/jsonwebtoken" target="_blank"><h4 class="display-6 fs-5 fw-bold">jsonwebtoken</h4></a>
                        <p class="mt-3"><span className="code">jsonwebtoken</span> (also called JWT) is a <span className="code">Node.js</span> library used to create and verify JSON Web Tokens — which are a compact and secure way to handle authentication and authorization in web applications.</p>
                        <hr />
                        <a className="package-links" href="https://mongoosejs.com/docs/" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️Mongoose</h4></a>
                        <p class="mt-3"><span className="code">Mongoose</span> is an Object Data Modeling (ODM) library for <span className="code">MongoDB</span> and <span className="code">Node.js</span>. It helps you interact with a MongoDB database using JavaScript objects, making database operations easier, safer, and more structured.</p>
                        <hr />
                        <a className="package-links" href="https://www.npmjs.com/package/nodemon" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️Nodemon</h4></a>
                        <p class="mt-3"><span className="code">Nodemon</span>  is a development tool for <span className="code">Node.js</span> that automatically restarts your server whenever you make changes to your code. It’s super handy because you don’t have to manually stop and restart your server every time you update something.</p>
                        <hr />
                        <a className="package-links" href="https://www.npmjs.com/package/dotenv" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️Dotenv</h4></a>
                        <p class="mt-3"><span className="code">Dotenv</span> is a <span className="code">Node.js</span> package that lets you load environment variables from a <span className="code">.env</span> file into <span className="code">process.env</span> in your app.</p>
                        <hr />
                        <a className="package-links" href="https://www.npmjs.com/package/cors" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️Cors</h4></a>
                        <p class="mt-3"><span className="code">Cors</span> stands for Cross-Origin Resource Sharing. It’s a security feature built into web browsers that controls how your frontend (running in one domain) can make requests to a backend API on a different domain.</p>
                        <hr />
                        <a className="package-links" href="https://www.npmjs.com/package/cookie-parser" target="_blank"><h4 class="display-6 fs-5 fw-bold">🖇️Cookie-parse</h4></a>
                        <p class="mt-3"><span className="code">Cookie-parse</span> is a middleware for <span className="code">Express.js</span> that lets your server read cookies sent by the client (usually from the browser).</p>
                        <hr />
                    </div>

                </div>
            </div>
            <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                        <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1" aria-label="Bootstrap">
                            <svg class="bi" width="30" height="24" aria-hidden="true"><use xlink:href="#bootstrap"></use></svg>
                        </a>
                        <span class="mb-3 mb-md-0 text-body-secondary">© Marian Jake Bula, AI34</span>
                        </div>
                </footer>
        </>
     ); 
}
 
export default Home;