import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";




const Login = () => {
    const {register, handleSubmit } = useForm();
    const {logIn, loading, loginWithGoogle} = useAuth()
    

    const onSubmit = (data)=>{
            console.log(data.email, data.password);
            const email = data.email
            const password = data.email
            logIn(email, password)
            .then(res => {
                console.log(res);
            })
            .then(error =>{
                console.log(error);
            })
    }

    const socialLogIn = ()=>{
        loginWithGoogle()
        .then(res =>console.log(res))
        .catch(err =>console.log(err))
    }

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register('password')}
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
               <label className="label">
                <Link to="/register" className="label-text-alt link link-hover">
                  New Here please <span className="text-red-500 font-bold">Regsiter</span> 
                </Link>
              </label>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div onClick={socialLogIn} className="form-control p-6">
              <button className="btn ">Login With Google <FcGoogle /></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
