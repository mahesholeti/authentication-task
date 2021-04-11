import React, {useState} from 'react';
import axios from 'axios';

function LoginForm({ setToken }) {
    const [details,setDetails] = useState({ email: '', password: ''});
    const handleSubmit = async e => {
        e.preventDefault();
        const response = await axios.post(
            "https://reqres.in/api/login", details
        )
        setToken(response.data);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                {/* {(error !== "") ? ( <div className="error">{error}</div>) : ""} */}
                <div className="form-group">
                    <label className="input-label">User Name</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="User Name"
                        onChange={e => setDetails({...details,email: e.target.value})}
                        value={details.email}
                    />
                    {/* {errors.user.length > 0 && <div className="text-danger">
                    <p>{errors.user}</p>
                    </div>} */}
                </div>
                <div className="form-group">
                    <label className="input-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="password"
                        onChange={e => setDetails({...details,password: e.target.value})}
                        value={details.password}
                    />
                    {/* {errors.password.length > 0 && <div className="text-danger">
                    <p>{errors.password}</p>
                    </div>} */}
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>   
            </form>
        </div>
    )
}

export default LoginForm