

export function Login()
{
    return(
         <div className="d-flex justify-content-center mt-5">
      <form className="login-form p-4 border border-3 rounded-2 shadow-lg" style={{ width: "350px" }}>
        <h2 className="mb-3 text-center">
          <i className="bi bi-person-circle me-2"></i>
          User Login
        </h2>

        <dl className="m-0">
          <dt className="form-label">Username</dt>
          <dd>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Username"
            />
          </dd>

          <dt className="form-label">Password</dt>
          <dd>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </dd>
        </dl>

        <button type="submit" className="btn btn-warning w-100 mt-3">
          Login
        </button>
      </form>
    </div>
    )
}