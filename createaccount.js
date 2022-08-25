function CreateAccount(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [name, setName]         = React.useState('');
    const [email, setEmail]       = React.useState('');
    const [password, setPassword] = React.useState('');
    const ctx = React.useContext(UserContext);

    function validate(field, label){
        let isValid = true;
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),5000);
            return false;
        }
        if (label == 'email'){
            isValid = String(field).toLowerCase().match(
                /\S+@\S+\.\S+/
            );
            setStatus(isValid ? '' : 'Email does not exist');
        }
        if (lable =='password'){
            isValid = field.length >= 8;
            setStatus(isValid ? '': 'Password does not meet criteria');
        }
        if (label =='name'){
            isValid = field.length >= 3;
            setStatus(isValid ? '': 'Name does not meet criteria');
        }
        if (!isValid){
            console.log(status);
            return false;
        }
        else{
            return true;
        }
    }

    function handleCreateAccount(){
        console.log(name, email, password);
        if (!validate(name, 'name'))
        if (!validate(email, 'email'))
        if (!validate(password, 'password'))
        ctx.users.push({name, email, password, balance:600});
        setShow(false);
    }

    function emptyForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return(
        <Card
            bgcolor="pink"
            txtcolor="black"
            header="Create Yours"
            status={status}
            body={show ? (
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter Your Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter Your Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                Password<br/>
                <input type="input" className="form-control" id="password" placeholder="Enter Your Password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                <button type="submit" disabled={ (name && email && password) ?false:true} className="btn btn-primary" onClick={handleCreateAccount}>Create Account</button> 
                </>
            ):(
                <>
                <h5>Welcome!</h5>
                <button type="submit" className="btn btn-primary" onClick={emptyForm}>Add Separate Account</button>
                </>
            )}
                
        />
                
        
    )
}
