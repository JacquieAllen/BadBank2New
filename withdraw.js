function Withdraw(){
    const [update, setUpdate] = React.useState('false');
    const [value, setValue]   = React.useState('');
    const [show, setShow]     = React.useState(true);
    const ctx                 = React.useContext(UserContext);
    let inUser                = ctx.loggedIn[0];

    const handleNewBalance = (event) => {
        setValue(event.target.value);
    }

    const date = new Date(Date.now());
    const mm = date.getMonth() + 1; 
    const dd = date.getDate();
    const year = date.getFullYear();
  
    const dateString = `${mm}/${dd}/${year}`;

    function handleWithdraw(){
        let balance = document.getElementById('balance').value;
        if (balance > 0 && inUser.user.balance >= balance && !isNaN(balance)) {
            inUser.user.balance -= Number(balance);
            setUpdate(true);
            setShow(false);
        }
        else{
            alert('Transaction Declined');
        }
    }

    return (
        <Card
        txtcolor="black"
        header="Withdraw that cash!"
        body= {show? (inUser ? (
            <>

            <h2>{dateString} {update ? "Balance: " + inUser.user.balance : "Balance: "+ inUser.user.balance}</h2>
            <h3>Withdraw This Amount?</h3>
            <input type="number" width="300" id="balance" onChange={handleNewBalance} value={value}></input>
            <button type="submit" disabled={ value ?false:true} className="btn btn-primary" onClick={handleWithdraw}>Withdraw it now!</button>

            </>
        ):("")) : ("Accepted! Your Withdraw: $" + inUser.user.balance)}
       />
    )
        }
