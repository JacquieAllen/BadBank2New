function Login(){
    const [show, setShow]         = React.useState('true');
    const [status, setStatus]     = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        if (!field) {
            setStatus('Error: ' +label);
            setTimeout(() => setStatus(''),5000);
            return false;
        }
        return true;
    }

    function handleLogin(){
        if (!validate(email, 'email')) return;
        if (!validate(password, 'password')) return;
        const user = ctx.users.find((user) => user.email == email);
        if (!user) {
            setStatus('Invalid Account');
            setTimeout(() => setStatus(''),5000);
            return;
        }
        if (user.password == password){
            setShow(false);
            ctx.loggedIn.push({user});
            console.log(ctx);
            return;
        }
        else {
            setStatus('Invalid Password')
            setTimeout(() => setStatus(''),5000);
            return;
        }
    }

    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return(
        <Card
            bgcolor="pink"
            txtcolor="black"
            header="Loging to your account"
            status={status}
            body={show ? (
                <>
                Email Address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                Password<br/>
                <input type="input" className="from-control" id="password" placeholder="Enter Your Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                <button type="submit" disabled={(password && email) ?false:true} className="btn btn-light" onClick={handleLogin}>Submit</button>

                </>
            ):(
                <>
                <h5>Welcome Back!</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Login</button>
                </>
            )}
        />
    )
}
